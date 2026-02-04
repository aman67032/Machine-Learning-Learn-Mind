import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageSquare, Target, BookOpen, CheckCircle, Code } from "lucide-react";

export default function SentimentPage() {
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
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">😊 Sentiment Analysis</h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        Determine if text is <strong>positive, negative, or neutral</strong>. One of the most popular NLP applications!
                    </p>
                </div>

                <div className="rounded-2xl p-6 mb-10 bg-[#FFFBF7] border border-[#E8DDD0]">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2 font-serif text-[#3D3128]">
                        <Target className="w-5 h-5 text-[#D4823A]" />What You&apos;ll Learn
                    </h2>
                    <ul className="space-y-2 text-[#5D4E3C]">
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Lexicon-based vs ML-based sentiment analysis</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Building a sentiment classifier with TF-IDF + Logistic Regression</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Handling negation, sarcasm, and common challenges</span></li>
                    </ul>
                </div>

                <article className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">1. Approaches to Sentiment</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#F3F8F2] rounded-xl p-4">
                                    <p className="text-[#8FA68A] font-bold mb-2">Lexicon-Based</p>
                                    <p className="text-[#5D4E3C] text-sm">Use dictionaries of positive/negative words. Simple but limited.</p>
                                    <p className="text-[#8B7355] text-xs mt-2">&quot;great&quot; = +3, &quot;terrible&quot; = -3</p>
                                </div>
                                <div className="bg-[#FEF3E7] rounded-xl p-4">
                                    <p className="text-[#D4823A] font-bold mb-2">ML-Based ⭐</p>
                                    <p className="text-[#5D4E3C] text-sm">Train classifier on labeled data. More accurate, handles context.</p>
                                    <p className="text-[#8B7355] text-xs mt-2">TF-IDF + Logistic Regression / BERT</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">2. Common Challenges</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] space-y-3">
                            <div className="bg-[#FBF3F1] rounded-xl p-3">
                                <p className="text-[#C4897A] font-bold">Negation</p>
                                <p className="text-[#5D4E3C] text-sm">&quot;not good&quot; flips the sentiment!</p>
                            </div>
                            <div className="bg-[#FBF3F1] rounded-xl p-3">
                                <p className="text-[#C4897A] font-bold">Sarcasm</p>
                                <p className="text-[#5D4E3C] text-sm">&quot;Oh great, another bug&quot; - positive words, negative meaning</p>
                            </div>
                            <div className="bg-[#FBF3F1] rounded-xl p-3">
                                <p className="text-[#C4897A] font-bold">Context</p>
                                <p className="text-[#5D4E3C] text-sm">&quot;This phone is sick!&quot; - slang = positive</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">3. Python Implementation</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">{`from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

# Sample labeled data
reviews = [
    "This movie is amazing and wonderful", "Great product, highly recommend",
    "Terrible experience, waste of money", "Awful service, never again",
    "Love it! Best purchase ever", "Disappointed, does not work well",
]
labels = [1, 1, 0, 0, 1, 0]  # 1=positive, 0=negative

# Vectorize and split
vectorizer = TfidfVectorizer(stop_words='english', ngram_range=(1, 2))
X = vectorizer.fit_transform(reviews)
X_train, X_test, y_train, y_test = train_test_split(X, labels, test_size=0.3)

# Train classifier
clf = LogisticRegression()
clf.fit(X_train, y_train)

# Evaluate
print(classification_report(y_test, clf.predict(X_test)))

# Predict new reviews
new_reviews = ["This is fantastic!", "I hate this product"]
new_X = vectorizer.transform(new_reviews)
predictions = clf.predict(new_X)

for review, pred in zip(new_reviews, predictions):
    sentiment = "Positive 😊" if pred == 1 else "Negative 😞"
    print(f"'{review}' → {sentiment}")`}</pre>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl p-8 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6" />Key Takeaways</h2>
                        <div className="space-y-3 text-[#E8DDD0]">
                            <p><strong className="text-[#E6A04F]">ML Approach:</strong> TF-IDF + Classifier (LogReg, Naive Bayes, SVM)</p>
                            <p><strong className="text-[#E6A04F]">Advanced:</strong> BERT and transformers for context-aware sentiment</p>
                            <p><strong className="text-[#E6A04F]">Challenges:</strong> Negation, sarcasm, and domain-specific language</p>
                        </div>
                    </section>
                </article>

                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/nlp/tfidf" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A]"><ArrowLeft className="w-4 h-4" />TF-IDF</Link>
                    <Link href="/learn/timeseries/basics" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F]">Next: Time Series Basics<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </div>
        </div>
    );
}
