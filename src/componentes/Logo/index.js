import './estilo.css'//IMPORTAÇÃO ARQUIVO estilo.css DA MESMA PASTA
import logo from '../../imagens/logo.svg' //IMPORTAÇÃO IMAGEM logo.svg PARA VARIÁVEL logo

function Logo() {
    return(
         <div className='logo'>
            <img 
            src={logo} 
            alt='logo alura books' 
            className='logo-img'
            ></img>
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default Logo;//TODO COMPONENTE PRECISA SER EXPORTADO AO FINAL DE SEU ARQUIVO
/*
<img src={logo}></img> - USO DA TAG img COM A IMAGEM SENDO A VARIÁVEL logo
*/