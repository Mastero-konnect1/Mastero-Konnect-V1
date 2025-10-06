// 'use client'

// import { useState } from "react";
// import { Search, Filter, Heart, Star, MapPin, Briefcase } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// interface Mentor {
//   id: number;
//   name: string;
//   title: string;
//   company: string;
//   rating: number;
//   reviewCount: number;
//   tagline: string;
//   image: string;
//   domain: string;
//   experience: string;
//   location: string;
//   isFavorited: boolean;
// }

// export default function FindMentor() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedDomain, setSelectedDomain] = useState("all");
//   const [selectedExperience, setSelectedExperience] = useState("all");
//   const [selectedRating, setSelectedRating] = useState("all");
//   const [favorites, setFavorites] = useState<number[]>([]);

//   const mentors: Mentor[] = [
//     {
//       id: 1,
//       name: "Sarah Chen",
//       title: "Senior Product Manager",
//       company: "Google",
//       rating: 4.9,
//       reviewCount: 127,
//       tagline: "I help designers transition into product management roles",
//       image: "/api/placeholder/80/80",
//       domain: "Tech",
//       experience: "Senior",
//       location: "San Francisco, CA",
//       isFavorited: false
//     },
//     {
//       id: 2,
//       name: "Marcus Johnson",
//       title: "VP of Engineering",
//       company: "Stripe",
//       rating: 4.8,
//       reviewCount: 89,
//       tagline: "Scaling engineering teams and technical leadership",
//       image: "/api/placeholder/80/80",
//       domain: "Tech",
//       experience: "Executive",
//       location: "New York, NY",
//       isFavorited: false
//     },
//     {
//       id: 3,
//       name: "Emily Rodriguez",
//       title: "Design Director",
//       company: "Airbnb",
//       rating: 4.9,
//       reviewCount: 156,
//       tagline: "Design thinking and building impactful user experiences",
//       image: "/api/placeholder/80/80",
//       domain: "Design",
//       experience: "Senior",
//       location: "Los Angeles, CA",
//       isFavorited: false
//     },
//     {
//       id: 4,
//       name: "David Kim",
//       title: "Head of Growth",
//       company: "Notion",
//       rating: 4.7,
//       reviewCount: 92,
//       tagline: "Growth strategies and data-driven marketing",
//       image: "/api/placeholder/80/80",
//       domain: "Business",
//       experience: "Senior",
//       location: "Seattle, WA",
//       isFavorited: false
//     },
//     {
//       id: 5,
//       name: "Lisa Thompson",
//       title: "Chief Technology Officer",
//       company: "Shopify",
//       rating: 4.9,
//       reviewCount: 203,
//       tagline: "Technical strategy and engineering excellence",
//       image: "/api/placeholder/80/80",
//       domain: "Tech",
//       experience: "Executive",
//       location: "Toronto, ON",
//       isFavorited: false
//     },
//     {
//       id: 6,
//       name: "Alex Martinez",
//       title: "Senior Data Scientist",
//       company: "Netflix",
//       rating: 4.6,
//       reviewCount: 74,
//       tagline: "ML engineering and data science career paths",
//       image: "/api/placeholder/80/80",
//       domain: "Tech",
//       experience: "Senior",
//       location: "Los Angeles, CA",
//       isFavorited: false
//     }
//   ];

//   const toggleFavorite = (mentorId: number) => {
//     setFavorites(prev => 
//       prev.includes(mentorId) 
//         ? prev.filter(id => id !== mentorId)
//         : [...prev, mentorId]
//     );
//   };

//   const filteredMentors = mentors.filter(mentor => {
//     const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          mentor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          mentor.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          mentor.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    
//     const matchesDomain = selectedDomain === 'all' || mentor.domain === selectedDomain;
//     const matchesExperience = selectedExperience === 'all' || mentor.experience === selectedExperience;
//     const matchesRating = selectedRating === 'all' || mentor.rating >= parseFloat(selectedRating);

//     return matchesSearch && matchesDomain && matchesExperience && matchesRating;
//   });

