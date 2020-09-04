import React from 'react';
import { Input, Row, Col, Select } from 'antd';
import styled from 'styled-components';

const SearchContainer = styled.div`
  margin-bottom: 60px;
`;

const SearchBarCourse = () => {

  const { Search } = Input;

  return (
    <>
      <SearchContainer>
        <Row>
          <Col span={12}>
            <Select size={"large"} placeholder={"Kategori"} style={{ width: 180 }}>
              <Select.Option value={"semua"}>Semua</Select.Option>
              <Select.Option value={"javascript"}>Javascipt</Select.Option>
            </Select>
          </Col>
          <Col span={12}>
            <Search
              size={"large"}
              placeholder="Cari Course"
              enterButton
            />
          </Col>
        </Row>
      </SearchContainer>
    </>
  )
}

export default SearchBarCourse
