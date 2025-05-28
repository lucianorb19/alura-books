import Input from '../Input';//USO DO STYLED COMPONENTE JÁ DEFINIDO EM OUTRO ARQUIVO
import styled from 'styled-components';
import { useState } from 'react'; //IMPORTAÇÃO PARA USO DE ESTADO
import { livros } from './dadosPesquisa';//IMPORTAÇÃO DA LISTA DE OBJETOS livros

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
    color: #fff;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`;

const Titulo = styled.h2`
    color: #fff;
    font-size: 36px;
    text-align: center;
    width: 100%
`;

const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`;

function Pesquisa(){
    const [livrosPesquisados, setLivrosPesquisados]= useState([]);
    var textoDigitado = '';

    console.log(livrosPesquisados);

    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
            <Input 
                placeholder="..."
                onBlur={evento => {
                    textoDigitado = evento.target.value;
                    const resultadoPesquisa = livros.filter( livro => 
                        livro.nome.includes(textoDigitado));
                    setLivrosPesquisados(resultadoPesquisa);
                }}
            />
            <p>{textoDigitado}</p>
        </PesquisaContainer>
        
    )
}

export default Pesquisa;

/* 
ANOTAÇÕES

const [textoDigitado, setTextoDigitado]= useState('');
textoDigitado - NOME DA CONSTANTE QUE GUARDA O ESTADO
setTextoDigitado - NOME DA FUNÇÃO QUE DEFINE O VALOR DO ESTADO
*LEMBRAR DE DEFINIR ESSE FUNÇÃO SEMPRE COMO "set+NOME DO ESTADO"
useState('') - DEFINE O ESTADO COM VALOR INICIAL '' (VAZIO, COMO É UMA STRING, COMEÇA VAZIA)

onBlur={evento => console.log(evento.target.value)} - SEMPRE QUE ALGO FOR DIGITADO NO CAMPO DE PESQUISA, ESSE VALOR É MOSTRADO NO LOG DO CONSOLE (ACESSÍVEL NO NAVAGADOR EM BOTÃO DIREITO - INSPECIONAR-CONSOLE)

onBlur={evento => setTextoDigitado(evento.target.value)} - DEFINE A VARIÁVEL textoDigitado COMO
SENDO O QUE TIVER SIDO DIGITADO NO CAMPO DE PESQUISA (QUE É O evento.target.value PARA A FUNÇÃO
onBlur)





*/