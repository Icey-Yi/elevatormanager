import { StackedColumnChart } from 'bizcharts';

const StackedColumn = (props) => {

  const {
    data = {},
    title = {},
    forceFit = true,
    padding = 'auto',
    xField = 'year',
    yField = 'value',
    meta={
      year: {
        alias:'年份',
      },
      value: {
        alias: '次数',
        formatter:(v)=>{return `${v}次`}
      }
    },
    yAxis = { min: 0 },
    color,//['#ae331b', '#1a6179']
    stackField='type',
  } = props;

  return (
    <StackedColumnChart
      data={data}
      title={title}
      forceFit={forceFit}
      padding={padding}
      meta={meta}
      xField={xField}
      yField={yField}
      yAxis={yAxis}
      color={color}
      stackField={stackField}
    />
  );
}

export default StackedColumn;