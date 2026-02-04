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
    Shuffle,
} from "lucide-react";

export default function CrossValidationPage() {
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
                        🔄 Cross-Validation
                    </h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        Test your model more <strong>reliably</strong> by training and testing on
                        <strong> different subsets</strong> of your data. Essential for hyperparameter tuning!
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
                            <span>Why simple train/test split isn&apos;t always enough</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span><strong>K-Fold</strong> cross-validation and how it works</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span><strong>Stratified</strong>, <strong>Leave-One-Out</strong>, and other variants</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>Using CV for <strong>hyperparameter tuning</strong></span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <article className="space-y-12">

                    {/* Section 1: Why Cross-Validation */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">1</span>
                            Why Cross-Validation?
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">⚠️ Problems with Simple Split</h3>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#FBF3F1] rounded-xl p-4 border border-[#C4897A]">
                                    <p className="text-[#C4897A] font-bold mb-2">Problem 1: Variance</p>
                                    <p className="text-[#5D4E3C] text-sm">
                                        Results depend heavily on <strong>which data</strong> ends up in test set.
                                        You might get lucky (or unlucky)!
                                    </p>
                                </div>
                                <div className="bg-[#FBF3F1] rounded-xl p-4 border border-[#C4897A]">
                                    <p className="text-[#C4897A] font-bold mb-2">Problem 2: Waste Data</p>
                                    <p className="text-[#5D4E3C] text-sm">
                                        20-30% of data is only used for testing, not learning.
                                        With small datasets, this hurts!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">✅ Cross-Validation Solution</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Train and test on <strong>multiple different splits</strong>, then average the results!
                                This gives a more <strong>reliable estimate</strong> of model performance.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: K-Fold */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">2</span>
                            K-Fold Cross-Validation
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 How It Works</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 font-mono text-sm mb-4">
                                <pre className="text-[#E6A04F]">
                                    {`K = 5 (5-Fold Cross-Validation)

Fold 1: [TEST] [Train] [Train] [Train] [Train] → Score₁
Fold 2: [Train] [TEST] [Train] [Train] [Train] → Score₂  
Fold 3: [Train] [Train] [TEST] [Train] [Train] → Score₃
Fold 4: [Train] [Train] [Train] [TEST] [Train] → Score₄
Fold 5: [Train] [Train] [Train] [Train] [TEST] → Score₅

Final Score = (Score₁ + Score₂ + Score₃ + Score₄ + Score₅) / 5`}
                                </pre>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white mb-6">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Play className="w-5 h-5 text-[#E6A04F]" />
                                Algorithm: K-Fold CV
                            </h3>

                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">1.</span>
                                    <span className="text-[#E6A04F]">Shuffle and split data into K equal folds</span>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">2.</span>
                                    <span className="text-[#E6A04F]">For i = 1 to K:</span>
                                </div>
                                <div className="ml-8 pl-4 border-l-2 border-[#8B7355] space-y-2">
                                    <p className="text-[#E8DDD0]">a. Use fold i as test set</p>
                                    <p className="text-[#E8DDD0]">b. Use remaining K-1 folds as training set</p>
                                    <p className="text-[#E8DDD0]">c. Train model and evaluate on fold i</p>
                                    <p className="text-[#E8DDD0]">d. Record score</p>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-[#8B7355]">3.</span>
                                    <span className="text-[#E6A04F]">Return mean(scores) ± std(scores)</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🔢 Choosing K</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                    <p className="text-[#8FA68A] font-bold mb-1">K = 5 or 10</p>
                                    <p className="text-[#5D4E3C] text-sm">Most common. Good balance of bias and variance.</p>
                                </div>
                                <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                    <p className="text-[#D4823A] font-bold mb-1">K = n (LOOCV)</p>
                                    <p className="text-[#5D4E3C] text-sm">Leave-One-Out. Low bias but expensive, high variance.</p>
                                </div>
                                <div className="bg-[#F8F0F2] rounded-xl p-4 border border-[#8E4C5C]">
                                    <p className="text-[#8E4C5C] font-bold mb-1">Small K (e.g., 3)</p>
                                    <p className="text-[#5D4E3C] text-sm">Faster but higher bias (smaller training sets).</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Variants */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">3</span>
                            CV Variants
                        </h2>

                        <div className="space-y-4">
                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-lg font-bold mb-2 text-[#3D3128]">Stratified K-Fold ⭐</h3>
                                <p className="text-[#5D4E3C] mb-2">
                                    Preserves <strong>class proportions</strong> in each fold. Essential for imbalanced data!
                                </p>
                                <div className="bg-[#F3F8F2] rounded p-2 text-sm text-[#5D4E3C]">
                                    If 20% are class 1, each fold also has ~20% class 1.
                                </div>
                            </div>

                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-lg font-bold mb-2 text-[#3D3128]">Leave-One-Out (LOOCV)</h3>
                                <p className="text-[#5D4E3C] mb-2">
                                    K = n. Each sample is its own test set once. Very thorough but slow.
                                </p>
                            </div>

                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-lg font-bold mb-2 text-[#3D3128]">Group K-Fold</h3>
                                <p className="text-[#5D4E3C] mb-2">
                                    Ensures <strong>groups</strong> (e.g., patients, users) don&apos;t appear in both train and test.
                                    Prevents data leakage when samples from same group are correlated.
                                </p>
                            </div>

                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-lg font-bold mb-2 text-[#3D3128]">Time Series Split</h3>
                                <p className="text-[#5D4E3C] mb-2">
                                    Train on past, test on future. Never use future data to predict past!
                                </p>
                                <div className="bg-[#2D2520] rounded p-2 font-mono text-xs text-[#E6A04F]">
                                    Fold 1: Train[0:2] Test[2:3]<br />
                                    Fold 2: Train[0:3] Test[3:4]<br />
                                    Fold 3: Train[0:4] Test[4:5]
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Hyperparameter Tuning */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">4</span>
                            CV for Hyperparameter Tuning
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 The Right Way</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 font-mono text-sm">
                                <pre className="text-[#E6A04F]">
                                    {`For each hyperparameter combination:
    Perform K-Fold CV
    Record mean score
    
Select parameters with best CV score
Retrain on FULL training data with best params
Evaluate on held-out TEST set (only once!)`}
                                </pre>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">⚠️ Common Mistake</h3>
                            <div className="bg-[#FBF3F1] rounded-xl p-4 border border-[#C4897A]">
                                <p className="text-[#C4897A] font-bold mb-2">Data Leakage!</p>
                                <p className="text-[#5D4E3C] text-sm">
                                    Don&apos;t use test set to select hyperparameters. This &quot;leaks&quot; information
                                    and gives overoptimistic results. Use CV on training data only!
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: Python Code */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">5</span>
                            Python Implementation
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128] flex items-center gap-2">
                                <Code className="w-5 h-5 text-[#8FA68A]" />
                                Cross-Validation with Sklearn
                            </h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">
                                    {`from sklearn.model_selection import (cross_val_score, KFold, StratifiedKFold,
    LeaveOneOut, GridSearchCV, cross_validate)
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris
import numpy as np

iris = load_iris()
X, y = iris.data, iris.target
model = LogisticRegression(max_iter=200)

# Basic K-Fold CV (5-fold)
scores = cross_val_score(model, X, y, cv=5, scoring='accuracy')
print(f"5-Fold CV: {scores.mean():.3f} ± {scores.std():.3f}")
print(f"Individual scores: {scores}")

# Stratified K-Fold (preserves class proportions)
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
scores_stratified = cross_val_score(model, X, y, cv=skf)
print(f"\\nStratified 5-Fold: {scores_stratified.mean():.3f}")

# Multiple metrics at once
cv_results = cross_validate(model, X, y, cv=5, 
    scoring=['accuracy', 'precision_macro', 'recall_macro'],
    return_train_score=True)
print(f"\\nTest Accuracy: {cv_results['test_accuracy'].mean():.3f}")
print(f"Train Accuracy: {cv_results['train_accuracy'].mean():.3f}")

# GridSearchCV for hyperparameter tuning
param_grid = {'C': [0.01, 0.1, 1, 10, 100]}
grid_search = GridSearchCV(
    LogisticRegression(max_iter=200),
    param_grid,
    cv=5,
    scoring='accuracy',
    return_train_score=True
)
grid_search.fit(X, y)

print(f"\\nBest C: {grid_search.best_params_}")
print(f"Best CV Score: {grid_search.best_score_:.3f}")

# Manual K-Fold for custom logic
kf = KFold(n_splits=5, shuffle=True, random_state=42)
for fold, (train_idx, test_idx) in enumerate(kf.split(X)):
    X_train, X_test = X[train_idx], X[test_idx]
    y_train, y_test = y[train_idx], y[test_idx]
    # Train and evaluate...
    print(f"Fold {fold+1}: Train size={len(train_idx)}, Test size={len(test_idx)}")`}
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
                                <span className="text-2xl">🔄</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">K-Fold:</strong> Split into K folds, each is test set once, average results</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📊</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Stratified:</strong> Preserves class proportions (use for classification!)</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">🎯</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Tuning:</strong> Use CV to select hyperparameters, final test set only once</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">⚙️</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">K=5 or 10:</strong> Standard choice, good bias-variance tradeoff</p>
                            </div>
                        </div>
                    </section>

                </article>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/evaluation/metrics" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Evaluation Metrics
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
