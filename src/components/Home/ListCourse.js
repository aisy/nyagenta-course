import React from 'react';
import { Row, Col } from 'antd';

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
      </Row>
    </div>
  )
}

export default ListCourse
