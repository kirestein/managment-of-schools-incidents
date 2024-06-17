import React, { Component } from 'react'
import { 
  Container, 
  Header, 
  LogImg, 
  Title,
  MenuContainer, 
  MenuItemLink,
  Footer
 } from './style';
import Logo from '../../assets/logo.svg'
import { PiSealWarningFill } from "react-icons/pi";
import { FaBell } from "react-icons/fa";

export default class Aside extends Component {
  render() {
    return (
      <Container>
        <Header>
          <LogImg src={Logo} alt="logo" />
          <Title>Meu App</Title>
        </Header>

        <MenuContainer>
          <MenuItemLink href="#">
            <FaBell />
            Ocorrências
          </MenuItemLink>
          <MenuItemLink href="#">
            <PiSealWarningFill />
            Alunos Advertidos
          </MenuItemLink>
        </MenuContainer>
        <Footer>
          Aqui é a parte debaixo
        </Footer>
      </Container>
    )
  }
}
