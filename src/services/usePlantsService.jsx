import useApi from '../hooks/useApi';

const usePlantsService = () => {
  const token = 'token=YatCfbG5lEME2mttPO5lWSUkHpyXI10E2wniAs6eKgY';
  const {
    requestState, payload, error, api,
  } = useApi();

  const getSearchResults = (searchString) => api({
    method: 'get',
    url: `/v1/plants/search?${token}&q=${searchString}`,
  });

  const getPlantInfo = (plantId) => api({
    method: 'get',
    url: `/v1/plants/${plantId}?${token}`,
  });

  return [
    requestState,
    payload,
    error,
    {
      getSearchResults,
      getPlantInfo,
    },
  ];
};

export default usePlantsService;
