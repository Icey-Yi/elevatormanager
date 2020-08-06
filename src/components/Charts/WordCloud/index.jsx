import { WordCloudChart } from 'bizcharts';

// 数据源
const data = [
  {
    "value": 12,
    "name": "G2Plot"
  },
  {
    "value": 9,
    "name": "AntV"
  },
  {
    "value": 8,
    "name": "F2"
  },
  {
    "value": 8,
    "name": "G2"
  },
  {
    "value": 8,
    "name": "G6"
  },
  {
    "value": 8,
    "name": "DataSet"
  },
  {
    "value": 8,
    "name": "墨者学院"
  },
  {
    "value": 6,
    "name": "Analysis"
  },
  {
    "value": 6,
    "name": "Data Mining"
  },
  {
    "value": 6,
    "name": "Data Vis"
  },
  {
    "value": 6,
    "name": "Design"
  },
  {
    "value": 6,
    "name": "Grammar"
  },
  {
    "value": 6,
    "name": "Graphics"
  },
  {
    "value": 6,
    "name": "Graph"
  },
  {
    "value": 6,
    "name": "Hierarchy"
  },
  {
    "value": 6,
    "name": "Labeling"
  },
  {
    "value": 6,
    "name": "Layout"
  },
  {
    "value": 6,
    "name": "Quantitative"
  },
  {
    "value": 6,
    "name": "Relation"
  },
  {
    "value": 4,
    "name": "Arc Diagram"
  },
  {
    "value": 4,
    "name": "Bar Chart"
  },
  {
    "value": 4,
    "name": "Canvas"
  },
  {
    "value": 4,
    "name": "Chart"
  },
  {
    "value": 4,
    "name": "DAG"
  },
  {
    "value": 4,
    "name": "DG"
  },
  {
    "value": 4,
    "name": "Facet"
  },
  {
    "value": 4,
    "name": "Geo"
  },
  {
    "value": 4,
    "name": "Line"
  },
  {
    "value": 4,
    "name": "MindMap"
  },
  {
    "value": 4,
    "name": "Pie"
  },
  {
    "value": 4,
    "name": "Pizza Chart"
  },
  {
    "value": 4,
    "name": "Punch Card"
  },
  {
    "value": 4,
    "name": "SVG"
  },
  {
    "value": 4,
    "name": "Sunburst"
  },
  {
    "value": 4,
    "name": "Tree"
  },
  {
    "value": 4,
    "name": "UML"
  },
  {
    "value": 3,
    "name": "Chart"
  },
  {
    "value": 3,
    "name": "View"
  },
  {
    "value": 3,
    "name": "Geom"
  },
  {
    "value": 3,
    "name": "Shape"
  },
  {
    "value": 3,
    "name": "Scale"
  },
  {
    "value": 3,
    "name": "Animate"
  },
  {
    "value": 3,
    "name": "Global"
  },
  {
    "value": 3,
    "name": "Slider"
  },
  {
    "value": 3,
    "name": "Connector"
  },
  {
    "value": 3,
    "name": "Transform"
  },
  {
    "value": 3,
    "name": "Util"
  },
  {
    "value": 3,
    "name": "DomUtil"
  },
  {
    "value": 3,
    "name": "MatrixUtil"
  },
  {
    "value": 3,
    "name": "PathUtil"
  },
  {
    "value": 3,
    "name": "G"
  },
  {
    "value": 3,
    "name": "2D"
  },
  {
    "value": 3,
    "name": "3D"
  },
  {
    "value": 3,
    "name": "Line"
  },
  {
    "value": 3,
    "name": "Area"
  },
  {
    "value": 3,
    "name": "Interval"
  },
  {
    "value": 3,
    "name": "Schema"
  },
  {
    "value": 3,
    "name": "Edge"
  },
  {
    "value": 3,
    "name": "Polygon"
  },
  {
    "value": 3,
    "name": "Heatmap"
  },
  {
    "value": 3,
    "name": "Render"
  },
  {
    "value": 3,
    "name": "Tooltip"
  },
  {
    "value": 3,
    "name": "Axis"
  },
  {
    "value": 3,
    "name": "Guide"
  },
  {
    "value": 3,
    "name": "Coord"
  },
  {
    "value": 3,
    "name": "Legend"
  },
  {
    "value": 3,
    "name": "Path"
  },
  {
    "value": 3,
    "name": "Helix"
  },
  {
    "value": 3,
    "name": "Theta"
  },
  {
    "value": 3,
    "name": "Rect"
  },
  {
    "value": 3,
    "name": "Polar"
  },
  {
    "value": 3,
    "name": "Dsv"
  },
  {
    "value": 3,
    "name": "Csv"
  },
  {
    "value": 3,
    "name": "Tsv"
  },
  {
    "value": 3,
    "name": "GeoJSON"
  },
  {
    "value": 3,
    "name": "TopoJSON"
  },
  {
    "value": 3,
    "name": "Filter"
  },
  {
    "value": 3,
    "name": "Map"
  },
  {
    "value": 3,
    "name": "Pick"
  },
  {
    "value": 3,
    "name": "Rename"
  },
  {
    "value": 3,
    "name": "Filter"
  },
  {
    "value": 3,
    "name": "Map"
  },
  {
    "value": 3,
    "name": "Pick"
  },
  {
    "value": 3,
    "name": "Rename"
  },
  {
    "value": 3,
    "name": "Reverse"
  },
  {
    "value": 3,
    "name": "sort"
  },
  {
    "value": 3,
    "name": "Subset"
  },

  {
    "value": 2,
    "name": "祯逸"
  },
  {
    "value": 2,
    "name": "绝云"
  },
  {
    "value": 2,
    "name": "罗宪"
  },
  {
    "value": 2,
    "name": "萧庆"
  },
  {
    "value": 2,
    "name": "哦豁"
  },
  {
    "value": 2,
    "name": "逍为"
  },
  {
    "value": 2,
    "name": "翎刀"
  },
  {
    "value": 2,
    "name": "陆沉"
  },
  {
    "value": 2,
    "name": "顾倾"
  },
  {
    "value": 2,
    "name": "Domo"
  },
  {
    "value": 2,
    "name": "GPL"
  },
  {
    "value": 2,
    "name": "PAI"
  },
  {
    "value": 2,
    "name": "SPSS"
  },
  {
    "value": 2,
    "name": "SYSTAT"
  },
  {
    "value": 2,
    "name": "Tableau"
  },
  {
    "value": 2,
    "name": "D3"
  },
  {
    "value": 2,
    "name": "Vega"
  },
  {
    "value": 2,
    "name": "统计图表"
  }
]
  ;

