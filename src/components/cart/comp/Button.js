import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 0.9rem;
    background: transparent;
    padding: 0.25rem 0.5rem;
    color: ${props => (props.cart) ? "var(--mainBlue)" : (props.addCart ? "var(--mainYellow)" : "var(--mainWhite)") };
    border: 1px solid ${props => (props.cart) ? "var(--mainBlue)" : (props.addCart ? "var(--mainYellow)" : "var(--mainWhite)") };
    border-radius: 0.25rem;
    transition: all 0.3s ease-in-out;
    &:hover {
        letter-spacing: 0.5px;
    }
`;