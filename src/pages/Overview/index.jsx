import React, { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Row, Col, Card } from 'antd';
import { connect, useIntl } from 'umi';
import Bmap from '../../components/Map';
import StackTheta from '../../components/Charts/StackTheta';
import Radar from '../../components/Charts/Radar';
import StackedColumn from '../../components/Charts/StackedColumn';
import WordCloud from '../../components/Charts/WordCloud';
import Rose from '../../components/Charts/Rose';
import Donut from '../../components/Charts/Donut';

const Overview = props => {

  const { formatMessage } = useIntl();

  const { overview, loading } = props;
  const { mapData, chartData } = overview;
  const { stackData, stackColumnData, roseData } = chartData;


  console.log(chartData);

  useEffect(() => {
    const { dispatch } = props;
    dispatch({
      type: 'overview/fetchMapData',
    }),
      dispatch({
        type: 'overview/fetchChartData',
      })
  }, [])

  return (
    <PageContainer>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={17} xl={17}>
          <Card
            loading={loading}
            bordered={false}
            bodyStyle={{ height: '676px' }}
            style={{ marginBottom: 24 }}>
            <Bmap data={mapData} loading={loading}></Bmap>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={7} xl={7}>
          <Card
            bordered={false}
            title={formatMessage(
              {
                id: 'map.chart.elevator-Location',
                defaultMessage: 'Elevator Location',
              }
            )}
            style={{ marginBottom: 24 }}>
            <StackTheta data={stackData} height={220} />
          </Card>
          <Card
            bordered={false}
            title={formatMessage(
              {
                id: 'map.chart.elevator-status',
                defaultMessage: 'Elevator Status',
              }
            )}
            style={{ marginBottom: 24 }}>
            <Donut data={roseData} height={220}/>
          </Card>

        </Col>
      </Row>
      <Card
        bordered={false}
        title={formatMessage(
          {
            id: 'map.chart.elevator-failure',
            defaultMessage: 'Elevator Failure',
          }
        )}
        style={{ marginBottom: 24 }}>
        <StackedColumn data={stackColumnData} />
      </Card>
    </PageContainer>
  );
}


export default connect(({ overview, loading }) => ({
  overview: overview,
  loading: loading.effects['overview/fetchMapData'],
}))(Overview);
