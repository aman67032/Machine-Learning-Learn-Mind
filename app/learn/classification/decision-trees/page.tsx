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
    GitBranch,
} from "lucide-react";

export default function DecisionTreesPage() {
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
                        🌳 Decision Trees
                    </h1>
                    <p className="text-xl text-[#5D4E3C] leading-relaxed">
                        A tree-like model that makes decisions by asking <strong>yes/no questions</strong>.
                        Highly interpretable and the foundation of Random Forests!
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
                            <span>How trees split data using <strong>information gain</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span><strong>Entropy</strong> and <strong>Gini impurity</strong> measures</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>The recursive <strong>tree-building algorithm</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[#8FA68A] mt-0.5 flex-shrink-0" />
                            <span>How to prevent <strong>overfitting</strong> with pruning</span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <article className="space-y-12">

                    {/* Section 1: Core Concept */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">1</span>
                            The Core Idea
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128] flex items-center gap-2">
                                <GitBranch className="w-5 h-5 text-[#8FA68A]" />
                                Tree Structure
                            </h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                A decision tree is like playing <strong>20 Questions</strong>. At each step,
                                you ask a question that best splits the data into purer groups.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 font-mono text-sm">
                                <p className="text-[#E8DDD0] mb-4">Example: Should I play tennis today?</p>
                                <pre className="text-[#E6A04F]">
                                    {`                    [Outlook?]
                   /    |     \\
              Sunny  Overcast  Rainy
                /        |        \\
         [Humidity?]    YES    [Windy?]
          /     \\              /     \\
       High    Normal       True   False
         |        |           |       |
        NO       YES         NO      YES`}
                                </pre>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📝 Terminology</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-[#F5EDE4] rounded-xl p-4">
                                    <p className="text-[#D4823A] font-bold">Root Node</p>
                                    <p className="text-[#5D4E3C] text-sm">The top node - first question asked</p>
                                </div>
                                <div className="bg-[#F5EDE4] rounded-xl p-4">
                                    <p className="text-[#D4823A] font-bold">Internal Node</p>
                                    <p className="text-[#5D4E3C] text-sm">Decision points - test a feature</p>
                                </div>
                                <div className="bg-[#F5EDE4] rounded-xl p-4">
                                    <p className="text-[#D4823A] font-bold">Branch/Edge</p>
                                    <p className="text-[#5D4E3C] text-sm">Outcome of a test (e.g., Yes/No)</p>
                                </div>
                                <div className="bg-[#F5EDE4] rounded-xl p-4">
                                    <p className="text-[#D4823A] font-bold">Leaf Node</p>
                                    <p className="text-[#5D4E3C] text-sm">Final prediction (class label)</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Splitting Criteria */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">2</span>
                            Splitting Criteria
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🎯 The Goal: Maximize Purity</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                We want each split to create groups that are as <strong>pure</strong> as possible
                                (containing mostly one class). We measure impurity using <strong>Entropy</strong> or <strong>Gini</strong>.
                            </p>
                        </div>

                        {/* Entropy */}
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 Entropy (Information Theory)</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                Entropy measures <strong>disorder/uncertainty</strong> in a set.
                                High entropy = mixed classes. Low entropy = mostly one class.
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6 mb-4">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">Entropy Formula:</p>
                                <p className="text-[#E6A04F] font-mono text-xl text-center mb-4">
                                    H(S) = -Σ pᵢ × log₂(pᵢ)
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm">
                                    Where pᵢ = proportion of class i in set S
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-[#F3F8F2] rounded-xl p-4 text-center border border-[#8FA68A]">
                                    <p className="text-2xl mb-2">🟢🟢🟢🟢</p>
                                    <p className="text-[#8FA68A] font-bold">H = 0</p>
                                    <p className="text-[#5D4E3C] text-sm">Pure (all same class)</p>
                                </div>
                                <div className="bg-[#FEF3E7] rounded-xl p-4 text-center border border-[#E6A04F]">
                                    <p className="text-2xl mb-2">🟢🟢🔴</p>
                                    <p className="text-[#D4823A] font-bold">H ≈ 0.92</p>
                                    <p className="text-[#5D4E3C] text-sm">Somewhat mixed</p>
                                </div>
                                <div className="bg-[#FBF3F1] rounded-xl p-4 text-center border border-[#C4897A]">
                                    <p className="text-2xl mb-2">🟢🟢🔴🔴</p>
                                    <p className="text-[#C4897A] font-bold">H = 1</p>
                                    <p className="text-[#5D4E3C] text-sm">Maximum disorder (50/50)</p>
                                </div>
                            </div>
                        </div>

                        {/* Information Gain */}
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📈 Information Gain</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                <strong>Information Gain</strong> = how much entropy we reduce by splitting on a feature.
                                Choose the feature with the <em>highest</em> information gain!
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">Information Gain Formula:</p>
                                <p className="text-[#E6A04F] font-mono text-lg text-center mb-4">
                                    IG(S, A) = H(S) - Σᵥ (|Sᵥ|/|S|) × H(Sᵥ)
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm">
                                    IG = Parent Entropy - Weighted Average of Children Entropies
                                </p>
                            </div>
                        </div>

                        {/* Gini Impurity */}
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">📊 Gini Impurity (Alternative)</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                <strong>Gini</strong> measures probability of misclassifying a random sample.
                                Used by CART algorithm (sklearn&apos;s default).
                            </p>

                            <div className="bg-[#2D2520] rounded-xl p-6">
                                <p className="text-[#E8DDD0] font-mono text-sm mb-2">Gini Impurity Formula:</p>
                                <p className="text-[#E6A04F] font-mono text-xl text-center mb-4">
                                    Gini(S) = 1 - Σ pᵢ²
                                </p>
                                <p className="text-[#8B7355] font-mono text-sm">
                                    Range: 0 (pure) to 0.5 (maximum impurity for binary)
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Algorithm */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">3</span>
                            The Tree-Building Algorithm
                        </h2>

                        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#5D4E3C] to-[#3D3128] text-white mb-6">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Play className="w-5 h-5 text-[#E6A04F]" />
                                Algorithm: ID3 / CART (Recursive)
                            </h3>

                            <div className="space-y-4 font-mono text-sm">
                                <div className="bg-[#8FA68A]/20 rounded-lg p-4">
                                    <p className="text-[#E8DDD0] mb-2"><strong className="text-[#E6A04F]">Base Cases (Stop Recursion):</strong></p>
                                    <ul className="text-[#E8DDD0] space-y-1 ml-4">
                                        <li>• All samples belong to same class → Return leaf with that class</li>
                                        <li>• No features left to split → Return leaf with majority class</li>
                                        <li>• Max depth reached → Return leaf with majority class</li>
                                    </ul>
                                </div>

                                <div className="bg-[#D4823A]/20 rounded-lg p-4">
                                    <p className="text-[#E8DDD0] mb-2"><strong className="text-[#E6A04F]">Recursive Case:</strong></p>
                                    <ol className="text-[#E8DDD0] space-y-2 ml-4">
                                        <li>1. For each feature, calculate information gain (or Gini decrease)</li>
                                        <li>2. Select feature with highest gain as the split</li>
                                        <li>3. Create node for this feature</li>
                                        <li>4. For each possible value of the feature:</li>
                                        <li className="ml-4">a. Create subset of data with that value</li>
                                        <li className="ml-4">b. Recursively build subtree on subset</li>
                                        <li>5. Return the node with its subtrees</li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        {/* Numerical Features */}
                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">🔢 Splitting Numerical Features</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                For numerical features, we find the best <strong>threshold</strong> to split on:
                            </p>

                            <div className="bg-[#F5EDE4] rounded-xl p-4">
                                <p className="text-[#5D4E3C]">
                                    <strong>Example:</strong> &quot;Is age ≤ 30?&quot;<br />
                                    Try all possible thresholds between data points, pick the one with highest gain.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Overfitting & Pruning */}
                    <section>
                        <h2 className="text-3xl font-bold mb-6 font-serif text-[#3D3128] flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full bg-[#FEF3E7] flex items-center justify-center text-lg">4</span>
                            Overfitting & Pruning
                        </h2>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0] mb-6">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">⚠️ The Overfitting Problem</h3>
                            <p className="text-[#5D4E3C] text-lg leading-relaxed mb-4">
                                A fully grown tree can perfectly fit training data (0 training error) but
                                perform poorly on new data. Each leaf might have just one sample!
                            </p>

                            <div className="bg-[#FBF3F1] rounded-xl p-4 border border-[#C4897A]">
                                <p className="text-[#C4897A] font-bold mb-2">🚨 Solution: Limit Tree Growth!</p>
                            </div>
                        </div>

                        <div className="rounded-2xl p-6 bg-white border border-[#E8DDD0]">
                            <h3 className="text-xl font-bold mb-4 text-[#3D3128]">✂️ Pruning Techniques</h3>

                            <div className="space-y-4">
                                <div className="bg-[#F3F8F2] rounded-xl p-4 border border-[#8FA68A]">
                                    <p className="text-[#8FA68A] font-bold mb-2">Pre-Pruning (Early Stopping)</p>
                                    <ul className="text-[#5D4E3C] text-sm space-y-1">
                                        <li>• <strong>max_depth</strong>: Limit tree depth</li>
                                        <li>• <strong>min_samples_split</strong>: Minimum samples needed to split</li>
                                        <li>• <strong>min_samples_leaf</strong>: Minimum samples in a leaf</li>
                                        <li>• <strong>max_leaf_nodes</strong>: Maximum number of leaves</li>
                                    </ul>
                                </div>

                                <div className="bg-[#FEF3E7] rounded-xl p-4 border border-[#E6A04F]">
                                    <p className="text-[#D4823A] font-bold mb-2">Post-Pruning</p>
                                    <p className="text-[#5D4E3C] text-sm">
                                        Grow full tree, then remove branches that don&apos;t improve validation accuracy.
                                        (Cost-complexity pruning in sklearn)
                                    </p>
                                </div>
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
                                Decision Tree from Scratch
                            </h3>

                            <div className="bg-[#2D2520] rounded-xl p-6 overflow-x-auto">
                                <pre className="text-[#E8DDD0] font-mono text-sm">
                                    {`import numpy as np
from collections import Counter

def entropy(y):
    """Calculate entropy of a label array"""
    hist = np.bincount(y)
    ps = hist / len(y)
    return -np.sum([p * np.log2(p) for p in ps if p > 0])

def information_gain(y, y_left, y_right):
    """Calculate information gain from a split"""
    n = len(y)
    n_left, n_right = len(y_left), len(y_right)
    
    if n_left == 0 or n_right == 0:
        return 0
    
    parent_entropy = entropy(y)
    child_entropy = (n_left/n) * entropy(y_left) + \\
                    (n_right/n) * entropy(y_right)
    
    return parent_entropy - child_entropy

class DecisionTree:
    def __init__(self, max_depth=10, min_samples_split=2):
        self.max_depth = max_depth
        self.min_samples_split = min_samples_split
        self.tree = None
    
    def fit(self, X, y):
        self.tree = self._grow_tree(X, y, depth=0)
    
    def _grow_tree(self, X, y, depth):
        n_samples, n_features = X.shape
        n_classes = len(np.unique(y))
        
        # Stopping criteria
        if (depth >= self.max_depth or 
            n_samples < self.min_samples_split or 
            n_classes == 1):
            return {'leaf': True, 'class': Counter(y).most_common(1)[0][0]}
        
        # Find best split
        best_gain = -1
        best_feature, best_threshold = None, None
        
        for feature_idx in range(n_features):
            thresholds = np.unique(X[:, feature_idx])
            for threshold in thresholds:
                left_mask = X[:, feature_idx] <= threshold
                y_left, y_right = y[left_mask], y[~left_mask]
                
                gain = information_gain(y, y_left, y_right)
                if gain > best_gain:
                    best_gain = gain
                    best_feature = feature_idx
                    best_threshold = threshold
        
        if best_gain == 0:
            return {'leaf': True, 'class': Counter(y).most_common(1)[0][0]}
        
        # Create split
        left_mask = X[:, best_feature] <= best_threshold
        left_tree = self._grow_tree(X[left_mask], y[left_mask], depth + 1)
        right_tree = self._grow_tree(X[~left_mask], y[~left_mask], depth + 1)
        
        return {
            'leaf': False,
            'feature': best_feature,
            'threshold': best_threshold,
            'left': left_tree,
            'right': right_tree
        }
    
    def predict(self, X):
        return np.array([self._predict_single(x, self.tree) for x in X])
    
    def _predict_single(self, x, node):
        if node['leaf']:
            return node['class']
        
        if x[node['feature']] <= node['threshold']:
            return self._predict_single(x, node['left'])
        return self._predict_single(x, node['right'])

# Example usage
from sklearn.datasets import make_classification
X, y = make_classification(n_samples=100, n_features=4, random_state=42)

tree = DecisionTree(max_depth=5)
tree.fit(X, y)
predictions = tree.predict(X)
accuracy = np.mean(predictions == y)
print(f"Training Accuracy: {accuracy:.2%}")`}
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
                                <span className="text-2xl">🌳</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Structure:</strong> Tree of yes/no questions leading to class predictions</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📊</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Entropy:</strong> H = -Σpᵢlog₂(pᵢ) measures disorder (0 = pure)</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">📈</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Info Gain:</strong> Choose splits that maximize entropy reduction</p>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-2xl">✂️</span>
                                <p className="text-[#E8DDD0]"><strong className="text-[#E6A04F]">Pruning:</strong> Limit depth/leaves to prevent overfitting</p>
                            </div>
                        </div>
                    </section>

                </article>

                {/* Navigation */}
                <div className="flex justify-between items-center pt-8 mt-12 border-t border-[#E8DDD0]">
                    <Link href="/learn/classification/knn" className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#D4823A] transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        K-Nearest Neighbors
                    </Link>
                    <Link
                        href="/learn/classification/random-forest"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#D4823A] to-[#E6A04F] hover:shadow-lg transition-all"
                    >
                        Next: Random Forests
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
