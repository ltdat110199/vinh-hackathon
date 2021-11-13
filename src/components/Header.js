import styled from "styled-components";
import logo from "../asset/logo.svg";
import nav from "../asset/nav.png";

const Container = styled.div`
  background: rgba(14, 44, 81, 0.8);
  backdrop-filter: blur(35px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 90px;
  right: 0;
  top: 0;
  left: 0;
  z-index: 99999;
  padding: 0 30px;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`;

const RightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  img {
    width: 170px;
    @media (max-width: 769px) {
      width: 145px;
    }
    @media (max-width: 376px) {
      width: 135px;
    }
  }
`;
const Menu = styled.div`
  display: flex;
  padding-left: 40px;
  gap: 5px;
  @media screen and (max-width: 1024px) {
    padding-left: 30px;
  }
  @media screen and (max-width: 769px) {
    padding-left: 20px;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const TextTitle = styled.div`
  color: #ffffff;

  font-size: 15px;
  white-space: nowrap;
  font-style: normal;
  font-family: "Oxygen", sans-serif;
  font-weight: 500;
  border-left: 1px solid #ffffff;
  padding: 0 20px;
  line-height: 8px;
  @media screen and (max-width: 1024px) {
    font-size: 10px;
  }
  @media screen and (max-width: 769px) {
    font-size: 8px;
  }
`;
const StyledButton = styled.button`
  height: 50px;
  padding: 0 35px;
  font-size: 16px;
  white-space: nowrap;
  font-style: normal;
  font-family: "Oxygen", sans-serif;
  font-weight: 500;
  color: #2a2a2a;
  border: 1px solid #204370;
  border-radius: 25px;
  @media screen and (max-width: 1171px) {
    height: 45px;
    padding: 0 25px;
    font-size: 13px;
  }
  @media screen and (max-width: 1122px) {
    display: none;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const Icon = styled.img`
  display: none;
  @media screen and (max-width: 376px) {
    display: inline-block;
    width: 30px;
    cursor: pointer;
  }
`;
function Header() {
  return (
    <Container>
      <Box>
        <LeftBox>
          <Logo>
            <img src={logo} alt={""} />
          </Logo>
          <Menu>
            <TextTitle>CITIES</TextTitle>
            <TextTitle>VENTURES</TextTitle>
            <TextTitle>ACADEMY</TextTitle>
            <TextTitle>SERVICES</TextTitle>
            <TextTitle>ACCELERATOR</TextTitle>
            <TextTitle>ABOUT US</TextTitle>
          </Menu>
        </LeftBox>
        <RightBox>
          <StyledButton>Join our community</StyledButton>
          <Icon src={nav} />
        </RightBox>
      </Box>
    </Container>
  );
}

export default Header;
