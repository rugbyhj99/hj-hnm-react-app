import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
// 드롭다운
import Dropdown from 'react-bootstrap/Dropdown';

const ProductDetail = () => {
  // 선택된 사이즈 상태 추가하는 state
  const [selectedSize, setSelectedSize] = useState('사이즈');
  // 선택된 사이즈를 불러오는 함수
  const handleSelectSize = (size) => {
    setSelectedSize(size);
  };

  // url파라미터값 추출하는 함수 생성
  const {id} = useParams();
  // 추출한 데이터 저장할 state
  const [product, setProduct] = useState(null); 

  // api 호출하는 함수
  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/rugbyhj99/hj-hnm-react-app/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }

  // api 호출은 useEffect
  useEffect(() => {
    getProductDetail()
  }, [id])

  
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img}/>
        </Col>
        <Col className="product-detail-text">
          <div>
            <span className="highlight-choice">{product?.choice ? "추천" : ""}</span>
            <span className="highlight-new">{product?.new ? "New" : ""}</span>
          </div>
          <h1>{product?.title}</h1>
          <h3>{product?.price}</h3>
          <Dropdown>
            <Dropdown.Toggle variant="danger" id="dropdown-basic">
              {selectedSize}
            </Dropdown.Toggle>

            <Dropdown.Menu>
            {
              product?.size.map((size, index) => (
                <Dropdown.Item key={index} onClick={()=> handleSelectSize(size)}>
                  {size}
                </Dropdown.Item>
              ))
            }

            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  
  )
}

export default ProductDetail