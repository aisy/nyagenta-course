import React from 'react';
import { Card, Skeleton } from 'antd';

const SkeletonCard = ({ loading, key }) => {

  return (
    <div>
      <Card
        key={key ? key : 0}
        style={{ width: 290, marginBottom: 20 }}
        cover={
          !loading ? <Skeleton.Image active style={{ width: 290, height: 300 }} />
            : <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        }
      >
        <Skeleton
          paragraph={{ rows: 1 }}
          style={{ width: 100 }}
          size={"small"}
          loading={loading ? loading : true}
          active
        />
      </Card>
    </div>
  )
}

export default SkeletonCard
