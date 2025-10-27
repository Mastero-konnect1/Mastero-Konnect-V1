'use client'

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Award, ArrowRight, Users, Clock, Search, Mic, Filter, SortAsc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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
    if (score >= 80) return 'text-purple-700 bg-purple-100';
    return 'text-orange-600 bg-orange-100';
  };

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

  useEffect(() => {
    // @ts-ignore
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

    recognition.onresult = (event: any) => {
      const speechResult = event.results[0][0].transcript.toLowerCase();
      setSearchQuery(speechResult);
      setIsListening(false);
    };

    recognition.onerror = (event: any) => {
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
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "white",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Enhanced Gradient Glassmorphic Background Cards */}
      <div className="absolute top-10 left-10 right-10 bottom-10 bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-indigo-500/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl z-0" />
      <div className="absolute top-5 left-5 right-5 bottom-5 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-indigo-500/15 backdrop-blur-2xl rounded-[40px] border border-white/40 shadow-3xl z-1" />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/5 z-2" />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Your Recommended Mentors,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Curated Just For You
            </span>
          </h1>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4 max-w-5xl mx-auto">
          <div className="flex-1 relative group">
            <div className="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/40 transform group-hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center px-4 py-3">
                <div className="pr-3">
                  <Search className="w-6 h-6 text-purple-500" />
                </div>
                <input
                  type="text"
                  placeholder="Search by name, title, or skill..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 py-2 pr-4 text-gray-800 placeholder-gray-500 bg-transparent outline-none text-base font-medium transition-all duration-200"
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
                  onClick={() => setIsListening(prev => !prev)}
                  className={`ml-2 p-2 rounded-full ${isListening ? 'bg-purple-200' : 'bg-indigo-100'} hover:bg-purple-300/50 transition-all duration-200`}
                >
                  <Mic className={`w-5 h-5 ${isListening ? 'text-purple-700' : 'text-indigo-700'}`} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-2 rounded-xl border border-white/40 bg-white/90 backdrop-blur-md shadow-sm appearance-none focus:ring-2 focus:ring-purple-500 transition duration-200"
            >
              <option value="">All Mentors</option>
              <option value="accepting">Accepting Mentees</option>
              <option value="notAccepting">Not Accepting Mentees</option>
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="p-2 rounded-xl border border-white/40 bg-white/90 backdrop-blur-md shadow-sm appearance-none focus:ring-2 focus:ring-purple-500 transition duration-200"
            >
              <option value="matchScore">Match Score</option>
              <option value="rating">Rating</option>
              <option value="experience">Experience</option>
            </select>
          </div>
        </div>

        <div className="mb-12">
          <Card className="relative overflow-hidden group transition-transform duration-300 hover:scale-[1.01] border border-white/40 shadow-2xl hover:shadow-purple-400/50 bg-white/90 backdrop-blur-md">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
              <div className="relative w-full h-[420px] rounded-lg overflow-hidden">
                <img 
                  src={bestMatch.image}
                  alt={bestMatch.name}
                  className="w-full h-full object-cover shadow-lg"
                />
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white px-4 py-1.5 shadow-md">
                    <Award className="w-4 h-4 mr-1" /> Best Match
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-0 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-6">
                    <h2 className="text-3xl font-extrabold text-gray-900">{bestMatch.name}</h2>
                    <p className="text-xl text-purple-700 font-bold mb-1">{bestMatch.title}</p>
                    <p className="text-md text-gray-500 font-medium">{bestMatch.company}</p>
                  </div>
                  <div className="mb-6 space-y-2 text-sm">
                    <p className="text-gray-600 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-indigo-500" />
                      <span className="font-semibold text-gray-800">Available:</span> {bestMatch.schedule}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold text-gray-800">Specialties:</span>
                      {bestMatch.specialties.map((s, i) => (
                        <Badge key={i} className="ml-2 bg-indigo-100 text-indigo-700 font-medium hover:bg-indigo-200 transition-colors">{s}</Badge>
                      ))}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-indigo-100 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="text-lg font-bold text-gray-800">{bestMatch.rating}</span>
                      <span className="text-sm">({bestMatch.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 text-indigo-700">
                      <Users className="w-5 h-5" />
                      <span className="text-sm font-medium">{bestMatch.menteesCount} Mentees</span>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className={`bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 w-full py-3 shadow-lg hover:shadow-xl transition-all duration-300 mt-6 transform hover:scale-105 ${
                    hoveredButton === bestMatch.id ? 'scale-105' : ''
                  }`}
                  onMouseEnter={() => setHoveredButton(bestMatch.id)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  Connect Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {searchQuery ? `Search Results (${filteredMatches.length})` : "Browse All Mentors"}
            </h2>
            {filteredMatches.length > 3 && (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="border border-white/40 bg-white/90 backdrop-blur-md text-gray-700 flex items-center gap-1 hover:bg-white/95 hover:shadow-lg transition-all duration-300"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" /> Prev
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSlide}
                  disabled={currentSlide >= Math.ceil(filteredMatches.length / 3) - 1}
                  className="border border-white/40 bg-white/90 backdrop-blur-md text-gray-700 flex items-center gap-1 hover:bg-white/95 hover:shadow-lg transition-all duration-300"
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
                className="mt-4 border-indigo-500 text-indigo-700 hover:bg-indigo-50"
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </Button>
            </div>
          ) : (
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence>
                <motion.div
                  key={currentSlide}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  initial={{ x: currentSlide === 0 ? 0 : '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {visibleMatches.map((mentor) => (
                    <Card
                      key={mentor.id}
                      className="relative overflow-hidden group transition-transform duration-300 hover:scale-[1.03] shadow-lg border border-white/40 h-[420px]"
                      onMouseEnter={() => setHoveredCard(mentor.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(15px)',
                      }}
                    >
                      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url(${mentor.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute top-4 left-4 text-white">
                        <h3 className="text-2xl font-bold text-shadow-lg mb-1">{mentor.name}</h3>
                        <p className="text-lg text-indigo-300 text-shadow mb-2">{mentor.title}</p>
                        <p className="text-md text-gray-200 text-shadow">{mentor.company}</p>
                      </div>
                      <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white">
                        <motion.div
                          className="flex flex-col items-center justify-center space-y-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={hoveredCard === mentor.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="text-center space-y-2">
                            <p className="text-base text-gray-200 text-shadow">Available: <span className="font-semibold text-white">{mentor.schedule}</span></p>
                            <p className="text-base text-gray-200 text-shadow">Role: <span className="font-semibold text-white">{mentor.specialties.join(", ").toLowerCase()}</span></p>
                          </div>
                          <div className="flex items-center justify-center gap-6">
                            <div className="flex items-center gap-2">
                              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                              <span className="text-lg font-semibold text-white text-shadow">{mentor.rating}</span>
                              <span className="text-sm text-gray-200 text-shadow">({mentor.reviewCount})</span>
                            </div>
                            <span className="text-white border-l border-white h-6 opacity-50"></span>
                            <div className="flex items-center gap-2">
                              <Users className="w-5 h-5 text-purple-300" />
                              <span className="text-sm text-gray-200 text-shadow">{mentor.menteesCount} Mentees</span>
                            </div>
                            <span className="text-white border-l border-white h-6 opacity-50"></span>
                            <div className="flex items-center gap-2">
                              <Clock className="w-5 h-5 text-indigo-300" />
                              <span className="text-sm text-gray-200 text-shadow">{mentor.yearsExperience}y</span>
                            </div>
                          </div>
                          <div className="absolute top-4 right-4">
                            <div className={`inline-block px-3 py-1.5 rounded-full font-semibold text-base ${
                              mentor.matchScore >= 90 ? 'bg-green-600' : 
                              mentor.matchScore >= 80 ? 'bg-purple-600' : 'bg-orange-600'
                            } text-white shadow-md`}>
                              {mentor.matchScore}% Match
                            </div>
                          </div>
                        </motion.div>
                        <Button
                          size="lg"
                          className={`bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 w-full py-4 shadow-lg transition-all duration-300 transform hover:scale-105 ${
                            hoveredButton === mentor.id ? 'scale-105' : ''
                          }`}
                          onMouseEnter={() => setHoveredButton(mentor.id)}
                          onMouseLeave={() => setHoveredButton(null)}
                        >
                          View Profile
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white rounded-full px-10 py-3 text-lg font-semibold hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Link href={"/find-mentor"}>Browse All Mentors</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}