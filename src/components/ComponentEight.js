import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 100px 100px;
  background: #ffffff;
  @media screen and (max-width: 1024px) {
    padding: 80px 80px;
  }
  @media screen and (max-width: 769px) {
    padding: 50px 50px;
  }
  @media screen and (max-width: 376px) {
    padding: 30px 30px;
  }
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 376px) {
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    & button {
      display: none;
    }
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  & p {
    font-style: normal;
    font-family: "Oxygen", sans-serif;
    font-size: 14px;
    line-height: 20px;
    padding-left: 65px;
    color: rgba(35, 35, 39, 0.9);
  }
  @media screen and (max-width: 1024px) {
    width: 70%;
    & p {
      padding-left: 35px;
      font-size: 13px;
      line-height: 15px;
    }
  }
  @media screen and (max-width: 769px) {
    width: 75%;
    & p {
      padding-left: 25px;
      font-size: 10px;
    }
  }
  @media screen and (max-width: 376px) {
    flex-direction: column;
    & p {
      padding-left: 0px;
      font-size: 12px;
    }
  }
`;
const TextContent = styled.div`
  font-weight: 700;
  font-size: 60px;
  line-height: 70px;
  letter-spacing: -0.015em;
  white-space: nowrap;
  text-transform: uppercase;
  color: #204370;
  font-family: "Pathway Gothic One", sans-serif;
  @media screen and (max-width: 1024px) {
    font-size: 55px;
  }
  @media screen and (max-width: 769px) {
    font-size: 50px;
  }
  @media screen and (max-width: 376px) {
    font-size: 45px;
    text-align: left;
  }
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 25%;
`;
const Button = styled.button`
  height: 50px;
  max-width: max-content;
  padding: 0 35px;
  font-size: 14px;
  line-height: 26px;
  font-weight: 600;
  background: #ffffff;
  white-space: nowrap;
  color: #2a2a2a;
  border: 1px solid #204370;
  box-sizing: border-box;
  border-radius: 25px;
  cursor: pointer;
  @media screen and (max-width: 769px) {
    padding: 0 10px;
    font-size: 12px;
  }
`;
function ComponentEight({ setOpen }) {
  return (
    <Container onClick={() => setOpen(false)}>
      <Box>
        <Left>
          <TextContent>upcoming events</TextContent>
          <p>
            Find the best offline and online events and training programs right
            here.
          </p>
        </Left>
        <Right>
          <Button>See all upcoming events</Button>
        </Right>
      </Box>
    </Container>
  );
}

export default ComponentEight;
