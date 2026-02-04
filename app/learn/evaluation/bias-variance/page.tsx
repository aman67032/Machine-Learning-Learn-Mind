import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    BarChart3,
    Target,
    BookOpen,
    CheckCircle,
    Play,
    Code,
} from "lucide-react";

export default function BiasVariancePage() {
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
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#F0F6F6] text-[#5A8A88]">
                        <BarChart3 className="w-4 h-4" />
                        Model Evaluation
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">
                        ⚖️ Bias-Variance Tradeoff
                    </h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        The fundamental tradeoff in machine learning: <strong>simple models underfit</strong>,
                        <strong> complex models overfit</strong>. Find the sweet spot!
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
                            <span>What <strong>bias</strong> and <strong>variance</strong> mean mathematically</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span><strong>Underfitting</strong> (high bias) vs <strong>Overfitting</strong> (high variance)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>The <strong>error decomposition</strong> formula</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>How to <strong>diagnose</strong> and <strong>fix</strong> bias/variance problems</span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <article className="space-y-12">

                    {/* Section 1: The Intuition */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">1</span>
                            The Core Intuition
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 Dartboard Analogy</h3>

                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                <div className="bg-[#FBF3F1] rounded-xl p-4 border border-[#C4897A]">
                                    <p className="text-[#C4897A] font-bold mb-2 text-center">High Bias (Underfitting)</p>
                                    <p className="text-center text-3xl mb-2">🎯</p>
                                    <p className="text-[#5D4E3C] text-sm text-center">
                                        Darts clustered together but <strong>off-center</strong>.
                                        Model consistently misses the true pattern.
                                    </p>
                                </div>
                                <div className="bg-[#F8F0F2] rounded-xl p-4 border border-[#8E4C5C]">
                                    <p className="text-[#8E4C5C] font-bold mb-2 text-center">High Variance (Overfitting)</p>
                                    <p className="text-center text-3xl mb-2">🎯</p>
                                    <p className="text-[#5D4E3C] text-sm text-center">
                                        Darts <strong>scattered everywhere</strong>.
                                        Model is unstable, changes wildly with training data.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                <p className="text-[#8FA68A] font-bold mb-2 text-center">🎯 The Goal: Low Bias + Low Variance</p>
                                <p className="text-[#5D4E3C] text-center">
                                    Darts clustered together <strong>and</strong> centered on bullseye!
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Definitions */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">2</span>
                            Mathematical Definitions
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📐 Expected Prediction Error</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">Error Decomposition:</p>
                                <p className="text-[#E6A04F] font-mono text-xl text-center mb-4">
                                    E[(y - ŷ)²] = Bias² + Variance + Irreducible Noise
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-[#FEF3E7] rounded-xl p-4">
                                    <p className="text-[#D4823A] font-bold mb-2">Bias = E[ŷ] - f(x)</p>
                                    <p className="text-[#5D4E3C] text-sm">
                                        How far off is the <strong>average prediction</strong> from the true value?
                                        Caused by oversimplified models that can&apos;t capture the true pattern.
                                    </p>
                                </div>

                                <div className="bg-[#F8F0F2] rounded-xl p-4">
                                    <p className="text-[#8E4C5C] font-bold mb-2">Variance = E[(ŷ - E[ŷ])²]</p>
                                    <p className="text-[#5D4E3C] text-sm">
                                        How much do predictions <strong>vary</strong> with different training sets?
                                        Caused by overly flexible models that memorize noise.
                                    </p>
                                </div>

                                <div className="bg-[#F5EDE4] rounded-xl p-4">
                                    <p className="text-[#8B7355] font-bold mb-2">Irreducible Error = σ²</p>
                                    <p className="text-[#5D4E3C] text-sm">
                                        Noise in the data itself. No model can reduce this.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Underfitting vs Overfitting */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">3</span>
                            Underfitting vs Overfitting
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <div className="bg-[#2D2520] rounded-xl p-6 font-mono text-sm mb-4">
                                <pre className="text-[#E6A04F]">
                                    {`Error
  ↑
  │                    Total Error
  │      ╲            ╱
  │       ╲    ●    ╱
  │        ╲──●──╱
  │    ●────────●
  │  ╱            ╲
  │ Bias²          Variance
  │────────────────────────→ Model Complexity
    Simple                Complex
    
    ● = Sweet spot (optimal complexity)`}
                                </pre>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-lg font-bold mb-4 text-[#C4897A]">📉 Underfitting (High Bias)</h3>
                                <p className="text-[#5D4E3C] mb-4">Model is <strong>too simple</strong> to capture patterns.</p>

                                <p className="text-[#5D4E3C] font-bold mb-2">Symptoms:</p>
                                <ul className="text-[#5D4E3C] text-sm space-y-1">
                                    <li>• High training error</li>
                                    <li>• High test error</li>
                                    <li>• Training ≈ Test error</li>
                                </ul>

                                <p className="text-[#5D4E3C] font-bold mt-4 mb-2">Fixes:</p>
                                <ul className="text-[#5D4E3C] text-sm space-y-1">
                                    <li>• Add more features</li>
                                    <li>• Use more complex model</li>
                                    <li>• Reduce regularization</li>
                                    <li>• Add polynomial features</li>
                                </ul>
                            </div>

                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-lg font-bold mb-4 text-[#8E4C5C]">📈 Overfitting (High Variance)</h3>
                                <p className="text-[#5D4E3C] mb-4">Model <strong>memorizes noise</strong> instead of learning.</p>

                                <p className="text-[#5D4E3C] font-bold mb-2">Symptoms:</p>
                                <ul className="text-[#5D4E3C] text-sm space-y-1">
                                    <li>• Low training error</li>
                                    <li>• High test error</li>
                                    <li>• Large gap: Test &gt;&gt; Train</li>
                                </ul>

                                <p className="text-[#5D4E3C] font-bold mt-4 mb-2">Fixes:</p>
                                <ul className="text-[#5D4E3C] text-sm space-y-1">
                                    <li>• Get more training data</li>
                                    <li>• Reduce model complexity</li>
                                    <li>• Add regularization (L1/L2)</li>
                                    <li>• Use cross-validation</li>
                                    <li>• Dropout (neural networks)</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Learning Curves */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">4</span>
                            Diagnosing with Learning Curves
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 Reading Learning Curves</h3>

                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="bg-[#FBF3F1] rounded-xl p-4 border border-[#C4897A]">
                                    <p className="text-[#C4897A] font-bold mb-2">High Bias</p>
                                    <div className="bg-[#2D2520] rounded p-3 font-mono text-xs text-[#E6A04F]">
                                        <pre>
                                            {`Error
  │ Train ─────────
  │ Test  ─────────
  │ (both high, close together)
  └───────────────→ Data Size`}
                                        </pre>
                                    </div>
                                    <p className="text-[#5D4E3C] text-xs mt-2">More data won&apos;t help!</p>
                                </div>

                                <div className="bg-[#F8F0F2] rounded-xl p-4 border border-[#8E4C5C]">
                                    <p className="text-[#8E4C5C] font-bold mb-2">High Variance</p>
                                    <div className="bg-[#2D2520] rounded p-3 font-mono text-xs text-[#E6A04F]">
                                        <pre>
                                            {`Error
  │ Test  ─────────
  │        (gap!)
  │ Train __________
  └───────────────→ Data Size`}
                                        </pre>
                                    </div>
                                    <p className="text-[#5D4E3C] text-xs mt-2">More data helps close the gap!</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Regularization */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">5</span>
                            Regularization
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🛡️ Controlling Model Complexity</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Regularization adds a <strong>penalty for complex models</strong> to the loss function.
                            </p>

                            <div className="space-y-4">
                                <div className="bg-[#2D2520] rounded-xl p-6">
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-1">L2 (Ridge) Regularization:</p>
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        Loss = Original Loss + λ × Σwⱼ²
                                    </p>
                                    <p className="text-[#8B7355] font-mono text-sm mt-2">Shrinks weights towards zero</p>
                                </div>

                                <div className="bg-[#2D2520] rounded-xl p-6">
                                    <p className="text-[#E8DDD0] font-mono text-sm mb-1">L1 (Lasso) Regularization:</p>
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        Loss = Original Loss + λ × Σ|wⱼ|
                                    </p>
                                    <p className="text-[#8B7355] font-mono text-sm mt-2">Forces some weights to exactly zero (feature selection)</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Python Code */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">6</span>
                            Python: Visualizing the Tradeoff
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">
                                    {`import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import learning_curve
from sklearn.linear_model import Ridge
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline

# Generate noisy data
np.random.seed(42)
X = np.linspace(0, 1, 100).reshape(-1, 1)
y = np.sin(2 * np.pi * X).ravel() + np.random.randn(100) * 0.3

# Compare different complexities
fig, axes = plt.subplots(1, 3, figsize=(15, 4))
degrees = [1, 4, 15]
titles = ['Underfit (Degree 1)', 'Good Fit (Degree 4)', 'Overfit (Degree 15)']

for ax, degree, title in zip(axes, degrees, titles):
    model = make_pipeline(PolynomialFeatures(degree), Ridge(alpha=0.01))
    model.fit(X, y)
    
    X_test = np.linspace(0, 1, 200).reshape(-1, 1)
    y_pred = model.predict(X_test)
    
    ax.scatter(X, y, alpha=0.5, label='Data')
    ax.plot(X_test, y_pred, 'r-', linewidth=2, label='Model')
    ax.set_title(title)
    ax.legend()

plt.tight_layout()
plt.show()

# Learning curves to diagnose
model = make_pipeline(PolynomialFeatures(4), Ridge(alpha=0.01))
train_sizes, train_scores, test_scores = learning_curve(
    model, X, y, cv=5, train_sizes=np.linspace(0.1, 1.0, 10),
    scoring='neg_mean_squared_error'
)

plt.figure(figsize=(8, 5))
plt.plot(train_sizes, -train_scores.mean(axis=1), label='Training Error')
plt.plot(train_sizes, -test_scores.mean(axis=1), label='Validation Error')
plt.xlabel('Training Set Size')
plt.ylabel('MSE')
plt.title('Learning Curves')
plt.legend()
plt.show()`}
                                </pre>
                            </div>
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
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Error = Bias² + Variance + Noise</strong></p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📉</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">High Bias:</strong> Underfit, too simple, can&apos;t capture pattern</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📈</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">High Variance:</strong> Overfit, memorizes noise, unstable</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">🛡️</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Regularization:</strong> Add penalty λΣw² to reduce variance</p>
                            </div>
                        </div>
                    </section>

                </article>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Learning Path
                    </Link>
                    <Link
                        href="/learn/evaluation/metrics"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F] hover:shadow-lg transition-all"
                    >
                        Next: Evaluation Metrics
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
