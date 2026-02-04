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
    title: "Introduction to ML",
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
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-30 bg-[radial-gradient(circle,#E6A04F_0%,transparent_70%)]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20 bg-[radial-gradient(circle,#8FA68A_0%,transparent_70%)]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-base font-medium mb-8 bg-[#FEF3E7] text-[#D4823A]">
            <Sparkles className="w-4 h-4" />
            Free & Open Source
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-serif text-[#3D3128] leading-tight">
            Machine Learning
            <br />
            <span className="bg-gradient-to-r from-[#D4823A] to-[#E6A04F] bg-clip-text text-transparent">
              For Beginners
            </span>
          </h1>

          <p className="text-xl sm:text-2xl mb-10 max-w-2xl mx-auto text-[#5D4E3C] leading-relaxed">
            A comprehensive 12-week, 26-lesson curriculum covering classic machine learning
            using Python and Scikit-learn. Join our <strong>Beta Phase</strong> and start learning today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lessons/1-introduction/1-intro-to-ML"
              className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all bg-gradient-to-r from-[#D4823A] to-[#E6A04F] shadow-lg shadow-[#D4823A]/30 hover:shadow-xl hover:shadow-[#D4823A]/40 hover:-translate-y-0.5"
            >
              Start Learning
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all border-2 bg-white border-[#E8DDD0] text-[#5D4E3C] hover:border-[#D4823A] hover:text-[#D4823A]"
            >
              View Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl transition-all bg-white border border-[#E8DDD0] hover:shadow-lg hover:border-[#D4823A]/30"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${feature.color}15` }}>
                    <Icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 font-serif text-[#3D3128]">
                    {feature.title}
                  </h3>
                  <p className="text-base text-[#8B7355] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFBF7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif text-[#3D3128]">
              What You&apos;ll Learn
            </h2>
            <p className="text-lg text-[#5D4E3C]">
              26 lessons across 9 sections, from fundamentals to real-world applications
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Link
                  key={section.id}
                  href={`/lessons/${section.id}`}
                  className="group p-5 rounded-2xl transition-all border bg-white border-[#E8DDD0] hover:shadow-lg hover:border-[#D4823A]/50 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: section.bgColor }}>
                      <Icon className="w-6 h-6" style={{ color: section.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-[#D4823A] transition-colors font-serif text-[#3D3128]">
                        {section.title}
                      </h3>
                      <p className="text-base text-[#8B7355]">
                        {section.lessons} {section.lessons === 1 ? "lesson" : "lessons"}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4823A]" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center p-10 rounded-3xl bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] shadow-2xl shadow-[#3D3128]/20">
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">
            Ready to Begin Your ML Journey?
          </h2>
          <p className="text-lg mb-8 text-[#E8DDD0]">
            Join thousands of learners who have started their machine learning adventure with this curriculum.
          </p>
          <Link
            href="/lessons/1-introduction/1-intro-to-ML"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all bg-gradient-to-r from-[#D4823A] to-[#E6A04F] text-white shadow-lg shadow-[#D4823A]/40 hover:shadow-xl hover:-translate-y-0.5"
          >
            Start First Lesson
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-[#E8DDD0]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-base text-[#8B7355]">
            Built with ❤️ by{" "}
            <a href="https://github.com/aman67032/Machine-Learning-Learn-Mind"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline text-[#D4823A]">
              ML Learn Mind Team
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
