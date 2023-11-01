import styled from "styled-components";
import React, { useRef } from "react";
import CountUp, { useCountUp } from "react-countup";
import { primary, neutral } from "./colors.json";
import changeAlpha from "./alpha";
import SummaryIcon from "./SummaryIcon";

type ProgressbarProps = {
    icon: string;
    category: string;
    score: number;
    i: number;
};

const Graph = styled.div<{ $color: string; $value: number }>`
    display: flex;
    position: relative;
    gap: 0.1rem;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    margin-block: 1rem;
    background-color: ${(props) => changeAlpha(props.$color, 5)};

    &::before {
        content: "";
        background-color: ${(props) => changeAlpha(props.$color, 10)};
        height: 100%;
        width: ${(props) => props.$value}%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        border-radius: inherit;
    }
    > div {
        display: flex;
        z-index: 1;
    }
    .category {
        font-weight: 700;
        color: ${(props) => props.$color};
        flex-grow: 1;
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

    const progressRef = useRef<HTMLDivElement>(null);
    const countUp = useCountUp({
        ref: progressRef,
        end: score,
        delay: i / 4,
    });

    return (
        <Graph $color={color} $value={score}>
            <div className="category">
                <SummaryIcon source={icon} />
                <span>{category}</span>
            </div>
            <div className="score">
                <span>
                    <CountUp delay={i / 4 + 1} end={score}></CountUp>
                </span>
                <span>/</span>
                <span>100</span>
            </div>
        </Graph>
    );
}
