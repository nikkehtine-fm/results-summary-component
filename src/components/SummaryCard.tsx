import styled from "styled-components";
import { primary, gradient, neutral } from "./colors.json";

const StyledDiv = styled.div`
    color: ${neutral["dark-gray-blue"]};
    display: flex;
    flex-direction: column;
`;

export default function SummaryCard() {
    return (
        <StyledDiv>
            <h1>Summary</h1>
            <Button>Continue</Button>
        </StyledDiv>
    );
}

const Button = styled.button`
    color: ${neutral["white"]};
    background-color: ${neutral["dark-gray-blue"]};
    &:hover {
        background: linear-gradient(
            180deg,
            ${gradient["light-slate-blue"]},
            ${gradient["light-royal-blue"]}
        );
    }
    cursor: pointer;
    text-align: center;
    border: transparent;
    border-radius: 2rem;
    padding: 1rem;
    margin-block: 1rem;
`;