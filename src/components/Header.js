import React from "react";
import styled from "styled-components";
import logo from "../asset/logo.png";
function Header() {
  const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 30px 17px 39px;
    background-color: #0e2c51cc;
    heigh: 90px;

    align-items: center;
  `;
  const Flex = styled.div`
    display: flex;
  `;
  const Title = styled.div`
    mposition: static;
    border-left: 1px solid #ffffff;
    height: 22px;
    padding: 0 32px 0 32px;
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 22px;

    text-align: center;
    text-transform: uppercase;
  `;
  const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 35px;

    width: 218px;
    height: 50px;
    left: calc(50% - 218px / 2);
    top: calc(50% - 50px / 2);

    background: #ffffff;

    border: 1px solid #204370;
    box-sizing: border-box;
    border-radius: 25px;
  `;
  const Name = styled.div``;
  const BoxText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 44px;
  `;
  const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-right: 44px;
  `;
  const Text = styled.text``;
  const Logo = styled.div`
    background-color: #fff;
    border-radius: 50%;
    width: 58px;
    height: 56.7px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  `;
  const Img = styled.img``;
  return (
    <HeaderBox>
      <Flex>
        <Logo>
          <Img src={logo} alt="Logo" />
        </Logo>
        <BoxText>
          <Name>DRAPER</Name>
          <Box>
            <Text>S</Text>
            <Text>T </Text>
            <Text>A </Text>
            <Text> R</Text>
            <Text>T </Text>
            <Text> U </Text>
            <Text> P </Text>
            <Text>H </Text>
            <Text>O </Text>
            <Text>U</Text>
            <Text>S </Text>
            <Text>E</Text>
          </Box>
        </BoxText>
        <Title>Cities</Title>
        <Title>Ventures</Title>
        <Title>Academy</Title>
        <Title>Services</Title>
        <Title>Accelerator</Title>
        <Title>About us</Title>
      </Flex>
      <Button>Join our community</Button>
    </HeaderBox>
  );
}

export default Header;
