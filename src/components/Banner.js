import React from 'react';
import styled from 'styled-components';
import { Button, Typography } from 'antd';

const BackgroundImage = styled.div`
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${props => props.img ? props.img : ""});
  height: ${props => props.height ? props.height : "580px"};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const LayoutText = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: white;
`;

// const Title = styled.div`
//   font-size: 45px;
//   margin-bottom: 20px
// `;

const Paragraph = styled.p`
  font-size: 16px;
`;

const Banner = ({ img, title, caption, height, buttonText }) => {

  const { Title } = Typography;

  return (
    <>
      <BackgroundImage
        img={img}
        height={height}
      >
        <LayoutText>
          <Title level={1} style={{ color: "#fff" }}>
            {title ? title : "Title"}
          </Title>
          <Paragraph>
            {caption ? caption : "Caption"}
          </Paragraph>
          <Button
            type={"primary"}
            shape={"round"}
            size={"large"}
          >
            {buttonText ? buttonText : "Join sekarang"}
          </Button>
        </LayoutText>
      </BackgroundImage>
    </>
  )
};

export default Banner;