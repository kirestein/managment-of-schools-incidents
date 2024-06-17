import React from 'react'
import ContentHeader from '../../components/ContentHeader';
import { Container } from './styles';
import Input from '../../components/Input';
import SelectDate from '../../components/SelectDate';

const Ocorrencias: React.FC = () => {

    const options = [
        {
            value: 'teste1',
            label: 'Erik'
        },
        {
            value: 'teste2',
            label: 'Erik'
        },
        {
            value: 'teste3',
            label: 'Erik'
        }
    ];

    return (
    <Container>
        <ContentHeader
            title="Ocorrencias"
            linecolor="#F7931B"
            children2={ <Input/> }
        >
            <SelectDate />
        </ContentHeader>
    </Container>
    )
}

export default Ocorrencias;
