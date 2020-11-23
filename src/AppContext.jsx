import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext([{}, () => { }]);

const initContext = {
  user: null,
  errors: [],
};

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initContext);

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>

  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
