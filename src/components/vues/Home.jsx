import React from 'react';
import { useHistory, Link } from 'react-router-dom';

// Components
import Button from '../atoms/Button/Button';

const Home = () => {
  const history = useHistory();
  const handleOnSearchClick = () => history.push('/search');
  return (
    <div>
      Vue Home
      <Button label="search" color="primary" onClick={handleOnSearchClick} />
      <Link to="/plant">Plant</Link>
    </div>
  );
};

export default Home;
