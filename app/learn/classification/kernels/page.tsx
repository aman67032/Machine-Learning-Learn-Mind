import Link from "next/link";
import { ArrowLeft, ArrowRight, Layers, Target, BookOpen, CheckCircle, Code } from "lucide-react";

export default function KernelsPage() {
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
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">🎯 Kernel Methods</h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        The <strong>kernel trick</strong>: Work in high-dimensional spaces without computing features explicitly!
                    </p>
                </div>

                <div className="rounded-2xl p-6 mb-10 bg-[#FFFBF7] border border-[#E8DDD0]">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2 font-serif text-[#3D3128]">
                        <Target className="w-5 h-5 text-[#D4823A]" />What You&apos;ll Learn
                    </h2>
                    <ul className="space-y-2 text-[#5D4E3C]">
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Why we need feature maps for non-linear problems</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>The kernel trick and how it works</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Common kernels: Linear, Polynomial, RBF</span></li>
                    </ul>
                </div>

                <article className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">1. The Problem: Non-Linear Data</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <p className="text-[#5D4E3C] mb-4">Some data isn&apos;t linearly separable. Solution: map to higher dimensions!</p>
                            <div className="bg-[#2D2520] rounded-xl p-4">
                                <p className="text-[#E8DDD0] text-sm">Feature map φ: x → φ(x) in higher dimensional space</p>
                                <p className="text-[#E6A04F] font-mono mt-2">Example: φ(x) = [x, x²] for x ∈ ℝ</p>
                                <p className="text-[#E6A04F] font-mono">Example: φ([x₁,x₂]) = [x₁², √2x₁x₂, x₂²]</p>
                            </div>
                            <p className="text-[#5D4E3C] mt-4">Problem: High-dimensional φ(x) is expensive to compute!</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">2. The Kernel Trick</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <p className="text-[#5D4E3C] mb-4">Many algorithms only need <strong>dot products</strong> φ(x)ᵀφ(z). We can compute this directly!</p>
                            <div className="bg-[#2D2520] rounded-xl p-4">
                                <p className="text-[#E8DDD0] text-sm">Kernel function:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center mt-2">K(x, z) = φ(x)ᵀφ(z)</p>
                                <p className="text-[#8B7355] text-sm mt-2">Compute the dot product WITHOUT computing φ explicitly!</p>
                            </div>
                            <div className="mt-4 bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold">Example:</p>
                                <p className="text-[#5D4E3C] text-sm">K(x, z) = (xᵀz)² computes φ(x)ᵀφ(z) for φ([x₁,x₂]) = [x₁², √2x₁x₂, x₂²]</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">3. Common Kernels</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] space-y-4">
                            <div className="bg-[#F3F8F2] rounded-xl p-4">
                                <p className="text-[#8FA68A] font-bold">Linear Kernel</p>
                                <p className="text-[#E6A04F] font-mono text-sm">K(x, z) = xᵀz</p>
                                <p className="text-[#5D4E3C] text-xs">No mapping, standard dot product</p>
                            </div>
                            <div className="bg-[#FEF3E7] rounded-xl p-4">
                                <p className="text-[#D4823A] font-bold">Polynomial Kernel</p>
                                <p className="text-[#E6A04F] font-mono text-sm">K(x, z) = (xᵀz + c)ᵈ</p>
                                <p className="text-[#5D4E3C] text-xs">Captures polynomial interactions up to degree d</p>
                            </div>
                            <div className="bg-[#F8F0F2] rounded-xl p-4">
                                <p className="text-[#8E4C5C] font-bold">RBF (Gaussian) Kernel ⭐</p>
                                <p className="text-[#E6A04F] font-mono text-sm">K(x, z) = exp(-||x-z||² / 2σ²)</p>
                                <p className="text-[#5D4E3C] text-xs">Infinite dimensional! Most popular for non-linear SVM</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">4. Python Implementation</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">{`import numpy as np
from sklearn.svm import SVC
from sklearn.datasets import make_circles, make_moons
import matplotlib.pyplot as plt

# Generate non-linearly separable data
X, y = make_circles(n_samples=200, noise=0.1, factor=0.5)

# Try linear SVM (will fail)
svm_linear = SVC(kernel='linear')
svm_linear.fit(X, y)
print(f"Linear SVM accuracy: {svm_linear.score(X, y):.2%}")

# RBF kernel SVM (works!)
svm_rbf = SVC(kernel='rbf', gamma=1)
svm_rbf.fit(X, y)
print(f"RBF SVM accuracy: {svm_rbf.score(X, y):.2%}")

# Polynomial kernel
svm_poly = SVC(kernel='poly', degree=3)
svm_poly.fit(X, y)
print(f"Poly SVM accuracy: {svm_poly.score(X, y):.2%}")

# Custom kernel function
def my_kernel(X, Y):
    """Custom RBF-like kernel"""
    gamma = 1.0
    K = np.zeros((X.shape[0], Y.shape[0]))
    for i, x in enumerate(X):
        for j, y in enumerate(Y):
            K[i, j] = np.exp(-gamma * np.sum((x - y) ** 2))
    return K

svm_custom = SVC(kernel=my_kernel)
svm_custom.fit(X, y)
print(f"Custom kernel accuracy: {svm_custom.score(X, y):.2%}")`}</pre>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl p-8 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6" />Key Takeaways</h2>
                        <div className="space-y-3 text-[#E8DDD0]">
                            <p><strong className="text-[#E6A04F]">Feature Maps:</strong> φ(x) maps to higher dimensions for non-linear separation</p>
                            <p><strong className="text-[#E6A04F]">Kernel Trick:</strong> K(x,z) = φ(x)ᵀφ(z) without computing φ</p>
                            <p><strong className="text-[#E6A04F]">RBF Kernel:</strong> Most popular, infinite dimensional, works for complex boundaries</p>
                        </div>
                    </section>
                </article>

                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/classification/svm" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A]"><ArrowLeft className="w-4 h-4" />SVM</Link>
                    <Link href="/learn" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F]">Back to Learning Path<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </div>
        </div>
    );
}
