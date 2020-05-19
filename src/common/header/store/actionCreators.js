import * as constants from "./constants";
import { fromJS } from "immutable";
import Axios from "axios";

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data)
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS,
});
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
});

export const getList = () => {
  return (dispatch) => {
    Axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data))

    }).catch(() => {
      console.log('error')
    })
  }
};