//   const renderStars = (rating: number) => {
//     return Array.from({ length: 5 }, (_, index) => (
//       <Star
//         key={index}
//         className={`w-4 h-4 ${
//           index < Math.floor(rating) 
//             ? 'fill-yellow-400 text-yellow-400' 
//             : 'text-gray-300'
//         }`}
//       />
//     ));
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <div className="container mx-auto px-4 pt-24 pb-12">
//         {/* Header */}
//         <div className="mb-8 text-center">
//           <h1 className="text-3xl font-bold text-mastero-dark mb-2">
//             Find the Right Mentor For You
//           </h1>
//           <p className="text-mastero-text-medium">
//             Browse our network of experienced professionals ready to guide you
//           </p>
//         </div>

//         {/* Search & Filter Bar */}
//         <Card className="mb-8 sticky top-20 z-10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm">
//           <CardContent className="p-6">
//             <div className="flex flex-col md:flex-row gap-4">
//               {/* Search Input */}
//               <div className="flex-1 relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <Input
//                   placeholder="Search by skill, name, or company..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="pl-10"
//                 />
//               </div>

//               {/* Filters */}
//               <div className="flex flex-wrap gap-4">
//                 <Select value={selectedDomain} onValueChange={setSelectedDomain}>
//                   <SelectTrigger className="w-40">
//                     <SelectValue placeholder="Domain" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Domains</SelectItem>
//                     <SelectItem value="Tech">Tech</SelectItem>
//                     <SelectItem value="Business">Business</SelectItem>
//                     <SelectItem value="Design">Design</SelectItem>
//                   </SelectContent>
//                 </Select>

//                 <Select value={selectedExperience} onValueChange={setSelectedExperience}>
//                   <SelectTrigger className="w-40">
//                     <SelectValue placeholder="Experience" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Levels</SelectItem>
//                     <SelectItem value="Mid">Mid Level</SelectItem>
//                     <SelectItem value="Senior">Senior</SelectItem>
//                     <SelectItem value="Executive">Executive</SelectItem>
//                   </SelectContent>
//                 </Select>

//                 <Select value={selectedRating} onValueChange={setSelectedRating}>
//                   <SelectTrigger className="w-32">
//                     <SelectValue placeholder="Rating" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Ratings</SelectItem>
//                     <SelectItem value="4.5">4.5+ stars</SelectItem>
//                     <SelectItem value="4.0">4+ stars</SelectItem>
//                   </SelectContent>
//                 </Select>

//                 <Button className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white">
//                   <Filter className="w-4 h-4 mr-2" />
//                   Show Results
//                 </Button>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Results Count */}
//         <div className="mb-6">
//           <p className="text-mastero-text-medium">
//             Showing {filteredMentors.length} mentors
//           </p>
//         </div>

//         {/* Mentor Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredMentors.map((mentor) => (
//             <Card key={mentor.id} className="group hover:shadow-lg transition-all duration-300">
//               <CardContent className="p-6">
//                 {/* Header with Image and Favorite */}
//                 <div className="flex items-start justify-between mb-4">
//                   <div className="flex items-center gap-3">
//                     <div className="w-16 h-16 bg-gradient-to-br from-mastero-blue to-mastero-blue-end rounded-full flex items-center justify-center text-white font-semibold text-lg">
//                       {mentor.name.split(' ').map(n => n[0]).join('')}
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-mastero-dark">{mentor.name}</h3>
//                       <p className="text-sm text-mastero-text-medium">{mentor.title}</p>
//                       <p className="text-sm text-mastero-text-light">{mentor.company}</p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => toggleFavorite(mentor.id)}
//                     className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                   >
//                     <Heart
//                       className={`w-5 h-5 ${
//                         favorites.includes(mentor.id)
//                           ? 'fill-red-500 text-red-500'
//                           : 'text-gray-400'
//                       }`}
//                     />
//                   </button>
//                 </div>

//                 {/* Rating */}
//                 <div className="flex items-center gap-2 mb-3">
//                   <div className="flex">{renderStars(mentor.rating)}</div>
//                   <span className="text-sm font-medium">{mentor.rating}</span>
//                   <span className="text-sm text-mastero-text-light">({mentor.reviewCount} reviews)</span>
//                 </div>

