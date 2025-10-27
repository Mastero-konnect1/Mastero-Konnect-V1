'use client'

import { useState } from "react";
import { Search, Filter, Heart, Star, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Define the Mentor interface
interface Mentor {
  id: number;
  name: string;
  title: string;
  company: string;
  rating: number;
  reviewCount: number;
  tagline: string;
  image: string;
  domain: string;
  experience: string;
  location: string;
  isFavorited: boolean;
}

export default function FindMentor() {
  // State management for search, filters, and favorites
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [favorites, setFavorites] = useState<number[]>([1, 3]); // Example favorites

  // Dummy data for mentors
  const mentors: Mentor[] = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Senior Product Manager",
      company: "Google",
      rating: 4.9,
      reviewCount: 127,
      tagline: "I help designers transition into product management roles",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=700&fit=crop&crop=faces&auto=format&q=80",
      domain: "Tech",
      experience: "Senior",
      location: "San Francisco, CA",
      isFavorited: true
    },
    {
      id: 2,
      name: "Marcus Johnson",
      title: "VP of Engineering",
      company: "Stripe",
      rating: 4.8,
      reviewCount: 89,
      tagline: "Scaling engineering teams and technical leadership",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=700&fit=crop&crop=faces&auto=format&q=80",
      domain: "Tech",
      experience: "Executive",
      location: "New York, NY",
      isFavorited: false
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Design Director",
      company: "Airbnb",
      rating: 4.9,
      reviewCount: 156,
      tagline: "Design thinking and building impactful user experiences",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=700&fit=crop&crop=faces&auto=format&q=80",
      domain: "Design",
      experience: "Senior",
      location: "Los Angeles, CA",
      isFavorited: true
    },
    {
      id: 4,
      name: "David Kim",
      title: "Head of Growth",
      company: "Notion",
      rating: 4.7,
      reviewCount: 92,
      tagline: "Growth strategies and data-driven marketing",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=700&fit=crop&crop=faces&auto=format&q=80",
      domain: "Business",
      experience: "Senior",
      location: "Seattle, WA",
      isFavorited: false
    },
    {
      id: 5,
      name: "Lisa Thompson",
      title: "Chief Technology Officer",
      company: "Shopify",
      rating: 4.9,
      reviewCount: 203,
      tagline: "Technical strategy and engineering excellence",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&h=700&fit=crop&crop=faces&auto=format&q=80",
      domain: "Tech",
      experience: "Executive",
      location: "Toronto, ON",
      isFavorited: false
    },
    {
      id: 6,
      name: "Alex Martinez",
      title: "Senior Data Scientist",
      company: "Netflix",
      rating: 4.6,
      reviewCount: 74,
      tagline: "ML engineering and data science career paths",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=700&fit=crop&crop=faces&auto=format&q=80",
      domain: "Tech",
      experience: "Senior",
      location: "Los Angeles, CA",
      isFavorited: false
    }
  ];

  // Function to toggle a mentor's favorite status
  const toggleFavorite = (mentorId: number) => {
    setFavorites(prev =>
      prev.includes(mentorId)
        ? prev.filter(id => id !== mentorId)
        : [...prev, mentorId]
    );
  };

  // Logic to filter mentors based on search and dropdown selections
  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDomain = selectedDomain === 'all' || mentor.domain === selectedDomain;
    const matchesExperience = selectedExperience === 'all' || mentor.experience === selectedExperience;
    const matchesRating = selectedRating === 'all' || mentor.rating >= parseFloat(selectedRating);

    return matchesSearch && matchesDomain && matchesExperience && matchesRating;
  });

  return (
    <div 
        // 1. MAIN BACKGROUND (Subtle Blue-Violet)
        className="min-h-screen bg-gray-50"
        style={{
            background: "linear-gradient(135deg, rgb(64, 142, 216), rgb(220, 218, 231), rgb(90, 56, 136))",
            backgroundAttachment: "fixed",
        }}
    >
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Header Section */}
        
        {/* Search & Filter Bar */}
        {/* 3. FILTER BAR CARD STYLING */}
        <Card className="mb-8 sticky top-20 z-10 bg-white/80 backdrop-blur-lg shadow-xl border-indigo-200">
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 relative w-full group">
                {/* 4. SEARCH INPUT STYLING */}
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-500 w-5 h-5 transition-colors group-focus-within:text-indigo-700" />
                <Input
                  placeholder="Search by name, skill, or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 border-2 border-indigo-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 shadow-sm"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 w-full md:w-auto">
                {/* 5. SELECT INPUT STYLING (Blue/Violet focus) */}
                <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                  <SelectTrigger className="w-full md:w-40 h-12 border-indigo-300 focus:ring-2 focus:ring-purple-500 transition duration-200"><SelectValue placeholder="Domain" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Domains</SelectItem>
                    <SelectItem value="Tech">Tech</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                  <SelectTrigger className="w-full md:w-40 h-12 border-indigo-300 focus:ring-2 focus:ring-purple-500 transition duration-200"><SelectValue placeholder="Experience" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="Senior">Senior</SelectItem>
                    <SelectItem value="Executive">Executive</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedRating} onValueChange={setSelectedRating}>
                  <SelectTrigger className="w-full md:w-32 h-12 border-indigo-300 focus:ring-2 focus:ring-purple-500 transition duration-200"><SelectValue placeholder="Rating" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ratings</SelectItem>
                    <SelectItem value="4.5">4.5+ stars</SelectItem>
                    <SelectItem value="4.0">4+ stars</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-indigo-700">{filteredMentors.length}</span> mentors
          </p>
        </div>

        {/* ====== PREMIUM MENTOR GRID ====== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMentors.map((mentor) => (
            <Card key={mentor.id} className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-purple-300/50 hover:-translate-y-2 border border-gray-100">
              {/* Background Image */}
              <img
                src={mentor.image}
                alt={mentor.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              {/* 6. GRADIENT OVERLAY (Subtle Blue-Violet Tint in Transparency) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(mentor.id)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors shadow-lg"
              >
                <Heart className={`w-6 h-6 transition-all ${favorites.includes(mentor.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
              </button>
              
              {/* Main Content Area */}
              <div className="relative p-6 h-full flex flex-col justify-end text-white">
                <div>
                  <h3 className="text-2xl font-bold" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>{mentor.name}</h3>
                  <p className="text-sm font-light opacity-90 text-indigo-200" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>{mentor.title} at {mentor.company}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-medium opacity-90">
                  <div className="flex items-center gap-1.5 text-purple-200">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white">{mentor.rating}</span> ({mentor.reviewCount} reviews)
                  </div>
                  <div className="flex items-center gap-1.5 text-indigo-200">
                     <Briefcase className="w-4 h-4" />
                     <span className="text-white">{mentor.experience}</span>
                  </div>
                </div>

                {/* View Profile Button (Appears on Hover) */}
                {/* 7. VIEW PROFILE BUTTON GRADIENT */}
                <Button 
                    className="w-full mt-6 bg-gradient-to-r from-indigo-700/80 to-purple-600/80 text-white border-none backdrop-blur-md hover:from-indigo-700 hover:to-purple-600 hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0"
                >
                  <Link href={'/mentor/sarahchen'}> View Profile</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        {/* ====== END PREMIUM MENTOR GRID ====== */}

        {/* No Results Message */}
        {filteredMentors.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-gray-800">No Mentors Found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your filters or search terms to find the perfect mentor.</p>
            {/* 8. CLEAR SEARCH BUTTON STYLING */}
            <Button 
                variant="outline" 
                className="mt-4 border-indigo-500 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800"
                onClick={() => {
                    setSearchQuery("");
                    setSelectedDomain("all");
                    setSelectedExperience("all");
                    setSelectedRating("all");
                }}
            >
                Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}