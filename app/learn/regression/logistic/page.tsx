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

export default function LogisticRegressionPage() {
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
                        🎯 Logistic Regression for Classification
                    </h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        Despite its name, logistic regression is for <strong>classification</strong>, not regression!
                        Learn how to predict categories like &quot;spam or not spam&quot;.
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
                            <span>The <strong>sigmoid function</strong> that squashes output to 0-1</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>Why we need a different <strong>cost function</strong> (log loss)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>How <strong>decision boundaries</strong> separate classes</span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <article className="space-y-12">

                    {/* Section 1: Classification Problem */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">1</span>
                            The Classification Problem
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🆚 Regression vs Classification</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                    <p className="text-[#8FA68A] font-bold mb-2">Regression</p>
                                    <p className="text-[#5D4E3C]">Predict a <strong>continuous</strong> value</p>
                                    <p className="text-[#8B7355] text-sm mt-2">Example: House price ($250,000)</p>
                                </div>
                                <div className="bg-[#FBF3F1] rounded-xl p-4 border border-[#C4897A]">
                                    <p className="text-[#C4897A] font-bold mb-2">Classification</p>
                                    <p className="text-[#5D4E3C]">Predict a <strong>category/class</strong></p>
                                    <p className="text-[#8B7355] text-sm mt-2">Example: Email is Spam (Yes/No)</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">❓ Why Not Use Linear Regression?</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Linear regression outputs any value (-∞ to +∞), but we need probabilities between 0 and 1!
                                Linear regression can also give values &gt; 1 or &lt; 0, which doesn&apos;t make sense for probability.
                            </p>
                            <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-2">💡 Solution: The Sigmoid Function!</p>
                                <p className="text-[#5D4E3C]">
                                    We need a function that &quot;squashes&quot; any input into the range [0, 1].
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Sigmoid Function */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">2</span>
                            The Sigmoid Function
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📐 The Magic Formula</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-3">Sigmoid Function:</p>
                                <p className="text-[#E6A04F] font-mono text-2xl text-center mb-4">
                                    σ(z) = 1 / (1 + e⁻ᶻ)
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm">
                                    Where: z = θᵀx (weighted sum of inputs), e ≈ 2.718 (Euler&apos;s number)
                                </p>
                            </div>

                            <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                <p className="text-[#8FA68A] font-bold mb-2">🔍 How it works:</p>
                                <ul className="text-[#5D4E3C] space-y-1">
                                    <li>• When z → +∞, σ(z) → 1</li>
                                    <li>• When z → -∞, σ(z) → 0</li>
                                    <li>• When z = 0, σ(z) = 0.5</li>
                                </ul>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 The Hypothesis</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                For logistic regression, our prediction is the sigmoid of the linear combination:
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-3">Logistic Hypothesis:</p>
                                <p className="text-[#E6A04F] font-mono text-xl text-center mb-4">
                                    h(x) = σ(θᵀx) = 1 / (1 + e^(-θᵀx))
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm">
                                    Output: P(y=1|x) = probability that class is 1 given features x
                                </p>
                            </div>

                            <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-2">📊 Interpretation</p>
                                <p className="text-[#5D4E3C]">
                                    If h(x) = 0.8, there&apos;s an <strong>80% probability</strong> the input belongs to class 1<br />
                                    Decision rule: Predict class 1 if h(x) ≥ 0.5, else class 0
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Cost Function */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">3</span>
                            The Cost Function (Log Loss)
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">❌ Why MSE Doesn&apos;t Work</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                With sigmoid, MSE creates a <strong>non-convex</strong> function with many local minima.
                                Gradient descent might get stuck! We need a convex cost function.
                            </p>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">✅ Binary Cross-Entropy (Log Loss)</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-3">Cost for single example:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center mb-4">
                                    Cost = -y·log(h(x)) - (1-y)·log(1-h(x))
                                </p>
                                <p className="text-[#E8DDD0] font-mono text-lg mt-4 mb-3">Full cost function:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center">
                                    J(θ) = -(1/m) × Σ[yⁱ·log(h(xⁱ)) + (1-yⁱ)·log(1-h(xⁱ))]
                                </p>
                            </div>

                            <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                <p className="text-[#8FA68A] font-bold mb-2">🧠 Intuition:</p>
                                <ul className="text-[#5D4E3C] space-y-2">
                                    <li>• If y=1 and h(x)→1: Cost → 0 ✅ (correct, confident)</li>
                                    <li>• If y=1 and h(x)→0: Cost → ∞ ❌ (wrong, penalize hard!)</li>
                                    <li>• If y=0 and h(x)→0: Cost → 0 ✅</li>
                                    <li>• If y=0 and h(x)→1: Cost → ∞ ❌</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Gradient Descent */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">4</span>
                            Gradient Descent for Logistic Regression
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📐 The Update Rule</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Amazingly, the gradient descent update looks <em>identical</em> to linear regression!
                                (The math works out beautifully because of how we chose the cost function)
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-3">Update Rule:</p>
                                <p className="text-[#E6A04F] font-mono text-xl text-center mb-4">
                                    θⱼ := θⱼ - α × (1/m) × Σ(h(xⁱ) - yⁱ) × xⱼⁱ
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm">
                                    Same as Linear Regression! But h(x) uses sigmoid, not linear function.
                                </p>
                            </div>
                        </div>

                        {/* Algorithm */}
                        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white mb-6">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Play className="w-5 h-5 text-[#E6A04F]" />
                                Algorithm: Logistic Regression
                            </h3>

                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">1.</span>
                                    <span className="text-[#E8DDD0]">Initialize θ = [0, 0, ..., 0]</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">2.</span>
                                    <span className="text-[#E8DDD0]">Repeat until convergence:</span>
                                </div>
                                <div className="ml-8 pl-4 border-l-2 border-[#8B7355] space-y-2">
                                    <p className="text-[#E6A04F]">a. Compute z = θᵀX (linear combination)</p>
                                    <p className="text-[#E6A04F]">b. Compute h = sigmoid(z) (probabilities)</p>
                                    <p className="text-[#E6A04F]">c. Compute error = h - y</p>
                                    <p className="text-[#E6A04F]">d. Compute gradient = Xᵀ × error / m</p>
                                    <p className="text-[#E6A04F]">e. Update: θ := θ - α × gradient</p>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">3.</span>
                                    <span className="text-[#E8DDD0]">To predict: return 1 if sigmoid(θᵀx) ≥ 0.5, else 0</span>
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

def sigmoid(z):
    """Sigmoid activation function"""
    return 1 / (1 + np.exp(-z))

def logistic_regression(X, y, learning_rate=0.1, iterations=1000):
    """
    Logistic Regression using Gradient Descent
    X: features matrix (m × n)
    y: labels (0 or 1)
    """
    m, n = X.shape
    theta = np.zeros(n)  # Initialize weights
    
    for i in range(iterations):
        # 1. Linear combination
        z = np.dot(X, theta)
        
        # 2. Apply sigmoid
        h = sigmoid(z)
        
        # 3. Compute error
        error = h - y
        
        # 4. Compute gradient
        gradient = np.dot(X.T, error) / m
        
        # 5. Update weights
        theta = theta - learning_rate * gradient
        
        # Optional: Print cost
        if i % 100 == 0:
            cost = -np.mean(y * np.log(h + 1e-15) + 
                           (1 - y) * np.log(1 - h + 1e-15))
            print(f"Iteration {i}: Cost = {cost:.4f}")
    
    return theta

def predict(X, theta, threshold=0.5):
    """Predict class labels"""
    probabilities = sigmoid(np.dot(X, theta))
    return (probabilities >= threshold).astype(int)

# Example: Classify if student passes exam
# Features: [hours_studied, hours_slept]
X = np.array([[1, 2, 7], [1, 3, 8], [1, 4, 6], 
              [1, 5, 7], [1, 1, 5], [1, 2, 4]])  # Added bias column
y = np.array([0, 0, 0, 1, 0, 0])  # 0=fail, 1=pass

theta = logistic_regression(X, y)
print(f"\\nLearned weights: {theta}")`}
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Decision Boundary */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">5</span>
                            Decision Boundary
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🔲 What Is It?</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                The <strong>decision boundary</strong> is the line (or curve) that separates the two classes.
                                It&apos;s where h(x) = 0.5, which means θᵀx = 0.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-lg mb-3">For 2 features (x₁, x₂):</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center mb-4">
                                    θ₀ + θ₁x₁ + θ₂x₂ = 0
                                </p>
                                <p className="text-[#E8DDD0] font-mono text-lg mb-3">Rearranging to slope-intercept form:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center">
                                    x₂ = -(θ₁/θ₂)x₁ - (θ₀/θ₂)
                                </p>
                            </div>

                            <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-2">💡 Key Insight</p>
                                <p className="text-[#5D4E3C]">
                                    Logistic regression finds a <strong>linear</strong> decision boundary.
                                    For more complex boundaries, you&apos;d add polynomial features or use other algorithms.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 6: Hands-on Exercise */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">6</span>
                            Hands-on: Cuisine Prediction 🥘
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                In the <strong>ML-For-Beginners</strong> curriculum, we tackle a delicious problem:
                                <em>predicting national cuisines based on ingredients!</em>
                            </p>

                            <div className="bg-[#F8F0F2] rounded-xl p-4 border border-[#8E4C5C] mb-6">
                                <h4 className="font-bold text-[#8E4C5C] mb-2">The Challenge</h4>
                                <p className="text-[#5D4E3C] text-sm">
                                    We have 5 cuisines: Thai, Japanese, Chinese, Indian, and Korean.
                                    This is a <strong>Multi-class Classification</strong> problem.
                                    We use the <strong>One-vs-Rest (OvR)</strong> strategy with Logistic Regression.
                                </p>
                            </div>

                            <h3 className="text-xl font-bold mb-4 text-[#3D3128] flex items-center gap-2">
                                <Code className="w-5 h-5 text-[#D4823A]" />
                                Scikit-Learn Solution
                            </h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">
                                    {`from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import pandas as pd

# 1. Setup the model
# multi_class='ovr': Train binary classifiers for each cuisine vs rest
# solver='liblinear': Good for small datasets & OvR
lr = LogisticRegression(multi_class='ovr', solver='liblinear')

# 2. Train (X=ingredients, y=cuisine_label)
model = lr.fit(X_train, y_train)

# 3. Test a prediction
# Input: ['cilantro', 'onion', 'pea', 'potato', 'tomato', 'vegetable_oil']
prediction = model.predict(test_data)
# Output: 'indian' 🍛`}
                                </pre>
                            </div>

                            <div className="mt-6 bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-2">Why OvR?</p>
                                <p className="text-[#5D4E3C] text-sm">
                                    Logistic Regression is naturally binary (0 or 1). For 5 cuisines, Scikit-learn trains 5 separate binary classifiers:
                                    <br />1. Indian vs Not Indian
                                    <br />2. Thai vs Not Thai
                                    <br />...and so on. The class with the highest probability wins!
                                </p>
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
                                <span className="text-2xl">📈</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Sigmoid:</strong> σ(z) = 1/(1+e⁻ᶻ) squashes output to [0,1]</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">🎯</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Hypothesis:</strong> h(x) = sigmoid(θᵀx) = P(y=1|x)</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📊</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Cost:</strong> Log loss (cross-entropy) is convex!</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">🔲</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Decision Boundary:</strong> Linear where θᵀx = 0</p>
                            </div>
                        </div>
                    </section>

                </article>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/regression/linear" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Linear Regression
                    </Link>
                    <Link
                        href="/learn/classification/knn"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F] hover:shadow-lg transition-all"
                    >
                        Next: K-Nearest Neighbors
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
