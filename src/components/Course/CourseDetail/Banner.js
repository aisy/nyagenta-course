import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography, Row, Col, Skeleton, Divider, Button, Space, Tag, Modal } from 'antd';
import { SolutionOutlined, PlayCircleOutlined, HistoryOutlined, GlobalOutlined } from '@ant-design/icons';

const BackgroundImage = styled.div`
  background-color: #1e1e1c;
  padding: 150px 150px 100px;
  color: white;
`;

const styles = {
  title: {
    marginBottom: 10,
    color: "#fff",
  },
  caption: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 0
  },
  author: {
    color: "#E040FB",
    marginTop: 15,
    marginBottom: 0
  },
  status: {
    color: "#E040FB",
    marginTop: 0,
    marginBottom: 0
  },
  price: {
    color: "#faad14",
    fontWeight: "600",
    fontSize: 30,
    marginTop: 0,
  }
}

const Banner = ({ data }) => {

  const { Title, Paragraph } = Typography;
  const [modal, setModal] = useState(false);

  const modalClose = () => {
    setModal(false);
  }

  return (
    <>
      <BackgroundImage>
        <Row gutter={50}>
          <Col span={8}>
            <Skeleton.Image style={{ width: "300px", height: "300px" }} />
          </Col>
          <Col span={16}>
            {/* TAG */}
            <div>
              <Tag color={"magenta"}>Javascript</Tag>
              <Tag color={"magenta"}>Basic</Tag>
            </div>

            {/* Title */}
            <Title level={1} style={styles.title}>
              Javascript basic
            </Title>
            <Paragraph style={styles.caption}>
              Reprehenderit elit elit do aute ullamco exercitation voluptate.
              Excepteur tempor minim culpa nulla labore ullamco.
            </Paragraph>

            {/* Auth */}
            <Paragraph style={styles.author}>
              <SolutionOutlined /> Dibuat oleh Aisy Rozsidhy
            </Paragraph>
            <Space size={30}>
              <Paragraph style={styles.status}>
                <HistoryOutlined /> Terakhir Update Juni 2020
              </Paragraph>
              <Paragraph style={styles.status}>
                <GlobalOutlined /> Indonesia
              </Paragraph>
            </Space>
            <Paragraph style={styles.price}>Rp. 560.000</Paragraph>

            <Divider style={{ borderTopColor: "#fff", marginTop: 0 }} />

            {/* Button */}
            <Space>
              <Button type={"primary"} size={"large"} shape={"round"}>Beli Sekarang</Button>
              <Button
                type={"primary"}
                ghost
                size={"large"}
                shape={"round"}
                onClick={() => setModal(true)}
                icon={<PlayCircleOutlined />}
              >
                Preview Video
              </Button>
            </Space>
          </Col>
        </Row>

        {/* Modal */}
        <Modal
          title="Basic Modal"
          visible={modal}
          onCancel={modalClose}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>

      </BackgroundImage>
    </>
  )
};

export default Banner;