import { mock } from "mockjs";

const properties = [
  '东高创物业',
  '万家兴物业',
  '新地物业',
];

const communities = [
  { name: '光谷创业街', lng: 114.420648, lat: 30.506694, address: '湖北省武汉市洪山区光谷创业街', id: '30104201192004010001', num: 10 },
  { name: '左岭新城', lng: 114.620435, lat: 30.495761, address: '湖北省武汉市洪山区高新大道左岭新城', id: '30104201192013090068', num: 6 },
  { name: '东方花都', lng: 114.301065, lat: 30.641471, address: '湖北省武汉市江岸区兴业路165号', id: '30104201022006060007', num: 8 },
];

const elevators = (property, community) => {
  let elevators = [];
  for (let i = 0; i < community.num; i++) {
    elevators.push({
      property: property,
      community: community.name,
      name: `${Math.floor(i / 2) + 1}栋${i % 2 + 1}单元`,
      elevator_id: `${community.id + i}`,
      lng: (community.lng + 0.001 * i).toFixed(6),
      lat: community.lat,
      address: community.address,
      status: status[Math.floor(Math.random() * 4)],
    });
  }
  return elevators;
};

const status = [
  'N',//normal
  'W',//warning
  'E',//error
  'O',//offline
];

const elevators_status = [
  '正常',
  '未年检',
  '报警',
  '离线',
];

const location = [
  '洪山区',
  '东湖高新区',
  '江汉区'
];

const elevators_failure = [
  '层间停梯',
  '反复开关门',
  '长时间开门',
  '关人',
  '冒顶',
  '蹲底',
  '紧急按钮',
];

const getstackthetaData = () => {
  var result = [];
  for (let i = 0; i < communities.length; i++) {
    result.push({ value: communities[i].num, type: location[i], name: communities[i].name, });
  }
  return result;
}

const getstackcolumnData = (type) => {
  var result = [];
  if (type === 'year') {
    var tYear = new Date().getFullYear();
    for (let i = 9; i >= 0; i--) {
      let data = mock({
        'list|7': [{
          'year': parseInt(tYear) - i,
          'type|+1': elevators_failure,
          'value|0-10': 1,
        }]
      });
      result = [...result, ...data.list];
    }
  }
  return result;
}

const getroseData = () => {
  let data = mock({
    'list|4': [{
      'type|+1': elevators_status,
      'value|0-100': 1,
    }]
  });
  return data.list;
}

const getChartData = (req, res) => {
  var result = {
    stackData: getstackthetaData(),
    stackColumnData: getstackcolumnData('year'),
    roseData: getroseData(),
  }
  return res.json(result);
}

const getmapData = (req, res) => {
  var result = [];
  for (let i = 0; i < 3; i++) {
    result = [...result, ...elevators(properties[i], communities[i])];
  }
  return res.json(result);
}

export default {
  // 支持值为 Object 和 Array
  'GET /api/mapData': getmapData,
  'GET /api/chartData': getChartData,
}