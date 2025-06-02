# Alura-Books

## DOWNLOADS NECESSÁRIOS
Visual Studio Code - v.1.100.1
NodeJS - v.22.12 / v.22.15

## PASSOS INICIAIS
Pasta alura-books
Abrir pelo terminal do VS Code
npx create-react-app .

npm start - roda a aplicação
No terminal é mostrado o endereço do localhost onde está sendo executado.

CTRL+c - para a aplicação


## ARQUIVOS DA ESTRUTURA BASE
package.json - configurações básicas - nome do projeto, versão, dependências, ....
src/ - códigos da aplicação(app.css, app.js)


## COMPONENTES NO REACT
Componentes são funções JS cujo retorno é um HTML, logo, podem ser criados componentes que assumem o papel de trechos do front-end, tais como imagens de cabeçalho, parágrafos, divs, ...., qualquer parte do front que possa ser representada por um trecho HTML pode se tornar um componente. 

Com essa facilidade em dividir o código em componentes, também é facilitado a organização. Por exemplo, uma logo da página é um componente Logo que fica na pasta componentes/Logo/index.js
Nesse arquivo pode ser aplicado um CSS único dele, e todo esse componente, já com a estilização, pode ser importado na página App.js


## STYLED COMPONENTS
Pacote para estilização de componentes. Evitar o uso do CSS puro e adotar a utilização do pacote

Instalação: no terminal vscode - npm install styled-components

Exemplo: Trocar a estilização CSS da classe App.js
Atualmente:
```
function App() {//FUNÇÃO JS QUE RETORNA UM HTML
  return (
    <div className='App'>
          <Header/>
    </div>
  );
}
```

Com o CSS
```
.App{
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg,#002f52 35%, #326589 165%);
}

li{
  list-style: none;
}
  justify-content: center;
}
```

Para que isso possa ser feito com o styled components, mudar no arquivo principal (App.js) para
```
import Header from './componentes/Header';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg,#002f52 35%, #326589 165%);
  li{
  list-style: none;
}
`

function App() {//FUNÇÃO JS QUE RETORNA UM HTML
  return (
    <AppContainer>
          <Header/>
    </AppContainer>
  );
}
```

Agora não é mais necessário o arquivo CSS e o estilo aplicado ao componente <Header/> está no mesmo arquivo, tudo em JS.

Isso é mesmo vantajoso? Pq não usar o CSS local? Qual a diferença?

Parece ser utilizável apenas para situações onde o CSS do componente seja simples o bastante para ser utilizado somente pelo container direto no arquivo js.


## GLOBAL STYLE
Uma maneira de definir algumas configurações de estilo únicas para todo o projeto. Em src/index.js
Importar pacote createGlobalStyle, do styled-compoments e definir dentro dele as configurações globais
```
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

li {
  list-style: none;
}

`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
```

Excluir  o arquivo index.css (dado que suas definições estão no contêiner GlobalStyle).
Agora, o estilo para tags body, code e li são globais no projeto.
*O li foi retirado da definição de container em App.js*

Aplicação de Styled Components para todos os componentes. Em componentes/
IconesHeader - excluir estilos.css

```
import styled from 'styled-components'

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    cursor: pointer;
`

const icones = [perfil, sacola];//ÍCONES DO HEADER

function IconesHeader(){
    return(
         <Icones>
            {icones.map((icone) => (
                <Icone>
                    <img src = {icone} alt='icone do cabeçalho'></img>
                </Icone>
          ))}
        </Icones>
    )
}
```

OpcoesHeader->excluir estilo.css
```
import styled from 'styled-components'

const Opcoes = styled.ul`
    display: flex;
    align-items: center;
`

//CONTEINER li
const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const textoOpcoes = ['CATEGORIA','FAVORITOS','MINHA ESTANTE'];//OPÇÕES PARA O HEADER

function OpcoesHeader(){
    return(
        <Opcoes>
            { textoOpcoes.map((texto) => 
                (<Opcao>
                    <p>{texto}</p>
                </Opcao>))}
        </Opcoes>
    )
}
```

Logo-> excluir estilo.css
```
import styled from 'styled-components'

//CONTAINER PARA DIV
const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

//CONTAINER PARA IMAGEM
const LogoImage = styled.img`
    margin-right: 10px;
`

