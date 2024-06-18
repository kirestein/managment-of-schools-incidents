import React, { useMemo } from 'react'
import ContentHeader from '../../components/ContentHeader';
import { Container, Content } from './styles';
import Input from '../../components/Input';
import SelectDate from '../../components/SelectDate';
import OcorrenciasComponent from '../../components/OcorrenciasComponent';
import { useState } from 'react';
import { useEffect } from 'react';
import { 
    obterOcorrencias,
} from '../../DataBase/db';

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

const Ocorrencias: React.FC = () => {

    const [ocorrencias, setOcorrencias] = useState<any[]>([]);
    const [filtro, setFiltro] = useState<string>('');
    const [data, setData] = useState<string>('');
    useEffect(() => {
        const fetchOcorrencias = async (): Promise<any[]> => {
            // console.log('message: '+ await obterOcorrencias());
            
            const result: any = await obterOcorrencias();
            // console.log('result: '+ result);            
            return Array.isArray(result) ? result : []; // Garante que result seja um array
        };
        fetchOcorrencias().then((result) => setOcorrencias(result));
        // console.log('olá: '+ocorrencias);
        
    }, []);
    const dado = filtro ? filtro : data;
    const ocorrenciasFiltradas = [ ... new Set( (ocorrencias.filter((ocorrencia) => 
        dado === '' || ocorrencia.includes(dado))))];
    // console.log('ocorrenciasFiltradas: '+ocorrenciasFiltradas);
    console.log(typeof(data));
    
    return (
    <Container>
        <ContentHeader
            title="Ocorrencias"
            linecolor="#F7931B"
            children2={ <Input name={ filtro } setName={ setFiltro }/> }
        >
            <SelectDate setDate={setData}/>
        </ContentHeader>
        <Content>
        {
            ocorrenciasFiltradas.map((ocorrencia, index) => (
                <OcorrenciasComponent 
                    key={index}
                    message={textwrapFill(ocorrencia, 100)}
                    name={filtro}
                    data={data}
                />
            ))
        }
            
        </Content>
    </Container>
    )
}

export default Ocorrencias;
