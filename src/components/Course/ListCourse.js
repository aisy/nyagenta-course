import React, { useEffect } from 'react';
import { Row, Col, Pagination } from 'antd';
import styled from 'styled-components';

import CardListCourse from '../../components/commons/CardListCourse';
import SkeletonCard from './SkeletonCourseGroup';

const PaginationCourse = styled.div`
  margin-top: 30px;
  display: flex;
  align-item: center;
  justify-content: center;
`;

const ListCourse = ({ data, loading }) => {

  useEffect(() => {
    console.log(data)
  }, [data, loading]);

  return (
    <div>
      <Row gutter={16}>
        {
          loading ?
            <SkeletonCard />
            :
            data.map(items => (
              <Col className={"gutter-row"} span={6}>
                <CardListCourse
                  title={items.title}
                  description={items.releaseYear}
                />
              </Col>
            ))
        }
      </Row>

      <PaginationCourse>
        <Pagination
          defaultCurrent={1}
          total={10}
        />
      </PaginationCourse>
    </div>
  )
}

export default ListCourse
