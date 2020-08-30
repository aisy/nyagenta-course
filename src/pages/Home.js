import React from 'react'

import LayoutHome from "../layouts/Home";
import Banner from '../components/Banner';
import Section from '../components/Section';

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
          <p>Ulalala</p>
        </Section>
      </LayoutHome>
    </>
  )
}

export default HomePage
