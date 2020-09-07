import React from 'react';
import styled from 'styled-components';
import { Col, Row, Space, Divider } from 'antd';
import { FacebookFilled, InstagramOutlined, TwitterCircleFilled, LinkedinFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const FooterContainer = styled.div`
  margin-top: 50px;
  background-color: #394654;
  padding: 50px 190px;
  text-align: center;
`;

const CopyrightText = styled.div`
  margin-top: 40px;
  color: #fff;
`;

const styles = {
  linkMenu: {
    fontSize: 16,
    fontWeight: "500",
    color: "white"
  },
  socialMenu: {
    fontSize: 28,
    color: "white"
  }
}

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <Row align={"middle"}>
          <Col span={24}>
            <Space size={100}>
              <Link style={styles.linkMenu}>Tentang Kami</Link>
              <Link style={styles.linkMenu}>Hubungi Kami</Link>
              <Link style={styles.linkMenu}>Pertanyaan (FAQ)</Link>
              <Link style={styles.linkMenu}>Syarat & Ketentuan</Link>
            </Space>
            <Divider />
            <Space size={"large"}>
              <FacebookFilled style={styles.socialMenu} />
              <InstagramOutlined style={styles.socialMenu} />
              <TwitterCircleFilled style={styles.socialMenu} />
              <LinkedinFilled style={styles.socialMenu} />
            </Space>
            <CopyrightText>
              © Copyright Nyagenta Course by Nyagenta Softwork 2020
            </CopyrightText>
          </Col>
        </Row>
      </FooterContainer>
    </div>
  )
}

export default Footer
