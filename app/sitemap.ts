import { MetadataRoute } from 'next'

// Curriculum data duplicated from Sidebar to generate static paths
const curriculum = [
    {
        id: "foundations",
        lessons: [
            { href: "/learn/foundations/overview" },
            { href: "/learn/foundations/math" },
            { href: "/learn/foundations/python" },
        ],
    },
    {
        id: "regression",
        lessons: [
            { href: "/learn/regression/linear" },
            { href: "/learn/regression/logistic" },
            { href: "/learn/regression/polynomial" },
            { href: "/learn/regression/glm" },
        ],
    },
    {
        id: "classification",
        lessons: [
            { href: "/learn/classification/knn" },
            { href: "/learn/classification/decision-trees" },
            { href: "/learn/classification/random-forest" },
            { href: "/learn/classification/svm" },
            { href: "/learn/classification/naive-bayes" },
            { href: "/learn/classification/gda" },
            { href: "/learn/classification/kernels" },
            { href: "/learn/classification/multiclass" },
        ],
    },
    {
        id: "clustering",
        lessons: [
            { href: "/learn/clustering/kmeans" },
            { href: "/learn/clustering/gmm" },
            { href: "/learn/clustering/pca" },
            { href: "/learn/clustering/factor-analysis" },
        ],
    },
    {
        id: "evaluation",
        lessons: [
            { href: "/learn/evaluation/splitting" },
            { href: "/learn/evaluation/bias-variance" },
            { href: "/learn/evaluation/metrics" },
            { href: "/learn/evaluation/cross-validation" },
        ],
    },
    {
        id: "optimization",
        lessons: [
            { href: "/learn/optimization/loss-functions" },
            { href: "/learn/optimization/gradient-descent" },
            { href: "/learn/optimization/backprop" },
            { href: "/learn/optimization/neural-networks" },
            { href: "/learn/optimization/deep-learning" },
        ],
    },
    {
        id: "nlp",
        lessons: [
            { href: "/learn/nlp/tokenization" },
            { href: "/learn/nlp/tfidf" },
            { href: "/learn/nlp/sentiment" },
        ],
    },
    {
        id: "timeseries",
        lessons: [
            { href: "/learn/timeseries/basics" },
            { href: "/learn/timeseries/arima" },
        ],
    },
    {
        id: "ethics",
        lessons: [
            { href: "/learn/ethics/bias" },
            { href: "/learn/ethics/data-ethics" },
            { href: "/learn/ethics/explainability" },
        ],
    },
];

const BASE_URL = 'https://ml-learn-mind.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/learn',
        '/resources',
        '/setup',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const lessonRoutes = curriculum.flatMap((section) =>
        section.lessons.map((lesson) => ({
            url: `${BASE_URL}${lesson.href}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }))
    );

    return [...routes, ...lessonRoutes];
}
