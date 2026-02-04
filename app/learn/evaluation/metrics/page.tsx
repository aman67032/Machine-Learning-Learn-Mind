import Link from "next/link";
import {
    ArrowLeft,
    ArrowRight,
    BarChart3,
    Target,
    BookOpen,
    CheckCircle,
    Code,
} from "lucide-react";

export default function MetricsPage() {
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
                        📊 Evaluation Metrics & ROC Curves
                    </h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        How good is your model? Learn <strong>accuracy, precision, recall, F1</strong>,
                        and the powerful <strong>ROC-AUC</strong> for classification problems.
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
                            <span>The <strong>confusion matrix</strong> and its four quadrants</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span><strong>Precision vs Recall</strong> tradeoff</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span><strong>ROC curves</strong> and <strong>AUC</strong> (Area Under Curve)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>When to use which metric</span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <article className="space-y-12">

                    {/* Section 1: Confusion Matrix */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">1</span>
                            The Confusion Matrix
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 The Four Quadrants</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 font-mono text-sm mb-4">
                                <pre className="text-[#E6A04F]">
                                    {`                      Predicted
                   Neg      Pos
             ┌─────────┬─────────┐
    Actual   │   TN    │   FP    │  ← Actual Negative
     Neg     │ (✓ Corr)│ (Type I)│
             ├─────────┼─────────┤
    Actual   │   FN    │   TP    │  ← Actual Positive
     Pos     │(Type II)│ (✓ Corr)│
             └─────────┴─────────┘`}
                                </pre>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#F3F8F2] rounded-xl p-3 border border-[#8FA68A]">
                                    <p className="text-[#8FA68A] font-bold">TP (True Positive)</p>
                                    <p className="text-[#5D4E3C] text-sm">Predicted + and was actually +</p>
                                </div>
                                <div className="bg-[#FBF3F1] rounded-xl p-3 border border-[#C4897A]">
                                    <p className="text-[#C4897A] font-bold">FP (False Positive)</p>
                                    <p className="text-[#5D4E3C] text-sm">Predicted + but was actually - (Type I)</p>
                                </div>
                                <div className="bg-[#FBF3F1] rounded-xl p-3 border border-[#C4897A]">
                                    <p className="text-[#C4897A] font-bold">FN (False Negative)</p>
                                    <p className="text-[#5D4E3C] text-sm">Predicted - but was actually + (Type II)</p>
                                </div>
                                <div className="bg-[#F3F8F2] rounded-xl p-3 border border-[#8FA68A]">
                                    <p className="text-[#8FA68A] font-bold">TN (True Negative)</p>
                                    <p className="text-[#5D4E3C] text-sm">Predicted - and was actually -</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Metrics */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">2</span>
                            Classification Metrics
                        </h2>

                        <div className="space-y-4">
                            {/* Accuracy */}
                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-2 text-[#3D3128]">🎯 Accuracy</h3>
                                <div className="bg-[#2D2520] rounded-xl p-4 mb-3">
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        Accuracy = (TP + TN) / (TP + TN + FP + FN)
                                    </p>
                                </div>
                                <p className="text-[#5D4E3C]">
                                    <strong>% of all predictions that were correct.</strong>
                                    <span className="text-[#C4897A]"> ⚠️ Misleading for imbalanced data!</span>
                                </p>
                            </div>

                            {/* Precision */}
                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-2 text-[#3D3128]">🎯 Precision (Positive Predictive Value)</h3>
                                <div className="bg-[#2D2520] rounded-xl p-4 mb-3">
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        Precision = TP / (TP + FP)
                                    </p>
                                </div>
                                <p className="text-[#5D4E3C]">
                                    <strong>Of all positive predictions, how many were correct?</strong>
                                    Use when <em>false positives are costly</em> (e.g., spam filter).
                                </p>
                            </div>

                            {/* Recall */}
                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-2 text-[#3D3128]">🎯 Recall (Sensitivity / True Positive Rate)</h3>
                                <div className="bg-[#2D2520] rounded-xl p-4 mb-3">
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        Recall = TP / (TP + FN)
                                    </p>
                                </div>
                                <p className="text-[#5D4E3C]">
                                    <strong>Of all actual positives, how many did we catch?</strong>
                                    Use when <em>false negatives are costly</em> (e.g., cancer detection).
                                </p>
                            </div>

                            {/* F1 Score */}
                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-2 text-[#3D3128]">🎯 F1 Score (Harmonic Mean)</h3>
                                <div className="bg-[#2D2520] rounded-xl p-4 mb-3">
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        F1 = 2 × (Precision × Recall) / (Precision + Recall)
                                    </p>
                                </div>
                                <p className="text-[#5D4E3C]">
                                    <strong>Balance between precision and recall.</strong>
                                    Good single metric when you care about both.
                                </p>
                            </div>

                            {/* Specificity */}
                            <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                                <h3 className="text-xl font-bold mb-2 text-[#3D3128]">🎯 Specificity (True Negative Rate)</h3>
                                <div className="bg-[#2D2520] rounded-xl p-4 mb-3">
                                    <p className="text-[#E6A04F] font-mono text-lg text-center">
                                        Specificity = TN / (TN + FP)
                                    </p>
                                </div>
                                <p className="text-[#5D4E3C]">
                                    <strong>Of all actual negatives, how many did we correctly identify?</strong>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Precision-Recall Tradeoff */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">3</span>
                            Precision-Recall Tradeoff
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">⚖️ You Can&apos;t Have Both Perfect!</h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 font-mono text-sm mb-4">
                                <pre className="text-[#E6A04F]">
                                    {`Threshold: 0.1 → Predict almost everything as Positive
  → High Recall (catch all +), Low Precision (many FP)

Threshold: 0.9 → Only predict Positive when very sure  
  → High Precision (few FP), Low Recall (miss many +)`}
                                </pre>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                    <p className="text-[#D4823A] font-bold mb-2">📧 Spam Filter</p>
                                    <p className="text-[#5D4E3C] text-sm">Prioritize <strong>Precision</strong>—don&apos;t want to block real emails!</p>
                                </div>
                                <div className="bg-[#F8F0F2] rounded-xl p-4 border border-[#8E4C5C]">
                                    <p className="text-[#8E4C5C] font-bold mb-2">🏥 Cancer Screening</p>
                                    <p className="text-[#5D4E3C] text-sm">Prioritize <strong>Recall</strong>—don&apos;t want to miss any cancer cases!</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: ROC Curve */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">4</span>
                            ROC Curve & AUC
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📈 ROC Curve</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                <strong>ROC</strong> = Receiver Operating Characteristic.
                                Plots TPR vs FPR at all threshold values.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 font-mono text-sm mb-4">
                                <pre className="text-[#E6A04F]">
                                    {`  TPR (Recall)
   1.0│        ●───────●
      │      ╱    Perfect = (0,1)
      │    ●
      │  ╱       AUC = Area Under Curve
      │●        (higher is better)
      │
   0.0│●───────────────────
      0.0              1.0  FPR (1-Specificity)
      
      Random classifier = diagonal (AUC = 0.5)
      Perfect classifier = top-left corner (AUC = 1.0)`}
                                </pre>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                    <p className="text-[#8FA68A] font-bold mb-1">AUC = 1.0</p>
                                    <p className="text-[#5D4E3C] text-sm">Perfect classifier</p>
                                </div>
                                <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                    <p className="text-[#D4823A] font-bold mb-1">AUC = 0.5</p>
                                    <p className="text-[#5D4E3C] text-sm">Random guessing</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">💡 When to Use AUC</h3>
                            <ul className="text-[#5D4E3C] space-y-2">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                                    <span>Comparing models regardless of threshold choice</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                                    <span>When you&apos;ll tune threshold later for your specific need</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                                    <span>Binary classification with probability outputs</span>
                                </li>
                            </ul>
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
                                Computing & Plotting Metrics
                            </h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">
                                    {`from sklearn.metrics import (confusion_matrix, accuracy_score, 
    precision_score, recall_score, f1_score, roc_curve, roc_auc_score,
    classification_report)
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
import numpy as np

# Create imbalanced dataset
X, y = make_classification(n_samples=1000, n_classes=2, 
    weights=[0.9, 0.1], random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3)

# Train model
model = LogisticRegression()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)
y_proba = model.predict_proba(X_test)[:, 1]

# Confusion Matrix
cm = confusion_matrix(y_test, y_pred)
print("Confusion Matrix:")
print(cm)

# All Metrics
print(f"\\nAccuracy:  {accuracy_score(y_test, y_pred):.3f}")
print(f"Precision: {precision_score(y_test, y_pred):.3f}")
print(f"Recall:    {recall_score(y_test, y_pred):.3f}")
print(f"F1 Score:  {f1_score(y_test, y_pred):.3f}")
print(f"ROC AUC:   {roc_auc_score(y_test, y_proba):.3f}")

# Full Report
print("\\nClassification Report:")
print(classification_report(y_test, y_pred))

# Plot ROC Curve
fpr, tpr, thresholds = roc_curve(y_test, y_proba)
plt.figure(figsize=(8, 6))
plt.plot(fpr, tpr, 'b-', linewidth=2, 
    label=f'ROC (AUC = {roc_auc_score(y_test, y_proba):.3f})')
plt.plot([0, 1], [0, 1], 'k--', label='Random')
plt.xlabel('False Positive Rate')
plt.ylabel('True Positive Rate (Recall)')
plt.title('ROC Curve')
plt.legend()
plt.grid(alpha=0.3)
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
                                <span className="text-2xl">📊</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Confusion Matrix:</strong> TP, TN, FP, FN—the foundation of all metrics</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">🎯</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Precision:</strong> TP/(TP+FP) — important when FP is costly</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">🔍</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Recall:</strong> TP/(TP+FN) — important when FN is costly</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📈</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">AUC:</strong> Overall model quality, 0.5=random, 1.0=perfect</p>
                            </div>
                        </div>
                    </section>

                </article>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/evaluation/bias-variance" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Bias-Variance Tradeoff
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
