import Header from './componentes/Header';
import styled from 'styled-components';//IMPORTAÇÃO PACOTE

//UTILIZAÇÃO DO styled PARA CRIAR O 'CSS' aplicável ao AppContainer, QUE
//VAI SER UM CONTAINER COM SEU ESTILO JÁ CONFIGURADO, SEM CSS, TUDO NESSE MESMO ARQUIVO

//*li{... FICA AQUI POR ENQUANTO 
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg,#002f52 35%, #326589 165%);
`


function App() {//FUNÇÃO JS QUE RETORNA UM HTML
  return (
    <AppContainer>
          <Header/>
    </AppContainer>
  );
}

/*
ANOTAÇÕES
className - PALAVRA RESERVADA NO React PARA DEFINIÇÃO DE CLASSES
<Logo></Logo> - USO DO COMPONENTE Logo
*BOM HÁBITO: COLOCAR O NOME DO COMPONENTE COM O MESMO NOME DA PASTA

ESCREVER TAGS SEM FILHOS (SEM CONTEÚDO DENTRO), PODE SER SIMPLIFICADO
<Logo></Logo> É O MESMO QUE <Logo/>

TODO COMPONENTE É UMA FUNÇÃO JS CUJO RETORNO É UM HTML

TODO COMPONENTE PRECISA SER USADO DENTRO DE UMA TAG PAI

USO DE map EM LISTAS DE TEXTOS
ESSE TRECHO HTML
<ul className='opcoes'>
    <li className='opcao'><p>CATEGORIA</p></li>
    <li className='opcao'><p>MINHA ESTANTE</p></li>
    <li className='opcao'><p>FAVORITOS</p></li>
</ul>

PODE SER REPRESENTADO COMO
<ul className='opcoes'>
  { textoOpcoes.map((texto) => 
    (<li className='opcao'><p>{texto}</p></li>))}
</ul>

CONSIDERANDO QUE EM ALGUM PONTO ANTERIOR DO CÓDIGO JÁ TENHA SIDO DECLARADA A LISTA DE CONSTANTES
const textoOpcoes = ['CATEGORIA','FAVORITOS','MINHA ESTANTE']

ACIMA É USADA A FUNÇÃO map QUE FAZ ALGO ESPECÍFICO PARA CADA ITEM DA LISTA textoOpcoes, NESSE CASO,
SALVA CADA ITEM NA VARIÁVEL texto E REPRESENTA CADA ITEM NUMA TAG li


USO DE map EM LISTA DE COMPONENTES
<ul className='icones'>
  {icones.map((icone)=> (
    <li className='icone'><img src = {icone}></img></li>
  ))}
</ul>

CONSIDERANDO AS DECLARAÇÕES ANTERIORES
import perfil from './imagens/perfil.svg'//ÍCONE DE PERFIL NO HEADER
import sacola from './imagens/sacola.svg'//ÍCONE DE SACOLA NO HEADER
const icones = [perfil, sacola];//ÍCONES DO HEADER


STYLED COMPONENTS

<AppContainer>
  <Header/>
</AppContainer>

UTILIZAÇÃO DO CONTAINER AppContainer PARA CRIAR UM ESTILO QUE ENVOLVE O COMPONENTE Header


*/

export default App;//TODO COMPONENTE PRECISA SER EXPORTADO AO FINAL DE SEU ARQUIVO PARA SER ACESSÍVEL POR OUTROS
