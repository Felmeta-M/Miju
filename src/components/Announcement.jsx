import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #2e2f5b;
  // background-color: #505581;
  // background-color: #f4d35e;
  // background-color: #faf0ca;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container> Free Shipping! on Orders Over 10,000 ETB</Container>;
};

export default Announcement;