const WordCloud = (props) => {

const {
  height=400,
  width=400,
  forceFit=true,
}=props;


  const getDataList=(data) =>{
    const list = [];
    // change data type
    data.forEach((d) => {
      list.push({
        word: d.name,
        weight: d.value,
        id: list.length,
      });
    });
    return list;
  }
  const getRandomColor = () => {
    const arr = [
      '#5B8FF9',
      '#5AD8A6',
      '#5D7092',
      '#F6BD16',
      '#E8684A',
      '#6DC8EC',
      '#9270CA',
      '#FF9D4D',
      '#269A99',
      '#FF99C3',
    ];
    return arr[Math.floor(Math.random() * (arr.length - 1))];
  }

  const hoverAction = (item, dimension, evt, start) => {
    // console.log('hover action', item && item.word);
  }
  return (
    <WordCloudChart
      data={getDataList(data)}
      forceFit={true}
      //maskImage='https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*07tdTIOmvlYAAAAAAAAAAABkARQnAQ'
      wordStyle={{
        rotation: [-Math.PI / 2, Math.PI / 2],
        rotateRatio: 0.5,
        rotationSteps: 4,
        fontSize: [10, 60],
        color: (word, weight) => {
          return getRandomColor();
        },
        active: {
          shadowColor: '#333333',
          shadowBlur: 10,
        },
        gridSize: 8,
      }}
      shape='cardioid'
      shuffle={false}
      backgroundColor='#fff'
      tooltip={{
        visible: true,
      }}
      selected={-1}
      onWordCloudHover={hoverAction}
    />
  );
}

export default WordCloud;