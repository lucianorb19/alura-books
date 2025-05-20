import './estilo.css';
import perfil from '../../imagens/perfil.svg';//ÍCONE DE PERFIL NO HEADER
import sacola from '../../imagens/sacola.svg';//ÍCONE DE SACOLA NO HEADER

const icones = [perfil, sacola];//ÍCONES DO HEADER


function IconesHeader(){
    return(
         <ul className='icones'>
            {icones.map((icone) => (
                <li className='icone'><img src = {icone} alt='icone do cabeçalho'></img></li>
          ))}
        </ul>
    )
}


export default IconesHeader;