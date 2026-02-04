import fs from "fs";
import path from "path";

const ML_REPO_PATH = "F:/ml/ML-For-Beginners";

export interface LessonData {
    title: string;
    content: string;
    section: string;
    lessonId: string;
    assignment?: string;
    images: string[];
}

export interface SectionData {
    id: string;
    title: string;
    description: string;
    lessons: { id: string; title: string }[];
}

// Map section folder names to display titles
const sectionTitles: Record<string, string> = {
    "1-Introduction": "Introduction to Machine Learning",
    "2-Regression": "Regression Models",
    "3-Web-App": "Building Web Apps with ML",
    "4-Classification": "Classification",
    "5-Clustering": "Clustering",
    "6-NLP": "Natural Language Processing",
    "7-TimeSeries": "Time Series Forecasting",
    "8-Reinforcement": "Reinforcement Learning",
    "9-Real-World": "Real World Applications",
};

// Map lesson folder names to display titles
const lessonTitles: Record<string, string> = {
    "1-intro-to-ML": "Introduction to Machine Learning",
    "2-history-of-ML": "The History of Machine Learning",
    "3-fairness": "Fairness in Machine Learning",
    "4-techniques-of-ML": "Techniques of Machine Learning",
    "1-Tools": "Tools of the Trade",
    "2-Data": "Managing Data",
    "3-Linear": "Linear and Polynomial Regression",
    "4-Logistic": "Logistic Regression",
    "1-Web-App": "Building a Web App",
    "1-Introduction": "Introduction to Classification",
    "2-Classifiers-1": "Classifiers Part 1",
    "3-Classifiers-2": "Classifiers Part 2",
    "4-Applied": "Applied Classification",
    "1-Visualize": "Visualizing Data",
    "2-K-Means": "K-Means Clustering",
    "1-Introduction-to-NLP": "Introduction to NLP",
    "2-Tasks": "Common NLP Tasks",
    "3-Translation-Sentiment": "Translation and Sentiment Analysis",
    "4-Hotel-Reviews-1": "Hotel Reviews Part 1",
    "5-Hotel-Reviews-2": "Hotel Reviews Part 2",
    "2-ARIMA": "ARIMA Time Series",
    "3-SVR": "SVR Forecasting",
    "1-QLearning": "Q-Learning",
    "2-Gym": "OpenAI Gym",
    "1-Applications": "ML Applications",
    "2-Debugging-ML-Models": "Debugging ML Models",
};

export function getLessonContent(section: string, lessonId: string): LessonData | null {
    try {
        // Map URL-friendly section names to actual folder names
        const sectionMap: Record<string, string> = {
            "1-introduction": "1-Introduction",
            "2-regression": "2-Regression",
            "3-web-app": "3-Web-App",
            "4-classification": "4-Classification",
            "5-clustering": "5-Clustering",
            "6-nlp": "6-NLP",
            "7-timeseries": "7-TimeSeries",
            "8-reinforcement": "8-Reinforcement",
            "9-real-world": "9-Real-World",
        };

        const actualSection = sectionMap[section] || section;
        const lessonPath = path.join(ML_REPO_PATH, actualSection, lessonId);
        const readmePath = path.join(lessonPath, "README.md");

        if (!fs.existsSync(readmePath)) {
            console.error(`Lesson not found: ${readmePath}`);
            return null;
        }

        const content = fs.readFileSync(readmePath, "utf-8");

        // Get assignment if exists
        const assignmentPath = path.join(lessonPath, "assignment.md");
        const assignment = fs.existsSync(assignmentPath)
            ? fs.readFileSync(assignmentPath, "utf-8")
            : undefined;

        // Get images in the lesson folder
        const imagesPath = path.join(lessonPath, "images");
        const images: string[] = [];
        if (fs.existsSync(imagesPath)) {
            const imageFiles = fs.readdirSync(imagesPath);
            images.push(...imageFiles.filter((f) => /\.(png|jpg|jpeg|gif|svg)$/i.test(f)));
        }

        // Extract title from content
        const titleMatch = content.match(/^#\s+(.+)$/m);
        const title = titleMatch ? titleMatch[1] : lessonTitles[lessonId] || lessonId;

        return {
            title,
            content,
            section: actualSection,
            lessonId,
            assignment,
            images,
        };
    } catch (error) {
        console.error("Error reading lesson:", error);
        return null;
    }
}

export function getSectionData(sectionId: string): SectionData | null {
    try {
        const sectionMap: Record<string, string> = {
            "1-introduction": "1-Introduction",
            "2-regression": "2-Regression",
            "3-web-app": "3-Web-App",
            "4-classification": "4-Classification",
            "5-clustering": "5-Clustering",
            "6-nlp": "6-NLP",
            "7-timeseries": "7-TimeSeries",
            "8-reinforcement": "8-Reinforcement",
            "9-real-world": "9-Real-World",
        };

        const actualSection = sectionMap[sectionId] || sectionId;
        const sectionPath = path.join(ML_REPO_PATH, actualSection);
        const readmePath = path.join(sectionPath, "README.md");

        if (!fs.existsSync(sectionPath)) {
            return null;
        }

        // Read section README
        let description = "";
        if (fs.existsSync(readmePath)) {
            const content = fs.readFileSync(readmePath, "utf-8");
            // Extract first paragraph as description
            const paragraphMatch = content.match(/^(?!#)(.+)$/m);
            description = paragraphMatch ? paragraphMatch[1] : "";
        }

        // Get lesson folders
        const items = fs.readdirSync(sectionPath, { withFileTypes: true });
        const lessons = items
            .filter((item) => item.isDirectory() && !item.name.startsWith(".") && item.name !== "images" && item.name !== "data" && item.name !== "solution" && item.name !== "common")
            .map((item) => ({
                id: item.name,
                title: lessonTitles[item.name] || item.name,
            }))
            .sort((a, b) => {
                const numA = parseInt(a.id.split("-")[0]) || 0;
                const numB = parseInt(b.id.split("-")[0]) || 0;
                return numA - numB;
            });

        return {
            id: sectionId,
            title: sectionTitles[actualSection] || actualSection,
            description,
            lessons,
        };
    } catch (error) {
        console.error("Error reading section:", error);
        return null;
    }
}

export function getAllSections(): SectionData[] {
    const sections = [
        "1-introduction",
        "2-regression",
        "3-web-app",
        "4-classification",
        "5-clustering",
        "6-nlp",
        "7-timeseries",
        "8-reinforcement",
        "9-real-world",
    ];

    return sections
        .map((s) => getSectionData(s))
        .filter((s): s is SectionData => s !== null);
}

export function getAllLessons(): { section: string; lesson: string }[] {
    const lessons: { section: string; lesson: string }[] = [];
    const sections = getAllSections();

    for (const section of sections) {
        for (const lesson of section.lessons) {
            lessons.push({
                section: section.id,
                lesson: lesson.id,
            });
        }
    }

    return lessons;
}
