import styled from "styled-components";
import { primary, neutral } from "./colors.json";
import changeAlpha from "./alpha";

type ProgressbarProps = {
    icon: string;
    category: string;
    score: number;
};

const Graph = styled.div<{ $color: string }>`
    display: flex;
    padding: 0.5rem;
    color: ${(props) => props.$color};
    background-color: ${(props) => changeAlpha(props.$color, 10)};
`;

export default function Progressbar({
    icon,
    category,
    score,
}: ProgressbarProps) {
    const colorsArr = Object.keys(primary);

    const barColor = (i: number) => {
        while (i >= colorsArr.length) {
            i -= colorsArr.length;
        }
        return colorsArr[i % colorsArr.length];
    };

    return (
        <Graph $color={barColor(key)}>
            <img src={icon} aria-hidden alt="icon" />
            <span className="title">{category}</span>
            <div>
                <span className="score">{score}</span>
                <span className="percent">100</span>
            </div>
        </Graph>
    );
}
