import React from "react";
import styled from "styled-components";
import group from "../asset/Group.svg";

const COntainer = styled.div`
  padding: 0 100px 100px 100px;
  background: #ffffff;
  @media screen and (max-width: 1024px) {
    padding: 0 80px 80px 80px;
  }
  @media screen and (max-width: 769px) {
    padding: 0 50px 50px 50px;
  }
  @media screen and (max-width: 376px) {
    padding: 0 30px 30px 30px;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 376px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const LeftBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  text-align: left;
  & p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: rgba(35, 35, 39, 0.7);
    margin-bottom: 24px;
    @media screen and (max-width: 376px) {
      display: none;
    }
  }
  & button {
    max-width: max-content;
    height: 65px;
    background: #204370;
    border-radius: 40px;
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
    padding: 0 45px;
    z-index: 1;
    border: none;
    @media screen and (max-width: 376px) {
      display: none;
    }
  }
`;
const RightBox = styled.div`
  width: 50%;
  display: flex;
  & img {
    width: 100%;
    height: auto;
  }
  @media screen and (max-width: 376px) {
    width: 100%;
    padding-top: 30px;
  }
`;
const TextContent = styled.div`
  font-weight: 700;
  font-size: 60px;
  line-height: 70px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #204370;
  font-family: "Pathway Gothic One", sans-serif;
  @media screen and (max-width: 1024px) {
    font-size: 55px;
  }
  @media screen and (max-width: 769px) {
    font-size: 50px;
  }
`;

const Text = styled.p`
  display: none;
  @media screen and (max-width: 376px) {
    display: inline-block;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: rgba(35, 35, 39, 0.7);
    margin-bottom: 24px;
    padding-top: 10px;
  }
`;

const StyleButton = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Button = styled.button`
  max-width: max-content;
  height: 65px;
  background: #204370;
  border-radius: 40px;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  padding: 0 45px;
  z-index: 1;
  border: none;
  cursor: pointer;
`;
function ComponentFive({ setOpen }) {
  return (
    <COntainer onClick={() => setOpen(false)}>
      <Box>
        <LeftBox>
          <TextContent>But First...</TextContent>
          <TextContent>you Have to Join</TextContent>
          <p>What are you waiting for? Join DEN today.</p>
          <button>join DEN</button>
        </LeftBox>
        <RightBox>
          <img src={group} alt={""} />
        </RightBox>
      </Box>
      <Text>What are you waiting for? Join DEN today.</Text>
      <StyleButton>
        <Button>Join DEN</Button>
      </StyleButton>
    </COntainer>
  );
}

export default ComponentFive;
