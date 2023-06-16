import { CATEGORY_TYPES,IHomeState } from "./../../type/home";
import { Module } from "vuex";
import {IGlobalState} from '../index'

const state: IHomeState = {
  currentCategory: CATEGORY_TYPES.ALL,
  sliders: [],
  lessons: {
    hasMore: true, //触底事件，有没有更多数据
    loading: false, //默认没有正在加载
    offset: 0,
    limit: 5,
    list: [], //当前已经显示到页面的课程
  },
};
// IHomeState 自己本页的状态
// IGlobalState 全局状态 项目的全部状态，state自带的index.ts
const home: Module<IHomeState, IGlobalState> = {
  namespaced: true,
  state,
};
export default home;
