import Link from "next/link";
import { ArrowLeft, ArrowRight, TrendingUp, Target, BookOpen, CheckCircle, Code } from "lucide-react";

export default function PolynomialRegressionPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/learn" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />Back to Learning Path
                </Link>

                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#F3F8F2] text-[#8FA68A]">
                        <TrendingUp className="w-4 h-4" />Regression
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">📈 Polynomial Regression</h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        Capture <strong>non-linear relationships</strong> by adding polynomial features to linear regression!
                    </p>
                </div>

                <div className="rounded-2xl p-6 mb-10 bg-[#FFFBF7] border border-[#E8DDD0]">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2 font-serif text-[#3D3128]">
                        <Target className="w-5 h-5 text-[#D4823A]" />What You&apos;ll Learn
                    </h2>
                    <ul className="space-y-2 text-[#5D4E3C]">
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>How to extend linear regression for curved data</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Feature engineering with polynomial terms</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Overfitting risks and regularization</span></li>
                    </ul>
                </div>

                <article className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">1. The Idea</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <p className="text-[#5D4E3C] mb-4">When data has a curved relationship, we can fit curves by adding polynomial features:</p>
                            <div className="bg-[#2D2520] rounded-xl p-4">
                                <p className="text-[#E8DDD0] text-sm">Linear: y = θ₀ + θ₁x</p>
                                <p className="text-[#E6A04F] font-mono mt-2">Polynomial: y = θ₀ + θ₁x + θ₂x² + θ₃x³ + ...</p>
                            </div>
                            <p className="text-[#5D4E3C] mt-4 text-sm">This is still <strong>linear regression</strong> — linear in the parameters θ, just with transformed features!</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">2. Feature Transformation</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <p className="text-[#5D4E3C] mb-4">Transform input x to φ(x) with polynomial terms:</p>
                            <div className="bg-[#2D2520] rounded-xl p-4">
                                <p className="text-[#E6A04F] font-mono">φ(x) = [1, x, x², x³, ..., xᵈ]</p>
                                <p className="text-[#8B7355] text-sm mt-2">d = degree of polynomial</p>
                            </div>
                            <div className="mt-4 bg-[#F3F8F2] rounded-xl p-4">
                                <p className="text-[#8FA68A] font-bold">For multiple features [x₁, x₂]:</p>
                                <p className="text-[#5D4E3C] text-sm mt-1">Degree 2: [1, x₁, x₂, x₁², x₁x₂, x₂²]</p>
                                <p className="text-[#8B7355] text-xs mt-1">Includes interaction terms!</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">3. Overfitting Warning ⚠️</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-[#F3F8F2] rounded-xl p-4 text-center">
                                    <p className="text-[#8FA68A] font-bold">Degree 1</p>
                                    <p className="text-[#5D4E3C] text-sm">Underfitting</p>
                                    <p className="text-[#8B7355] text-xs">Too simple</p>
                                </div>
                                <div className="bg-[#FEF3E7] rounded-xl p-4 text-center border-2 border-[#D4823A]">
                                    <p className="text-[#D4823A] font-bold">Degree 2-3</p>
                                    <p className="text-[#5D4E3C] text-sm">Just Right ✓</p>
                                    <p className="text-[#8B7355] text-xs">Good fit</p>
                                </div>
                                <div className="bg-[#F8F0F2] rounded-xl p-4 text-center">
                                    <p className="text-[#8E4C5C] font-bold">Degree 15</p>
                                    <p className="text-[#5D4E3C] text-sm">Overfitting!</p>
                                    <p className="text-[#8B7355] text-xs">Wiggly mess</p>
                                </div>
                            </div>
                            <p className="text-[#5D4E3C] mt-4 text-sm">
                                <strong>Solution:</strong> Use cross-validation to select degree, or apply regularization (Ridge/Lasso).
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">4. Python Implementation</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">{`import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression, Ridge
from sklearn.pipeline import Pipeline
from sklearn.model_selection import cross_val_score

# Generate non-linear data
np.random.seed(42)
X = np.linspace(0, 1, 100).reshape(-1, 1)
y = np.sin(2 * np.pi * X).ravel() + np.random.randn(100) * 0.2

# Create polynomial regression pipeline
def make_poly_model(degree, regularized=False):
    return Pipeline([
        ('poly', PolynomialFeatures(degree=degree)),
        ('reg', Ridge(alpha=0.01) if regularized else LinearRegression())
    ])

# Compare different degrees
for degree in [1, 3, 10]:
    model = make_poly_model(degree)
    scores = cross_val_score(model, X, y, cv=5, scoring='r2')
    print(f"Degree {degree}: R² = {scores.mean():.3f} ± {scores.std():.3f}")

# Fit best model
best_model = make_poly_model(3)
best_model.fit(X, y)

# Plot
X_test = np.linspace(0, 1, 200).reshape(-1, 1)
plt.scatter(X, y, alpha=0.5, label='Data')
plt.plot(X_test, best_model.predict(X_test), 'r-', label='Degree 3')
plt.legend()
plt.title('Polynomial Regression')
plt.show()`}</pre>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl p-8 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6" />Key Takeaways</h2>
                        <div className="space-y-3 text-[#E8DDD0]">
                            <p><strong className="text-[#E6A04F]">Idea:</strong> Add x², x³... as features, still use linear regression</p>
                            <p><strong className="text-[#E6A04F]">Danger:</strong> High degree = overfitting, use CV to select</p>
                            <p><strong className="text-[#E6A04F]">Pro Tip:</strong> Combine with regularization (Ridge) for stability</p>
                        </div>
                    </section>
                </article>

                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/regression/logistic" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A]"><ArrowLeft className="w-4 h-4" />Logistic Regression</Link>
                    <Link href="/learn/regression/glm" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F]">GLMs<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </div>
        </div>
    );
}
