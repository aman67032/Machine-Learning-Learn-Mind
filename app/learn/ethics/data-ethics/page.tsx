import Link from "next/link";
import { ArrowLeft, ArrowRight, Shield, Target, BookOpen, CheckCircle } from "lucide-react";

export default function DataEthicsPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/learn" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />Back to Learning Path
                </Link>

                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#F8F0F2] text-[#8E4C5C]">
                        <Shield className="w-4 h-4" />ML Ethics
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">📋 Data Collection Ethics</h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        Responsible data collection is the <strong>foundation</strong> of ethical ML. Privacy, consent, and transparency matter!
                    </p>
                </div>

                <div className="rounded-2xl p-6 mb-10 bg-[#FFFBF7] border border-[#E8DDD0]">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2 font-serif text-[#3D3128]">
                        <Target className="w-5 h-5 text-[#D4823A]" />What You&apos;ll Learn
                    </h2>
                    <ul className="space-y-2 text-[#5D4E3C]">
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Privacy concerns and data minimization</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Informed consent and transparency</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Regulations: GDPR, CCPA, and beyond</span></li>
                    </ul>
                </div>

                <article className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">1. Core Principles</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] space-y-4">
                            <div className="bg-[#F3F8F2] rounded-xl p-4">
                                <p className="text-[#8FA68A] font-bold">🔒 Data Minimization</p>
                                <p className="text-[#5D4E3C] text-sm">Only collect data that is necessary for the specific purpose</p>
                            </div>
                            <div className="bg-[#F3F8F2] rounded-xl p-4">
                                <p className="text-[#8FA68A] font-bold">✅ Informed Consent</p>
                                <p className="text-[#5D4E3C] text-sm">Users must understand what data is collected and how it will be used</p>
                            </div>
                            <div className="bg-[#F3F8F2] rounded-xl p-4">
                                <p className="text-[#8FA68A] font-bold">🔐 Security</p>
                                <p className="text-[#5D4E3C] text-sm">Protect data from breaches and unauthorized access</p>
                            </div>
                            <div className="bg-[#F3F8F2] rounded-xl p-4">
                                <p className="text-[#8FA68A] font-bold">🗑️ Right to Deletion</p>
                                <p className="text-[#5D4E3C] text-sm">Users should be able to request their data be deleted</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">2. Key Regulations</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#FEF3E7] rounded-xl p-4">
                                    <p className="text-[#D4823A] font-bold">🇪🇺 GDPR</p>
                                    <p className="text-[#5D4E3C] text-sm">EU regulation: consent, right to access, right to erasure, data portability</p>
                                </div>
                                <div className="bg-[#F0F6F6] rounded-xl p-4">
                                    <p className="text-[#5A8A88] font-bold">🇺🇸 CCPA</p>
                                    <p className="text-[#5D4E3C] text-sm">California: right to know, delete, and opt-out of data sales</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">3. Best Practices</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <ul className="space-y-3 text-[#5D4E3C]">
                                <li>✓ Anonymize or pseudonymize personal data when possible</li>
                                <li>✓ Document data sources and collection methods</li>
                                <li>✓ Conduct privacy impact assessments</li>
                                <li>✓ Implement data retention policies</li>
                                <li>✓ Be transparent about ML model usage</li>
                            </ul>
                        </div>
                    </section>

                    <section className="rounded-2xl p-8 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6" />Key Takeaways</h2>
                        <div className="space-y-3 text-[#E8DDD0]">
                            <p><strong className="text-[#E6A04F]">Consent:</strong> Users must opt-in with clear understanding</p>
                            <p><strong className="text-[#E6A04F]">Minimize:</strong> Collect only what you need</p>
                            <p><strong className="text-[#E6A04F]">Protect:</strong> Security isn&apos;t optional</p>
                        </div>
                    </section>
                </article>

                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/ethics/bias" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A]"><ArrowLeft className="w-4 h-4" />Bias in ML</Link>
                    <Link href="/learn/ethics/explainability" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F]">Next: Explainability<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </div>
        </div>
    );
}
