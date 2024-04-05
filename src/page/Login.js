import React from 'react'
// 부트스트랩
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


const Login = ( {setAuthenticate} ) => {
  const navigate = useNavigate();
  // 로그인 버튼 클릭시 
  const loginUser = (event) => {
    console.log("login user function issue");
    // 새로고침 방지
    event.preventDefault();
    // authenticate값 변경
    setAuthenticate(true);
    navigate("/")
  }
  return (
    <Container style={{ fontSize: '1.3rem', fontWeight: '600'}}>
      {/* form에서 버튼 타입이 submit이라면 이럴땐 onClick을 쓰지말고 onSubmit을 사용하자
          그리고 버튼을 클릭하면 새로고침이 되므로 preventDefault()를 써주자*/}
      <Form onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>  
    </Container>
  )
}

export default Login