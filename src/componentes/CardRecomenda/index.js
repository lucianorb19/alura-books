import styled from "styled-components";
import { Titulo } from '../Titulo';

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px; 
`;

const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`;

const Descricao = styled.p`
    max-width: 300px;
`;

const ImgLivro = styled.img`
    width: 150px;
`;

const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
   
    &:hover {
        cursor: pointer;
    }
`;



function CardRecomenda({titulo, subtitulo, descricao, img, alt}){
    return(
        <Card>
            <div>
                <Titulo
                    tamanhoFonte='16px'
                    cor='#EB9B00'
                    alinhamento='left'
                >
                    {titulo}
                </Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <ImgLivro src = {img} alt = {alt}/>
                <Botao>Saiba Mais</Botao>
            </div>
        </Card>
    )
}

export default CardRecomenda;

/*
ANOTAÇÕES
function CardRecomenda({titulo, subtitulo, descricao, img, alt}){
CADA UMA DESSAS VARIÁVEIS PASSADAS NOS PARÂMETROS DA FUNÇÃO PRINCIPAL REPRESENTA UMA PROP QUE VAI SER DEFINIDA NA APLICAÇÃO DO COMPONENTE. SEU FUNCIONAMENTO É DEFINIDO DENTRO DO PRÓPRIO RETORNO

<h3>{titulo}</h3>
O QUE FOR DEFINIDO PARA titulo NO USO DO COMPONENTE, SERÁ O CONTEÚDO PARA A TAG h3
*/