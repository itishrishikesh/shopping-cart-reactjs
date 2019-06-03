import styled from "styled-components";

const Button = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    border-color: ${props => props.cart ? "var(--mainYellow)":""};
    color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    padding: 0.2rem 0.5rem;
    curson: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: var(--lightBlue);
        color: var(--mainBlue);
    }
    &:focus{
        outline: none;
    }
`;

export default Button;