import React from 'react';

import { 
    Container, 
    InputContainer 
} from './styles';

interface IInputProps {
    name: string;
    setName: (name: string) => void;
}

const Input: React.FC<IInputProps> = ({
    name,
    setName
}) => {

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = ((e) => {
        // No longer need to cast to any - hooray for react!
        setName(e.target.value);
    })
  return (
    <Container>
        <InputContainer 
            type="text" 
            placeholder='Pesquisar por aluno' 
            onChange={ handleChange }
            value={ name }
        />
    </Container>
  );
}

export default Input;