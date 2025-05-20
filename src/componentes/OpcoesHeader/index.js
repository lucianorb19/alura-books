import './estilo.css';
const textoOpcoes = ['CATEGORIA','FAVORITOS','MINHA ESTANTE'];//OPÇÕES PARA O HEADER

function OpcoesHeader(){
    return(
        <ul className='opcoes'>
            { textoOpcoes.map((texto) => 
                (<li className='opcao'><p>{texto}</p></li>))}
        </ul>
    )
}

export default OpcoesHeader;