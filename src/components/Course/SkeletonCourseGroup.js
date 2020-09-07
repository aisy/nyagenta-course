import React from 'react';
import { Row, Col } from 'antd';
import SkeletonCard from '../../components/commons/SkeletonCard';

const SkeletonCourseGroup = ({ many }) => {
  return (
    <div>
      <Row gutter={16}>
        {
          [...Array(many ? many : 8)].map((x, i) => (
            <Col className={"gutter-row"} span={6}>
              <SkeletonCard key={i} />
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default SkeletonCourseGroup
