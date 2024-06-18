import React from 'react';

import { Container } from './styles';

interface IOcorrenciasComponentProps {
  message: string
  name: string
  data: string
}

const OcorrenciasComponent: React.FC<IOcorrenciasComponentProps> = ({
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



export default OcorrenciasComponent;