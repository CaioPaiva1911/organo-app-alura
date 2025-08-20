import { IColaborator } from '../../shared/interfaces/Colaborator';
import './Colaborator.css'
import { IoIosCloseCircle , IoMdHeart, IoIosHeartEmpty } from "react-icons/io"

interface ColaboratorProps {
    colaborator: IColaborator;
    backgroundColor: string;
    onDelete: (id: string) => void;
    onFavorite: (id: string) => void;
}

const Colaborator = ({colaborator, backgroundColor, onDelete, onFavorite }: ColaboratorProps) => {

    function toFavorite() {
        onFavorite(colaborator.id)
    }
    const propsFavorite = {
        size: 25,
        onClick: toFavorite
    }

    // Função para validar e corrigir o formato da cor
    function validateColor(color: string): string {
        const hexColorPattern = /^#([0-9A-F]{3}){1,2}$/i;
        if (hexColorPattern.test(color)) {
            return color;
        }
        return '#000000'; // Cor padrão caso a cor fornecida não seja válida
    }

    return (<div className='colaborator'>
        <IoIosCloseCircle  
            size={25} 
            className='delete' 
            onClick={() => onDelete(colaborator.id)} 
        />
        <div className='cabecalho' style={{backgroundColor: validateColor(backgroundColor)}}>
            <img src={colaborator.image} alt={colaborator.name} />
        </div>
        <div className='rodape'>
            <h4>{colaborator.name}</h4>
            <h5>{colaborator.cargo}</h5>
            <div className='favorite'>
                {colaborator.favorited 
                    ? <IoMdHeart {...propsFavorite}  color='#ff0000'/> 
                    : <IoIosHeartEmpty {...propsFavorite} /> 
                }  
            </div>
        </div>
    </div>)
}

export default Colaborator