import React from "react";
import styled from "styled-components";
import Rectangle40 from "../asset/Rectangle40.png";
import Rectangle497 from "../asset/Rectangle497.png";
function Component2() {
  const Container = styled.div`
    background: #f4f6f8;
  `;

  const TitleBig = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Alternate Gothic No1 D;
    font-style: normal;
    font-weight: 500;
    line-height: 90px;
    text-align: center;
    letter-spacing: -0.015em;
    text-transform: uppercase;
    color: #204370;
    padding: 157px 0 100px 0;
    margin: 0;
  `;
  const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 150px;
  `;

  const Title = styled.h5`
    font-family: Alternate Gothic No1 D;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;

    letter-spacing: -0.015em;
    text-transform: uppercase;
    color: #232327;
    margin: 0;
  `;
  const Text = styled.text`
    font-family: Oxygen;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: rgba(35, 35, 39, 0.7);

    margin-top: 24px;
  `;
  const Ul = styled.ul``;
  const Li = styled.li`
    margin: 0;
    padding: 0;
    font-family: Oxygen;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #232327;
  `;

  const Img = styled.img`
    width: 80%;
    height: 424px;
  `;
  const BigBox1 = styled.div`
    background: #4c8fcc;
    width: 100%;
    height: 424px;
    top: 48px;
    left: 0px;
    position: relative;
  `;
  const BigBox2 = styled.div`
    background: #5cc68f;

    width: 100%;
    height: 424px;
    top: 48px;
    left: 0px;
    position: relative;
  `;
  const BigBox3 = styled.div`
    background: #ffcc00;

    width: 100%;
    height: 424px;
    top: 48px;
    left: 0px;
    position: relative;
  `;
  const BoxImg = styled.div`
    position: absolute;
    left: 48px;
  `;
  const BoxRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
  `;
  const BoxLeft = styled.div`
    width: 40%;
    display: flex;
  `;
  return (
    <>
      <Container>
        <TitleBig>Join the Draper entrepreneur network</TitleBig>
        <Flex>
          <BoxLeft>
            <BigBox1></BigBox1>
            <BoxImg>
              <Img src={Rectangle40} />
            </BoxImg>
          </BoxLeft>
          <BoxRight>
            <Title>Connect with a global network</Title>
            <Text>
              DEN membership connects you with inspiring people and ideas to
              empower your entrepreneurial or fundraising journey.
            </Text>
            <Ul>
              <Li>Discover useful resources, software credits, and perks</Li>
              <Li>Find the best events and training programs</Li>
              <Li>Meet co-founders, advisors, and partners</Li>
              <Li>Search and discover trending topics and insights</Li>
            </Ul>
          </BoxRight>
        </Flex>
        <Flex>
          <BoxLeft>
            <BigBox3></BigBox3>
            <BoxImg>
              <Img src={Rectangle40} />
            </BoxImg>
          </BoxLeft>
          <BoxRight>
            <Title>Connect with a global network</Title>
            <Text>
              Our members and their supporters include: founders and teams;
              mentors and advisors; remote workers and service providers; and
              angel investors and venture capitalists from around the world. As
              a DEN member, you can build a market-ready company much faster
              than ever before.
            </Text>
          </BoxRight>
        </Flex>
        <Flex>
          <BoxLeft>
            <BigBox3></BigBox3>
            <BoxImg>
              <Img src={Rectangle40} />
            </BoxImg>
          </BoxLeft>
          <BoxRight>
            <Title>Connect with a global network</Title>
            <Text>
              Our members and their supporters include: founders and teams;
              mentors and advisors; remote workers and service providers; and
              angel investors and venture capitalists from around the world. As
              a DEN member, you can build a market-ready company much faster
              than ever before.
            </Text>
          </BoxRight>
        </Flex>
      </Container>
    </>
  );
}

export default Component2;
