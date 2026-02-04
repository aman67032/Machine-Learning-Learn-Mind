import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    BarChart3,
    Target,
    BookOpen,
    CheckCircle,
    Code,
    Split,
} from "lucide-react";

export default function DataSplittingPage() {
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
                        ✂️ Train / Validation / Test Split
                    </h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        Properly splitting your data is <strong>critical</strong>. Learn why we need
                        <strong> three sets</strong> and how to avoid common pitfalls.
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
                            <span>Why we split data and what each set is for</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>The purpose of the <strong>validation set</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span><strong>Data leakage</strong> and how to prevent it</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>When to use <strong>stratified</strong> splitting</span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <article className="space-y-12">

                    {/* Section 1: The Three Sets */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">1</span>
                            The Three Data Sets
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <div className="bg-[#2D2520] rounded-xl p-6 font-mono text-sm mb-6">
                                <pre className="text-[#E6A04F]">
                                    {`┌──────────────────────────────────────────────────────────┐
│                    FULL DATASET                          │
├──────────────────────┬───────────────┬───────────────────┤
│    TRAINING SET      │  VALIDATION   │    TEST SET       │
│       (60-70%)       │   (10-15%)    │     (20-25%)      │
│                      │               │                   │
│  Learn patterns      │ Tune params   │  Final eval       │
│  (fit model)         │ (pick model)  │  (report score)   │
└──────────────────────┴───────────────┴───────────────────┘`}
                                </pre>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="rounded-2xl p-5 bg-[#F3F8F2] border border-[#8FA68A]">
                                <h3 className="font-bold text-[#8FA68A] mb-2">📚 Training Set</h3>
                                <p className="text-[#5D4E3C] text-sm">
                                    Used to <strong>fit the model</strong>. The model learns patterns from this data.
                                    Typically 60-70% of data.
                                </p>
                            </div>
                            <div className="rounded-2xl p-5 bg-[#FEF3E7] border border-[#E6A04F]">
                                <h3 className="font-bold text-[#D4823A] mb-2">🎛️ Validation Set</h3>
                                <p className="text-[#5D4E3C] text-sm">
                                    Used to <strong>tune hyperparameters</strong> and select the best model.
                                    Typically 10-15% of data.
                                </p>
                            </div>
                            <div className="rounded-2xl p-5 bg-[#F8F0F2] border border-[#8E4C5C]">
                                <h3 className="font-bold text-[#8E4C5C] mb-2">🧪 Test Set</h3>
                                <p className="text-[#5D4E3C] text-sm">
                                    Used <strong>only once</strong> for final evaluation. Pretend it doesn&apos;t exist!
                                    Typically 20-25% of data.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Why Validation? */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">2</span>
                            Why Do We Need Validation?
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 The Problem</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                If we tune hyperparameters using the test set, we&apos;re <strong>cheating</strong>!
                                The test score becomes optimistic because we&apos;ve indirectly fitted to it.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 font-mono text-sm">
                                <pre className="text-[#E6A04F]">
                                    {`❌ WRONG Workflow:
   Train → Tune on TEST → Report TEST score  
   (test score is now biased!)

✅ CORRECT Workflow:
   Train → Tune on VALIDATION → Final eval on TEST
   (test score is unbiased estimate)`}
                                </pre>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🔄 Typical ML Workflow</h3>
                            <ol className="text-[#5D4E3C] space-y-3">
                                <li className="flex gap-3">
                                    <span className="w-7 h-7 rounded-full bg-[#8FA68A] text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                                    <span>Split data into Train / Validation / Test</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-7 h-7 rounded-full bg-[#8FA68A] text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                                    <span>Try different models/hyperparameters on Training set</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-7 h-7 rounded-full bg-[#8FA68A] text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                                    <span>Evaluate each on Validation set to pick the best</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-7 h-7 rounded-full bg-[#8FA68A] text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                                    <span>Retrain best model on (Train + Validation)</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-7 h-7 rounded-full bg-[#D4823A] text-white text-sm flex items-center justify-center flex-shrink-0">5</span>
                                    <span>Final evaluation on Test set <strong>(only once!)</strong></span>
                                </li>
                            </ol>
                        </div>
                    </section>

                    {/* Section 3: Data Leakage */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">3</span>
                            ⚠️ Data Leakage
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#C4897A]">What is Data Leakage?</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Data leakage occurs when information from outside the training set
                                <strong> leaks</strong> into model training, causing overly optimistic results.
                            </p>

                            <div className="space-y-3">
                                <div className="bg-[#FBF3F1] rounded-xl p-4 border border-[#C4897A]">
                                    <p className="text-[#C4897A] font-bold mb-1">Common Leak #1: Preprocessing Before Split</p>
                                    <p className="text-[#5D4E3C] text-sm">
                                        Fitting scaler/imputer on ALL data before splitting. Test data influences
                                        preprocessing parameters!
                                    </p>
                                </div>
                                <div className="bg-[#FBF3F1] rounded-xl p-4 border border-[#C4897A]">
                                    <p className="text-[#C4897A] font-bold mb-1">Common Leak #2: Feature Selection on All Data</p>
                                    <p className="text-[#5D4E3C] text-sm">
                                        Selecting features based on correlation with target before splitting.
                                    </p>
                                </div>
                                <div className="bg-[#FBF3F1] rounded-xl p-4 border border-[#C4897A]">
                                    <p className="text-[#C4897A] font-bold mb-1">Common Leak #3: Time-Based Leak</p>
                                    <p className="text-[#5D4E3C] text-sm">
                                        Using future information to predict past events (shuffling time series).
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#8FA68A]">✅ Preventing Leakage</h3>
                            <div className="bg-[#2D2520] rounded-xl p-6 font-mono text-sm">
                                <pre className="text-[#E6A04F]">
                                    {`✅ CORRECT:
1. Split data FIRST
2. Fit scaler on TRAIN only
3. Transform train AND test using TRAIN&apos;s parameters

from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler

# Pipeline ensures no leakage in cross-validation!
pipe = Pipeline([
    (&apos;scaler&apos;, StandardScaler()),
    (&apos;model&apos;, LogisticRegression())
])
pipe.fit(X_train, y_train)`}
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Stratified Splitting */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">4</span>
                            Stratified Splitting
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 When to Use Stratification</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                With <strong>imbalanced classes</strong>, random splitting might put all rare
                                samples in one set! Stratification ensures class proportions are preserved.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 font-mono text-sm mb-4">
                                <pre className="text-[#E6A04F]">
                                    {`Original: 90% Class A, 10% Class B

Random Split:
  Train: 92% A, 8% B   ❌ (unlucky—few B in train)
  Test:  85% A, 15% B  ❌ (inconsistent)

Stratified Split:
  Train: 90% A, 10% B  ✅ (same ratio)
  Test:  90% A, 10% B  ✅ (same ratio)`}
                                </pre>
                            </div>

                            <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                <p className="text-[#8FA68A] font-bold mb-2">💡 Rule of Thumb</p>
                                <p className="text-[#5D4E3C]">
                                    Always use <strong>stratified splitting for classification</strong> tasks,
                                    especially with imbalanced data!
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
                                Proper Data Splitting
                            </h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">
                                    {`from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression
import numpy as np

# Sample data
X = np.random.randn(1000, 10)
y = (X[:, 0] + X[:, 1] > 0).astype(int)

# STEP 1: Split into Train+Val and Test
X_trainval, X_test, y_trainval, y_test = train_test_split(
    X, y, 
    test_size=0.2,        # 20% for test
    stratify=y,           # Preserve class proportions
    random_state=42
)

# STEP 2: Split Train+Val into Train and Val
X_train, X_val, y_train, y_val = train_test_split(
    X_trainval, y_trainval,
    test_size=0.15,       # 15% of original for validation
    stratify=y_trainval,
    random_state=42
)

print(f"Train: {len(X_train)}, Val: {len(X_val)}, Test: {len(X_test)}")

# STEP 3: Use Pipeline to prevent leakage
pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('model', LogisticRegression())
])

# Try different hyperparameters
best_score = 0
best_C = None
for C in [0.01, 0.1, 1, 10]:
    pipeline.set_params(model__C=C)
    pipeline.fit(X_train, y_train)
    val_score = pipeline.score(X_val, y_val)
    print(f"C={C}: Val Score = {val_score:.3f}")
    if val_score > best_score:
        best_score = val_score
        best_C = C

# STEP 4: Retrain on Train+Val with best params
pipeline.set_params(model__C=best_C)
pipeline.fit(X_trainval, y_trainval)

# STEP 5: Final evaluation on Test (only once!)
test_score = pipeline.score(X_test, y_test)
print(f"\\nBest C: {best_C}")
print(f"Final Test Score: {test_score:.3f}")`}
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
                                <span className="text-2xl">✂️</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Three Sets:</strong> Train (fit), Validation (tune), Test (final eval)</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">🧪</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Test Set:</strong> Only use ONCE at the very end!</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">⚠️</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Leakage:</strong> Split first, then preprocess. Use Pipelines!</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📊</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Stratify:</strong> Always for classification to preserve class ratios</p>
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
                        href="/learn/evaluation/bias-variance"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F] hover:shadow-lg transition-all"
                    >
                        Next: Bias-Variance
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