//                 {/* Tagline */}
//                 <p className="text-mastero-text-medium mb-4 text-sm leading-relaxed">
//                   {mentor.tagline}
//                 </p>

//                 {/* Meta Info */}
//                 <div className="flex items-center gap-4 mb-4 text-xs text-mastero-text-light">
//                   <div className="flex items-center gap-1">
//                     <Briefcase className="w-3 h-3" />
//                     {mentor.experience}
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <MapPin className="w-3 h-3" />
//                     {mentor.location}
//                   </div>
//                 </div>

//                 {/* CTA Button */}
//                 <Button 
//                   variant="outline" 
//                   className="w-full border-mastero-blue text-mastero-blue hover:bg-mastero-blue hover:text-white transition-all duration-300"
//                 >
//                   View Profile
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {filteredMentors.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-mastero-text-medium text-lg">No mentors found matching your criteria.</p>
//             <p className="text-mastero-text-light">Try adjusting your filters or search terms.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



// 'use client'

// import { useState } from "react";
// import { Search, Filter, Heart, Star, MapPin, Briefcase } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// interface Mentor {
//   id: number;
//   name: string;
//   title: string;
//   company: string;
//   rating: number;
//   reviewCount: number;
//   tagline: string;
//   image: string;
//   domain: string;
//   experience: string;
//   location: string;
//   isFavorited: boolean;
// }

// export default function FindMentor() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedDomain, setSelectedDomain] = useState("all");
//   const [selectedExperience, setSelectedExperience] = useState("all");
//   const [selectedRating, setSelectedRating] = useState("all");
//   const [favorites, setFavorites] = useState<number[]>([]);

//   const mentors: Mentor[] = [
//     {
//       id: 1,
//       name: "Sarah Chen",
//       title: "Senior Product Manager",
//       company: "Google",
//       rating: 4.9,
//       reviewCount: 127,
//       tagline: "I help designers transition into product management roles",
//       image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
//       domain: "Tech",
//       experience: "Senior",
//       location: "San Francisco, CA",
//       isFavorited: false
//     },
//     {
//       id: 2,
//       name: "Marcus Johnson",
//       title: "VP of Engineering",
//       company: "Stripe",
//       rating: 4.8,
//       reviewCount: 89,
//       tagline: "Scaling engineering teams and technical leadership",
//            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",

//       domain: "Tech",
//       experience: "Executive",
//       location: "New York, NY",
//       isFavorited: false
//     },
//     {
//       id: 3,
//       name: "Emily Rodriguez",
//       title: "Design Director",
//       company: "Airbnb",
//       rating: 4.9,
//       reviewCount: 156,
//       tagline: "Design thinking and building impactful user experiences",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
//       domain: "Design",
//       experience: "Senior",
//       location: "Los Angeles, CA",
//       isFavorited: false
//     },
//     {
//       id: 4,
//       name: "David Kim",
//       title: "Head of Growth",
//       company: "Notion",
//       rating: 4.7,
//       reviewCount: 92,
//       tagline: "Growth strategies and data-driven marketing",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
//       domain: "Business",
//       experience: "Senior",
//       location: "Seattle, WA",
//       isFavorited: false
//     },
//     {
//       id: 5,
//       name: "Lisa Thompson",
//       title: "Chief Technology Officer",
//       company: "Shopify",
//       rating: 4.9,
//       reviewCount: 203,
//       tagline: "Technical strategy and engineering excellence",
//       image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
//       domain: "Tech",
//       experience: "Executive",
//       location: "Toronto, ON",
//       isFavorited: false
//     },
//     {
//       id: 6,
//       name: "Alex Martinez",
//       title: "Senior Data Scientist",
//       company: "Netflix",
//       rating: 4.6,
//       reviewCount: 74,
//       tagline: "ML engineering and data science career paths",
//       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
//       domain: "Tech",
//       experience: "Senior",
//       location: "Los Angeles, CA",
//       isFavorited: false
//     }
//   ];

//   const toggleFavorite = (mentorId: number) => {
//     setFavorites(prev =>
//       prev.includes(mentorId)
//         ? prev.filter(id => id !== mentorId)
//         : [...prev, mentorId]
//     );
//   };

//   const filteredMentors = mentors.filter(mentor => {
//     const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       mentor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       mentor.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       mentor.tagline.toLowerCase().includes(searchQuery.toLowerCase());

//     const matchesDomain = selectedDomain === 'all' || mentor.domain === selectedDomain;
//     const matchesExperience = selectedExperience === 'all' || mentor.experience === selectedExperience;
//     const matchesRating = selectedRating === 'all' || mentor.rating >= parseFloat(selectedRating);

//     return matchesSearch && matchesDomain && matchesExperience && matchesRating;
//   });

//   return (
//     <div className="min-h-screen bg-background">
//       <div className="container mx-auto px-4 pt-24 pb-12">
//         {/* Header */}
//         <div className="mb-8 text-center">
//           <h1 className="text-3xl font-bold text-mastero-dark mb-2">
//             Find the Right Mentor For You
//           </h1>
//           <p className="text-mastero-text-medium">
//             Browse our network of experienced professionals ready to guide you
//           </p>
//         </div>

//         {/* Search & Filter Bar */}
//         <Card className="mb-8 sticky top-20 z-10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm" >
//           <CardContent className="p-6">
//             <div className="flex flex-col md:flex-row gap-4">
//               {/* Search Input */}
//               <div className="flex-1 relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <Input
//                   placeholder="Search by skill, name, or company..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="pl-10"
//                 />
//               </div>

//               {/* Filters */}
//               <div className="flex flex-wrap gap-4">
//                 <Select value={selectedDomain} onValueChange={setSelectedDomain}>
//                   <SelectTrigger className="w-40">
//                     <SelectValue placeholder="Domain" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Domains</SelectItem>
//                     <SelectItem value="Tech">Tech</SelectItem>
//                     <SelectItem value="Business">Business</SelectItem>
//                     <SelectItem value="Design">Design</SelectItem>
//                   </SelectContent>
//                 </Select>

//                 <Select value={selectedExperience} onValueChange={setSelectedExperience}>
//                   <SelectTrigger className="w-40">
//                     <SelectValue placeholder="Experience" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Levels</SelectItem>
//                     <SelectItem value="Mid">Mid Level</SelectItem>
//                     <SelectItem value="Senior">Senior</SelectItem>
//                     <SelectItem value="Executive">Executive</SelectItem>
//                   </SelectContent>
//                 </Select>

//                 <Select value={selectedRating} onValueChange={setSelectedRating}>
//                   <SelectTrigger className="w-32">
//                     <SelectValue placeholder="Rating" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Ratings</SelectItem>
//                     <SelectItem value="4.5">4.5+ stars</SelectItem>
//                     <SelectItem value="4.0">4+ stars</SelectItem>
//                   </SelectContent>
//                 </Select>

//                 <Button className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white">
//                   <Filter className="w-4 h-4 mr-2" />
//                   Show Results
//                 </Button>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Results Count */}
//         <div className="mb-6">
//           <p className="text-mastero-text-medium">
//             Showing {filteredMentors.length} mentors
//           </p>
//         </div>

//         {/* ====== MENTOR GRID MODIFIED START ====== */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredMentors.map((mentor) => (
//             <Card key={mentor.id} className="group hover:shadow-lg transition-all duration-300 flex flex-col" style={{ backgroundImage: `url(${mentor.image})` ,backgroundSize: 'cover',
//                       backgroundPosition: 'center',
//                       backgroundRepeat: 'no-repeat',
//                       opacity: 100 }}>
//               <CardContent className="p-6 flex flex-col flex-grow" >
//                 <div className="flex-grow">
//                   {/* Header with Image and Favorite */}
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="flex items-center gap-4">
                     
//                       <div>
//                       <h3 className="text-2xl font-bold text-shadow-lg mb-1">{mentor.name}</h3>
//                     <p className="text-lg text-white text-shadow mb-2">{mentor.title}</p>
//                     <p className="text-md text-white text-shadow">{mentor.company}</p>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => toggleFavorite(mentor.id)}
//                       className="p-2 hover:bg-black rounded-full transition-colors"
//                     >
//                       <Heart
//                         className={`w-5 h-5 ${
//                           favorites.includes(mentor.id)
//                             ? 'fill-red-500 text-red-500'
//                             : 'text-white'
//                         }`}
//                       />
//                     </button>
//                   </div>

//                   {/* Tagline */}
//                   <p className="text-mastero-text-medium mb-4 text-sm leading-relaxed h-20 text-white">
//                     "{mentor.tagline}"
//                   </p>
//                 </div>
                
//                 {/* Meta Info / Stats Bar */}
//                 <div className="border-t pt-4 space-y-3">
//                   <div className="flex items-center justify-between text-sm text-mastero-text-medium">
//                     <div className="flex items-center gap-1.5">
//                       <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                       <span className="text-lg font-semibold text-white text-shadow">{mentor.rating}</span>
//                       <span className="text-sm text-white text-shadow">({mentor.reviewCount})</span>
//                     </div>
//                      <div className="flex items-center gap-1.5 text-white">
//                       <Briefcase className="w-4 h-4" />
//                       {mentor.experience}
//                     </div>
//                   </div>
//                    <div className="flex items-center gap-1.5 text-sm text-mastero-text-medium text-white">
//                       <MapPin className="w-4 h-4 text-white" />
//                       <h3 className="text-white">{mentor.location}</h3>
//                     </div>
//                 </div>

//                 {/* CTA Button */}
//                 <Button
//                   variant="outline"
//                   className="w-full mt-6 border-mastero-blue bg-mastero-blue text-white transition-all duration-300"
//                 >
//                   View Profile
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//         {/* ====== MENTOR GRID MODIFIED END ====== */}

//         {filteredMentors.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-mastero-text-medium text-lg">No mentors found matching your criteria.</p>
//             <p className="text-mastero-text-light">Try adjusting your filters or search terms.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }






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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Find Your Perfect Mentor
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated network of industry experts and leaders, ready to help you unlock your potential.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <Card className="mb-8 sticky top-20 z-10 bg-blue-50/70 backdrop-blur-lg shadow-sm">
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search by name, skill, or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-4 w-full md:w-auto">
                <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                  <SelectTrigger className="w-full md:w-40 h-12"><SelectValue placeholder="Domain" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Domains</SelectItem>
                    <SelectItem value="Tech">Tech</SelectItem>
                    <SelectItem value="Business">Business</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                  <SelectTrigger className="w-full md:w-40 h-12"><SelectValue placeholder="Experience" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="Senior">Senior</SelectItem>
                    <SelectItem value="Executive">Executive</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedRating} onValueChange={setSelectedRating}>
                  <SelectTrigger className="w-full md:w-32 h-12"><SelectValue placeholder="Rating" /></SelectTrigger>
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
            Showing <span className="font-semibold text-gray-900">{filteredMentors.length}</span> mentors
          </p>
        </div>

        {/* ====== PREMIUM MENTOR GRID ====== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMentors.map((mentor) => (
            <Card key={mentor.id} className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              {/* Background Image */}
              <img
                src={mentor.image}
                alt={mentor.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(mentor.id)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <Heart className={`w-6 h-6 transition-all ${favorites.includes(mentor.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
              </button>
              
              {/* Main Content Area */}
              <div className="relative p-6 h-full flex flex-col justify-end text-white">
                <div>
                  <h3 className="text-2xl font-bold" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>{mentor.name}</h3>
                  <p className="text-sm font-light opacity-90" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>{mentor.title} at {mentor.company}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-medium opacity-90">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span>{mentor.rating} ({mentor.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                     <Briefcase className="w-4 h-4" />
                     <span>{mentor.experience}</span>
                  </div>
                </div>

                {/* View Profile Button (Appears on Hover) */}
                 <Button className="w-full mt-6 bg-white/20 border-white/30 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
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
          </div>
        )}
      </div>
    </div>
  );
}