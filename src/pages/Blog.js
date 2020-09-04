import React from 'react';

import Layout from '../layouts/Default';
import Section from '../components/commons/Section';
import StatusDev from '../components/commons/Status';
// import SearchBlog from '../components/Blog/SearchBlog';
// import ListBlog from '../components/Blog/ListBlog';

const Blog = () => {
  return (
    <>
      <Layout>
        <Section>
          <StatusDev
            status={"403"}
            title={"Mohon Maaf"}
            subtitle={"fitur atau halaman yang anda akses belum tersedia"}
          />
          {/* <SearchBlog />
          <ListBlog /> */}
        </Section>
      </Layout>
    </>
  )
}

export default Blog
