import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
// Contaienr, Row, Col import
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSearchParams } from 'react-router-dom';


const ProductAll = () => {  
  // url쿼리값 가져오는 useSearchParams
  const [query, setQuery] = useSearchParams();
  // 프로덕트 리스트 생성
  const [productList, setProductList] = useState([]);
  // 데이터호출 
  const getProducts = async() => {
    // q라고 시작되는 아이템을 가져오기  
    let searchQuery = query.get('q') || "";
    console.log("쿼리값은", searchQuery); 
    // 받은 searchQuery값을 url에 넣어준다. 만약에 q쿼리가 없으면 빈스트링이다
    let url = `https://my-json-server.typicode.com/rugbyhj99/hj-hnm-react-app/products?q=${searchQuery}`
    let response = await fetch(url);
    let data = await response.json(); 
    //  데이터를 state에 넣기
    setProductList(data);
  }
  // api호출시 useEffect 사용 (쿼리값이 바뀔때마다 )
  useEffect(() => {
    getProducts();
  }, [query])  

  return (
    <div>
      <Container>
        <Row>
          {
            productList.map((menu) => (
              <Col lg={3} md={6} sm={12}>
                <ProductCard item={menu} />
              </Col>
            ))
          }       
        </Row>      
      </Container>
    </div>
  )
}

export default ProductAll