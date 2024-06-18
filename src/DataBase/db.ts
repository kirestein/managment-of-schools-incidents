const ENDPOINT = "http://localhost:3000/api";

export const obterOcorrencias = async() => {
    try {
        const ocorrencia = await fetch(`${ENDPOINT}/ocorrencia`);
        if (!ocorrencia.ok) {
            throw new Error(`HTTP error! status: ${ocorrencia.status}`);
        }
        // console.log('Resposta do servidor:', ocorrencia);
        const dados = await ocorrencia.json();
        // console.log('ocorrencias:', dados);
        return dados;
    } catch (error) {
        console.error('Erro ao obter ocorrências:', error);
        if (error instanceof TypeError) {
            console.error('Detalhes do erro:', error.name, error.message, error.stack);
        }
    }
};




export const obterAlunosAdvertidos = async() => {
    try {
        const alunosAdvertidos = await fetch(`${ENDPOINT}/advertencia`);
        const dados = await alunosAdvertidos.json();
        // console.log('Alunos advertidos:', dados);
        return dados
    } catch (error) {
        console.error('Erro ao obter alunos advertidos:', error);
    }
}

export const obterWeather = async() => {
    try {
        const weather = await fetch(`${ENDPOINT}/weather`);
        const dados = await weather.json();
        console.log('weather:', dados);
        return dados;
    } catch (error) {
        console.error('Erro ao obter weather:', error);
    }
}

obterOcorrencias();
obterAlunosAdvertidos();
obterWeather();