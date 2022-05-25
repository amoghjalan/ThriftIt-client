import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { login } from '../redux/apiCalls';
import {mobile} from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #FFD59E;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({width: "75%"})}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: white;
  background-color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector(state=>state.user);

  const handleClick = (e) =>{
    e.preventDefault();
    username.length >0 && password.length>0 && login(dispatch, {username, password});
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        {error && <Error>Something went wrong!!</Error>}
        <Form>
          <Input placeholder='email' onChange={e => setUsername(e.target.value)}/>
          <Input placeholder='password' type='password' onChange={e => setPassword(e.target.value)}/>
          <Button onClick={handleClick} disabled={isFetching}>LOG IN</Button>
          <Link>FORGOT PASSWORD?</Link>
          <Link>New User? Create Account</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login