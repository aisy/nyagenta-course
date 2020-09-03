import React from 'react';
import { Row, Col, Button } from 'antd';

import CardListCourse from '../Home/CardListCourse';

const ListCourse = ({ data }) => {

  return (
    <div>
      <Row gutter={16}>
        <Col className={"gutter-row"} span={6}>
          <CardListCourse />
        </Col>
        <Col className={"gutter-row"} span={6}>
          <CardListCourse />
        </Col>
        <Col className={"gutter-row"} span={6}>
          <CardListCourse />
        </Col>
        <Col className={"gutter-row"} span={6}>
          <CardListCourse />
        </Col>
        <Col className={"gutter-row"} span={6}>
          <CardListCourse />
        </Col>
        <Col className={"gutter-row"} span={6}>
          <CardListCourse />
        </Col>
        <Col className={"gutter-row"} span={6}>
          <CardListCourse />
        </Col>
        <Col className={"gutter-row"} span={6}>
          <CardListCourse />
        </Col>
      </Row>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Button shape={"round"} size="large" type={"primary"}>Lihat semua Course</Button>
      </div>
    </div>
  )
}

export default ListCourse
