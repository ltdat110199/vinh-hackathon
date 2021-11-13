import styled from "styled-components";
import img2 from "../asset/img2.png";

const Container = styled.div`
  padding: 80px 0 50px 0;
  width: 100%;
  background: #f4f6f8;
  @media screen and (max-width: 376px) {
    padding: 0;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 376px) {
    flex-direction: column-reverse;
  }
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 40px;
  @media screen and (max-width: 376px) {
    padding-top: 80px;
    padding-left: 30px;
  }
`;
const RightBox = styled.div`
  display: flex;
  padding-right: 30px;
  width: 50%;
  & img {
    width: 100%;
    height: auto;
    display: inline-block;
    box-shadow: 45px 45px 0 rgb(101, 168, 101);
  }
  @media screen and (max-width: 376px) {
    width: 80%;
    padding-left: 45px;
    & img {
      box-shadow: 30px 30px 0 rgb(101, 168, 101);
    }
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
  font-family: "Pathway Gothic One", sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 376px) {
    font-size: 30px;
  }
`;

const Text = styled.div`
  font-family: "Oxygen", sans-serif;
  font-style: normal;
  font-weight: normal;
  width: 360px;
  font-size: 14px;
  line-height: 25px;
  color: rgba(35, 35, 39, 0.7);
  @media screen and (max-width: 768px) {
    width: 320px;
    font-size: 12px;
  }
  @media screen and (max-width: 376px) {
    font-size: 16px;
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
  color: #232327;
  margin-bottom: 16px;
  &::marker {
    color: #a6b4c6;
  }
  @media screen and (max-width: 768px) {
    width: 320px;
    font-size: 12px;
  }
  @media screen and (max-width: 376px) {
    margin-bottom: 10px;
  }
`;

function ComponentTwo({setOpen}) {
  return (
    <Container onClick={() => setOpen(false)}>
      <Box>
        <LeftBox>
          <TextTitle>GET INSPIRed By PEERS AND EXPERTS </TextTitle>
          <Text>
            Becoming a successful entrepreneur means surrounding yourself with
            an inspiring ecosystem like DEN.
          </Text>
          <Ul>
            <Li>Get constructive feedback from industry experts</Li>
            <Li>Read startup stories, successes, and failures</Li>
            <Li>
              Get help on investor relations topics like term sheets
            </Li>
            <Li>Find best practices and professional templates</Li>
          </Ul>
        </LeftBox>
        <RightBox>
          <img src={img2} alt={""} />
        </RightBox>
      </Box>
    </Container>
  );
}

export default ComponentTwo;
