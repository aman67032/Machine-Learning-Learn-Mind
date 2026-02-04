import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    Calculator,
    Target,
    BookOpen,
    CheckCircle,
} from "lucide-react";

export default function MathPrerequisitesPage() {
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
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#FEF3E7] text-[#D4823A]">
                        <Calculator className="w-4 h-4" />
                        Foundations
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">
                        📐 Math Prerequisites for Machine Learning
                    </h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        The essential mathematics you need before diving into ML algorithms.
                        Don&apos;t worry—we&apos;ll explain everything step by step!
                    </p>
                </div>

                {/* Learning Objectives */}
                <div className="rounded-2xl p-6 mb-10 bg-[#FFFBF7] border border-[#E8DDD0]">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2 font-serif text-[#3D3128]">
                        <Target className="w-5 h-5 text-[#D4823A]" />
                        Learning Objectives
                    </h2>
                    <ul className="space-y-2 text-[#5D4E3C]">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>Understand <strong>vectors and matrices</strong> - the data structures of ML</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>Learn <strong>derivatives</strong> - how algorithms learn and optimize</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>Master <strong>statistics basics</strong> - mean, variance, and probability</span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <article className="prose prose-lg max-w-none">

                    {/* Section 1: Linear Algebra */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">1</span>
                            Linear Algebra Basics
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-8">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 Why Linear Algebra?</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                In Machine Learning, data is represented as <strong>numbers in arrays</strong>.
                                A picture? It&apos;s a grid of pixel values. Text? It becomes a list of word frequencies.
                                Linear algebra gives us the tools to work with these number arrays efficiently.
                            </p>
                        </div>

                        {/* Vectors */}
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 Vectors</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                A <strong>vector</strong> is simply a list of numbers. Think of it as a single row of data.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-2">Example: House features</p>
                                <p className="text-[#E6A04F] font-mono text-xl">
                                    x = [1500, 3, 2, 1990]
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm mt-2">
                                    # [sq_feet, bedrooms, bathrooms, year_built]
                                </p>
                            </div>

                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                <strong>Vector notation:</strong> We write vectors as lowercase bold letters like <strong>x</strong> or with an arrow x̄
                            </p>

                            <div className="bg-[#FEF3E7] rounded-xl p-6 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-2">📐 Vector Operations</p>
                                <div className="space-y-3 text-[#5D4E3C]">
                                    <p><strong>Addition:</strong> [1, 2] + [3, 4] = [4, 6] (add element by element)</p>
                                    <p><strong>Scalar multiplication:</strong> 2 × [1, 2] = [2, 4] (multiply each element)</p>
                                    <p><strong>Dot product:</strong> [1, 2] · [3, 4] = 1×3 + 2×4 = 11</p>
                                </div>
                            </div>
                        </div>

                        {/* Matrices */}
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📋 Matrices</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                A <strong>matrix</strong> is a 2D grid of numbers—essentially multiple vectors stacked together.
                                Your entire dataset is usually a matrix!
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-2">Example: 3 houses, 4 features each</p>
                                <pre className="text-[#E6A04F] font-mono text-lg">
                                    {`X = | 1500  3  2  1990 |
    | 2000  4  3  2005 |
    | 1200  2  1  1985 |`}
                                </pre>
                                <p className="text-[#8B7355] font-mono text-sm mt-2"># Shape: (3 rows × 4 columns) = (3, 4)</p>
                            </div>

                            <div className="bg-[#F3F8F2] rounded-xl p-6 border border-[#8FA68A]">
                                <p className="text-[#8FA68A] font-bold mb-2">🔑 Key Insight</p>
                                <p className="text-[#5D4E3C]">
                                    In ML: <strong>Rows = samples/examples</strong>, <strong>Columns = features</strong>
                                </p>
                            </div>
                        </div>

                        {/* Matrix Operations */}
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">✖️ Matrix Multiplication</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                This is the <em>most important</em> operation in ML. It&apos;s how models make predictions!
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-4">The formula for predictions in linear models:</p>
                                <p className="text-[#E6A04F] font-mono text-2xl text-center mb-4">
                                    ŷ = X · θ
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm">
                                    Where: X = features matrix, θ = weights/parameters, ŷ = predictions
                                </p>
                            </div>

                            <div className="bg-[#FEF3E7] rounded-xl p-6 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-3">🧮 Step-by-Step Example</p>
                                <div className="space-y-2 text-[#5D4E3C] font-mono">
                                    <p>X = [[1, 2], [3, 4]]  (2×2 matrix)</p>
                                    <p>θ = [[5], [6]]        (2×1 vector)</p>
                                    <p className="pt-2 border-t border-[#E6A04F]">
                                        X · θ = [[1×5 + 2×6], [3×5 + 4×6]]
                                    </p>
                                    <p className="text-[#D4823A] font-bold">
                                        &nbsp;&nbsp;&nbsp;&nbsp;= [[17], [39]]
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Calculus */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">2</span>
                            Calculus for ML
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-8">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 Why Calculus?</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed">
                                Machine Learning models <strong>learn</strong> by minimizing errors. Calculus tells us
                                <strong> which direction to move</strong> our parameters to reduce errors.
                                This is the heart of <em>gradient descent</em>!
                            </p>
                        </div>

                        {/* Derivatives */}
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📉 Derivatives (Slopes)</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                A <strong>derivative</strong> measures how much a function changes when you nudge the input.
                                It&apos;s the <em>slope</em> of the function at a specific point.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-4">Basic derivative rules:</p>
                                <div className="space-y-2 text-[#E6A04F] font-mono text-lg">
                                    <p>If f(x) = x²,  then f&apos;(x) = 2x</p>
                                    <p>If f(x) = x³,  then f&apos;(x) = 3x²</p>
                                    <p>If f(x) = xⁿ,  then f&apos;(x) = n·xⁿ⁻¹</p>
                                </div>
                            </div>

                            <div className="bg-[#F3F8F2] rounded-xl p-6 border border-[#8FA68A]">
                                <p className="text-[#8FA68A] font-bold mb-2">💡 Intuition</p>
                                <p className="text-[#5D4E3C]">
                                    <strong>Positive derivative</strong> = function going UP (increase x → increase output)<br />
                                    <strong>Negative derivative</strong> = function going DOWN (increase x → decrease output)<br />
                                    <strong>Zero derivative</strong> = flat point (minimum or maximum!)
                                </p>
                            </div>
                        </div>

                        {/* Gradient */}
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🧭 Gradients (Multi-variable Derivatives)</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                When you have multiple variables (like multiple weights in a model), the
                                <strong> gradient</strong> is a vector of all partial derivatives—one for each variable.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-4">For function f(x, y) = x² + y²:</p>
                                <div className="space-y-2 text-[#E6A04F] font-mono text-lg">
                                    <p>∂f/∂x = 2x  (derivative with respect to x)</p>
                                    <p>∂f/∂y = 2y  (derivative with respect to y)</p>
                                    <p className="pt-2 border-t border-[#8B7355]">
                                        Gradient: ∇f = [2x, 2y]
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#FEF3E7] rounded-xl p-6 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-2">⭐ This is GRADIENT DESCENT!</p>
                                <p className="text-[#5D4E3C]">
                                    To minimize error: <strong>move in the opposite direction of the gradient</strong><br />
                                    <code className="bg-[#2D2520] text-[#E6A04F] px-2 py-1 rounded">θ_new = θ_old - α × ∇J(θ)</code><br />
                                    Where α is the <strong>learning rate</strong> (step size)
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Statistics */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">3</span>
                            Statistics Fundamentals
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-8">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 Why Statistics?</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed">
                                ML is about learning patterns from data. Statistics helps us <strong>describe</strong>,
                                <strong> analyze</strong>, and <strong>draw conclusions</strong> from data.
                            </p>
                        </div>

                        {/* Mean */}
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 Mean (Average)</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                The <strong>mean</strong> is the sum of all values divided by the count.
                                It&apos;s the &quot;center&quot; of your data.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-4">Formula:</p>
                                <p className="text-[#E6A04F] font-mono text-2xl text-center mb-4">
                                    μ = (1/n) × Σxᵢ = (x₁ + x₂ + ... + xₙ) / n
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm mt-4">
                                    Example: Mean of [2, 4, 6] = (2+4+6)/3 = 4
                                </p>
                            </div>
                        </div>

                        {/* Variance & Std */}
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📈 Variance & Standard Deviation</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                <strong>Variance</strong> measures how spread out the data is from the mean.
                                <strong> Standard deviation</strong> is just the square root of variance (same units as data).
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-4">Formulas:</p>
                                <div className="space-y-3 text-[#E6A04F] font-mono text-lg">
                                    <p>Variance: σ² = (1/n) × Σ(xᵢ - μ)²</p>
                                    <p>Std Dev:  σ  = √(Variance)</p>
                                </div>
                            </div>

                            <div className="bg-[#F3F8F2] rounded-xl p-6 border border-[#8FA68A]">
                                <p className="text-[#8FA68A] font-bold mb-2">💡 Why it matters in ML</p>
                                <p className="text-[#5D4E3C]">
                                    Features with high variance can dominate the model. That&apos;s why we often
                                    <strong> normalize</strong> data: <code className="bg-[#2D2520] text-[#E6A04F] px-2 py-0.5 rounded">x_normalized = (x - μ) / σ</code>
                                </p>
                            </div>
                        </div>

                        {/* Probability */}
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎲 Probability Basics</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Probability measures <strong>how likely</strong> something is to happen.
                                In ML, we often predict probabilities (e.g., &quot;90% chance this email is spam&quot;).
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-4">Key concepts:</p>
                                <div className="space-y-2 text-[#E6A04F] font-mono text-lg">
                                    <p>P(A) = Probability of event A happening (0 to 1)</p>
                                    <p>P(A|B) = Probability of A given B happened (conditional)</p>
                                    <p>P(A and B) = P(A) × P(B) (if independent)</p>
                                </div>
                            </div>

                            <div className="bg-[#FEF3E7] rounded-xl p-6 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-2">⭐ Bayes&apos; Theorem</p>
                                <p className="text-[#5D4E3C] mb-3">
                                    The foundation of many ML algorithms (like Naive Bayes):
                                </p>
                                <p className="text-center text-[#D4823A] font-mono text-xl">
                                    P(A|B) = P(B|A) × P(A) / P(B)
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Summary */}
                    <section className="rounded-2xl p-8 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white mb-12">
                        <h2 className="text-2xl font-bold mb-6 font-serif flex items-center gap-3">
                            <BookOpen className="w-6 h-6" />
                            Quick Reference Summary
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div>
                                <h4 className="font-bold text-[#E6A04F] mb-2">Linear Algebra</h4>
                                <ul className="space-y-1 text-[#E8DDD0]">
                                    <li>• Vectors = lists of numbers</li>
                                    <li>• Matrices = 2D grids</li>
                                    <li>• Dot product & matrix multiply</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#E6A04F] mb-2">Calculus</h4>
                                <ul className="space-y-1 text-[#E8DDD0]">
                                    <li>• Derivative = rate of change</li>
                                    <li>• Gradient = multi-var derivative</li>
                                    <li>• Gradient descent to minimize</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#E6A04F] mb-2">Statistics</h4>
                                <ul className="space-y-1 text-[#E8DDD0]">
                                    <li>• Mean, variance, std dev</li>
                                    <li>• Probability (0 to 1)</li>
                                    <li>• Bayes&apos; theorem</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </article>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 border-t border-[#E8DDD0]">
                    <Link href="/learn" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Learning Path
                    </Link>
                    <Link
                        href="/learn/regression/linear"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F] hover:shadow-lg transition-all"
                    >
                        Next: Linear Regression
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
