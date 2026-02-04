import Link from "next/link";
import { ArrowLeft, ArrowRight, Calculator, Target, BookOpen, CheckCircle, Code } from "lucide-react";

export default function PythonMLPage() {
    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/learn" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />Back to Learning Path
                </Link>

                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#FEF3E7] text-[#D4823A]">
                        <Calculator className="w-4 h-4" />Foundations
                    </div>
                    <h1 className="text-4xl font-bold mb-4 font-serif text-[#3D3128]">🐍 Python for Machine Learning</h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        Essential Python libraries and patterns for <strong>implementing ML algorithms</strong>!
                    </p>
                </div>

                <div className="rounded-2xl p-6 mb-10 bg-[#FFFBF7] border border-[#E8DDD0]">
                    <h2 className="font-bold text-lg mb-4 flex items-center gap-2 font-serif text-[#3D3128]">
                        <Target className="w-5 h-5 text-[#D4823A]" />What You&apos;ll Learn
                    </h2>
                    <ul className="space-y-2 text-[#5D4E3C]">
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>NumPy for vectorized operations</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Pandas for data manipulation</span></li>
                        <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5" /><span>Scikit-learn workflow and best practices</span></li>
                    </ul>
                </div>

                <article className="space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">1. NumPy Essentials</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">{`import numpy as np

# Creating arrays
x = np.array([1, 2, 3])
X = np.random.randn(100, 5)  # 100 samples, 5 features

# Vectorized operations (FAST!)
y = 2 * x + 1  # No loops needed
dot_product = X @ X.T  # Matrix multiplication

# Broadcasting
X_normalized = (X - X.mean(axis=0)) / X.std(axis=0)

# Linear algebra
eigenvalues, eigenvectors = np.linalg.eig(X.T @ X)
inverse = np.linalg.inv(X.T @ X + 0.01 * np.eye(5))

# Useful functions
sigmoid = 1 / (1 + np.exp(-x))
softmax = np.exp(x) / np.sum(np.exp(x))`}</pre>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">2. Pandas for Data</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">{`import pandas as pd

# Load data
df = pd.read_csv('data.csv')

# Explore
print(df.head())
print(df.describe())
print(df.isnull().sum())

# Clean & transform
df = df.dropna()
df['log_price'] = np.log(df['price'])
df = pd.get_dummies(df, columns=['category'])

# Split features and target
X = df.drop('target', axis=1).values
y = df['target'].values`}</pre>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">3. Scikit-learn Pattern</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">{`from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

# Create pipeline (preprocessing + model)
pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('clf', LogisticRegression())
])

# Train
pipe.fit(X_train, y_train)

# Evaluate
y_pred = pipe.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.2%}")
print(classification_report(y_test, y_pred))

# Cross-validation
scores = cross_val_score(pipe, X, y, cv=5)
print(f"CV Accuracy: {scores.mean():.2%} ± {scores.std():.2%}")`}</pre>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 font-serif text-[#3D3128]">4. Visualization</h2>
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">{`import matplotlib.pyplot as plt
import seaborn as sns

# Basic plots
fig, axes = plt.subplots(1, 2, figsize=(12, 4))

# Histogram
axes[0].hist(y_pred, bins=30, edgecolor='k')
axes[0].set_title('Predictions Distribution')

# Scatter
axes[1].scatter(X[:, 0], X[:, 1], c=y, cmap='viridis')
axes[1].set_title('Feature Space')

plt.tight_layout()
plt.show()

# Confusion matrix
from sklearn.metrics import confusion_matrix
sns.heatmap(confusion_matrix(y_test, y_pred), 
            annot=True, fmt='d', cmap='Blues')
plt.title('Confusion Matrix')`}</pre>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl p-8 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6" />Key Takeaways</h2>
                        <div className="space-y-3 text-[#E8DDD0]">
                            <p><strong className="text-[#E6A04F]">NumPy:</strong> Vectorize everything, avoid Python loops</p>
                            <p><strong className="text-[#E6A04F]">Pandas:</strong> Load, clean, transform data easily</p>
                            <p><strong className="text-[#E6A04F]">Sklearn:</strong> fit → predict pattern, use Pipelines</p>
                        </div>
                    </section>
                </article>

                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/foundations/math" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A]"><ArrowLeft className="w-4 h-4" />Math Prerequisites</Link>
                    <Link href="/learn/foundations/overview" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F]">ML Overview<ArrowRight className="w-5 h-5" /></Link>
                </div>
            </div>
        </div>
    );
}
