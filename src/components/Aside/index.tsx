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
import { obterWeather } from '../../DataBase/db';

export default class Aside extends Component {
  componentDidMount() {
    let weatherElement: any = document.getElementById('weather')
    obterWeather().then(dados => {
      weatherElement.textContent = dados;
    });
  }
  render() {
    return (
      <Container>
        <Header>
          <LogImg src={Logo} alt="logo" />
          <Title>Gestão de Ocorrências</Title>
        </Header>

        <MenuContainer>
          <MenuItemLink href="/ocorrencias">
            <FaBell />
            Ocorrências
          </MenuItemLink>
          <MenuItemLink href="/alunos-advertidos">
            <PiSealWarningFill />
            Alunos Advertidos
          </MenuItemLink>
        </MenuContainer>
        <Footer>
          <span id="weather"></span>
        </Footer>
      </Container>
    )
  }
}
