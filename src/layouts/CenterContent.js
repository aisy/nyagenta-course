import React from 'react';
import styled from 'styled-components';

const LayoutForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 10px;
`;

const CenterContent = ({ children }) => {
  return (
    <div>
      <LayoutForm>
        {children}
      </LayoutForm>
    </div>
  )
}

export default CenterContent
