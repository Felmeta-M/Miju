import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.3),s rgba(0, 0, 0, 0.5));
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px; 
  transition: all 0.5s ease;
  cursor: pointer;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 90%; /* Restrict image transformations to 90% height */
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }
`;


const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 280px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  border-radius: 5px; 

  &:hover ${Info} {
    opacity: 1;
  }

  &:hover ${ImageWrapper} img {
    transform: scale(1.1); /* Apply scaling only to the image inside ImageWrapper */
  }
`;

const Detail = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-itsems: center;
  gap: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  padding-left: 10px;
  padding-right: 10px;
`;

const Circle = styled.div`
  width: 250px;  
  height: 250px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8); 
  position: absolute;
`;

const Image = styled.img`
  width: 100%;      
  height: 90%; 
  object-fit: cover;  
  z-index: 2;
  transition: all 0.5s ease;
  border-radius: 5px;
`;


const Icon = styled.div`
  width: 50px; 
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); 
  transition: all 0.3s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.2); 
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); 
  }
`;


const Product = ({ item }) => {
  return (

    <Container>
      <Circle />
      <ImageWrapper>
        <Image src={item.img} alt={item.title} />
      </ImageWrapper>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
      <Detail>
        <span>{item.title}</span>
        <span>${item.price}</span>
      </Detail>
    </Container>

  );
};

export default Product;
