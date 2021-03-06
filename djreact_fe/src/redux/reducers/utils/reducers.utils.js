export const httpType = {
  CREATE: 'CREATE',
  RETRIEVE: 'RETRIEVE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  LIST: 'LIST',
}

export const axiosFetch = {
  LIST: {
    START: 'AXIOS_FETCH_LIST_START',
    SUCCESS: 'AXIOS_FETCH_LIST_SUCCESS',
    ERROR: 'AXIOS_FETCH_LIST_ERROR',
  },
  CREATE: {
    START: 'AXIOS_FETCH_CREATE_START',
    SUCCESS: 'AXIOS_FETCH_CREATE_SUCCESS',
    ERROR: 'AXIOS_FETCH_CREATE_ERROR',
  },
  DELETE: {
    START: 'AXIOS_FETCH_DELETE_START',
    SUCCESS: 'AXIOS_FETCH_DELETE_SUCCESS',
    ERROR: 'AXIOS_FETCH_DELETE_ERROR',
  },
}
