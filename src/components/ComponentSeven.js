import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Box = styled.div`
  position: relative;
  background: #f4f6f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BackGround = styled.div`
  width: 87%;
  height: 100%;
  background: #204370;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  z-index: 1;
  flex-direction: column;
  @media screen and (max-width: 1280px) {
    width: 84%;
  }
  @media screen and (max-width: 769px) {
    width: 86%;
  }
  @media screen and (max-width: 376px) {
    width: 72%;
    padding: 20px 25px;
  }
`;
const WhiteBackground = styled.div`
  background: #ffffff;
  width: 100%;
  height: 50%;
  position: absolute;
  z-index: 0;
  top: 50%;
  @media screen and (max-width: 376px) {
    top: 80%;
    height: 20%;
  }
`;
const TextTitleOne = styled.div`
  font-weight: 500;
  color: #ffffff;
  font-size: 50px;
  text-transform: uppercase;
  font-family: "Pathway Gothic One", sans-serif;
  @media screen and (max-width: 1024px) {
    font-size: 40px;
  }
  @media screen and (max-width: 769px) {
    font-size: 35px;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const TextTitleTwo = styled.div`
  font-weight: 500;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 50px;
  font-family: "Pathway Gothic One", sans-serif;
  padding-right: 50px;
  @media screen and (max-width: 1024px) {
    font-size: 40px;
    padding-right: 40px;
  }
  @media screen and (max-width: 769px) {
    font-size: 35px;
    padding-right: 30px;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const TextTitleThree = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    display: inline-block;
    font-size: 35px;
    font-weight: 500;
    text-transform: uppercase;
    color: #ffffff;
    font-family: "Pathway Gothic One", sans-serif;
  }
`;
function ComponentSeven({setOpen}) {
  return (
    <Container onClick={() => setOpen(false)}>
      <Box>
        <BackGround>
          <TextTitleOne>
            Draper Startup House is on a mission to enable{" "}
          </TextTitleOne>
          <TextTitleTwo>
            ONE million entrepreneurs worldwide by 2023
          </TextTitleTwo>
          <TextTitleThree>
            Draper Startup House is on a mission to enable 1 million
            entrepreneurs worldwide by 2023
          </TextTitleThree>
        </BackGround>
        <WhiteBackground />
      </Box>
    </Container>
  );
}

export default ComponentSeven;
