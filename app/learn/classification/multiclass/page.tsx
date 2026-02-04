import Link from "next/link";
import { ArrowLeft, ArrowRight, Layers, Target, BookOpen, CheckCircle, Code } from "lucide-react";

export default function MulticlassPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/learn" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />Back to Learning Path
                </Link>

                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#FBF3F1] text-[#C4897A]">
                        <Layers className="w-4 h-4" />Classification
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">🎯 Multi-class Classification</h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        Extending binary classification to <strong>k classes</strong> using softmax and cross-entropy!
                    </p>
                </div>

                <div className="rounded-2xl p-6 mb-10 bg-[#FFFBF7] border border-[#E8DDD0]">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2 font-serif text-[#3D3128]">
                        <Target className="w-5 h-5 text-[#D4823A]" />What You&apos;ll Learn
                    </h2>
                    <ul className="space-y-2 text-[#5D4E3C]">
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>The softmax function for multi-class probabilities</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Cross-entropy loss for k classes</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>One-vs-All vs Softmax approaches</span></li>
                    </ul>
                </div>

                <article className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">1. The Problem</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <p className="text-[#5D4E3C] mb-4">Binary classification: y ∈ &#123;0, 1&#125;. But what if we have k classes?</p>
                            <div className="bg-[#2D2520] rounded-xl p-4">
                                <p className="text-[#E6A04F] font-mono">y ∈ &#123;1, 2, 3, ..., k&#125;</p>
                                <p className="text-[#8B7355] text-sm mt-2">Examples: digit recognition (10 classes), image categories, sentiment (positive/neutral/negative)</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">2. The Softmax Function</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <p className="text-[#5D4E3C] mb-4">Convert k logits (scores) into probabilities that sum to 1:</p>
                            <div className="bg-[#2D2520] rounded-xl p-4">
                                <p className="text-[#E6A04F] font-mono text-center text-lg">P(y = j | x; θ) = exp(hⱼ) / Σₛ exp(hₛ)</p>
                                <div className="text-[#8B7355] text-sm mt-3 space-y-1">
                                    <p>hⱼ = j-th logit (raw score for class j)</p>
                                    <p>Denominator sums over all k classes</p>
                                    <p>Output: probability vector that sums to 1</p>
                                </div>
                            </div>
                            <div className="mt-4 bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold">Key Property</p>
                                <p className="text-[#5D4E3C] text-sm">Softmax is a generalization of sigmoid! For k=2, softmax reduces to logistic regression.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">3. Cross-Entropy Loss</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <p className="text-[#5D4E3C] mb-4">The negative log-likelihood for multi-class:</p>
                            <div className="bg-[#2D2520] rounded-xl p-4">
                                <p className="text-[#E6A04F] font-mono text-center">L = -log P(y = yᵢ | x)</p>
                                <p className="text-[#E6A04F] font-mono text-center mt-2">= -log(exp(h_y) / Σ exp(hₛ))</p>
                                <p className="text-[#8B7355] text-sm mt-3">Minimizing this = maximizing probability of correct class</p>
                            </div>
                            <div className="mt-4 bg-[#F3F8F2] rounded-xl p-4">
                                <p className="text-[#8FA68A] font-bold">One-Hot Encoding</p>
                                <p className="text-[#5D4E3C] text-sm">Often written as: L = -Σⱼ yⱼ log(pⱼ) where y is one-hot encoded</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">4. Approaches</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] space-y-4">
                            <div className="bg-[#F3F8F2] rounded-xl p-4">
                                <p className="text-[#8FA68A] font-bold">One-vs-All (OvA)</p>
                                <p className="text-[#5D4E3C] text-sm">Train k binary classifiers, each distinguishing one class from rest</p>
                                <p className="text-[#8B7355] text-xs">+ Works with any binary classifier | - Doesn&apos;t produce calibrated probabilities</p>
                            </div>
                            <div className="bg-[#FEF3E7] rounded-xl p-4 border-2 border-[#D4823A]">
                                <p className="text-[#D4823A] font-bold">Softmax Regression ⭐</p>
                                <p className="text-[#5D4E3C] text-sm">Train single model with k outputs, softmax activation</p>
                                <p className="text-[#8B7355] text-xs">+ End-to-end training | + Calibrated probabilities | Neural network default</p>
                            </div>
                            <div className="bg-[#F8F0F2] rounded-xl p-4">
                                <p className="text-[#8E4C5C] font-bold">One-vs-One (OvO)</p>
                                <p className="text-[#5D4E3C] text-sm">Train k(k-1)/2 classifiers for each pair of classes</p>
                                <p className="text-[#8B7355] text-xs">+ Works well for SVM | - Many classifiers to train</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">5. Python Implementation</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">{`import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

# Load multi-class dataset
iris = load_iris()
X, y = iris.data, iris.target  # 3 classes

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Softmax regression (multinomial)
softmax_clf = LogisticRegression(
    multi_class='multinomial',  # Use softmax
    solver='lbfgs',
    max_iter=200
)
softmax_clf.fit(X_train, y_train)
print(f"Softmax accuracy: {softmax_clf.score(X_test, y_test):.2%}")

# Get class probabilities
probs = softmax_clf.predict_proba(X_test[:3])
print("Class probabilities (sum to 1):")
print(probs)
print(f"Sum: {probs.sum(axis=1)}")

# One-vs-All (OvR)
ovr_clf = LogisticRegression(
    multi_class='ovr',  # One-vs-Rest
    solver='lbfgs'
)
ovr_clf.fit(X_train, y_train)
print(f"OvR accuracy: {ovr_clf.score(X_test, y_test):.2%}")`}</pre>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl p-8 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6" />Key Takeaways</h2>
                        <div className="space-y-3 text-[#E8DDD0]">
                            <p><strong className="text-[#E6A04F]">Softmax:</strong> Converts k logits to probabilities: exp(hⱼ)/Σexp(hₛ)</p>
                            <p><strong className="text-[#E6A04F]">Cross-Entropy:</strong> Loss = -log(probability of true class)</p>
                            <p><strong className="text-[#E6A04F]">Default:</strong> Use softmax regression (multinomial) for neural networks</p>
                        </div>
                    </section>
                </article>

                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/classification/gda" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A]"><ArrowLeft className="w-4 h-4" />GDA</Link>
                    <Link href="/learn/classification/kernels" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F]">Kernel Methods<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </div>
        </div>
    );
}
