import React from "react";
import styled from "styled-components";
import logo from "../asset/logoD.png";

const Container = styled.div`
  background: #f4f6f8;
  padding: 80px 30px 50px 30px;
  @media screen and (max-width: 769px) {
    padding: 80px 30px 30px 30px;
  }
  @media screen and (max-width: 376px) {
    padding: 70px 30px 0px 30px;
  }
`;
const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 376px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const LeftBox = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 769px) {
    width: 45%;
  }
  @media screen and (max-width: 376px) {
    width: 100%;
    padding-bottom: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Logo = styled.div`
  & img {
    width: 140%;
  }
  @media screen and (max-width: 1280px) {
    & img {
      width: 165%;
    }
  }
  @media screen and (max-width: 1024px) {
    & img {
      width: 175%;
    }
  }
  @media screen and (max-width: 769px) {
    & img {
      width: 125%;
    }
  }
  @media screen and (max-width: 376px) {
    & img {
      width: 100%;
    }
  }
`;
const ContentLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  @media screen and (max-width: 1280px) {
    padding-left: 40px;
  }
  @media screen and (max-width: 1024px) {
    padding-left: 35px;
  }
  @media screen and (max-width: 769px) {
    padding-left: 25px;
  }
  @media screen and (max-width: 376px) {
    justify-content: center;
    align-items: center;
    padding-left: 0px;
  }
`;
const Text = styled.div`
  font-style: normal;
  font-family: "Oxygen", sans-serif;
  color: rgba(23, 41, 64, 0.9);
  padding-right: 120px;
  padding-bottom: 15px;
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  @media screen and (max-width: 1280px) {
    padding-right: 90px;
  }
  @media screen and (max-width: 1024px) {
    padding-right: 45px;
    font-size: 14px;
  }
  @media screen and (max-width: 769px) {
    padding-right: 80px;
    font-size: 11px;
  }
  @media screen and (max-width: 376px) {
    padding: 15px 30px;
    font-size: 14px;
    text-align: center;
  }
`;
const Title = styled.div`
  font-style: normal;
  font-family: "Oxygen", sans-serif;
  padding-bottom: 15px;
  font-size: 16px;
  font-weight: 700;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 769px) {
    font-size: 11px;
  }
  @media screen and (max-width: 376px) {
    padding: 0 30px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }
`;
const TextLink = styled.div`
  font-style: normal;
  font-family: "Oxygen", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #4c8fcc;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 769px) {
    font-size: 11px;
  }
  @media screen and (max-width: 376px) {
    padding: 0 30px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
  }
`;
const Hr = styled.div`
  background: rgba(35, 35, 39, 0.1);
  width: 40px;
  height: 3px;
  border-radius: 10px;
`;
const LeftContent = styled.div`
  padding-top: 15px;
  & p {
    font-style: normal;
    font-family: "Oxygen", sans-serif;
    padding-right: 175px;
    padding-bottom: 15px;
    font-size: 16px;
    line-height: 25px;
    font-weight: 500;
    margin: 0;
  }
  @media screen and (max-width: 1280px) {
    & p {
      padding-right: 110px;
    }
  }
  @media screen and (max-width: 1024px) {
    & p {
      padding-right: 60px;
      font-size: 14px;
    }
  }
  @media screen and (max-width: 769px) {
    & p {
      padding-right: 110px;
      font-size: 11px;
    }
  }
  @media screen and (max-width: 376px) {
    padding-top: 25px;
    & p {
      padding: 0 70px;
      font-size: 14px;
      text-align: center;
    }
  }
`;
const RightBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 769px) {
    font-size: 18px;
  }
  @media screen and (max-width: 376px) {
    width: 100%;
  }
`;
const TopRightContent = styled.div``;
const TextTitleTopRightContent = styled.div`
  font-weight: 700;
  font-size: 30px;
  text-transform: uppercase;
  font-style: normal;
  font-family: "Pathway Gothic One", sans-serif;
  color: #172940;
  @media screen and (max-width: 1024px) {
    font-size: 25px;
  }
  @media screen and (max-width: 769px) {
    font-size: 18px;
  }
  @media screen and (max-width: 376px) {
    font-size: 28px;
  }
`;
const ContentTopRightContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 2px solid rgba(35, 35, 39, 0.1);
`;
const TextContent = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  & p {
    font-style: normal;
    font-family: "Oxygen", sans-serif;
    color: rgba(23, 41, 64, 0.9);
    font-size: 16px;
    font-weight: 500;
    line-height: 35px;
  }
  @media screen and (max-width: 1280px) {
    & p {
      line-height: 30px;
    }
  }
  @media screen and (max-width: 1024px) {
    & p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 769px) {
    width: 73%;
    & p {
      font-size: 11px;
    }
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const TextContenMobile = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 22%;
    & p {
      font-style: normal;
      font-family: "Oxygen", sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
    }
  }
`;
const StyleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 376px) {
    padding: 25px 0;
  }
