import React, { useState } from 'react';

import { 
    Container, 
    InputContainer 
} from './styles';

const Input: React.FC = () => {
    const [name, setName] = useState('')

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = ((e) => {
        // No longer need to cast to any - hooray for react!
        setName(e.target.value);
    })
  return (
    <Container>
        <input 
            type="text" 
            placeholder='Pesquisar por aluno' 
            onChange={ handleChange }
            value={ name }
        />
    </Container>
  );
}

export default Input;