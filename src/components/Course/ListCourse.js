import React from 'react';
import { Row, Col, Pagination } from 'antd';
import styled from 'styled-components';

import CardListCourse from '../Home/CardListCourse';

const PaginationCourse = styled.div`
  margin-top: 30px;
  display: flex;
  align-item: center;
  justify-content: center;
`;

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

      <PaginationCourse>
        <Pagination defaultCurrent={1} total={50} />
      </PaginationCourse>
    </div>
  )
}

export default ListCourse
