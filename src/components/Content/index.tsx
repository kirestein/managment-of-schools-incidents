import React from 'react'
import { Container } from './style'
import ContentHeader from '../ContentHeader'

interface IContentProps {
  children: React.ReactNode
}

const Content: React.FC<IContentProps> = ({ children }: any) => {
  return (
    <Container>
      {children}
    </Container>
  )
}


export default Content
