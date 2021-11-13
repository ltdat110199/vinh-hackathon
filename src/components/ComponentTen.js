import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #204370;
  width: 100%;
  height: 100%;
  padding: 80px 0;
  @media screen and (max-width: 1024px) {
    padding: 70px 0;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LeftBox = styled.div`
  font-weight: 500;
  padding: 0 340px;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 50px;
  text-align: center;
  font-family: "Pathway Gothic One", sans-serif;
  @media screen and (max-width: 1280px) {
    padding: 0 270px;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 150px;
    font-size: 40px;
  }
  @media screen and (max-width: 769px) {
    padding: 0 125px;
    font-size: 35px;
  }
  @media screen and (max-width: 376px) {
    padding: 0px;
  }
`;
const RightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;
const Button = styled.button`
  background: #ffcc00;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 550;
  height: 65px;
  padding: 10px 55px;
  border: none;
  font-style: normal;
  font-family: "Oxygen", sans-serif;
  cursor: pointer;
  @media screen and (max-width: 376px) {
    padding: 10px 50px;
  }
`;
function ComponentTen({ setOpen }) {
  return (
    <Container onClick={() => setOpen(false)}>
      <Box>
        <LeftBox>
          WHERE ENTREPRENEURS AROUND THE WORLD GET CONNECTED, INSPIRED, AND
          EMPOWERED
        </LeftBox>
        <RightBox>
          <Button>Join DEN</Button>
        </RightBox>
      </Box>
    </Container>
  );
}

export default ComponentTen;
