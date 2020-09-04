import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const CardListCourse = ({ title, description, img, width }) => {

  const { Meta } = Card;

  return (
    <div>
      <Link to={"/"}>
        <Card
          hoverable
          style={{ width: 290, marginBottom: 20 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        // actions={[
        //   <Link to={"/"}>
        //     <Button type={"primary"} shape={"round"}>Lihat semua</Button>
        //   </Link>
        // ]}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </Link>
    </div>
  )
}

export default CardListCourse
