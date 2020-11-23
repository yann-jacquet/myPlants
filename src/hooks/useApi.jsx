import { useReducer } from 'react';
import * as axios from 'axios';

// Context
import useAppContext from './useAppContext';

const requestReducer = (state, action) => {
  switch (action.type) {
    case 'REQUEST_INIT':
      return {
        ...state,
        requestState: 'loading',
        payload: null,
        error: null,
      };
    case 'REQUEST_SUCCESS':
      return {
        ...state,
        requestState: 'completed',
        payload: action.payload,
        error: null,
      };
    case 'REQUEST_FAILURE':
      return {
        ...state,
        requestState: 'error',
        payload: null,
        error: action.payload,
      };
    default:
      throw new Error();
  }
};

const Axios = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://trefle.io/api',
  // timeout: 7000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const useApi = () => {
  const [state, dispatch] = useReducer(requestReducer, {
    requestState: 'pending',
    payload: null,
    error: null,
  });
  const { addError } = useAppContext();

  const responseHandler = (res) => {
    // API has custom headers to show its status. If 'offline' it coulld answers with outdated datas
    if (res.data) {
      dispatch({ type: 'REQUEST_SUCCESS', payload: res.data });
    }

    return res;
  };

  const errorHandler = (resError) => {
    if (resError.response) {
      const status = resError.response ? resError.response.status : null;
      addError(resError.response);
      switch (status) {
        case 302:
          return dispatch({
            type: 'REQUEST_FAILURE',
            payload: '302 - Contenu existant',
          });
        case 400:
          return dispatch({
            type: 'REQUEST_FAILURE',
            payload: '400 - Contenu inexistant',
          });
        case 404:
          return dispatch({
            type: 'REQUEST_FAILURE',
            payload: '404 - Contenu non valide ou introuvable',
          });
        case 401:
          return dispatch({
            type: 'REQUEST_FAILURE',
            payload:
              '401 - Mot de passe ou utilisateur incorrect',
          });
        case 412:
          return dispatch({
            type: 'REQUEST_FAILURE',
            payload:
              "412 - Le format attendu n'est pas correct",
          });
        case 500: {
          return dispatch({
            type: 'REQUEST_FAILURE',
            payload: '500 - Erreur réseau',
          });
        }
        case 502: {
          return dispatch({
            type: 'REQUEST_FAILURE',
            payload: '502 - Erreur réseau',
          });
        }
        case 503: {
          return dispatch({
            type: 'REQUEST_FAILURE',
            payload: '503 - Service non disponible',
          });
        }
        default:
          return dispatch({
            type: 'REQUEST_FAILURE',
            payload: '000 - Une erreur est survenue',
          });
      }
    }
    return resError;
  };

  const api = (requestConfig) => {
    dispatch({ type: 'REQUEST_INIT' });
    return Axios(requestConfig).then(responseHandler).catch(errorHandler);
  };

  return {
    requestState: state.requestState,
    payload: state.payload,
    error: state.error,
    api,
  };
};

export default useApi;
