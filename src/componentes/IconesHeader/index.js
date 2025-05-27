import perfil from '../../imagens/perfil.svg';//ÍCONE DE PERFIL NO HEADER
import sacola from '../../imagens/sacola.svg';//ÍCONE DE SACOLA NO HEADER
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


export default IconesHeader;