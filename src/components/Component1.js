import React from "react";
import styled from "styled-components";
import academy from "../asset/Academy1.png";
import den from "../asset/den.png";
function Component1() {
  const Container = styled.div`
    display: flex;
  `;
  const ImgBackground = styled.img`
    width: 100%;
    position: relative;
  `;
  const Img = styled.img`
    width: 183px;
    height: 73px;
    display: flex;
  `;
  const Box = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 190px;
    width: 100%;
    flex-direction: column;
  `;
  const Text = styled.text`
    color: #fff;
  `;
  const Title = styled.h1`
    color: #fff;
  `;
  const Button = styled.button`
    width: 156px;
    height: 65px;
    background: #204370;
    border-radius: 40px;
    margin-top: 30px;
  `;
  return (
    <>
      {" "}
      <Container>
        <ImgBackground src={academy} alt="Academy1" />
        <Box>
          <Img src={den} alt="den" />
          <Title>GLOBAL NETWORK FOR </Title>
          <Title>MENTORSHIP AND SUPPORT</Title>
          <Text>Get all the support and education you need </Text>
          <Text>to achieve full potential as an entrepreneur.</Text>
          <Button>Join DEN</Button>
        </Box>
      </Container>
    </>
  );
}

export default Component1;
