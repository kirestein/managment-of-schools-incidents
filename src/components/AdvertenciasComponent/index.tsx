import React from 'react';

import { Container } from './styles';

interface IAdvertenciasComponentProps {
  message: string
  name: string
  data: string
}

const AdvertenciasComponent: React.FC<IAdvertenciasComponentProps> = ({
  message,
  name,
  data
}) => {
  const dado = name ? name : data;
  const shouldDisplayMessage = (dado === '' || message.includes(dado));
  return (
    <Container>
      {shouldDisplayMessage && message}
    </Container>
  );
}



export default AdvertenciasComponent;