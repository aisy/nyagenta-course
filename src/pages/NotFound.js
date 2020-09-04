import React from 'react';

import Layout from '../layouts/ShowStatus';
import Section from '../components/commons/Section';
import StatusPage from '../components/commons/Status';

const NotFound = () => {
  return (
    <>
      <Layout>
        <Section>
          <StatusPage
            status={"404"}
            title={"Whoops!"}
            subtitle={"Maaf Halaman yang anda akses tidak ditemukan"}
          />
        </Section>
      </Layout>
    </>
  )
}

export default NotFound
