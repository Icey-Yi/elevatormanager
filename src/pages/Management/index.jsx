import React, { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Row, Col, Card } from 'antd';
import { connect, useIntl } from 'umi';


const Management = props => {

  const { formatMessage } = useIntl();

  useEffect(() => {
    const { dispatch } = props;
  }, [])

  return (
    <PageContainer>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={17} xl={17}>
          dddd
        </Col>
        <Col xs={24} sm={24} md={24} lg={7} xl={7}>
          
        </Col>
      </Row>
    </PageContainer>
  );
}


export default connect(({}) => ({}))(Management);
