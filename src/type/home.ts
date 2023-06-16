export interface ILesson {
  title: string;
  video: string;
  poster: string;
  price: number;
  category?: string;
}
export interface ISlider {
  url: string;
}
export interface ILessons {
  hasMore: boolean; //触底事件，有没有更多数据
  loading: boolean; //默认没有正在加载
  offset: number;
  limit: number;
  list: ILesson[]; //当前已经显示到页面的课程
}
export interface IHomeState {
  currentCategory: CATEGORY_TYPES;
  sliders: ISlider[];
  lessons: ILessons;
}
export enum CATEGORY_TYPES {
  ALL,
  REACT,
  VUE,
  NODE,
}
