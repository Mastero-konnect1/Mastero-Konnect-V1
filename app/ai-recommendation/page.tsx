'use client'

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Award, ArrowRight, Users, Clock, Search, Mic, Filter, SortAsc } from "lucide-react";
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
  specialties: string[];
  image: string;
  menteesCount: number;
  yearsExperience: number;
  isAcceptingMentees: boolean;
  mentorshipDuration: string;
  price: string;
  schedule: string;
}

export default function AIRecommendation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("matchScore");

  const bestMatch: Mentor = {
    id: 1,
    name: "Sarah Chen",
    title: "Senior Product Manager",
    company: "Google",
    rating: 4.9,
    reviewCount: 127,
    matchScore: 96,
    specialties: ["Product Strategy", "Design Systems", "Career Transition"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face&auto=format&q=80",
    menteesCount: 150,
    yearsExperience: 12,
    isAcceptingMentees: true,
    mentorshipDuration: "6 months avg.",
    price: "$100/hr",
    schedule: "Mon-Fri, 9 AM-12 PM IST"
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
      specialties: ["Technical Leadership", "Team Building", "Architecture"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      menteesCount: 200,
      yearsExperience: 15,
      isAcceptingMentees: true,
      mentorshipDuration: "8 months avg.",
      price: "$120/hr",
      schedule: "Tue-Thu, 10 AM-2 PM IST"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Design Director",
      company: "Airbnb",
      rating: 4.9,
      reviewCount: 156,
      matchScore: 87,
      specialties: ["UX Strategy", "Design Leadership", "User Research"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      menteesCount: 120,
      yearsExperience: 10,
      isAcceptingMentees: false,
      mentorshipDuration: "5 months avg.",
      price: "$90/hr",
      schedule: "Mon-Wed, 1 PM-4 PM IST"
    },
    {
      id: 4,
      name: "David Kim",
      title: "Head of Growth",
      company: "Notion",
      rating: 4.7,
      reviewCount: 92,
      matchScore: 84,
      specialties: ["Growth Hacking", "Analytics", "Marketing"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      menteesCount: 100,
      yearsExperience: 8,
      isAcceptingMentees: true,
      mentorshipDuration: "6 months avg.",
      price: "$80/hr",
      schedule: "Mon-Fri, 9 AM-11 AM IST"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      title: "Chief Technology Officer",
      company: "Shopify",
      rating: 4.9,
      reviewCount: 203,
      matchScore: 82,
      specialties: ["Tech Strategy", "Engineering Management", "Innovation"],
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      menteesCount: 300,
      yearsExperience: 18,
      isAcceptingMentees: true,
      mentorshipDuration: "7 months avg.",
      price: "$150/hr",
      schedule: "Mon-Fri, 2 PM-5 PM IST"
    },
    {
      id: 6,
      name: "Aisha Patel",
      title: "Senior Data Scientist",
      company: "Meta",
      rating: 4.8,
      reviewCount: 110,
      matchScore: 85,
      specialties: ["Data Science", "Machine Learning", "Analytics"],
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      menteesCount: 180,
      yearsExperience: 11,
      isAcceptingMentees: true,
      mentorshipDuration: "6 months avg.",
      price: "$110/hr",
      schedule: "Tue-Thu, 11 AM-2 PM IST"
    },
    {
      id: 7,
      name: "Rajesh Kumar",
      title: "Chief Marketing Officer",
      company: "Amazon",
      rating: 4.7,
      reviewCount: 95,
      matchScore: 83,
      specialties: ["Digital Marketing", "Brand Strategy", "Campaigns"],
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      menteesCount: 140,
      yearsExperience: 13,
      isAcceptingMentees: false,
      mentorshipDuration: "5 months avg.",
      price: "$130/hr",
      schedule: "Wed-Fri, 10 AM-1 PM IST"
    },
    {
      id: 8,
      name: "Sophie Lee",
      title: "Head of Product",
      company: "Dropbox",
      rating: 4.9,
      reviewCount: 130,
      matchScore: 86,
      specialties: ["Product Management", "User Experience", "Roadmapping"],
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      menteesCount: 220,
      yearsExperience: 14,
      isAcceptingMentees: true,
      mentorshipDuration: "7 months avg.",
      price: "$95/hr",
      schedule: "Mon-Thu, 9 AM-12 PM IST"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredMatches.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(filteredMatches.length / 3)) % Math.ceil(filteredMatches.length / 3));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 80) return 'text-mastero-blue bg-blue-100';
    return 'text-orange-600 bg-orange-100';
  };

  // Filter and sort mentors with search functionality
  const filteredMatches = otherMatches.filter(mentor => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = mentor.name.toLowerCase().includes(searchLower) ||
                         mentor.title.toLowerCase().includes(searchLower) ||
                         mentor.company.toLowerCase().includes(searchLower) ||
                         mentor.specialties.some(specialty => specialty.toLowerCase().includes(searchLower));
    if (filter === "accepting") return mentor.isAcceptingMentees && matchesSearch;
    if (filter === "notAccepting") return !mentor.isAcceptingMentees && matchesSearch;
    return matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "matchScore") return b.matchScore - a.matchScore;
    if (sortBy === "experience") return b.yearsExperience - a.yearsExperience;
    return 0;
  });

  const visibleMatches = filteredMatches.slice(currentSlide * 3, (currentSlide + 1) * 3);

  // Debug: Log the image URL
  console.log('Best match image URL:', bestMatch.image);

  // Voice Recognition Setup
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.log("Speech Recognition API not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript.toLowerCase();
      setSearchQuery(speechResult);
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    if (isListening) {
      recognition.start();
    }

    return () => {
      recognition.stop();
    };
  }, [isListening]);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(47,107,174,0.3), rgba(255,255,255,0.8), rgba(90,141,200,0.1))'
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
        </div>

        {/* Search, Filter, and Sort Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 max-w-5xl mx-auto">
          {/* Search Bar */}
          <div className="flex-1 relative group">
            <div className="relative bg-white rounded-2xl shadow-md overflow-hidden border-2 border-gradient-to-r from-teal-400 to-purple-500 transform group-hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-center px-4 py-3">
                <div className="pr-3">
                  <Search className="w-6 h-6 text-gray-500" />
                </div>
                <input
                  type="text"
                  placeholder="Search by name, title, or skill..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 py-2 pr-4 text-gray-800 placeholder-gray-500 bg-transparent outline-none text-base font-medium focus:ring-2 focus:ring-teal-400 transition-all duration-200"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
                <button
                  onClick={() => {
                    if (!isListening) {
                      setIsListening(true);
                    } else {
                      setIsListening(false);
                    }
                  }}
                  className={`ml-2 p-2 rounded-full ${isListening ? 'bg-red-200' : 'bg-gray-100'} hover:bg-gray-200 transition-all duration-200`}
                >
                  <Mic className={`w-5 h-5 ${isListening ? 'text-red-600' : 'text-gray-600'}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Filter and Sort Section */}
          <div className="flex gap-2">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 m-1"
            >
              <option value="">All Mentors</option>
              <option value="accepting">Accepting Mentees</option>
              <option value="notAccepting">Not Accepting Mentees</option>
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400 m-1"
            >
              <option value="matchScore">Match Score</option>
              <option value="rating">Rating</option>
              <option value="experience">Experience</option>
            </select>
          </div>
        </div>

        {/* Best Match Card with Separate Image */}
        <div className="mb-12">
          <Card className="relative overflow-hidden group transition-transform duration-300 hover:scale-105 border-[3px] border-gradient-to-br from-blue-200 to-blue-400 shadow-[0_4px_6px_rgba(0,0,0,0.1)] bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              {/* Image Card */}
              <div className="relative w-full h-[420px]">
                <img 
                  src={bestMatch.image}
                  alt={bestMatch.name}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                  onError={(e) => {
                    console.log('Image failed to load:', bestMatch.image);
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white px-3 py-1">
                    <Award className="w-4 h-4 mr-1" /> Best Match
                  </Badge>
                </div>
              </div>
              {/* Content Card */}
              <CardContent className="p-0 flex flex-col justify-end">
                <div className="mb-8">
                  <div className="mb-4">
                    <h2 className="text-3xl font-bold text-white"><strong>{bestMatch.name}</strong></h2>
                    <p className="text-xl text-gray-100 mb-2"><strong>{bestMatch.title}</strong></p>
                    <p className="text-md text-gray-200">{bestMatch.company}</p>
                  </div>
                  <div className="mb-6">
                    <p className="text-base text-gray-100">Available: <span className="font-semibold text-white">{bestMatch.schedule}</span></p>
                    <p className="text-base text-gray-100">Role: <span className="font-semibold text-white"><strong>{bestMatch.specialties.join(", ").toLowerCase()}</strong></span></p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-lg font-semibold text-white">{bestMatch.rating}</span>
                      <span className="text-sm text-gray-200">({bestMatch.reviewCount})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-white" />
                      <span className="text-sm text-gray-200">{bestMatch.menteesCount} Mentees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-white" />
                      <span className="text-sm text-gray-200">{bestMatch.yearsExperience} Years</span>
                    </div>
                  </div>
                </div>
                <Button
                  size="lg"
                  className={`bg-mastero-blue text-white hover:bg-mastero-blue-dark w-full py-3 transition-all duration-300 ${
                    hoveredButton === bestMatch.id ? 'scale-105' : ''
                  }`}
                  onMouseEnter={() => setHoveredButton(bestMatch.id)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  Get In Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Other Great Matches */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-mastero-dark">
              {searchQuery ? `Search Results (${filteredMatches.length})` : "Browse All Mentors"}
            </h2>
            {filteredMatches.length > 0 && (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="border-mastero-blue text-mastero-blue flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" /> Prev
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  disabled={currentSlide >= Math.ceil(filteredMatches.length / 3) - 1}
                  className="border-mastero-blue text-mastero-blue flex items-center gap-1"
                >
                  Next <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}
          </div>

          {filteredMatches.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No mentors found</h3>
              <p className="text-gray-500">
                Try adjusting your search terms or browse all mentors
              </p>
              <Button
                variant="outline"
                className="mt-4 border-mastero-blue text-mastero-blue"
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleMatches.map((mentor) => (
                <Card key={mentor.id} className="relative overflow-hidden group transition-transform duration-300 hover:scale-105 border-[3px] border-gradient-to-br from-blue-200 to-blue-400 shadow-md h-[420px]">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gray-300"
                    style={{
                      backgroundImage: `url(${mentor.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50" />
                  <div className="absolute top-4 left-4 text-white">
                    <h3 className="text-2xl font-bold text-shadow-lg mb-1">{mentor.name}</h3>
                    <p className="text-lg text-gray-100 text-shadow mb-2">{mentor.title}</p>
                    <p className="text-md text-gray-200 text-shadow">{mentor.company}</p>
                  </div>
                  <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white">
                    <div className="flex items-center justify-center mb-6">
                      <div className="text-center space-y-2">
                        <p className="text-base text-gray-100 text-shadow">Available: <span className="font-semibold text-white">{mentor.schedule}</span></p>
                        <p className="text-base text-gray-100 text-shadow">Role: <span className="font-semibold text-white">{mentor.specialties.join(", ").toLowerCase()}</span></p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-6">
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="text-lg font-semibold text-white text-shadow">{mentor.rating}</span>
                          <span className="text-sm text-gray-200 text-shadow">({mentor.reviewCount})</span>
                        </div>
                        <span className="text-white border-l border-white h-6"></span>
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-white" />
                          <span className="text-sm text-gray-200 text-shadow">{mentor.menteesCount} Mentees</span>
                        </div>
                        <span className="text-white border-l border-white h-6"></span>
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-white" />
                          <span className="text-sm text-gray-200 text-shadow">{mentor.yearsExperience}y</span>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className={`inline-block px-3 py-1.5 rounded-full font-semibold text-base ${
                          mentor.matchScore >= 90 ? 'bg-green-600' : 
                          mentor.matchScore >= 80 ? 'bg-blue-600' : 'bg-orange-600'
                        } text-white shadow-md`}>
                          {mentor.matchScore}% Match
                        </div>
                      </div>
                    </div>
                    <Button
                      size="lg"
                      className={`bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white hover:from-mastero-blue-dark hover:to-mastero-blue-dark w-full py-4 transition-all duration-300 ${
                        hoveredButton === mentor.id ? 'scale-105' : ''
                      }`}
                      onMouseEnter={() => setHoveredButton(mentor.id)}
                      onMouseLeave={() => setHoveredButton(null)}
                    >
                      Get In Touch
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white rounded-full px-8 py-3 hover:opacity-90 transition-all duration-300"
          >
            Browse All Mentors
          </Button>
        </div>
      </div>
    </div>
  );
}