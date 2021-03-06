import React from 'react';
import { Form, Button, Input, Card, Col, Row, Typography, Image } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import LayoutCenter from '../layouts/CenterContent';
import { Link } from 'react-router-dom';

const RegisterContent = styled.div`
  width: 450px;
  display: flex;
  align-item: center;
  justify-content: center;
  padding:20px;
`;

const Login = () => {

  const { Title, Paragraph } = Typography;

  return (
    <div>
      <LayoutCenter>
        <Row align={"middle"} gutter={100} >
          <Col span={12}>
            <Image
              width={450}
              preview={false}
              src={require("../assets/img/login/undraw_researching_22gp.svg")}
            />
          </Col>
          <Col span={12}>
            <Card bordered={false} style={{ width: 450, boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
              <div style={{ textAlign: "center" }}>
                <Title level={3}>Selamat Datang!</Title>
                <Paragraph>Silahkan masuk dengan email anda</Paragraph>
              </div>

              <Form>
                <Form.Item
                  name={"email"}
                >
                  <Input
                    placeholder={"email"}
                    size={"large"}
                    prefix={<MailOutlined />}
                  />
                </Form.Item>

                <Form.Item
                  name={"username"}
                >
                  <Input
                    placeholder={"username"}
                    size={"large"}
                    prefix={<UserOutlined />}
                  />
                </Form.Item>

                <Form.Item
                  name={"password"}
                >
                  <Input.Password
                    placeholder={"password"}
                    size={"large"}
                    prefix={<LockOutlined />}
                  />
                </Form.Item>

                <Form.Item
                  name={"konfirmasiPassword"}
                >
                  <Input.Password
                    placeholder={"konfirmasi password"}
                    size={"large"}
                    prefix={<LockOutlined />}
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type={"primary"}
                    shape={"round"}
                    size={"large"}
                    block
                  >
                    Masuk
                  </Button>
                </Form.Item>
              </Form>
            </Card>
            <RegisterContent>
              <Paragraph>
                Sudah memiliki akun? <Link to={"/login"}>Masuk</Link>
              </Paragraph>
            </RegisterContent>
          </Col>
        </Row>
      </LayoutCenter>
    </div>
  )
}

export default Login;
