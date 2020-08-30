import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const SectionContainer = styled.div`
  padding: 30px 10%;
`;

const TitleContainer = styled.div`
  text-align: center;
`;

const Section = ({ title, caption }, props) => {

  const { Title, Paragraph } = Typography;

  return (
    <>
      <SectionContainer>
        <TitleContainer>
          <Title>{title ? title : "Title Section"}</Title>
          <Paragraph>
            {caption ? caption : "Caption section"}
          </Paragraph>
        </TitleContainer>

        <div>
          {props.children}
        </div>
      </SectionContainer>
    </>
  )

}

export default Section;