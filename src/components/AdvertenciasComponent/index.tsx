import React from 'react';

import { Container } from './styles';

interface IAdvertenciasComponentProps {
  message: string
  name: string
}

const AdvertenciasComponent: React.FC<IAdvertenciasComponentProps> = ({
  message,
  name
}) => {
  const dado = name;
  const shouldDisplayMessage = (dado === '' || message.includes(dado));
  return (
    <Container>
      {shouldDisplayMessage && message}
    </Container>
  );
}



export default AdvertenciasComponent;