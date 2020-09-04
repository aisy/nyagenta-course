import React from 'react';
import { Result, Button } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Status = ({
  status,
  title,
  subtitle
}) => {
  return (
    <div>
      <Result
        status={status ? status : "null"}
        title={title ? title : "Title"}
        subTitle={subtitle ? subtitle : null}
        extra={
          <Link to={"/"}>
            <Button
              type={"primary"}
              size={"large"}
              icon={<HomeFilled />}
            >
              ke Halaman utama
            </Button>
          </Link>
        }
      />
    </div>
  )
}

export default Status
