import React from 'react'

import LayoutHome from "../layouts/Home";
import Banner from '../components/Home/Banner';
import Section from '../components/commons/Section';
import ListCourse from '../components/Home/ListCourse';

const HomePage = () => {
  return (
    <>
      <LayoutHome>
        <Banner
          img={"https://www.w3schools.com/howto/photographer.jpg"}
          title={"Tingkatkan Kemampuan dan Kompetensi Diri"}
          caption={"Akses beragam course di bidang pemrograman, marketing, bisnis, hingga personal development!"}
        />
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
