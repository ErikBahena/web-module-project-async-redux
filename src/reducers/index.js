import {
  CHANGE_COUNTRY,
  CHANGE_IP,
  CHANGE_UNIVERSITIES,
  FETCH_START,
  FETCH_ERROR,
  FETCH_SUCCESS,
} from "../actions/index.js";

const initialState = {
  ipAddress: "",
  country: "",
  universities: [],
  isFetching: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_IP:
      return {
        ...state,
        ipAddress: action.payload,
      };
    case CHANGE_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case CHANGE_UNIVERSITIES:
      return {
        ...state,
        universities: action.payload,
      };

    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
      };

    case FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
