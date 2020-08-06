import React, { useState, useRef, useEffect } from 'react';
import Debounce from 'lodash-decorators/debounce';
import Bind from 'lodash-decorators/bind';
import ResizeObserver from 'resize-observer-polyfill';
import {
  Chart,
  Interval,
  Tooltip,
  Legend,
  View,
  Axis,
  Coordinate,
} from 'bizcharts';
import { DataView } from '@antv/data-set';


const StackTheta = props => {

  const [contentHeight, setHeight] = useState(200);
  const [LegendPosition, setLegendPosition] = useState('bottom');
  const handleRoot = useRef(null);
  const handleRef = useRef(null);

  const resize = () => {
    if (!handleRef.current) {
      return;
    }

    const canvasWidth = handleRef.current.parentNode.clientWidth;
    /*const { data = [], autoLabel = true } = this.props;
    if (!autoLabel) {
      return;
    }
    const minWidth = data.length * 30;*/
    if (canvasWidth >= 400) {
      setLegendPosition('right');
      setHeight(300);
    }
    else {
      setLegendPosition('bottom');
      setHeight(propsHeight || 200);
    }

  }

  Bind()(Debounce(400)(resize));


  useEffect(() => {
    const ro = new ResizeObserver(entries => {
      //const { height } = entries[0].contentRect;
      //console.log(entries[0].contentRect)
      resize();
    });
    if (handleRoot.current) {
      ro.observe(handleRoot.current);
    }
  }, [])



  const {
    height: propsHeight,
    autoFit = true,
    data = [],
    padding= 'auto',
    innerColor = "#7FC9FE-#BAF5C4",
    outerColor = ['#BAE7FF', '#7FC9FE', '#71E3E3', '#ABF5F5', '#8EE0A1', '#BAF5C4'],
    marker = { symbol: 'circle' },
    animate = true,
  } = props;

  console.log(data)
  /*const data = [
    { value: 251, type: '大事例一', name: '子事例一' },
    { value: 1048, type: '大事例一', name: '子事例二' },
    { value: 610, type: '大事例二', name: '子事例三' },
    { value: 434, type: '大事例二', name: '子事例四' },
    { value: 335, type: '大事例三', name: '子事例五' },
    { value: 250, type: '大事例三', name: '子事例六' },
  ];*/
  // 通过 DataSet 计算百分比
  const dv = new DataView();
  dv.source(data).transform({
    type: 'percent',
    field: 'value',
    dimension: 'type',
    as: 'percent',
  });

  const dv1 = new DataView();
  dv1.source(data).transform({
    type: 'percent',
    field: 'value',
    dimension: 'name',
    as: 'percent',
  });


  const height = propsHeight || contentHeight;

  return (
    <div ref={handleRoot}>
      <div ref={handleRef}>
        <Chart
          height={height}
          data={dv.rows}
          autoFit={autoFit}
          padding={padding}
          scale={{
            percent: {
              formatter: (val) => {
                val = (val * 100).toFixed(2) + '%';
                return val;
              },
            },
            value:{
              formatter: (val) => {
                val = val + ' 台';
                return val;
              },
            }
          }}
          animate={animate}
        >
          <Coordinate type="theta" radius={0.5} />
          <Axis visible={false} />
          <Legend name="name" visible={false} />
          <Legend name="type" visible={true} position={LegendPosition} marker={marker} />
          <Tooltip showTitle={false} />
          <Interval
            position="percent"
            adjust="stack"
            color={["type", innerColor]}
            element-highlight
            style={{
              lineWidth: 1,
              stroke: '#fff',
            }}
          />
          <View data={dv1.rows}>
            <Coordinate type="theta" radius={0.75} innerRadius={0.5 / 0.75} />
            <Interval
              position="value"
              adjust="stack"
              element-highlight
              color={['name', outerColor]}
              style={{
                lineWidth: 1,
                stroke: '#fff',
              }}
              label="name"
            />
          </View>
        </Chart>
      </div>
    </div>
  );
}


export default StackTheta;
