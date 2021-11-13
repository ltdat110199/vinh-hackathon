import React from "react";
import styled from "styled-components";
import linkedin from "../asset/linkedin.png";
import facebook from "../asset/facebook.png";
import twitter from "../asset/twitter.png";
import instagram from "../asset/instagram.png";

const Container = styled.div`
  padding: 0 30px 50px 100px;
  background: #f4f6f8;
  @media screen and (max-width: 769px) {
    padding: 0 30px 30px 100px;
  }
  @media screen and (max-width: 376px) {
    padding: 0 30px 40px 30px;
  }
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  padding-top: 30px;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid rgba(35, 35, 39, 0.1);
  @media screen and (max-width: 376px) {
    flex-direction: column;
  }
`;
const TextTitle = styled.div`
  font-style: normal;
  font-family: "Oxygen", sans-serif;
  color: rgba(35, 35, 39, 0.7);
  font-size: 16px;
  font-weight: 500;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 769px) {
    font-size: 10px;
  }
  @media screen and (max-width: 376px) {
    font-size: 14px;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  & p {
    font-style: normal;
    font-family: "Oxygen", sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: rgba(23, 41, 64, 0.9);
    padding-right: 15px;
    border-right: 1.5px solid #d2d9e2;
    :last-child {
      border-right: none;
    }
  }
  @media screen and (max-width: 1024px) {
    gap: 8px;
    & p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 769px) {
    gap: 6px;
    & p {
      padding-right: 10px;
      font-size: 10px;
    }
  }
  @media screen and (max-width: 376px) {
    display: none;
    & p {
      font-size: 14px;
    }
  }
`;
const MenuMobile = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
  }
`;
const TextMenuMobile = styled.div`
  display: flex;
  gap: 20px;
  & p {
    font-style: normal;
    font-family: "Oxygen", sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: rgba(23, 41, 64, 0.9);
    padding-right: 15px;
    border-right: 1.5px solid #d2d9e2;
    :last-child {
      border-right: none;
    }
  }
`;
const Icon = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 769px) {
    gap: 10px;
    & img {
      width: 80%;
    }
  }
  @media screen and (max-width: 376px) {
    gap: 30px;
    padding-top: 15px;
    & img {
      width: 130%;
    }
  }
`;
function Footer({setOpen}) {
  return (
    <Container onClick={() => setOpen(false)}>
      <Box>
        <TextTitle>Copyright © Draper Startup House 2021</TextTitle>
        <Menu>
          <p>Home</p>
          <p>About</p>
          <p>Stories and News</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
        </Menu>
        <MenuMobile>
          <TextMenuMobile>
            <p>Home</p>
            <p>About</p>
            <p>Stories and News</p>
          </TextMenuMobile>
          <TextMenuMobile>
            <p>Contact</p>
            <p>Privacy Policy</p>
          </TextMenuMobile>
        </MenuMobile>
        <Icon>
          <div>
            <img src={linkedin} alt={""} />
          </div>
          <div>
            <img src={facebook} alt={""} />
          </div>
          <div>
            <img src={twitter} alt={""} />
          </div>
          <div>
            <img src={instagram} alt={""} />
          </div>
        </Icon>
      </Box>
    </Container>
  );
}

export default Footer;
