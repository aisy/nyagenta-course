import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const CardListCourse = ({ title, description, img, width, link }) => {

  const { Meta } = Card;

  return (
    <div>
      <Link to={link ? link : "/"}>
        <Card
          hoverable
          style={{ width: 290, marginBottom: 20 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta
            title={title}
            description={description}
          />
        </Card>
      </Link>
    </div>
  )
}

export default CardListCourse
