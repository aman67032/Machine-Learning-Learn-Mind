import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Layers,
    Target,
    BookOpen,
    CheckCircle,
    Play,
    Code,
} from "lucide-react";

export default function NaiveBayesPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Breadcrumb */}
                <Link href="/learn" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Learning Path
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#FBF3F1] text-[#C4897A]">
                        <Layers className="w-4 h-4" />
                        Classification
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">
                        📧 Naive Bayes Classifier
                    </h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        A probabilistic classifier based on <strong>Bayes&apos; Theorem</strong>.
                        Simple, fast, and surprisingly effective for spam detection and text classification!
                    </p>
                </div>

                {/* Learning Objectives */}
                <div className="rounded-2xl p-6 mb-10 bg-[#FFFBF7] border border-[#E8DDD0]">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2 font-serif text-[#3D3128]">
                        <Target className="w-5 h-5 text-[#D4823A]" />
                        What You&apos;ll Learn
                    </h2>
                    <ul className="space-y-2 text-[#5D4E3C]">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span><strong>Bayes&apos; Theorem</strong> and conditional probability</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>Why we call it <strong>&quot;Naive&quot;</strong> (conditional independence assumption)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span><strong>Gaussian, Multinomial, and Bernoulli</strong> variants</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span><strong>Laplace smoothing</strong> for zero-probability problem</span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <article className="space-y-12">

                    {/* Section 1: Bayes' Theorem */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">1</span>
                            Bayes&apos; Theorem
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📐 The Foundation</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Bayes&apos; Theorem tells us how to update our beliefs based on new evidence.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">Bayes&apos; Theorem:</p>
                                <p className="text-[#E6A04F] font-mono text-2xl text-center mb-4">
                                    P(A|B) = P(B|A) × P(A) / P(B)
                                </p>
                                <div className="text-[#8B7355] font-mono text-sm space-y-1">
                                    <p>P(A|B) = Posterior (probability of A given B)</p>
                                    <p>P(B|A) = Likelihood (probability of B given A)</p>
                                    <p>P(A) = Prior (initial belief about A)</p>
                                    <p>P(B) = Evidence (normalizing constant)</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📧 Example: Spam Detection</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Given an email contains word &quot;FREE&quot;, what&apos;s the probability it&apos;s spam?
                            </p>

                            <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A] font-mono text-sm">
                                <p className="text-[#5D4E3C]">P(Spam | &quot;FREE&quot;) = P(&quot;FREE&quot; | Spam) × P(Spam) / P(&quot;FREE&quot;)</p>
                                <p className="text-[#8B7355] mt-2">
                                    If 90% of spam has &quot;FREE&quot;, 1% of ham has it, and 20% of emails are spam...
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: The "Naive" Assumption */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">2</span>
                            The &quot;Naive&quot; Assumption
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 Conditional Independence</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                The <strong>&quot;naive&quot;</strong> part assumes all features are <strong>independent</strong>
                                of each other given the class. This is usually false but works surprisingly well!
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">Without independence (complex):</p>
                                <p className="text-[#8B7355] font-mono text-center mb-4">
                                    P(x₁, x₂, ..., xₙ | C) = ??? (exponentially complex)
                                </p>
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">With naive assumption (simple!):</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center">
                                    P(x₁, x₂, ..., xₙ | C) = P(x₁|C) × P(x₂|C) × ... × P(xₙ|C)
                                </p>
                            </div>

                            <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-2">💡 Why it Works</p>
                                <p className="text-[#5D4E3C]">
                                    Even though features aren&apos;t truly independent, Naive Bayes often makes good
                                    <strong> decisions</strong> because it ranks classes correctly relative to each other.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: The Classifier */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">3</span>
                            The Naive Bayes Classifier
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📐 Classification Rule</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">For each class C, compute:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center mb-4">
                                    P(C | x) ∝ P(C) × ∏ P(xᵢ | C)
                                </p>
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">Predict the class with highest posterior:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center">
                                    ŷ = argmax_c [ P(C=c) × ∏ P(xᵢ | C=c) ]
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white mb-6">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Play className="w-5 h-5 text-[#E6A04F]" />
                                Algorithm: Naive Bayes
                            </h3>

                            <div className="space-y-4 font-mono text-sm">
                                <p className="text-[#E8DDD0] font-bold">Training:</p>
                                <div className="ml-4 space-y-2">
                                    <p className="text-[#E6A04F]">1. Estimate P(C) = count(C) / total samples</p>
                                    <p className="text-[#E6A04F]">2. For each feature xᵢ and class C:</p>
                                    <p className="text-[#E6A04F] ml-4">Estimate P(xᵢ | C) based on type (see below)</p>
                                </div>
                                <p className="text-[#E8DDD0] font-bold mt-4">Prediction:</p>
                                <div className="ml-4 space-y-2">
                                    <p className="text-[#E6A04F]">1. For each class c, compute P(c) × ∏ P(xᵢ|c)</p>
                                    <p className="text-[#E6A04F]">2. Return class with maximum score</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Variants */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">4</span>
                            Types of Naive Bayes
                        </h2>

                        <div className="space-y-4">
                            {/* Gaussian */}
                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 Gaussian Naive Bayes</h3>
                                <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                    For <strong>continuous features</strong>. Assumes features follow a Gaussian (normal) distribution.
                                </p>

                                <div className="bg-[#2D2520] rounded-xl p-6">
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-2">Likelihood:</p>
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        P(xᵢ | C) = (1 / √(2πσ²)) × exp(-(xᵢ - μ)² / 2σ²)
                                    </p>
                                    <p className="text-[#8B7355] font-mono text-sm mt-2">
                                        μ = mean of feature i for class C, σ² = variance
                                    </p>
                                </div>
                            </div>

                            {/* Multinomial */}
                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📝 Multinomial Naive Bayes</h3>
                                <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                    For <strong>word counts / frequencies</strong>. Perfect for text classification!
                                </p>

                                <div className="bg-[#2D2520] rounded-xl p-6">
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-2">Likelihood:</p>
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        P(xᵢ | C) = (count of word i in class C + α) / (total words in C + α×V)
                                    </p>
                                    <p className="text-[#8B7355] font-mono text-sm mt-2">
                                        α = smoothing parameter, V = vocabulary size
                                    </p>
                                </div>
                            </div>

                            {/* Bernoulli */}
                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-4 text-[#3D3128]">✓/✗ Bernoulli Naive Bayes</h3>
                                <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                    For <strong>binary features</strong> (word present/absent, yes/no).
                                </p>

                                <div className="bg-[#2D2520] rounded-xl p-6">
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-2">Likelihood:</p>
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        P(xᵢ | C) = P(i|C)^xᵢ × (1 - P(i|C))^(1-xᵢ)
                                    </p>
                                    <p className="text-[#8B7355] font-mono text-sm mt-2">
                                        xᵢ ∈ {'{0, 1}'}, P(i|C) = probability feature i is present in class C
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Laplace Smoothing */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">5</span>
                            Laplace Smoothing
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">⚠️ The Zero-Probability Problem</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                If a word never appears in training data for a class, P(word|class) = 0.
                                This zeros out the entire product! <strong>Laplace smoothing</strong> fixes this.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">Laplace Smoothing (add-α):</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center">
                                    P(xᵢ | C) = (count(xᵢ, C) + α) / (count(C) + α × |xᵢ|)
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm mt-2">
                                    α = 1 is most common (Laplace), α &lt; 1 is Lidstone
                                </p>
                            </div>

                            <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                <p className="text-[#8FA68A] font-bold mb-2">💡 Intuition</p>
                                <p className="text-[#5D4E3C]">
                                    We pretend we&apos;ve seen every word at least once. This prevents zero
                                    probabilities while barely affecting frequent words.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 6: Python Code */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">6</span>
                            Python Implementation
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128] flex items-center gap-2">
                                <Code className="w-5 h-5 text-[#8FA68A]" />
                                Naive Bayes Examples
                            </h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">
                                    {`import numpy as np
from sklearn.naive_bayes import GaussianNB, MultinomialNB
from sklearn.datasets import load_iris
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split

# Example 1: Gaussian Naive Bayes for continuous data
iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.2, random_state=42
)

gnb = GaussianNB()
gnb.fit(X_train, y_train)
print(f"Gaussian NB Accuracy: {gnb.score(X_test, y_test):.2%}")

# Example 2: Multinomial Naive Bayes for text
documents = [
    "free money now", "free lottery winner", "free pills",  # spam
    "meeting tomorrow", "project deadline", "team lunch",    # not spam
    "free gift card scam", "urgent action required",         # spam  
    "weekly report attached", "coffee break"                 # not spam
]
labels = [1, 1, 1, 0, 0, 0, 1, 1, 0, 0]  # 1 = spam

# Convert text to word counts
vectorizer = CountVectorizer()
X_text = vectorizer.fit_transform(documents)

X_train, X_test, y_train, y_test = train_test_split(
    X_text, labels, test_size=0.3, random_state=42
)

# Multinomial NB with Laplace smoothing (alpha=1)
mnb = MultinomialNB(alpha=1.0)
mnb.fit(X_train, y_train)
print(f"\\nMultinomial NB Accuracy: {mnb.score(X_test, y_test):.2%}")

# Test on new email
new_email = ["free money urgent action"]
X_new = vectorizer.transform(new_email)
prediction = mnb.predict(X_new)
probability = mnb.predict_proba(X_new)
print(f"\\nNew email '{new_email[0]}':")
print(f"  Prediction: {'Spam' if prediction[0] == 1 else 'Not Spam'}")
print(f"  Probability: {probability[0]}")

# Show learned probabilities
print("\\nLog probabilities for 'free' in each class:")
word_idx = vectorizer.vocabulary_.get('free')
if word_idx is not None:
    print(f"  Not Spam: {mnb.feature_log_prob_[0][word_idx]:.3f}")
    print(f"  Spam: {mnb.feature_log_prob_[1][word_idx]:.3f}")`}
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* Pros/Cons */}
                    <section className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-2xl p-6 bg-[#F3F8F2] border border-[#8FA68A]">
                            <h3 className="text-lg font-bold mb-4 text-[#8FA68A]">✅ Pros</h3>
                            <ul className="text-[#5D4E3C] space-y-2">
                                <li>• Extremely fast training & prediction</li>
                                <li>• Works well with high-dimensional data</li>
                                <li>• Good with small training sets</li>
                                <li>• Handles missing data naturally</li>
                                <li>• Great for text classification</li>
                            </ul>
                        </div>
                        <div className="rounded-2xl p-6 bg-[#FBF3F1] border border-[#C4897A]">
                            <h3 className="text-lg font-bold mb-4 text-[#C4897A]">❌ Cons</h3>
                            <ul className="text-[#5D4E3C] space-y-2">
                                <li>• Independence assumption rarely true</li>
                                <li>• Probabilities often poorly calibrated</li>
                                <li>• Can&apos;t learn feature interactions</li>
                                <li>• Outperformed by modern ML on complex tasks</li>
                            </ul>
                        </div>
                    </section>

                    {/* Summary */}
                    <section className="rounded-2xl p-8 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white">
                        <h2 className="text-2xl font-bold mb-6 font-serif flex items-center gap-3">
                            <BookOpen className="w-6 h-6" />
                            Key Takeaways
                        </h2>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <span className="text-2xl">📐</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Bayes:</strong> P(C|x) ∝ P(x|C) × P(C)</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">🎯</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Naive:</strong> Assumes features are independent given class</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📊</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Variants:</strong> Gaussian (continuous), Multinomial (counts), Bernoulli (binary)</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">➕</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Smoothing:</strong> Add α to prevent zero probabilities</p>
                            </div>
                        </div>
                    </section>

                </article>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/classification/svm" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        SVM
                    </Link>
                    <Link
                        href="/learn"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F] hover:shadow-lg transition-all"
                    >
                        Back to Learning Path
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
