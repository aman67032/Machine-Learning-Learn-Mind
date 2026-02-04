import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageSquare, Target, BookOpen, CheckCircle, Code } from "lucide-react";

export default function TFIDFPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/learn" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />Back to Learning Path
                </Link>

                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#F0F6F6] text-[#5A8A88]">
                        <MessageSquare className="w-4 h-4" />NLP Basics
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">📊 TF-IDF</h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        Term Frequency-Inverse Document Frequency: Convert text into <strong>meaningful numerical features</strong>!
                    </p>
                </div>

                <div className="rounded-2xl p-6 mb-10 bg-[#FFFBF7] border border-[#E8DDD0]">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2 font-serif text-[#3D3128]">
                        <Target className="w-5 h-5 text-[#D4823A]" />What You&apos;ll Learn
                    </h2>
                    <ul className="space-y-2 text-[#5D4E3C]">
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Term Frequency (TF) and Inverse Document Frequency (IDF)</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Why rare words are more informative</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>How to use TF-IDF for text classification</span></li>
                    </ul>
                </div>

                <article className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">1. The Intuition</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <p className="text-[#5D4E3C] text-lg mb-4">Words that appear <strong>often in one document</strong> but <strong>rarely across documents</strong> are most important!</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#FBF3F1] rounded-xl p-4"><p className="text-[#C4897A] font-bold">Common Words</p><p className="text-[#5D4E3C] text-sm">&quot;the&quot;, &quot;is&quot;, &quot;and&quot; - in every doc = LOW info</p></div>
                                <div className="bg-[#F3F8F2] rounded-xl p-4"><p className="text-[#8FA68A] font-bold">Rare Words</p><p className="text-[#5D4E3C] text-sm">&quot;neural&quot;, &quot;gradient&quot; - specific docs = HIGH info</p></div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">2. The Formulas</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] space-y-4">
                            <div className="bg-[#2D2520] rounded-xl p-4"><p className="text-[#E8DDD0] text-sm">Term Frequency:</p><p className="text-[#E6A04F] font-mono text-center">TF(t, d) = count(t, d) / total_terms(d)</p></div>
                            <div className="bg-[#2D2520] rounded-xl p-4"><p className="text-[#E8DDD0] text-sm">Inverse Document Frequency:</p><p className="text-[#E6A04F] font-mono text-center">IDF(t) = log(N / df(t))</p><p className="text-[#8B7355] text-xs mt-1">N=total docs, df(t)=docs containing t</p></div>
                            <div className="bg-[#2D2520] rounded-xl p-4"><p className="text-[#E8DDD0] text-sm">Combined:</p><p className="text-[#E6A04F] font-mono text-lg text-center">TF-IDF(t, d) = TF(t, d) × IDF(t)</p></div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">3. Example</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-4 font-mono text-sm">
                                <p className="text-[#E8DDD0]">N = 1000 documents</p>
                                <p className="text-[#E6A04F] mt-2">&quot;the&quot;: IDF = log(1000/1000) = 0 (useless!)</p>
                                <p className="text-[#E6A04F]">&quot;algorithm&quot;: IDF = log(1000/50) = 3.0 (informative)</p>
                                <p className="text-[#E6A04F]">&quot;backprop&quot;: IDF = log(1000/5) = 5.3 (very specific)</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">4. Python Implementation</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">{`from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB

docs = ["I love machine learning", "Deep learning is great", "NLP uses ML"]

# Create TF-IDF vectors
vectorizer = TfidfVectorizer(stop_words='english')
X = vectorizer.fit_transform(docs)

print(f"Shape: {X.shape}")  # (3 docs, N features)
print(f"Features: {vectorizer.get_feature_names_out()}")

# Text classification example
texts = ["Win free money", "Meeting tomorrow", "Free prize click here"]
labels = [1, 0, 1]  # 1=spam

X = vectorizer.fit_transform(texts)
clf = MultinomialNB().fit(X, labels)

new = vectorizer.transform(["Free discount now"])
print(f"Spam? {clf.predict(new)[0]}")`}</pre>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl p-8 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6" />Key Takeaways</h2>
                        <div className="space-y-3 text-[#E8DDD0]">
                            <p><strong className="text-[#E6A04F]">TF:</strong> How often a term appears in a document</p>
                            <p><strong className="text-[#E6A04F]">IDF:</strong> log(N/df) - penalizes common words</p>
                            <p><strong className="text-[#E6A04F]">TF-IDF:</strong> TF × IDF - frequent here, rare overall = important</p>
                        </div>
                    </section>
                </article>

                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/nlp/tokenization" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A]"><ArrowLeft className="w-4 h-4" />Tokenization</Link>
                    <Link href="/learn/nlp/sentiment" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F]">Next: Sentiment<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </div>
        </div>
    );
}
