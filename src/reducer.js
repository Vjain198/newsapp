const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING_STATE':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_STORIES':
      return {
        ...state,
        isLoading: false,
        nbPages: action.payload.nbPages,
        hits: action.payload.hits,
      }

    case 'REMOVE_POST':
      return {
        ...state,
        hits: state.hits.filter((currEle) => {
          return currEle.objectID !== action.payload
        }),
      }

    case 'SEARCH_POST':
      return {
        ...state,
        query: action.payload,
      }

    case 'GET_PREV_PAGE':
      let pageNumDec = state.page - 1

      if (pageNumDec <= 0) {
        pageNumDec = 0
      }

      return {
        ...state,
        page: pageNumDec,
      }

    case 'GET_NEXT_PAGE':
      let pageNumInc = state.page + 1

      if (pageNumInc >= state.nbPages) {
        pageNumInc = 0
      }

      return {
        ...state,
        page: pageNumInc,
      }

    default:
      return 'Faild to render'
  }
}

export default reducer
