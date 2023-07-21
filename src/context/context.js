//context creation

import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer";
import { NEWS_API } from "../api";

const AppContext = createContext();

const initialState = {
  isLoading: true,
  query: "Css",
  hits: [],
  nbPages: 0,
  page: 0,
};

//Provied Creation

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    dispatch(
      {
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      },
      {
        type: "LOADING_STATE",
      }
    );
  };

  const removePost = (post_ID) => {
    dispatch({
      type: "REMOVE_POST",
      payload: post_ID,
    });
  };

  const searchPost = (searchQuery) => {
    dispatch({
      type: "SEARCH_POST",
      payload: searchQuery,
    });
  };

  const getNextPage = () => {
    dispatch({
      type: "GET_NEXT_PAGE",
    });
  };

  const getPrevPage = () => {
    dispatch({
      type: "GET_PREV_PAGE",
    });
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      fetchApiData(`${NEWS_API()}query=${state.query}&page=${state.page}`);
    }, 1000);

    return () => clearTimeout(timerOut);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getNextPage, getPrevPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook creation

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, useGlobalContext, AppProvider };
