import React, { useEffect } from 'react';
import {
  useParams,
} from 'react-router-dom';

// Services
import usePlantsService from '../../services/usePlantsService';

const Plant = () => {
  const { id } = useParams();
  const [
    requestState, payload, , { getPlantInfo },
  ] = usePlantsService();

  useEffect(() => {
    getPlantInfo(id);
  }, []);

  return requestState === 'completed' && payload
    ? (
      <>
        <h1>
          Common Name :
          {' '}
          {payload.data.common_name}
        </h1>
        <img src={payload.data.image_url} alt={payload.data.common_name} />
        <h2>
          Famille :
          {payload.data.family_common_name}
        </h2>
        <p>
          Bibliographie :
          {payload.data.bibliography}
        </p>
      </>
    )
    : <p>Loading ...</p>;
};

export default Plant;
