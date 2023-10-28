import styled from "styled-components";
import Progressbar from "./SummaryProgessbars";
import { gradient, neutral } from "./colors.json";
import { DataEntry } from "../App";

const StyledDiv = styled.div`
    color: ${neutral["dark-gray-blue"]};
    display: flex;
    flex-direction: column;
`;

interface Props {
    items: DataEntry[];
}

export default function SummaryCard({ items }: Props): JSX.Element {
    return (
        <StyledDiv>
            <h1>Summary</h1>
            <div className="bars">
                {items.map((item, index) => (
                    <Progressbar key={index} {...item} i={index} />
                ))}
            </div>
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
    margin-block: auto;
`;
