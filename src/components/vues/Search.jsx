import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios'
// Components
import Button from '../atoms/Button/Button';

// Services
import usePlantsService from '../../services/usePlantsService';

const Search = () => {
  const [
    requestState, payload, error, { getSearchResults },
  ] = usePlantsService();
  const [searchString, setSearchString] = useState('');

  const handleOnChange = (e) => setSearchString(e.target.value);

  const handleOnSearchClick = () => getSearchResults(searchString);

  return (
    <div>
      <input type="text" onChange={handleOnChange} value={searchString} />
      <Button label={requestState === 'loading' ? 'chargement...' : `Recherche : ${searchString}`} color="primary" onClick={handleOnSearchClick} />

      {requestState === 'completed' && payload && payload.data.length > 0 ? payload.data.map((result) => (
        <div key={result.id}>
          <Link to={`/plant/${result.common_name.replace(/ /g, '')}/${result.id}`}>{result.common_name}</Link>
        </div>
        // Zamioculcas
      )) : <p>Pas de résultat</p>}

      {requestState === 'error' && error
        ? <p>{error}</p>
        : null}
    </div>
  );
};

export default Search;
