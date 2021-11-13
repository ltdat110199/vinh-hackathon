import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import item1 from "../asset/item1.png";
import item2 from "../asset/item2.png";
import item3 from "../asset/item3.png";
import item4 from "../asset/item4.png";
import item5 from "../asset/item5.png";

const Container = styled.div`
  padding: 0 100px 150px 100px;
  background: #ffffff;
  @media screen and (max-width: 1024px) {
    padding: 0 80px 150px 80px;
  }
  @media screen and (max-width: 769px) {
    padding: 0 50px 130px 50px;
  }
  @media screen and (max-width: 376px) {
    padding: 0 30px 90px 30px;
  }
`;
const Box = styled.div`
  background: #e9ecf1;
  width: 100%;
  height: 10px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2%;
  padding-top: 50px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const GridMobile = styled(Slider)`
  // display: none;
  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: block;
    padding-top: 50px;
    justify-content: space-between;
    width: 100%;
    & ul {
      bottom: -40px;
    }
    .slick-slide > div {
      margin: 0 5px;
    }
  }
  @media screen and (max-width: 375px) {
    display: flex;
    padding-top: 50px;
    justify-content: space-between;
    width: 100%;
    & ul {
      bottom: -40px;
    }
    .slick-slide > div {
      margin: 0 5px;
    }
  }
`;
const StyleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & img {
    width: 100%;
  }
  & p {
    font-weight: 550;
    font-style: normal;
    font-family: "Oxygen", sans-serif;
    font-size: 13px;
    text-transform: uppercase;
    color: #204370;
    padding-top: 15px;
    letter-spacing: 2px;
    margin: 0;
  }
  @media screen and (max-width: 1024px) {
    & p {
      font-size: 12px;
    }
  }
`;
const TextTitle = styled.div`
  font-weight: 600;
  font-size: 38px;
  line-height: 38px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #232327;
  padding-top: 15px;
  font-family: "Pathway Gothic One", sans-serif;
  @media screen and (max-width: 1280px) {
    font-size: 30px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 23px;
    line-height: 26px;
  }
  @media screen and (max-width: 769px) {
    font-size: 19px;
  }
  @media screen and (max-width: 376px) {
    font-size: 26px;
  }
`;
const StyleButton = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding-top: 15px;
  cursor: pointer;
`;
const Button = styled.button`
  background: #ffcc00;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 550;
  padding: 10px 30px;
  border: none;
  font-style: normal;
  font-family: "Oxygen", sans-serif;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    & p {
      font-size: 12px;
    }
  }
`;
const StyledButtonMobile = styled.div`
  display: none;
  @media screen and (max-width: 376px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 50px;
  }
`;
const ButtonMobile = styled.button`
  height: 65px;
  padding: 0 55px;
  font-size: 17px;
  font-weight: 700;
  background: #ffffff;
  white-space: nowrap;
  color: #2a2a2a;
  border: 1px solid #204370;
  box-sizing: border-box;
  border-radius: 35px;
`;
export default class ComponentNine extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 376,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: false,
            dots: false,
          },
        },
      ],
    };
    return (
      <Container>
        <Box></Box>
        <Grid>
          <StyleBox>
            <img src={item1} alt={""} />
            <p>15 jan 2021</p>
            <TextTitle>How to Test Ideas with No Money or Time</TextTitle>
            <StyleButton>
              <Button>Register</Button>
            </StyleButton>
          </StyleBox>
          <StyleBox>
            <img src={item2} alt={""} />
            <p>08 jun 2021</p>
            <TextTitle>
              CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA
            </TextTitle>
            <StyleButton>
              <Button>Register</Button>
            </StyleButton>
          </StyleBox>
          <StyleBox>
            <img src={item3} alt={""} />
            <p>17 may 2021</p>
            <TextTitle>
              Yoga – first cass for beginer – feel free to sign up here.
            </TextTitle>
            <StyleButton>
              <Button>Register</Button>
            </StyleButton>
          </StyleBox>
          <StyleBox>
            <img src={item4} alt={""} />
            <p>15 jan 2021</p>
            <TextTitle>How to Test Ideas with No Money or Time</TextTitle>
            <StyleButton>
              <Button>Register</Button>
            </StyleButton>
          </StyleBox>
          <StyleBox>
            <img src={item5} alt={""} />
            <p>08 jun 2021</p>
            <TextTitle>
              CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA
            </TextTitle>
            <StyleButton>
              <Button>Register</Button>
            </StyleButton>
          </StyleBox>
        </Grid>
        <GridMobile {...settings}>
          <StyleBox>
            <img src={item1} alt={""} />
            <p>15 jan 2021</p>
            <TextTitle>How to Test Ideas with No Money or Time</TextTitle>
            <StyleButton>
              <Button>Register</Button>
            </StyleButton>
          </StyleBox>
          <StyleBox>
            <img src={item2} alt={""} />
            <p>08 jun 2021</p>
            <TextTitle>
              CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA
            </TextTitle>
            <StyleButton>
              <Button>Register</Button>
            </StyleButton>
          </StyleBox>
          <StyleBox>
            <img src={item3} alt={""} />
            <p>17 may 2021</p>
            <TextTitle>
              Yoga – first cass for beginer – feel free to sign up here.
            </TextTitle>
            <StyleButton>
              <Button>Register</Button>
            </StyleButton>
          </StyleBox>
          <StyleBox>
            <img src={item4} alt={""} />
            <p>15 jan 2021</p>
            <TextTitle>How to Test Ideas with No Money or Time</TextTitle>
            <StyleButton>
              <Button>Register</Button>
            </StyleButton>
          </StyleBox>
          <StyleBox>
            <img src={item5} alt={""} />
            <p>08 jun 2021</p>
            <TextTitle>
              CLEANTECH STARTUPS FROM FINLAND AND ESTONIA TO ENTER MALAYSIA
            </TextTitle>
            <StyleButton>
              <Button>Register</Button>
            </StyleButton>
          </StyleBox>
        </GridMobile>
        <StyledButtonMobile>
          <ButtonMobile>See all upcoming events</ButtonMobile>
        </StyledButtonMobile>
      </Container>
    );
  }
}
