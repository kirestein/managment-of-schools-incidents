import styled from "styled-components";

export const Container = styled.div``

export const InputContainer = styled.input`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    > input {
        height: 2rem;
        padding: 0 0.5rem;
        border-radius: 0.25rem;
        border: 1px solid ${props => props.theme.colors.gray};
        background-color: ${props => props.theme.colors.white};
    }
`