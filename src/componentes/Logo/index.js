import logo from '../../imagens/logo.svg' //IMPORTAÇÃO IMAGEM logo.svg PARA VARIÁVEL logo
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

export default Logo;//TODO COMPONENTE PRECISA SER EXPORTADO AO FINAL DE SEU ARQUIVO
/*
<img src={logo}></img> - USO DA TAG img COM A IMAGEM SENDO A VARIÁVEL logo
*/