// @ts-nocheck
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userProfile, mentors } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are a career matching expert for students.
Given a student profile and mentor pool, identify the BEST mentor match.

Evaluate based on:
1. Domain expertise relevance (40%)
2. Learning style alignment (25%)
3. Challenge-solving capability (20%)
4. Industry vs academic preference (15%)

Return a JSON object with this EXACT structure:
{
  "bestMatch": {
    "mentorId": "mentor id from the pool",
    "matchScore": 95,
    "reasoning": "Clear 2-3 sentence explanation",
    "alignmentPoints": ["Point 1", "Point 2", "Point 3"]
  },
  "otherMatches": [
    {
      "mentorId": "mentor id",
      "matchScore": 85,
      "reasoning": "Brief explanation"
    }
  ]
}`;

    const userPrompt = `Student Profile:
- Interests: ${userProfile.interests || "Not specified"}
- Career Goal: ${userProfile.careerGoal || "Not specified"}
- Learning Style: ${userProfile.learningStyle || "Not specified"}
- Challenge: ${userProfile.challenge || "Not specified"}
- Mentor Preference: ${userProfile.mentorPreference || "Not specified"}

Available Mentors:
${JSON.stringify(mentors, null, 2)}

Analyze and provide the best match with reasoning.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service limit reached. Please contact support." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const aiContent = data.choices?.[0]?.message?.content;

    if (!aiContent) {
      throw new Error("No response from AI");
    }

    // Parse JSON from AI response
    const jsonMatch = aiContent.match(/\{[\s\S]*\}/);
    const recommendations = jsonMatch ? JSON.parse(jsonMatch[0]) : null;

    if (!recommendations) {
      throw new Error("Failed to parse AI recommendations");
    }

    return new Response(JSON.stringify(recommendations), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Recommendation error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
