import React from "react";
import styled from "styled-components";

function Component3() {
  const BoxContainer = styled.div``;
  const Title = styled.h3`
    font-family: Alternate Gothic No1 D;
    font-style: normal;
    font-weight: 500;
    padding: 0;
    letter-spacing: -0.015em;
    text-transform: uppercase;
    color: #204370;
    margin: 137px 0 48px 131px;
  `;
  const Flex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 130px 131px 134px;
  `;
  const Box = styled.div`
    background: #f4f6f8;
    width: 20%;
    height: 264px;
  `;
  const Text = styled.text`
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;

    color: #232327;
  `;
  return (
    <>
      <BoxContainer>
        <Title>How Den works</Title>
        <Flex>
          <Box>
            <Text>Say hello and interact on the DEN Slack channel</Text>
          </Box>
          <Box>Say hello and interact on the DEN Slack channel</Box>
          <Box>Say hello and interact on the DEN Slack channel</Box>
          <Box>Say hello and interact on the DEN Slack channel</Box>
        </Flex>
      </BoxContainer>
    </>
  );
}

export default Component3;
