import React, { useEffect, useState } from 'react';
import { BackTop } from 'antd';

import { getData } from '../../services/sample'

import LayoutCourse from '../../layouts/Default';
import Section from '../../components/commons/Section';
import SearchBar from '../../components/Course/SearchBarCourse';
import ListCourse from '../../components/Course/ListCourse';

const Courses = () => {

  const [sample, setSample] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const resGetData = async () => {
      setLoading(true);
      try {
        let data = await getData();
        setSample(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.warn(error);
      }
    }

    resGetData();
  }, []);

  return (
    <>
      <LayoutCourse>
        <BackTop />
        <Section>
          <SearchBar />
          <ListCourse
            data={sample}
            loading={loading}
          />
        </Section>
      </LayoutCourse>
    </>
  )
}

export default Courses
