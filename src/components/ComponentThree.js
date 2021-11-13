import styled from "styled-components";
import img3 from "../asset/img3.png";

const COntainer = styled.div`
  padding: 80px 0 80px 0;
  background: #f4f6f8;
  width: 100%;
  @media screen and (max-width: 376px) {
    padding: 0 0 50px 0;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 376px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const LeftBox = styled.div`
  display: flex;
  width: 50%;
  padding-left: 30px;
  & img {
    width: 100%;
    height: auto;
    display: inline-block;
    box-shadow: -45px 45px 0 rgb(41, 97, 161);
  }
  @media screen and (max-width: 376px) {
    width: 80%;
    & img {
      box-shadow: -45px 30px 0 rgb(41, 97, 161);
    }
  }
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 376px) {
    padding-top: 80px;
  }
`;
const TextTitle = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: #232327;
  margin-bottom: 24px;
  padding-left: 100px;
  font-family: "Pathway Gothic One", sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding-left: 60px;
  }
  @media screen and (max-width: 376px) {
    width: 265px;
    font-size: 30px;
    padding-left: 30px;
  }
`;

const Text = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  width: 360px;
  font-size: 14px;
  line-height: 25px;
  padding-left: 100px;
  color: #232327;
  @media screen and (max-width: 768px) {
    width: 320px;
    font-size: 12px;
    padding-left: 60px;
  }
  @media screen and (max-width: 376px) {
    font-size: 15px;
    padding-left: 30px;
    padding-bottom: 15px;
  }
`;
const StyleButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  cursor: pointer;
  @media screen and (max-width: 376px) {
    margin-top: 10px;
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
`;
function ComponentThree({ setOpen }) {
  return (
    <COntainer onClick={() => setOpen(false)}>
      <Box>
        <LeftBox>
          <img src={img3} alt={""} />
        </LeftBox>
        <RightBox>
          <TextTitle>ENTREPRENEURS JOIN THE DEN COMMUNITY</TextTitle>
          <Text>
            Our members and their supporters include: founders and teams;
            mentors and advisors; remote workers and service providers; and
            angel investors and venture capitalists from around the world.
          </Text>
          <Text>
            As a DEN member, you can build a market-ready company much faster
            than ever before.
          </Text>
        </RightBox>
      </Box>
      <StyleButton>
        <Button>Join DEN</Button>
      </StyleButton>
    </COntainer>
  );
}

export default ComponentThree;
