import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(252, 0, 255, 0.5), rgba(0, 219, 222, 0.5)),
    url("https://i.pinimg.com/1200x/77/65/eb/7765eb25027649540bd7aded03406834.jpg");
  center;
//   background-repeat: no-repeat;
//   background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({ width: "75%" })};
  ${tablet({ width: "60%" })};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 20px 5px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #2e2f5b;
  color: white;
  cursor: pointer;
  margin: 20px 0px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating account you agree to the <b>Terms & Privacy</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
