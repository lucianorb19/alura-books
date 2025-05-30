import styled from "styled-components";


 export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte || '18px'}; 
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
`;

/*
ANOTAÇÕES
color: ${props => props.cor || '#EB9B00'};
UTILIZAÇÃO DE props PARA DEFINIR QUE, NESSE STYLED COMPONENT Titulo, NO MOMENTO DE SEU USO,
O ATRIBUTO color DO CSS SERÁ DEFINIDO PELO QUE ESTIVER DEFINIDO NO ATRIBUTO cor. SE NADA FOR
DEFINIDO, O VALOR PADRÃO SERÁ #EB9B00



*/