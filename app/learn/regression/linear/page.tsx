import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    TrendingUp,
    Target,
    BookOpen,
    CheckCircle,
    Play,
    Code,
} from "lucide-react";

export default function LinearRegressionPage() {
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
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#F3F8F2] text-[#8FA68A]">
                        <TrendingUp className="w-4 h-4" />
                        Regression
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">
                        📈 Linear Regression from Scratch
                    </h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        The foundation of machine learning. Learn how to predict continuous values
                        using the simplest and most powerful algorithm.
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
                            <span>The <strong>hypothesis function</strong> for making predictions</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>How to measure error with the <strong>cost function (MSE)</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>The <strong>gradient descent</strong> algorithm step by step</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>The <strong>normal equation</strong> for direct solution</span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <article className="space-y-12">

                    {/* Section 1: Intuition */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">1</span>
                            The Big Picture
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 What is Linear Regression?</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Linear regression finds the <strong>best-fit line</strong> through your data.
                                Given input features, it predicts a <em>continuous</em> output value.
                            </p>
                            <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                <p className="text-[#5D4E3C]">
                                    <strong>Example:</strong> Predict house price ($) from square footage (sq ft)<br />
                                    <strong>Input:</strong> 1500 sq ft → <strong>Output:</strong> $250,000
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🧠 The Core Idea</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                We want to find the line <code className="bg-[#F5EDE4] px-2 py-0.5 rounded">y = mx + b</code> that best fits our data.
                                In ML terms, we call this the <strong>hypothesis function</strong>:
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-3">Hypothesis Function:</p>
                                <p className="text-[#E6A04F] font-mono text-2xl text-center mb-4">
                                    h(x) = θ₀ + θ₁x
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm">
                                    Where: θ₀ = y-intercept (bias), θ₁ = slope (weight)
                                </p>
                            </div>

                            <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-2">🔑 Key Terms Translation</p>
                                <p className="text-[#5D4E3C]">
                                    <strong>θ (theta)</strong> = parameters/weights (what we learn)<br />
                                    <strong>h(x)</strong> = prediction for input x<br />
                                    <strong>y</strong> = actual/true value
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Cost Function */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">2</span>
                            The Cost Function (Measuring Error)
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 Mean Squared Error (MSE)</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                How do we know if our line is good? We measure the <strong>error</strong>—the difference
                                between predictions and actual values. We square the errors so negatives don&apos;t cancel positives.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-3">Cost Function J(θ):</p>
                                <p className="text-[#E6A04F] font-mono text-xl text-center mb-4">
                                    J(θ) = (1/2m) × Σ(h(xⁱ) - yⁱ)²
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm">
                                    Where: m = number of training examples, i = example index
                                </p>
                            </div>

                            <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                <p className="text-[#8FA68A] font-bold mb-2">🔍 Breaking it down:</p>
                                <ol className="list-decimal list-inside text-[#5D4E3C] space-y-1">
                                    <li><strong>h(xⁱ) - yⁱ</strong> = error for example i (prediction - actual)</li>
                                    <li><strong>(...)²</strong> = square the error (make positive)</li>
                                    <li><strong>Σ</strong> = sum up all squared errors</li>
                                    <li><strong>1/2m</strong> = average (the 1/2 makes derivative cleaner)</li>
                                </ol>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📉 Step-by-Step Example</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-4">Given 3 houses:</p>
                                <div className="grid grid-cols-3 gap-4 text-center mb-4">
                                    <div>
                                        <p className="text-[#8B7355] text-sm">Actual</p>
                                        <p className="text-[#E6A04F]">$200k</p>
                                    </div>
                                    <div>
                                        <p className="text-[#8B7355] text-sm">Predicted</p>
                                        <p className="text-[#E6A04F]">$220k</p>
                                    </div>
                                    <div>
                                        <p className="text-[#8B7355] text-sm">Error²</p>
                                        <p className="text-[#E6A04F]">(20)² = 400</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 text-center mb-4">
                                    <p className="text-[#E6A04F]">$300k</p>
                                    <p className="text-[#E6A04F]">$290k</p>
                                    <p className="text-[#E6A04F]">(-10)² = 100</p>
                                </div>
                                <div className="grid grid-cols-3 gap-4 text-center mb-4">
                                    <p className="text-[#E6A04F]">$400k</p>
                                    <p className="text-[#E6A04F]">$410k</p>
                                    <p className="text-[#E6A04F]">(10)² = 100</p>
                                </div>
                                <p className="text-[#E8DDD0] pt-4 border-t border-[#8B7355]">
                                    MSE = (400 + 100 + 100) / (2 × 3) = 600/6 = <strong className="text-[#E6A04F]">100</strong>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Gradient Descent */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">3</span>
                            Gradient Descent Algorithm
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">⛰️ The Intuition</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Imagine you&apos;re on a mountain (the cost function) and want to reach the lowest valley (minimum error).
                                You look around, find the steepest downhill direction, and take a step. Repeat until you reach the bottom!
                            </p>

                            <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-2">🎯 The Goal</p>
                                <p className="text-[#5D4E3C]">
                                    Find values of θ₀ and θ₁ that <strong>minimize</strong> the cost function J(θ)
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📐 The Math</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-3">Update Rule:</p>
                                <p className="text-[#E6A04F] font-mono text-xl text-center mb-4">
                                    θⱼ := θⱼ - α × ∂J(θ)/∂θⱼ
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm">
                                    Where: α = learning rate (step size), ∂J/∂θⱼ = gradient (direction)
                                </p>
                            </div>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-3">For Linear Regression specifically:</p>
                                <div className="space-y-2 text-[#E6A04F] font-mono">
                                    <p>θ₀ := θ₀ - α × (1/m) × Σ(h(xⁱ) - yⁱ)</p>
                                    <p>θ₁ := θ₁ - α × (1/m) × Σ(h(xⁱ) - yⁱ) × xⁱ</p>
                                </div>
                            </div>
                        </div>

                        {/* Algorithm Steps */}
                        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white mb-6">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Play className="w-5 h-5 text-[#E6A04F]" />
                                Algorithm: Gradient Descent
                            </h3>

                            <div className="space-y-4 font-mono">
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">1.</span>
                                    <span className="text-[#E8DDD0]">Initialize θ₀ = 0, θ₁ = 0</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">2.</span>
                                    <span className="text-[#E8DDD0]">Repeat until convergence:</span>
                                </div>
                                <div className="ml-8 pl-4 border-l-2 border-[#8B7355] space-y-2">
                                    <p className="text-[#E6A04F]">a. Compute predictions: h(x) = θ₀ + θ₁x</p>
                                    <p className="text-[#E6A04F]">b. Compute errors: error = h(x) - y</p>
                                    <p className="text-[#E6A04F]">c. Compute gradients:</p>
                                    <p className="text-[#E6A04F] ml-4">∂J/∂θ₀ = mean(error)</p>
                                    <p className="text-[#E6A04F] ml-4">∂J/∂θ₁ = mean(error × x)</p>
                                    <p className="text-[#E6A04F]">d. Update parameters:</p>
                                    <p className="text-[#E6A04F] ml-4">θ₀ := θ₀ - α × ∂J/∂θ₀</p>
                                    <p className="text-[#E6A04F] ml-4">θ₁ := θ₁ - α × ∂J/∂θ₁</p>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">3.</span>
                                    <span className="text-[#E8DDD0]">Return θ₀, θ₁ (trained parameters)</span>
                                </div>
                            </div>
                        </div>

                        {/* Python Code */}
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128] flex items-center gap-2">
                                <Code className="w-5 h-5 text-[#8FA68A]" />
                                Python Implementation
                            </h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">
                                    {`import numpy as np

def gradient_descent(X, y, learning_rate=0.01, iterations=1000):
    """
    Linear Regression using Gradient Descent
    X: features (m samples)
    y: target values
    """
    m = len(y)
    theta0 = 0  # y-intercept
    theta1 = 0  # slope
    
    for i in range(iterations):
        # 1. Compute predictions
        predictions = theta0 + theta1 * X
        
        # 2. Compute errors
        errors = predictions - y
        
        # 3. Compute gradients
        grad_theta0 = (1/m) * np.sum(errors)
        grad_theta1 = (1/m) * np.sum(errors * X)
        
        # 4. Update parameters
        theta0 = theta0 - learning_rate * grad_theta0
        theta1 = theta1 - learning_rate * grad_theta1
        
        # Optional: Print cost every 100 iterations
        if i % 100 == 0:
            cost = (1/(2*m)) * np.sum(errors**2)
            print(f"Iteration {i}: Cost = {cost:.4f}")
    
    return theta0, theta1

# Example usage:
X = np.array([1, 2, 3, 4, 5])      # sq feet (in 1000s)
y = np.array([150, 200, 250, 300, 350])  # price (in 1000s)

theta0, theta1 = gradient_descent(X, y)
print(f"\\nLine equation: y = {theta0:.2f} + {theta1:.2f}x")`}
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Normal Equation */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">4</span>
                            The Normal Equation (Direct Solution)
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">⚡ Skip the Iterations!</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                For linear regression, there&apos;s actually a <strong>closed-form solution</strong>—a formula
                                that directly computes the optimal θ without iteration!
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-3">Normal Equation:</p>
                                <p className="text-[#E6A04F] font-mono text-2xl text-center mb-4">
                                    θ = (XᵀX)⁻¹ Xᵀy
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm">
                                    Where: Xᵀ = transpose of X, ⁻¹ = matrix inverse
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                    <p className="text-[#8FA68A] font-bold mb-2">✅ Pros</p>
                                    <ul className="text-[#5D4E3C] text-sm space-y-1">
                                        <li>• No iterations needed</li>
                                        <li>• No learning rate to tune</li>
                                        <li>• Exact solution</li>
                                    </ul>
                                </div>
                                <div className="bg-[#FBF3F1] rounded-xl p-4 border border-[#C4897A]">
                                    <p className="text-[#C4897A] font-bold mb-2">❌ Cons</p>
                                    <ul className="text-[#5D4E3C] text-sm space-y-1">
                                        <li>• Slow for large datasets</li>
                                        <li>• O(n³) matrix inversion</li>
                                        <li>• Only for linear regression</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Hands-on Exercise */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">5</span>
                            Hands-on: Pumpkin Pricing 🎃
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Let&apos;s apply what we learned! In the <strong>ML-For-Beginners</strong> curriculum, we use a dataset
                                of US pumpkin prices. The goal is to predict the price of a pumpkin based on its sale month.
                            </p>

                            <div className="bg-[#F8F0F2] rounded-xl p-4 border border-[#8E4C5C] mb-6">
                                <h4 className="font-bold text-[#8E4C5C] mb-2">The Challenge</h4>
                                <p className="text-[#5D4E3C] text-sm">
                                    Pumpkin prices are seasonal. A straight line doesn&apos;t fit well because prices rise and fall!
                                    Calculated correlation is small (-0.15). We need <strong>Polynomial Regression</strong>.
                                </p>
                            </div>

                            <h3 className="text-xl font-bold mb-4 text-[#3D3128] flex items-center gap-2">
                                <Code className="w-5 h-5 text-[#D4823A]" />
                                Scikit-Learn Solution
                            </h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">
                                    {`from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline
from sklearn.linear_model import LinearRegression

# 1. Create a pipeline
# PolynomialFeatures(2) adds squared terms (x^2) to capture curves
pipeline = make_pipeline(PolynomialFeatures(2), LinearRegression())

# 2. Train the model
# X_train is 'DayOfYear', y_train is 'Price'
pipeline.fit(X_train, y_train)

# 3. Evaluate
score = pipeline.score(X_test, y_test)
print(f"Model Accuracy (R²): {score:.2%}")`}
                                </pre>
                            </div>

                            <p className="text-[#5D4E3C] mt-4 text-sm">
                                By adding <code>x²</code> (polynomial features), we allow the model to fit a curve (parabola) instead of a straight line.
                                This improves accuracy significantly for seasonal data like produce prices!
                            </p>
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
                                <span className="text-2xl">📈</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Hypothesis:</strong> h(x) = θ₀ + θ₁x predicts y from x</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📊</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Cost Function:</strong> J(θ) measures average squared error</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">⛰️</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Gradient Descent:</strong> Iteratively update θ in direction of steepest descent</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">⚡</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Normal Equation:</strong> θ = (XᵀX)⁻¹Xᵀy for direct solution</p>
                            </div>
                        </div>
                    </section>

                </article>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/foundations/math" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Math Prerequisites
                    </Link>
                    <Link
                        href="/learn/regression/logistic"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F] hover:shadow-lg transition-all"
                    >
                        Next: Logistic Regression
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
