import styled from "styled-components";


export const Container = styled.div`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 1rem;

    border-right: 1px solid ${props => props.theme.colors.gray};
`

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 10px;
`

export const LogImg = styled.img`
    height: 3rem;
    width: 3rem;
    border-radius: 3rem;
`

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
`

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    transition: opacity .3s;
    margin: 7px 0;
    display: flex;
    align-items: center;
    &:hover {
        opacity: .7;
    }
    > svg {
        font-size: 20px;
        margin-right: 5px;
    }
`

export const MenuItemButton = styled.button`
    font-size: 16px;
    color: ${props => props.theme.colors.info};
    border: none;
    background: none;
    transition: opacity .3s;
    margin: 7px 0;
    display: flex;
    align-items: center;
    &:hover {
        opacity: .7;
    }
    > svg {
        font-size: 20px;
        margin-right: 5px;
    }
`

export const MdDashboard = styled.div`
    font-size: 20px;
`

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2rem 0.5rem;
    height: 1rem;
    color: ${props => props.theme.colors.white};
    border-top: 1px solid ${props => props.theme.colors.gray};
    font-size: 20px;
    margin-bottom: 1rem;
    position: absolute;
    bottom: 0rem;
`