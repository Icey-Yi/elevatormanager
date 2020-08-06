import { RoseChart } from 'bizcharts';

// 数据源
/*const data = [
  {
    type: '分类一',
    value: 27,
  },
  {
    type: '分类二',
    value: 25,
  },
  {
    type: '分类三',
    value: 18,
  },
  {
    type: '分类四',
    value: 15,
  },
  {
    type: '分类五',
    value: 10,
  },
  {
    type: '其它',
    value: 5,
  },
];*/

const Rose = (props) => {

  const {
    height = 200,
    data = {},
    title = '',
    description = '',
    radius = 0.8,
    radiusField = 'value',
    categoryField = 'type',
    colorField = 'type',
    label = {
      visible: true,
      type: 'outer',
      content: (text) => text.value,
    },
  } = props;
  return (
    <RoseChart
      data={data}
      height={height}
      forceFit
      title={title}
      description={description}
      radius={radius}
      radiusField={radiusField}
      categoryField={categoryField}
      colorField={colorField}
      label={label}
    />
  );
}

export default Rose;