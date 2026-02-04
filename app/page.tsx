import Link from "next/link";
import {
  BookOpen,
  Code,
  Users,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Globe,
  Layers,
  MessageSquare,
  Clock,
  Gamepad2,
  Lightbulb,
  GraduationCap,
} from "lucide-react";

const sections = [
  {
    id: "1-introduction",
    title: "ML Basics: Introduction",
    lessons: 4,
    icon: BookOpen,
    color: "#D4823A",
    bgColor: "#FEF3E7",
  },
  {
    id: "2-regression",
    title: "Regression",
    lessons: 4,
    icon: TrendingUp,
    color: "#8FA68A",
    bgColor: "#F3F8F2",
  },
  {
    id: "3-web-app",
    title: "Web App",
    lessons: 1,
    icon: Globe,
    color: "#5A8A88",
    bgColor: "#F0F6F6",
  },
  {
    id: "4-classification",
    title: "Classification",
    lessons: 4,
    icon: Layers,
    color: "#C4897A",
    bgColor: "#FBF3F1",
  },
  {
    id: "5-clustering",
    title: "Clustering",
    lessons: 2,
    icon: Sparkles,
    color: "#8E4C5C",
    bgColor: "#F8F0F2",
  },
  {
    id: "6-nlp",
    title: "Natural Language Processing",
    lessons: 5,
    icon: MessageSquare,
    color: "#D4823A",
    bgColor: "#FEF3E7",
  },
  {
    id: "7-timeseries",
    title: "Time Series",
    lessons: 3,
    icon: Clock,
    color: "#8FA68A",
    bgColor: "#F3F8F2",
  },
  {
    id: "8-reinforcement",
    title: "Reinforcement Learning",
    lessons: 2,
    icon: Gamepad2,
    color: "#5A8A88",
    bgColor: "#F0F6F6",
  },
  {
    id: "9-real-world",
    title: "Real World ML",
    lessons: 2,
    icon: Lightbulb,
    color: "#C4897A",
    bgColor: "#FBF3F1",
  },
];

const features = [
  {
    icon: GraduationCap,
    title: "12-Week Curriculum",
    description: "Structured learning path from basics to advanced concepts",
    color: "#D4823A",
  },
  {
    icon: Code,
    title: "Hands-on Projects",
    description: "Build real ML models with Python and Scikit-learn",
    color: "#8FA68A",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Open source curriculum for everyone",
    color: "#5A8A88",
  },
  {
    icon: Sparkles,
    title: "Beginner Friendly",
    description: "No prior ML experience required to get started",
    color: "#C4897A",
  },
];

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Machine Learning For Beginners',
    description: 'A comprehensive 12-week curriculum to learn classic machine learning with Python and Scikit-learn.',
    provider: {
      '@type': 'Organization',
      name: 'ML Learn Mind',
      sameAs: 'https://github.com/aman67032/Machine-Learning-Learn-Mind'
    },
    educationalLevel: 'Beginner',
    isAccessibleForFree: true,
    inLanguage: 'en',
    learningResourceType: 'Course',
    url: 'https://ml-learn-mind.vercel.app'
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration - Advanced gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] rounded-full opacity-20 blur-3xl bg-[radial-gradient(circle,#E6A04F_0%,transparent_70%)] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-[-10%] right-[-5%] w-[50rem] h-[50rem] rounded-full opacity-15 blur-3xl bg-[radial-gradient(circle,#8FA68A_0%,transparent_70%)] animate-pulse" style={{ animationDuration: '10s' }} />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-lg font-medium bg-white/50 border border-[#D4823A]/20 text-[#D4823A] backdrop-blur-sm shadow-sm hover:scale-105 transition-transform cursor-default">
            <Sparkles className="w-5 h-5" />
            <span>Free & Open Source Beta</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-serif text-[#3D3128] leading-[1.1] tracking-tight">
            ML Basics & Lectures
            <br />
            <span className="bg-gradient-to-r from-[#D4823A] via-[#E6A04F] to-[#D4823A] bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              Learn Machine Learning
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl max-w-3xl mx-auto text-[#5D4E3C] leading-relaxed font-light">
            Your free <strong>ML learn</strong> hub. Access comprehensive <strong>ML lectures</strong> covering classic algorithms,
            Python basics, and Scikit-learn. Join our <strong>Beta Phase</strong> today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link
              href="/lessons/1-introduction/1-intro-to-ML"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-xl text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F] shadow-xl shadow-[#D4823A]/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#D4823A]/40"
            >
              Start Learning
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-xl bg-white border-2 border-[#E8DDD0] text-[#5D4E3C] transition-all hover:border-[#D4823A] hover:text-[#D4823A] hover:scale-105 shadow-sm hover:shadow-lg"
            >
              View Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group p-8 rounded-3xl bg-white border border-[#E8DDD0] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[#D4823A]/30 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-white/50 rounded-bl-[100px] pointer-events-none transition-opacity group-hover:opacity-100 opacity-0" />

                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${feature.color}15` }}>
                    <Icon className="w-8 h-8" style={{ color: feature.color }} />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 font-serif text-[#3D3128]">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-[#8B7355] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum Sections */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FFFBF7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold font-serif text-[#3D3128]">
              What You&apos;ll Learn
            </h2>
            <p className="text-xl text-[#5D4E3C] max-w-2xl mx-auto">
              26 lessons across 9 sections, taking you from fundamentals to real-world applications with hands-on practice.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Link
                  key={section.id}
                  href={`/lessons/${section.id}`}
                  className="group p-8 rounded-3xl bg-white border border-[#E8DDD0] transition-all duration-300 hover:shadow-xl hover:border-[#D4823A]/50 hover:-translate-y-2 flex flex-col h-full"
                >
                  <div className="flex items-start gap-5 mb-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6"
                      style={{ backgroundColor: section.bgColor }}>
                      <Icon className="w-7 h-7" style={{ color: section.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-xl mb-1 group-hover:text-[#D4823A] transition-colors font-serif text-[#3D3128] break-words">
                        {section.title}
                      </h3>
                      <p className="text-base font-medium text-[#8B7355]">
                        {section.lessons} {section.lessons === 1 ? "lesson" : "lessons"}
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto px-4 py-3 rounded-xl bg-[#FDF8F3] group-hover:bg-[#FEF3E7] transition-colors flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#8B7355] group-hover:text-[#D4823A]">Start Module</span>
                    <ArrowRight className="w-5 h-5 text-[#8B7355] group-hover:text-[#D4823A] transform group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center p-16 rounded-[3rem] bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] shadow-2xl shadow-[#3D3128]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4823A]/20 rounded-full blur-3xl" />

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-serif relative z-10">
            Ready to Begin Your ML Journey?
          </h2>
          <p className="text-xl mb-10 text-[#E8DDD0] max-w-2xl mx-auto relative z-10">
            Join thousands of learners who have started their machine learning adventure with this curriculum.
          </p>
          <Link
            href="/lessons/1-introduction/1-intro-to-ML"
            className="relative z-10 inline-flex items-center justify-center gap-3 px-12 py-6 rounded-2xl font-bold text-xl transition-all bg-gradient-to-r from-[#D4823A] to-[#E6A04F] text-white shadow-xl shadow-[#D4823A]/40 hover:shadow-2xl hover:scale-105 hover:-translate-y-1"
          >
            Start First Lesson
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-[#E8DDD0] bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg text-[#8B7355]">
            Built with ❤️ by{" "}
            <a href="https://github.com/aman67032/Machine-Learning-Learn-Mind"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline text-[#D4823A] hover:text-[#E6A04F] transition-colors">
              A_man67032
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
