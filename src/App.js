import './App.css';//IMPORTAÇÃO DO ARQUIVO App.css - DA MESMA PASTA - ESTILO
import logo from './imagens/logo.svg'; //IMPORTAÇÃO IMAGEM logo.svg PARA VARIÁVEL logo

function App() {//FUNÇÃO JS QUE RETORNA UM HTML
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='logo'>
          <img src={logo} alt='logo alura books'></img>
          <p><strong>Alura</strong> Books</p>
        </div>
      </header>
    </div>
  );
}

/*
ANOTAÇÕES
className - PALAVRA RESERVADA NO React PARA DEFINIÇÃO DE CLASSES
<img src={logo}></img> - USO DA TAG img COM A IMAGEM SENDO A VARIÁVEL logo

*/
export default App;
