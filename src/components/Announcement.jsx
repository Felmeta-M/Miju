import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: #6b07f7;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container> Free Shipping! on Orders Over 10,000 ETB</Container>
  )
}

export default Announcement;