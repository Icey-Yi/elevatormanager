import { queryMapData, queryChartData } from '@/services/user';

const OverviewModel = {
  namespace: 'overview',
  state: {
    mapData: [],
    chartData:{},
  },
  effects: {
    *fetchMapData(_, { call, put }) {
      const data = yield call(queryMapData);
      yield put({
        type: 'saveData',
        payload: data,
      });
    },
    *fetchChartData(_, { call, put }) {
      const data = yield call(queryChartData);
      yield put({
        type: 'saveChartData',
        payload: data,
      });
    },
  },
  reducers: {
    saveData(state, { payload }) {
      return {
        ...state,
        mapData: payload,
      };
    },
    saveChartData(state, { payload }) {
      return {
        ...state,
        chartData: payload,
      };
    },
  }
};

export default OverviewModel;
