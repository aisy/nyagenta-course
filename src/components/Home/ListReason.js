import React from 'react';
import { Row, Col, Typography } from 'antd';
import { SmileTwoTone, FlagTwoTone, LikeTwoTone } from '@ant-design/icons';

const ListReason = () => {

  const { Title, Paragraph } = Typography;

  return (
    <div>
      <Row gutter={148}>
        <Col span={8}>
          <div style={{ textAlign: "center" }}>
            <SmileTwoTone style={{ fontSize: 50, marginBottom: 20 }} twoToneColor={"#b52ad4"} />
            <Title level={4}>
              Materi Mudah dipahami
            </Title>
            <Paragraph>
              Materi disusun oleh orang yang berpengalaman di bidangnya, dan di sesuaikan dengan orang yang baru belajar
            </Paragraph>
          </div>
        </Col>

        <Col span={8}>
          <div style={{ textAlign: "center" }}>
            {/* <SmileOutlined style={{ fontSize: 50 }} /> */}
            <LikeTwoTone style={{ fontSize: 50, marginBottom: 20 }} twoToneColor={"#b52ad4"} />
            <Title level={4}>
              Cocok dengan Industri
            </Title>
            <Paragraph>Materi yang tersedia sudah menyesuaikan kebutuhan industri dan trend yang sedang berkembang </Paragraph>
          </div>
        </Col>

        <Col span={8}>
          <div style={{ textAlign: "center" }}>
            <FlagTwoTone style={{ fontSize: 50, marginBottom: 20 }} twoToneColor={"#b52ad4"} />
            <Title level={4}>
              Di bimbing Mentor
            </Title>
            <Paragraph>
              Kesulitan? bisa di konsultasikan dengan mentor dengan jam yang di tentukan
            </Paragraph>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ListReason
