import React from 'react';
import { BackTop } from 'antd';

import LayoutHome from "../layouts/Home";
import Banner from '../components/Home/Banner';
import Section from '../components/commons/Section';
import ListCourse from '../components/Home/ListCourse';
import ListReason from '../components/Home/ListReason';


const HomePage = () => {
  return (
    <>
      <LayoutHome>
        <BackTop />
        <Banner
          img={"https://www.w3schools.com/howto/photographer.jpg"}
          title={"Level up diri anda!"}
          caption={"Akses berbagai course di bidang IT, Desain, hingga personal development!"}
        />
        <Section>
          <ListReason />
        </Section>
        <Section
          title={"Kategori Course"}
        >
          <ListCourse />
        </Section>
      </LayoutHome>
    </>
  )
}

export default HomePage
