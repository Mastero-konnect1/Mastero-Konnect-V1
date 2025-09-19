'use client'

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Mentor {
  id: number;
  name: string;
  title: string;
  company: string;
  rating: number;
  reviewCount: number;
  matchScore: number;
  tagline: string;
  specialties: string[];
  image: string;
  whyRecommended: string;
}

export default function AIRecommendation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bestMatch: Mentor = {
    id: 1,
    name: "Sarah Chen",
    title: "Senior Product Manager",
    company: "Google",
    rating: 4.9,
    reviewCount: 127,
    matchScore: 96,
    tagline: "I help designers transition into product management roles",
    specialties: ["Product Strategy", "Design Systems", "Career Transition"],
    image: "/api/placeholder/120/120",
    whyRecommended: "Perfect match for your design background and PM aspirations. Sarah has successfully mentored 15+ designers making this exact transition."
  };

  const otherMatches: Mentor[] = [
    {
      id: 2,
      name: "Marcus Johnson",
      title: "VP of Engineering",
      company: "Stripe",
      rating: 4.8,
      reviewCount: 89,
      matchScore: 89,
      tagline: "Technical leadership and team scaling expert",
      specialties: ["Technical Leadership", "Team Building", "Architecture"],
      image: "/api/placeholder/80/80",
      whyRecommended: "Strong technical background aligns with your engineering interests"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Design Director",
      company: "Airbnb",
      rating: 4.9,
      reviewCount: 156,
      matchScore: 87,
      tagline: "Design thinking and user experience leadership",
      specialties: ["UX Strategy", "Design Leadership", "User Research"],
      image: "/api/placeholder/80/80",
      whyRecommended: "Your design skills match perfectly with Emily's expertise"
    },
    {
      id: 4,
      name: "David Kim",
      title: "Head of Growth",
      company: "Notion",
      rating: 4.7,
      reviewCount: 92,
      matchScore: 84,
      tagline: "Growth strategies and data-driven marketing",
      specialties: ["Growth Hacking", "Analytics", "Marketing"],
      image: "/api/placeholder/80/80",
      whyRecommended: "Great for understanding product growth from a PM perspective"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      title: "Chief Technology Officer",
      company: "Shopify",
      rating: 4.9,
      reviewCount: 203,
      matchScore: 82,
      tagline: "Technical strategy and engineering excellence",
      specialties: ["Tech Strategy", "Engineering Management", "Innovation"],
      image: "/api/placeholder/80/80",
      whyRecommended: "Excellent for understanding the technical side of product decisions"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(otherMatches.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(otherMatches.length / 3)) % Math.ceil(otherMatches.length / 3));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 80) return 'text-mastero-blue bg-blue-100';
    return 'text-orange-600 bg-orange-100';
  };

  const visibleMatches = otherMatches.slice(currentSlide * 3, (currentSlide + 1) * 3);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(47,107,174,0.18), rgba(255,255,255,1), rgba(90,141,200,0.18))'
      }}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-mastero-dark mb-2">
            Your Recommended Mentors,{" "}
            <span className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end bg-clip-text text-transparent">
              Curated Just For You
            </span>
          </h1>
          <p className="text-mastero-text-medium">
            Based on your profile and goals, here are the mentors who can best guide your journey
          </p>
        </div>

        {/* Best Match Card */}
        <div className="mb-12">
          <Card className="relative overflow-hidden border-2 border-mastero-blue shadow-xl">
            {/* Best Match Badge */}
            <div className="absolute top-4 right-4 z-10">
              <Badge className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white px-3 py-1">
                <Award className="w-4 h-4 mr-1" />
                Best Match
              </Badge>
            </div>

            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left: Mentor Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-mastero-blue to-mastero-blue-end rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      {bestMatch.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-mastero-dark">{bestMatch.name}</h2>
                      <p className="text-mastero-text-medium font-medium">{bestMatch.title}</p>
                      <p className="text-mastero-text-light">{bestMatch.company}</p>
                    </div>
                  </div>

                  {/* Rating & Match Score */}
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex">{renderStars(bestMatch.rating)}</div>
                      <span className="font-medium">{bestMatch.rating}</span>
                      <span className="text-mastero-text-light">({bestMatch.reviewCount} reviews)</span>
                    </div>
                    <div className={`px-3 py-1 rounded-full font-semibold ${getMatchScoreColor(bestMatch.matchScore)}`}>
                      {bestMatch.matchScore}% Match
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-mastero-text-medium mb-4 text-lg">
                    {bestMatch.tagline}
                  </p>

                  {/* Why Recommended */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-mastero-dark mb-2">Why we recommend Sarah:</h3>
                    <p className="text-mastero-text-medium">{bestMatch.whyRecommended}</p>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-mastero-dark mb-2">Specialties:</h3>
                    <div className="flex flex-wrap gap-2">
                      {bestMatch.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="border-mastero-blue text-mastero-blue">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                  >
                    Connect with Sarah
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                {/* Right: Visual Elements */}
                <div className="lg:w-80">
                  <div className="bg-gradient-to-br from-mastero-bg-subtle to-blue-50 rounded-xl p-6 h-full flex flex-col justify-center items-center">
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-mastero-blue mb-2">96%</div>
                      <div className="text-mastero-text-medium">Perfect Match</div>
                    </div>
                    
                    {/* Match indicators */}
                    <div className="space-y-3 w-full">
                      <div className="flex justify-between text-sm">
                        <span>Career Goals</span>
                        <span className="font-medium text-green-600">Perfect</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Skills Alignment</span>
                        <span className="font-medium text-green-600">Excellent</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Experience Level</span>
                        <span className="font-medium text-mastero-blue">Great</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Industry Focus</span>
                        <span className="font-medium text-green-600">Perfect</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Other Great Matches */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-mastero-dark">Other Great Matches</h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                disabled={currentSlide >= Math.ceil(otherMatches.length / 3) - 1}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleMatches.map((mentor) => (
              <Card key={mentor.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-mastero-blue to-mastero-blue-end rounded-full flex items-center justify-center text-white font-semibold">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-mastero-dark">{mentor.name}</h3>
                      <p className="text-sm text-mastero-text-medium">{mentor.title}</p>
                      <p className="text-xs text-mastero-text-light">{mentor.company}</p>
                    </div>
                  </div>

                  {/* Match Score */}
                  <div className="mb-3">
                    <div className={`inline-block px-2 py-1 rounded-full text-sm font-semibold ${getMatchScoreColor(mentor.matchScore)}`}>
                      Match Score: {mentor.matchScore}%
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">{renderStars(mentor.rating)}</div>
                    <span className="text-sm font-medium">{mentor.rating}</span>
                    <span className="text-xs text-mastero-text-light">({mentor.reviewCount})</span>
                  </div>

                  {/* Tagline */}
                  <p className="text-mastero-text-medium mb-3 text-sm">
                    {mentor.tagline}
                  </p>

                  {/* Why Recommended */}
                  <p className="text-xs text-mastero-text-light mb-4">
                    {mentor.whyRecommended}
                  </p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {mentor.specialties.slice(0, 2).map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-mastero-blue text-mastero-blue">
                          {specialty}
                        </Badge>
                      ))}
                      {mentor.specialties.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{mentor.specialties.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    className="w-full border-mastero-blue text-mastero-blue hover:bg-mastero-blue hover:text-white"
                    size="sm"
                  >
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Navigation to Find More */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-mastero-blue text-mastero-blue">
            Browse All Mentors
          </Button>
        </div>
      </div>
    </div>
  );
}