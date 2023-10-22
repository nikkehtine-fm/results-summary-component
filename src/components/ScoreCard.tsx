import styled from "styled-components";
import { gradient, neutral } from "./colors.json";

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

    .circle {
        width: 50%;
        aspect-ratio: 1/1;
        border-radius: 100%;
        background: linear-gradient(
            0deg,
            ${gradient["persian-blue"]},
            ${gradient["violet-blue"]}
        );
        display: grid;
        place-items: center;
        @media screen and (max-width: 768px) {
            width: 200px;
        }
    }
    span {
        display: block;
        margin: 0.5rem;
    }
`;

export default function ScoreCard() {
    return (
        <StyledDiv>
            <span>Your result</span>
            <Score />
            <span>Great</span>
            <span>
                Scored higher than 65% of people who have taken these tests.
            </span>
        </StyledDiv>
    );
}

function Score() {
    return (
        <div className="circle">
            <span>76</span>
            <span>of 100</span>
        </div>
    );
}
