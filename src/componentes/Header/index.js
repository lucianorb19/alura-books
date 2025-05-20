import Logo from '../Logo'; //Logo É O COMPONENTE (FUNÇÃO JS) QUE FICA EM /componentes/Logo/index.js
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';//PACOTE styled components

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
}
`

function Header(){
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header;