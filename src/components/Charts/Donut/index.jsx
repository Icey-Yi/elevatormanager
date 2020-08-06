import { DonutChart } from 'bizcharts';

const Donut = (props) => {
  const {
    data = {},
    height = 200,
    title = '',
    radius = 0.9,
    forceFit = true,
    color = ['green', 'orange', 'red', 'gray'],
  } = props;
  return (
    <DonutChart
      data={data}
      height={height}
      title={title}
      forceFit={forceFit}
      description=''
      radius={radius}
      padding='auto'
      angleField='value'
      colorField='type'
      color={color}
      legend={{ position: 'bottom-center'}}
    />
  );
};
export default Donut;