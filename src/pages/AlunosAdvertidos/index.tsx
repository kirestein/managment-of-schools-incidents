import React from 'react';
import { Container } from './styles';
import ContentHeader from '../../components/ContentHeader';
import Input from '../../components/Input';
import SelectDate from '../../components/SelectDate';


const AlunosAdvertidos: React.FC = (() => {
  return (
    <Container>
      <ContentHeader
            title="Ocorrencias"
            linecolor="#F7931B"
            children2={ <Input/> }
        >
            <SelectDate/>
        </ContentHeader>
    </Container>
  )
});

export default AlunosAdvertidos;