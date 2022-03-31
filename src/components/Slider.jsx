import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: coral;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0%;
  bottom: 0%;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};

  cursor: pointer;
  opacity: 0.75;
`;

// Title | Description | Image
const Wrapper = styled.div`
  height: 100%;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img``;
const InfoContainer = styled.div``;

const Slider = () => {
  return (
    <Container>
      {/* Left Arrow */}
      <Arrow direction="left">
        <ArrowLeft />

        {/* Title | Description | Image */}
        <Wrapper>
          <ImgContainer>
            <Image src="" />
          </ImgContainer>
          <InfoContainer></InfoContainer>
        </Wrapper>

        {/* Right Arrow */}
      </Arrow>
      <Arrow direction="right">
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
