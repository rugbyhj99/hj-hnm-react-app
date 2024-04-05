import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
    console.log("아이템은?",item);
    const navigate = useNavigate();
    // 상품을 눌렀을때 상품디테일페이지로 가는 함수
    const showDetail = () => {
        navigate(`/product/${item.id}`)
    }
  return (    
    // 상품을 눌럿을때 상품디테일페이지로 가자
    <div className="card-container" onClick={showDetail}>
        <img src ={item?.img} className="product-card-img"/>
        <div className="highlight">
            <div className="highlight-choice"> {item?.choice == true? "추천" : null} </div>
            <div className="highlight-new"> {item?.new == true? "New" : null} </div>
        </div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>        
    </div>
  )
}

export default ProductCard