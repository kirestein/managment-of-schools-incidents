import React, { Component, useMemo } from 'react';
import Toggle from '../../Toggle'
import { 
  Container, 
  Profile,
  Welcome,
  UserName
 } from './style';
 import emojis from '../../utils/emojis';


const MainHeader: React.FC = (() => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice]
  },[])
  return (
    <Container>
        <Toggle />
      <Profile>
        <Welcome>Olá, { emoji }</Welcome>
        <UserName>Cristhiane Proença</UserName>          
      </Profile>
    </Container>
  )
})
export default MainHeader
