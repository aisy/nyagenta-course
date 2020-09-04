import React from 'react';
import { BackTop } from 'antd';

import LayoutCourse from '../../layouts/Default';
import Section from '../../components/commons/Section';
import SearchBar from '../../components/Course/SearchBarCourse';
import ListCourse from '../../components/Course/ListCourse';

const Courses = () => {
  return (
    <>
      <LayoutCourse>
        <BackTop />
        <Section>
          <SearchBar />
          <ListCourse />
        </Section>
      </LayoutCourse>
    </>
  )
}

export default Courses
