import "./App.css";
import ResultCard from "./components/ResultCard.tsx";
import SummaryCard from "./components/SummaryCard.tsx";
import data from "./assets/data.json";

export type DataEntry = {
    category: string;
    score: number;
    icon: string;
};

export type ScoreCardProps = {
    score: number;
    message: string;
    description: string;
};

const OverviewData: ScoreCardProps = (() => {
    const SCORE = Math.round(
        data.reduce((acc, curr) => acc + curr.score, 0) / data.length
    );

    return {
        score: SCORE,

        message: (() => {
            if (SCORE >= 85) {
                return "Excellent!";
            } else if (SCORE >= 70) {
                return "Great";
            } else if (SCORE >= 50) {
                return "Not bad.";
            } else {
                return "Keep trying!";
            }
        })(),

        description: (() => {
            if (SCORE >= 90) {
                return "You scored incredibly high, beating 95% of the people who have taken these tests! Bravo!";
            } else if (SCORE >= 85) {
                return "You scored higher than 80% of the people who have taken these tests.";
            } else if (SCORE >= 70) {
                return "You scored higher than 65% of the people who have taken these tests.";
            } else if (SCORE >= 50) {
                return "You scored higher than 45% of the people who have taken these tests.";
            } else {
                return "You scored lower than most people who have taken these tests. Keep trying!";
            }
        })(),
    } as ScoreCardProps;
})();

export default function App() {
    return (
        <>
            <ResultCard {...OverviewData} />
            <SummaryCard items={data} />
        </>
    );
}
