"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BookOpen, Github, ExternalLink, FolderOpen, Settings, GraduationCap } from "lucide-react";

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-[#FDF8F3]/95 backdrop-blur-md border-[#E8DDD0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
                            <img src="/LOGO.png" alt="ML Learn Mind Logo" className="w-full h-full object-cover" />
                        </div>
                        <div className="hidden sm:flex items-center gap-2">
                            <h1 className="text-lg font-bold font-serif text-[#5D4E3C]">ML Learn Mind</h1>
                            <span className="px-2 py-0.5 rounded-full bg-[#E6F4F1] text-[#5A8A88] text-xs font-semibold border border-[#5A8A88]/20">
                                Beta
                            </span>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/" className="font-medium text-[#5D4E3C] hover:text-[#D4823A] transition-colors">
                            Home
                        </Link>
                        <Link href="/learn" className="font-medium flex items-center gap-1 text-[#D4823A] hover:text-[#E6A04F] transition-colors">
                            <GraduationCap className="w-4 h-4" />
                            Learn
                        </Link>
                        <Link href="/lessons/1-introduction" className="font-medium text-[#5D4E3C] hover:text-[#D4823A] transition-colors">
                            Lessons
                        </Link>
                        <Link href="/resources" className="font-medium flex items-center gap-1 text-[#5D4E3C] hover:text-[#D4823A] transition-colors">
                            <FolderOpen className="w-4 h-4" />
                            Resources
                        </Link>
                        <Link href="/setup" className="font-medium flex items-center gap-1 text-[#5D4E3C] hover:text-[#D4823A] transition-colors">
                            <Settings className="w-4 h-4" />
                            Setup
                        </Link>
                        <a
                            href="https://github.com/aman67032/Machine-Learning-Learn-Mind"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#5D4E3C] hover:text-[#D4823A] transition-colors"
                        >
                            <Github className="w-5 h-5" />
                            <span className="font-medium">GitHub</span>
                        </a>
                        <a
                            href="https://ff-quizzes.netlify.app/en/ml/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white px-4 py-2 rounded-lg bg-gradient-to-r from-[#D4823A] to-[#E6A04F] shadow-lg shadow-[#D4823A]/25 hover:shadow-xl transition-all"
                        >
                            <span>Quizzes</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 text-[#5D4E3C]"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#FDF8F3] border-b border-[#E8DDD0]">
                    <div className="px-4 py-4 space-y-3">
                        <Link
                            href="/"
                            className="block text-[#5D4E3C] hover:text-[#D4823A] font-medium py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/learn"
                            className="flex items-center gap-2 text-[#D4823A] font-medium py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <GraduationCap className="w-5 h-5" />
                            Learn (Enhanced)
                        </Link>
                        <Link
                            href="/lessons/1-introduction"
                            className="block text-[#5D4E3C] hover:text-[#D4823A] font-medium py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Lessons
                        </Link>
                        <Link
                            href="/resources"
                            className="flex items-center gap-2 text-[#5D4E3C] hover:text-[#D4823A] font-medium py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <FolderOpen className="w-5 h-5" />
                            Resources
                        </Link>
                        <Link
                            href="/setup"
                            className="flex items-center gap-2 text-[#5D4E3C] hover:text-[#D4823A] font-medium py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Settings className="w-5 h-5" />
                            Setup
                        </Link>
                        <a
                            href="https://github.com/aman67032/Machine-Learning-Learn-Mind"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[#5D4E3C] hover:text-[#D4823A] py-2"
                        >
                            <Github className="w-5 h-5" />
                            <span className="font-medium">GitHub</span>
                        </a>
                        <a
                            href="https://ff-quizzes.netlify.app/en/ml/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white px-4 py-2 rounded-lg bg-gradient-to-r from-[#D4823A] to-[#E6A04F]"
                        >
                            <span>Quizzes</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
