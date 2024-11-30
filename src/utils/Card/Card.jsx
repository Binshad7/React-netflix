import { imgUrl } from '../../constants/constants'
import { ProductContext } from '../../context/ProductID';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css'
function Card({itemId,imgURL,title,overview}){
  const navigate = useNavigate()
  const {handleProduct} = useContext(ProductContext);
   const onHnadle = (id,backdrop_path,name,overview)=>{
   handleProduct({id,backdrop_path,name,overview})
   navigate('/DisplayDetails')
   }
    return (
        <>
         <div onClick={()=> onHnadle(itemId,imgURL,title,overview)} className="card" key={itemId}>
            <img src={`${imgUrl+imgURL}`} alt={title} loading='lazy' />
            <div className="card-info">
              <h3>{title}</h3>
              </div>
            </div>
            </>
    )
    }
    export default Card
