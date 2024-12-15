import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  color: #2e2f5b;
  background-color: #f7f7f7;
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: transform 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  ${tablet({ flexDirection: "column" })};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  ${tablet({ width: "50%", height: "50%" })}
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${tablet({
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
})}
`;

const Title = styled.h1`
  font-size: 70px;
  ${tablet({ fontSize: "50px", padding: "10px" })}
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${tablet({ fontSize: "16px", margin: "25px 25px" })}
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: solid #2e2f5b 2px;
  border-radius: 5px;
  ${tablet({ fontSize: "16px" })}
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1); // Starting at the cloned first slide
  const [transitioning, setTransitioning] = useState(false);

  const handleClick = (direction) => {
    if (transitioning) return; // Preventing double clicks during transition
    setTransitioning(true);

    if (direction === "left") {
      setSlideIndex(slideIndex === 0 ? sliderItems.length : slideIndex - 1);
    } else {
      setSlideIndex(slideIndex === sliderItems.length + 1 ? 1 : slideIndex + 1);
    }
  };

  const handleTransitionEnd = () => {
    setTransitioning(false);

    if (slideIndex === 0) {
      setSlideIndex(sliderItems.length); // Jumping to real last slide without animation
    }
    if (slideIndex === sliderItems.length + 1) {
      setSlideIndex(1); // Jumping to real first slide without animation
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardArrowLeft />
      </Arrow>
      <Wrapper
        slideIndex={slideIndex}
        onTransitionEnd={handleTransitionEnd}
        style={{
          transition: transitioning ? "transform 1.5s ease" : "none",
        }}
      >
        {/* Cloning last slide before the first slide */}
        <Slide bg={sliderItems[sliderItems.length - 1].bg}>
          <ImgContainer>
            <Image src={sliderItems[sliderItems.length - 1].img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{sliderItems[sliderItems.length - 1].title}</Title>
            <Desc>{sliderItems[sliderItems.length - 1].desc}</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>

        {/* Normal slides */}
        {sliderItems.map((item, index) => (
          <Slide key={index} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}

        {/* Cloning first slide after the last slide */}
        <Slide bg={sliderItems[0].bg}>
          <ImgContainer>
            <Image src={sliderItems[0].img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{sliderItems[0].title}</Title>
            <Desc>{sliderItems[0].desc}</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
