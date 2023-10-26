import "./App.css";
import ScoreCard from "./components/ScoreCard.tsx";
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

const overviewData: ScoreCardProps = {
    score: 76,
    message: "Great",
    description:
        "You scored higher than 65% of people who have taken these tests.",
};

export default function App() {
    return (
        <>
            <ScoreCard {...overviewData} />
            <SummaryCard {...data} />
        </>
    );
}
