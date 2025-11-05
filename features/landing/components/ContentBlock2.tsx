import Link from "next/link";
import { Star, Clock, Users, Trophy, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Rating",
    description: "Based on 10,000+ reviews",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Clock,
    value: "3.2x",
    label: "Faster Progress",
    description: "Compared to self-learning",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: Users,
    value: "89%",
    label: "Career Advancement",
    description: "Within 6 months",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    icon: Trophy,
    value: "95%",
    label: "Goal Achievement",
    description: "Success rate",
    gradient: "from-purple-400 to-pink-500",
  },
];

export default function ContentBlock2() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
            <Zap className="h-4 w-4 text-blue-600" />
            <span className="text-xs sm:text-sm font-medium text-blue-700">
              Real Results
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Proven Results from{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Real People
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our platform has helped thousands of professionals achieve their
            career goals faster and more effectively than traditional learning
            methods.
          </p>
        </div>

        {/* Left Side: Visual Card ONLY */}
        <div className="mb-12 md:mb-16">
          <div className="relative w-full max-w-md mx-auto lg:max-w-none">
            <div className="aspect-square bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-8 left-8 w-24 h-24 bg-white rounded-full blur-2xl"></div>
                <div className="absolute bottom-8 right-8 w-24 h-24 bg-white rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS GRID - FULL WIDTH, SEPARATE FROM MAIN GRID */}
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="p-5 md:p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-11 h-11 mb-4 rounded-xl bg-gradient-to-br ${stat.gradient} p-2`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>

                  {/* Content */}
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section - Centered */}
        <div className="border-t border-gray-200 pt-12 md:pt-16">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 md:mb-16">
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link
                href="/ai-assessment"
                className="flex items-center justify-center gap-2"
              >
                Get Started Today
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto border-2 border-gray-300 text-gray-900 hover:border-blue-400 hover:bg-blue-50 font-semibold transition-all duration-300"
            >
              <Link href="/auth/sign-up">Become a Mentor</Link>
            </Button>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { number: "10K+", label: "Active Mentors" },
              { number: "50K+", label: "Mentees" },
              { number: "100+", label: "Industries" },
              { number: "15M+", label: "Hours Mentored" },
            ].map((item, index) => (
              <div key={index} className="text-center py-4 sm:py-6">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {item.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