`;
const Button = styled.button`
  height: 52px;
  background: #204370;
  border-radius: 25px;
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  white-space: nowrap;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  padding: 0 35px;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    height: 48px;
    padding: 0 25px;
    font-size: 13px;
  }
  @media screen and (max-width: 769px) {
    height: 40px;
    padding: 0 12px;
    font-size: 10px;
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const ButtonMobile = styled.button`
  display: none;
  @media screen and (max-width: 376px) {
    display: inline-Box;
    height: 52px;
    background: #204370;
    border-radius: 25px;
    font-family: "Oxygen", sans-serif;
    font-style: normal;
    white-space: nowrap;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
    padding: 0 35px;
    border: none;
  }
`;
const FooterRightBox = styled.div`
  padding-top: 30px;
`;
const ContentFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  & p {
    font-style: normal;
    font-family: "Oxygen", sans-serif;
    color: rgba(23, 41, 64, 0.9);
    font-size: 16px;
    font-weight: 500;
    line-height: 35px;
  }
  @media screen and (max-width: 1280px) {
    & p {
      line-height: 30px;
    }
  }
  @media screen and (max-width: 1024px) {
    & p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 769px) {
    & p {
      font-size: 11px;
    }
  }
  @media screen and (max-width: 376px) {
    display: none;
  }
`;
const ContentFooterMobile = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    width: 100%;
    display: flex;
    gap: 30%;
    & p {
      font-style: normal;
      font-family: "Oxygen", sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 28px;
    }
  }
`;
function ComponentEleven({ setOpen }) {
  return (
    <Container onClick={() => setOpen(false)}>
      <Box>
        <LeftBox>
          <Logo>
            <img src={logo} alt={""} />
          </Logo>
          <ContentLeftBox>
            <Text>
              We connect, inspire, and empower the world’s entrepreneurs.
            </Text>
            <Hr></Hr>
            <LeftContent>
              <Title>USA Headquarters</Title>
              <p>612 East 6th Street Austin, TX 78701 USA</p>
              <TextLink>austin@draperstartuphouse.com</TextLink>
            </LeftContent>
            <LeftContent>
              <Title>International Headquarters</Title>
              <p>39 Ann Siang Road Singapore 069716</p>
              <TextLink>hello@draperstartuphouse.com</TextLink>
            </LeftContent>
          </ContentLeftBox>
          <StyleButton>
            <ButtonMobile>Join our Community now</ButtonMobile>
          </StyleButton>
        </LeftBox>
        <RightBox>
          <TopRightContent>
            <TextTitleTopRightContent>What We Do</TextTitleTopRightContent>
            <ContentTopRightContent>
              <TextContent>
                <div>
                  <p>Community - DEN</p>
                  <p>Ventures</p>
                </div>
                <div>
                  <p>Academy</p>
                  <p>Services</p>
                </div>
                <div>
                  <p>Partnerships</p>
                  <p>Location Partners</p>
                </div>
              </TextContent>
              <TextContenMobile>
                <div>
                  <p>Community - DEN</p>
                  <p>Ventures</p>
                  <p>Academy</p>
                </div>
                <div>
                  <p>Services</p>
                  <p>Partnerships</p>
                  <p>Location Partners</p>
                </div>
              </TextContenMobile>
              <StyleButton>
                <Button>Join our community</Button>
              </StyleButton>
            </ContentTopRightContent>
          </TopRightContent>
          <FooterRightBox>
            <TextTitleTopRightContent>
              HOW FAR DO YOU WANT TO GO TODAY?
            </TextTitleTopRightContent>
            <ContentFooter>
              <div>
                <p>Bali</p>
                <p>Bangalore</p>
                <p>Buenos Aires</p>
                <p>Singapore</p>
                <p>Lisbon</p>
              </div>
              <div>
                <p>Canary Islands</p>
                <p>Chiang Mai</p>
                <p>Da Nang</p>
                <p>Singapore</p>
                <p>Valencia</p>
              </div>
              <div>
                <p>Lisbon</p>
                <p>Manila</p>
                <p>Penang</p>
                <p>Canary Islands</p>
                <p>Valencia</p>
              </div>
              <div>
                <p>Lisbon</p>
                <p>Manila</p>
                <p>Penang</p>
                <p>Bangalore</p>
              </div>
              <div>
                <p>Lisbon</p>
                <p>Manila</p>
                <p>Penang</p>
                <p>Bangalore</p>
              </div>
            </ContentFooter>
            <ContentFooterMobile>
              <div>
                <p>Bali</p>
                <p>Bangalore</p>
                <p>Buenos Aires</p>
                <p>Singapore</p>
                <p>Lisbon</p>
                <p>Canary Islands</p>
                <p>Chiang Mai</p>
                <p>Da Nang</p>
                <p>Valencia</p>
                <p>Lisbon</p>
                <p>Manila</p>
                <p>Penang</p>
              </div>
              <div>
                <p>Penang</p>
                <p>Canary Islands</p>
                <p>Valencia</p>
                <p>Lisbon</p>
                <p>Manila</p>
                <p>Penang</p>
                <p>Bangalore</p>
                <p>Lisbon</p>
                <p>Manila</p>
                <p>Penang</p>
                <p>Bangalore</p>
              </div>
            </ContentFooterMobile>
          </FooterRightBox>
        </RightBox>
      </Box>
    </Container>
  );
}

export default ComponentEleven;
