'use client'

import { useState } from "react";
import { Search, Filter, Heart, Star, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [favorites, setFavorites] = useState<number[]>([]);

  const mentors: Mentor[] = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Senior Product Manager",
      company: "Google",
      rating: 4.9,
      reviewCount: 127,
      tagline: "I help designers transition into product management roles",
      image: "/api/placeholder/80/80",
      domain: "Tech",
      experience: "Senior",
      location: "San Francisco, CA",
      isFavorited: false
    },
    {
      id: 2,
      name: "Marcus Johnson",
      title: "VP of Engineering",
      company: "Stripe",
      rating: 4.8,
      reviewCount: 89,
      tagline: "Scaling engineering teams and technical leadership",
      image: "/api/placeholder/80/80",
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
      image: "/api/placeholder/80/80",
      domain: "Design",
      experience: "Senior",
      location: "Los Angeles, CA",
      isFavorited: false
    },
    {
      id: 4,
      name: "David Kim",
      title: "Head of Growth",
      company: "Notion",
      rating: 4.7,
      reviewCount: 92,
      tagline: "Growth strategies and data-driven marketing",
      image: "/api/placeholder/80/80",
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
      image: "/api/placeholder/80/80",
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
      image: "/api/placeholder/80/80",
      domain: "Tech",
      experience: "Senior",
      location: "Los Angeles, CA",
      isFavorited: false
    }
  ];

  const toggleFavorite = (mentorId: number) => {
    setFavorites(prev => 
      prev.includes(mentorId) 
        ? prev.filter(id => id !== mentorId)
        : [...prev, mentorId]
    );
  };

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

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-mastero-dark mb-2">
            Find the Right Mentor For You
          </h1>
          <p className="text-mastero-text-medium">
            Browse our network of experienced professionals ready to guide you
          </p>
        </div>

        {/* Search & Filter Bar */}
        <Card className="mb-8 sticky top-20 z-10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search by skill, name, or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-4">
                <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Domain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Domains</SelectItem>
                    <SelectItem value="Tech">Tech</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="Mid">Mid Level</SelectItem>
                    <SelectItem value="Senior">Senior</SelectItem>
                    <SelectItem value="Executive">Executive</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedRating} onValueChange={setSelectedRating}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ratings</SelectItem>
                    <SelectItem value="4.5">4.5+ stars</SelectItem>
                    <SelectItem value="4.0">4+ stars</SelectItem>
                  </SelectContent>
                </Select>

                <Button className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white">
                  <Filter className="w-4 h-4 mr-2" />
                  Show Results
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-mastero-text-medium">
            Showing {filteredMentors.length} mentors
          </p>
        </div>

        {/* Mentor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <Card key={mentor.id} className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                {/* Header with Image and Favorite */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-mastero-blue to-mastero-blue-end rounded-full flex items-center justify-center text-white font-semibold text-lg">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-mastero-dark">{mentor.name}</h3>
                      <p className="text-sm text-mastero-text-medium">{mentor.title}</p>
                      <p className="text-sm text-mastero-text-light">{mentor.company}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFavorite(mentor.id)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.includes(mentor.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">{renderStars(mentor.rating)}</div>
                  <span className="text-sm font-medium">{mentor.rating}</span>
                  <span className="text-sm text-mastero-text-light">({mentor.reviewCount} reviews)</span>
                </div>

                {/* Tagline */}
                <p className="text-mastero-text-medium mb-4 text-sm leading-relaxed">
                  {mentor.tagline}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 text-xs text-mastero-text-light">
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-3 h-3" />
                    {mentor.experience}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {mentor.location}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full border-mastero-blue text-mastero-blue hover:bg-mastero-blue hover:text-white transition-all duration-300"
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMentors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-mastero-text-medium text-lg">No mentors found matching your criteria.</p>
            <p className="text-mastero-text-light">Try adjusting your filters or search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
}