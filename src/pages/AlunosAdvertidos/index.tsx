import React from 'react';
import { Container, Content } from './styles';
import ContentHeader from '../../components/ContentHeader';
import Input from '../../components/Input';
import { useState } from 'react';
import { useEffect } from 'react';
import { 
    obterAlunosAdvertidos,
} from '../../DataBase/db';

import AdvertenciasComponent from '../../components/AdvertenciasComponent';

function textwrapFill(text: string, width: number): string {
    let lines = text.split('\n');
    for (let i = 0; i < lines.length; i++) {
        let words = lines[i].split(' ');
        let line = '';
        while (words.length > 0) {
            if (line.length + words[0].length <= width) {
                line += words.shift() + ' ';
            } else {
                break;
            }
        }
        lines[i] = line.trim();
    }
    return lines.join('\n');
}

const AlunosAdvertidos: React.FC = (() => {
  const [advertencia, setAdvertencia] = useState<any[]>([]);
  const [filtro, setFiltro] = useState<string>('');
  useEffect(() => {
      const fetchAdvertencia = async (): Promise<any[]> => {
          console.log('message: '+ await obterAlunosAdvertidos());
          
          const result: any = await obterAlunosAdvertidos();
          // console.log('result: '+ result);            
          return Array.isArray(result) ? result : []; // Garante que result seja um array
      };
      fetchAdvertencia().then((result) => setAdvertencia(result));
      console.log('olá: '+advertencia);
      
  }, []);
  const dado = filtro;
  const advertenciasFiltradas = [ ... new Set( (advertencia.filter((advertencia) => 
      dado === '' || advertencia.includes(dado))))];
  console.log('advertenciasFiltradas: '+advertenciasFiltradas);
  return (
    <Container>
        <ContentHeader
            title="Alunos Advertidos"
            linecolor="#F7931B"
        >
            <Input name={ filtro } setName={ setFiltro }/>
        </ContentHeader>
        <Content>
        {
            advertenciasFiltradas.map((ocorrencia, index) => (
                <AdvertenciasComponent 
                    key={index}
                    message={textwrapFill(ocorrencia, 100)}
                    name={filtro}
                />
            ))
        }
            
        </Content>
    </Container>
  )
});

export default AlunosAdvertidos;