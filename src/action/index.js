import api from "../api/api";

import * as actionTypes from "./Types";

export const fetchTopSongs = () => async (dispatch) => {
  const response = await api.get(
    `chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`
  );

  dispatch({
    type: actionTypes.TOP_SONGS,
    payload: response.data,
  });
};
