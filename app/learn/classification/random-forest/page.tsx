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
    Trees,
} from "lucide-react";

export default function RandomForestPage() {
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
                        Ensemble Methods
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">
                        🌲 Random Forests & Ensemble Learning
                    </h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        Combine many weak learners into one strong predictor!
                        <strong> Bagging</strong>, <strong>Boosting</strong>, and the powerful <strong>Random Forest</strong>.
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
                            <span>The <strong>ensemble</strong> principle: wisdom of crowds</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span><strong>Bagging</strong> (Bootstrap Aggregating) and variance reduction</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>How <strong>Random Forests</strong> add feature randomness</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span><strong>Boosting</strong>: AdaBoost and Gradient Boosting basics</span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <article className="space-y-12">

                    {/* Section 1: Ensemble Intuition */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">1</span>
                            The Ensemble Idea
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 Wisdom of Crowds</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                One model might be wrong, but if you ask <strong>100 models</strong> and take
                                their vote, you&apos;re much more likely to be right. That&apos;s ensembling!
                            </p>

                            <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                <p className="text-[#8FA68A] font-bold mb-2">💡 Analogy</p>
                                <p className="text-[#5D4E3C]">
                                    It&apos;s like asking 100 people to guess the number of jellybeans in a jar.
                                    Individual guesses vary, but the <strong>average is often very accurate</strong>!
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 Two Main Approaches</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                    <p className="text-[#D4823A] font-bold mb-2">🎒 Bagging</p>
                                    <p className="text-[#5D4E3C] text-sm mb-2">Train models <strong>in parallel</strong> on random subsets</p>
                                    <p className="text-[#8B7355] text-xs">→ Reduces variance (overfitting)</p>
                                    <p className="text-[#8B7355] text-xs">Example: Random Forest</p>
                                </div>
                                <div className="bg-[#F8F0F2] rounded-xl p-4 border border-[#8E4C5C]">
                                    <p className="text-[#8E4C5C] font-bold mb-2">⬆️ Boosting</p>
                                    <p className="text-[#5D4E3C] text-sm mb-2">Train models <strong>sequentially</strong>, each fixing previous errors</p>
                                    <p className="text-[#8B7355] text-xs">→ Reduces bias (underfitting)</p>
                                    <p className="text-[#8B7355] text-xs">Example: XGBoost, AdaBoost</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Bagging */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">2</span>
                            Bagging (Bootstrap Aggregating)
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📐 How Bagging Works</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 font-mono text-sm mb-4">
                                <pre className="text-[#E6A04F]">
                                    {`Original Data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Bootstrap Sample 1: [2, 5, 5, 8, 1, 9, 3, 3, 7, 2] → Tree 1
Bootstrap Sample 2: [1, 4, 4, 6, 9, 2, 8, 10, 5, 1] → Tree 2
Bootstrap Sample 3: [7, 3, 8, 2, 6, 6, 1, 5, 9, 4] → Tree 3
...

Final Prediction = Vote (classification) or Average (regression)`}
                                </pre>
                            </div>

                            <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                <p className="text-[#D4823A] font-bold mb-2">🎯 Bootstrap = Sampling with Replacement</p>
                                <p className="text-[#5D4E3C]">
                                    Each bootstrap sample is the same size as original data, but with some
                                    points repeated and others left out (~37% are &quot;Out-of-Bag&quot;).
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white mb-6">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Play className="w-5 h-5 text-[#E6A04F]" />
                                Algorithm: Bagging
                            </h3>

                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">1.</span>
                                    <span className="text-[#E6A04F]">For b = 1 to B (number of base learners):</span>
                                </div>
                                <div className="ml-8 pl-4 border-l-2 border-[#8B7355] space-y-2">
                                    <p className="text-[#E8DDD0]">a. Draw bootstrap sample of size n from training data</p>
                                    <p className="text-[#E8DDD0]">b. Train decision tree Tᵦ on this sample</p>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">2.</span>
                                    <span className="text-[#E6A04F]">To predict x_new:</span>
                                </div>
                                <div className="ml-8 pl-4 border-l-2 border-[#8B7355] space-y-2">
                                    <p className="text-[#E8DDD0]">Classification: ŷ = mode(T₁(x), T₂(x), ..., Tᵦ(x))</p>
                                    <p className="text-[#E8DDD0]">Regression: ŷ = (1/B) × Σ Tᵦ(x)</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Random Forest */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">3</span>
                            Random Forest 🌲🌲🌲
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 Bagging + Feature Randomness</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Random Forest = Bagging of decision trees + <strong>random feature selection</strong> at
                                each split. This decorrelates the trees, making the ensemble even better!
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">At each tree node split:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center mb-2">
                                    Consider only m random features (not all d)
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm">
                                    Typical m: √d for classification, d/3 for regression
                                </p>
                            </div>

                            <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                <p className="text-[#8FA68A] font-bold mb-2">🔑 Why Feature Randomness?</p>
                                <p className="text-[#5D4E3C]">
                                    Without it, all trees would be similar (correlated) because they&apos;d all
                                    pick the same &quot;best&quot; features. Randomness makes trees diverse!
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white mb-6">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Trees className="w-5 h-5 text-[#E6A04F]" />
                                Algorithm: Random Forest
                            </h3>

                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">1.</span>
                                    <span className="text-[#E6A04F]">For b = 1 to B (number of trees, e.g., 100-500):</span>
                                </div>
                                <div className="ml-8 pl-4 border-l-2 border-[#8B7355] space-y-2">
                                    <p className="text-[#E8DDD0]">a. Draw bootstrap sample</p>
                                    <p className="text-[#E8DDD0]">b. Build tree, but at each split:</p>
                                    <p className="text-[#E6A04F] ml-4">- Select m random features</p>
                                    <p className="text-[#E6A04F] ml-4">- Pick best split among only those m</p>
                                    <p className="text-[#E8DDD0]">c. Grow tree fully (no pruning)</p>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">2.</span>
                                    <span className="text-[#E6A04F]">Aggregate predictions via voting/averaging</span>
                                </div>
                            </div>
                        </div>

                        {/* Feature Importance */}
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 Feature Importance</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Random Forests can tell you which features matter most!
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                    <p className="text-[#D4823A] font-bold mb-2">Gini Importance</p>
                                    <p className="text-[#5D4E3C] text-sm">
                                        Sum of Gini impurity decreases for all splits
                                        using that feature, averaged across all trees.
                                    </p>
                                </div>
                                <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                    <p className="text-[#8FA68A] font-bold mb-2">Permutation Importance</p>
                                    <p className="text-[#5D4E3C] text-sm">
                                        Shuffle feature values and measure accuracy drop.
                                        Large drop = important feature.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Boosting Intro */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">4</span>
                            Boosting (Brief Overview)
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">⬆️ Sequential Learning</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Unlike bagging (parallel), boosting trains models <strong>one after another</strong>.
                                Each new model focuses on mistakes made by previous models!
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 font-mono text-sm">
                                <pre className="text-[#E6A04F]">
                                    {`Model 1: Trains on original data → Makes some errors
                    ↓
Model 2: Focuses MORE on Model 1's errors → Still some errors
                    ↓
Model 3: Focuses on remaining errors → Gets even better
                    ↓
          ... continue for N models

Final = Weighted sum of all models`}
                                </pre>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-lg font-bold mb-3 text-[#3D3128]">AdaBoost</h3>
                                <p className="text-[#5D4E3C] text-sm mb-2">
                                    • Increases weight of misclassified samples<br />
                                    • Each tree is a &quot;weak learner&quot; (stump)<br />
                                    • Final: weighted vote by model accuracy
                                </p>
                            </div>
                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-lg font-bold mb-3 text-[#3D3128]">Gradient Boosting</h3>
                                <p className="text-[#5D4E3C] text-sm mb-2">
                                    • Each tree predicts the <strong>residual</strong> (error)<br />
                                    • Uses gradient descent on loss<br />
                                    • XGBoost, LightGBM, CatBoost are variants
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Python Code */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">5</span>
                            Python Examples
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128] flex items-center gap-2">
                                <Code className="w-5 h-5 text-[#8FA68A]" />
                                Random Forest with Sklearn
                            </h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">
                                    {`from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
import numpy as np

# Load data
iris = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    iris.data, iris.target, test_size=0.2, random_state=42
)

# Random Forest
rf = RandomForestClassifier(
    n_estimators=100,       # Number of trees
    max_features='sqrt',    # Features to consider at each split
    max_depth=None,         # Grow full trees
    min_samples_split=2,    # Minimum samples to split
    bootstrap=True,         # Use bootstrap sampling
    oob_score=True,         # Out-of-bag score
    random_state=42
)
rf.fit(X_train, y_train)

print(f"RF Train Accuracy: {rf.score(X_train, y_train):.2%}")
print(f"RF Test Accuracy: {rf.score(X_test, y_test):.2%}")
print(f"RF OOB Score: {rf.oob_score_:.2%}")

# Feature Importance
print("\\nFeature Importances:")
for name, importance in zip(iris.feature_names, rf.feature_importances_):
    print(f"  {name}: {importance:.3f}")

# Gradient Boosting for comparison
gb = GradientBoostingClassifier(
    n_estimators=100,
    learning_rate=0.1,      # Shrinkage
    max_depth=3,            # Shallow trees
    random_state=42
)
gb.fit(X_train, y_train)
print(f"\\nGradient Boosting Test Accuracy: {gb.score(X_test, y_test):.2%}")`}
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* Overview Comparison */}
                    <section className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                        <h2 className="text-xl font-bold mb-4 text-[#3D3128]">📊 Bagging vs Boosting</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-[#E8DDD0]">
                                        <th className="text-left py-2 text-[#8B7355]">Aspect</th>
                                        <th className="text-left py-2 text-[#D4823A]">Bagging (RF)</th>
                                        <th className="text-left py-2 text-[#8E4C5C]">Boosting</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[#5D4E3C]">
                                    <tr className="border-b border-[#E8DDD0]">
                                        <td className="py-2">Training</td>
                                        <td className="py-2">Parallel</td>
                                        <td className="py-2">Sequential</td>
                                    </tr>
                                    <tr className="border-b border-[#E8DDD0]">
                                        <td className="py-2">Reduces</td>
                                        <td className="py-2">Variance</td>
                                        <td className="py-2">Bias</td>
                                    </tr>
                                    <tr className="border-b border-[#E8DDD0]">
                                        <td className="py-2">Base Learners</td>
                                        <td className="py-2">Full trees</td>
                                        <td className="py-2">Shallow trees (stumps)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2">Overfitting Risk</td>
                                        <td className="py-2">Lower</td>
                                        <td className="py-2">Higher (needs tuning)</td>
                                    </tr>
                                </tbody>
                            </table>
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
                                <span className="text-2xl">🎒</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Bagging:</strong> Train parallel models on bootstrap samples, aggregate votes</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">🌲</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Random Forest:</strong> Bagging + random feature selection at each split</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">⬆️</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Boosting:</strong> Train sequential models, each fixing previous errors</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📊</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Feature Importance:</strong> Random Forests reveal which features matter most</p>
                            </div>
                        </div>
                    </section>

                </article>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/classification/decision-trees" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Decision Trees
                    </Link>
                    <Link
                        href="/learn/classification/svm"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F] hover:shadow-lg transition-all"
                    >
                        Next: SVM
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
