import './App.css';//IMPORTAÇÃO DO ARQUIVO App.css - DA MESMA PASTA - ESTILO
import Logo from './componentes/Logo' //Logo É O COMPONENTE (FUNÇÃO JS) QUE FICA EM /componentes/index.js
import perfil from './imagens/perfil.svg'//ÍCONE DE PERFIL NO HEADER
import sacola from './imagens/sacola.svg'//ÍCONE DE SACOLA NO HEADER

const textoOpcoes = ['CATEGORIA','FAVORITOS','MINHA ESTANTE'];//OPÇÕES PARA O HEADER
const icones = [perfil, sacola];//ÍCONES DO HEADER

function App() {//FUNÇÃO JS QUE RETORNA UM HTML
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='opcoes'>
          { textoOpcoes.map((texto) => 
            (<li className='opcao'><p>{texto}</p></li>))}
        </ul>
        <ul className='icones'>
          {icones.map((icone) => (
            <li className='icone'><img src = {icone} alt='icone do cabeçalho'></img></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

/*
ANOTAÇÕES
className - PALAVRA RESERVADA NO React PARA DEFINIÇÃO DE CLASSES
<Logo></Logo> - USO DO COMPONENTE Logo

TODO COMPONENTE É UMA FUNÇÃO JS CUJO RETORNO É UM HTML

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


*/

export default App;//TODO COMPONENTE PRECISA SER EXPORTADO AO FINAL DE SEU ARQUIVO
