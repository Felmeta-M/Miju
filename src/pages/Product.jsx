import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div`
  //   height: 100vh;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
