import styled from "styled-components";
import { gradient, neutral } from "./colors.json";
import changeAlpha from "./alpha";
import { ScoreCardProps } from "../App";

const StyledDiv = styled.div`
    color: ${neutral.white};
    border-radius: 2rem;
    background: linear-gradient(
        180deg,
        ${gradient["light-slate-blue"]},
        ${gradient["light-royal-blue"]}
    );
    text-align: center;
    display: grid;
    place-items: center;
    @media screen and (max-width: 768px) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        flex: 1 1 200px;
    }

    h1 {
        color: ${changeAlpha(neutral["white"], 75)};
    }

    span {
        display: block;
        margin: 0.5rem;
    }

    #result-title {
        font-size: 1.75rem;
        font-weight: 700;
    }
    #result-description {
        color: ${changeAlpha(neutral["white"], 75)};
        width: 80%;
        max-width: 400px;
        margin-block-end: 1.5rem;
    }
`;

export default function ScoreCard(props: ScoreCardProps): JSX.Element {
    return (
        <StyledDiv>
            <h1>Your Result</h1>
            <Score score={props.score} />
            <span id="result-title">{props.message}</span>
            <span id="result-description">{props.description}</span>
        </StyledDiv>
    );
}

const Circle = styled.div`
    width: 200px;
    aspect-ratio: 1/1;
    border-radius: 100%;
    background: linear-gradient(
        0deg,
        ${gradient["persian-blue"]},
        ${gradient["violet-blue"]}
    );
    margin: 1rem;
    position: relative;
    display: grid;
    place-items: center;
    @media screen and (max-width: 768px) {
        width: 200px;
    }

    #result-score {
        font-size: 4rem;
        font-weight: 800;
        position: absolute;
        transform: translateY(-6.66%);
    }
    #result-percent {
        color: ${changeAlpha(neutral["white"], 50)};
        position: absolute;
        bottom: 15%;
    }
`;

function Score({ score }: { score: number }): JSX.Element {
    return (
        <Circle>
            <span id="result-score">{score}</span>
            <span id="result-percent">of 100</span>
        </Circle>
    );
}