function Logo() {
    return(
         <LogoContainer>
            <LogoImage 
            src={logo} 
            alt='logo alura books' 
            />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}
```

## COMPONENTE QUE SÓ GUARDA ESTILO
No projeto, a função de pesquisa foi feita com o componente Pesquisa, em App.js
Esse componente, especificamente, usa outro componente Input, que só guarda o estilo para tags do tipo input. Agora, dado esse campo de pesquisa, como filtrar o que aparece na tela pelo que está escrito no campo?

ESTADOS NO REACT
Estados são maneiras de guardar valores em constantes, usando um pacote específico do react. Esses valores podem ser utilizados para filtrar pesquisas,.....

No exemplo do projeto é usado um estado chamado de textoDigitado, que guarda o valor inserido no campo de pesquisa e mostra ele numa tag p abaixo do campo, sempre que o evento onBlur ocorre, ou seja, sempre que algo é digitado no campo de pesquisa, e a pessoa clica fora dele, esse conteúdo aparece na página.
```
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

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p{
        width: 200px;
    }

    img{
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`;

function Pesquisa(){
    const [livrosPesquisados, setLivrosPesquisados]= useState([]);
    var textoDigitado = '';

    //FUNÇÃO QUE FILTRA OS LIVROS PELO NOME DO CAMPO PESQUISA E 
    //DEFINE A VARIÁVEL resultadoPesquisa COM OS LIVROS CORRESPONDENTES
    //TUDO ISSO NO EVENTO DE onBlur
    function fazPesquisa(evento){
        textoDigitado = evento.target.value;
        const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado));
        setLivrosPesquisados(resultadoPesquisa);
    }

    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
            <Input 
                placeholder="..."
                onBlur={evento => fazPesquisa(evento)}
            />
            
            {livrosPesquisados.map( livro =>
                <Resultado>
                    <img src = {livro.src} />
                     <p>{livro.nome}</p>
                </Resultado>
            )}
        </PesquisaContainer>
    )
}
```

## PROPS
É uma característica do react que permite estilizar de maneiras diferentes um mesmo componente, para que seu uso seja adequado para partes diferentes da aplicação.

### PROPS NO STYLED COMPONENT
No projeto, o exemplo usado é de uma seção, abaixo de pesquisar, com lançamentos recentes. Essa seção usa um componente UltimosLancamentos, e dentro deste componente é importado outro, Titulo, que faz uso do props. A configuração do props é feita no styled component
```
import styled from "styled-components";

 export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#EB9B00'};
    font-size: 36px;
    text-align: center;
    margin: 0;
`;
```

`color: ${props => props.cor || '#EB9B00'};`
UTILIZAÇÃO DE props PARA DEFINIR QUE, NESSE STYLED COMPONENT Titulo, NO MOMENTO DE SEU USO,
O ATRIBUTO color DO CSS SERÁ DEFINIDO PELO QUE ESTIVER DEFINIDO NO ATRIBUTO cor. SE NADA FOR
DEFINIDO, O VALOR PADRÃO SERÁ #EB9B00

E no index do componente UltimosLancamentos, seu uso é feito. No exemplo abaixo, é usado de duas formas diferentes, para exemplificar o funcionamento
```
function UltimosLancamentos(){
    return(
        <UltimosLancamentosContainer>
            <Titulo cor = '#000'>ÚLTIMOS LANÇAMENTOS</Titulo>
            <Titulo>ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
            {livros.map( livro => (
                <img src={livro.src}/>
            ))}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
        
    )
}
```


### PROPS NO CONTEÚDO DO COMPONENT
O props também pode ser utilizado para mudar o conteúdo de um componente. A configuração de como o conteúdo vai mudar é feito no próprio componente, pelas variáveis dentro da sua função principal. No exemplo abaixo, é aplicada a um componente que vai representar um card de recomendações de livros, dentro do componente UltimosLancamentos. 

Nesse mesmo exemplo também é feita estilização do componentes por meio de styled components e uso do componente Titulo, que já usa prop no styled component

```
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
```



E seus valores são definidos durante o uso de CardRecomenda, em UltimosLancamentos, em dois cards diferentes
```
<CardRecomenda 
                titulo = 'Talvez você se interesse por'
                subtitulo = 'Angular 11' 
                descricao = 'Construindo uma aplicação com a plataforma Google'
                img = {imagemLivro}
                alt = 'Imagem Angular 11' 
            />

            <CardRecomenda 
                titulo = 'Talvez você se interesse por'
                subtitulo = 'Angular 12' 
                descricao = 'Fique rico depois de trabalhar com a Google!'
                img = {imagemLivro}
                alt = 'Imagem Angular 12' 
            />
```