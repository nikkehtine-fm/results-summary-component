import styled from "styled-components";
import { primary, neutral } from "./colors.json";
import changeAlpha from "./alpha";
import SummaryIcon from "./SummaryIcon";

type ProgressbarProps = {
    icon: string;
    category: string;
    score: number;
    i: number;
};

const Graph = styled.div<{ $color: string }>`
    display: flex;
    gap: 0.1rem;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    margin-block: 1rem;
    background-color: ${(props) => changeAlpha(props.$color, 5)};

    > div {
        display: flex;
    }
    .category {
        flex-grow: 1;
        color: ${(props) => props.$color};
        gap: 1rem;
        img {
            width: 1.2rem;
        }
    }
    .score {
        font-weight: 800;
        color: ${changeAlpha(neutral["dark-gray-blue"], 50)};
        span:first-of-type {
            color: ${neutral["dark-gray-blue"]};
        }
        gap: 0.3rem;
    }
`;

export default function Progressbar({
    icon,
    category,
    score,
    i,
}: ProgressbarProps): JSX.Element {
    /**
     * Retrieves the color from the colorsArr based on the given index i.
     */
    const getBarColor = (i: number): string => {
        const colorsArr = Object.values(primary);
        while (i >= colorsArr.length) {
            i -= colorsArr.length;
        }
        return colorsArr[i % colorsArr.length];
    };
    let color: string = getBarColor(i);

    return (
        <Graph $color={color}>
            <div className="category">
                <SummaryIcon source={icon} />
                <span>{category}</span>
            </div>
            <div className="score">
                <span>{score}</span>
                <span>/</span>
                <span>100</span>
            </div>
        </Graph>
    );
}
