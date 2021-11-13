import styled from "styled-components";
import img1 from "../asset/img1.png";

const Container = styled.div`
  padding: 60px 0 60px 0;
  background: #f4f6f8;
  width: 100%;
  @media screen and (max-width: 376px) {
    padding: 60px 0 0 0;
  }
`;

const TextContent = styled.div`
  text-align: center;
  color: #204370;
  font-size: 50px;
  font-weight: 700;
  font-family: "Pathway Gothic One", sans-serif;
`;

const Box = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 376px) {
    padding-top: 60px;
    flex-direction: column;
    justify-content: center;
  }
`;

const LeftBox = styled.div`
  display: flex;
  padding-left: 30px;
  width: 50%;
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
  white-space: nowrap;
  color: #232327;
  margin-bottom: 24px;
  padding-left: 100px;
  font-family: "Pathway Gothic One", sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding-left: 60px;
  }
  @media screen and (max-width: 376px) {
    font-size: 30px;
    padding-left: 30px;
  }
`;

const TextDescription = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  width: 360px;
  font-size: 14px;
  line-height: 25px;
  padding-left: 100px;
  color: rgba(35, 35, 39, 0.7);
  @media screen and (max-width: 768px) {
    width: 320px;
    font-size: 12px;
    padding-left: 60px;
  }
  @media screen and (max-width: 376px) {
    font-size: 16px;
    padding-left: 30px;
  }
`;

const Ul = styled.ul`
  list-style: inside;
  color: #a6b4c6;
  padding: 0;
`;

const Li = styled.li`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  padding-left: 100px;
  color: #232327;
  margin-bottom: 16px;
  &::marker {
    color: #a6b4c6;
  }
  @media screen and (max-width: 768px) {
    width: 320px;
    font-size: 12px;
    padding-left: 60px;
  }
  @media screen and (max-width: 376px) {
    padding-left: 30px;
    margin-bottom: 10px;
  }
`;

function ComponentOne({setOpen}) {
  return (
    <Container onClick={() => setOpen(false)}>
      <TextContent>JOIN THE DRAPER ENTREPRENEUR NETWORK</TextContent>
      <Box>
        <LeftBox>
          <img src={img1} alt={""} />
        </LeftBox>
        <RightBox>
          <TextTitle>Connect with a global network</TextTitle>
          <TextDescription>
            DEN membership connects you with inspiring people and ideas to
            empower your entrepreneurial or fundraising journey.
          </TextDescription>
          <Ul>
            <Li>Discover useful resources, and perks</Li>
            <Li>Find the best events and training programs</Li>
            <Li>Meet co-founders, advisors, and partners</Li>
            <Li>Search and discover trending topics and insights</Li>
          </Ul>
        </RightBox>
      </Box>
    </Container>
  );
}

export default ComponentOne;
