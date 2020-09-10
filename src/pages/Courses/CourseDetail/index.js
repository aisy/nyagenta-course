import React from 'react';
import { Row, Col, Typography, Collapse, Space, Button } from 'antd';
import { CheckCircleOutlined, PlayCircleTwoTone } from '@ant-design/icons';

import Layout from '../../../layouts/Default';
import Banner from '../../../components/Course/CourseDetail/Banner';
import Section from '../../../components/commons/Section';

const styles = {
  panel: {
    fontSize: 18,
    fontWeight: 700
  }
}

const CourseDetail = () => {

  const { Paragraph, Title } = Typography;

  return (
    <div>
      <Layout>
        <Banner
          height={"400px"}
        />
        <Section>
          <Row gutter={16}>
            <Col span={12}>
              <Title level={2}>
                Apa yang anda pelajari di course ini?
              </Title>
            </Col>
            <Col span={12}>
              <Paragraph style={{ fontSize: 18 }}>
                <CheckCircleOutlined /> Hahahahahahahahahaha
              </Paragraph>
              <Paragraph style={{ fontSize: 18 }}>
                <CheckCircleOutlined /> Hahahahahahahahahaha
              </Paragraph>
              <Paragraph style={{ fontSize: 18 }}>
                <CheckCircleOutlined /> Hahahahahahahahahaha
              </Paragraph>
            </Col>
          </Row>
        </Section>

        <Section title={"Konten Course"}>
          <div style={{ padding: "0px 150px" }}>
            <Collapse>
              <Collapse.Panel header={"Trailer"} style={styles.panel} extra={"1 Konten"}>
                <Space size={730}>
                  <Space size={15}>
                    <PlayCircleTwoTone color={"#E040FB"} />
                    <Typography.Paragraph style={{ marginBottom: 0 }} strong>
                      Trailer
                    </Typography.Paragraph>
                  </Space>
                  <Button type={"primary"}>Mulai</Button>
                </Space>
              </Collapse.Panel>

              <Collapse.Panel header={"Pengenalan"} style={styles.panel}>
                asdasdasdasdasdasd
              </Collapse.Panel>
            </Collapse>
          </div>
        </Section>
      </Layout>
    </div>
  )
}

export default CourseDetail
