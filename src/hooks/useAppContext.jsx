import { useContext } from 'react';
import { AppContext } from '../AppContext';

const useAppContext = () => {
  const [state, setState] = useContext(AppContext);

  const addError = (error) => setState((prevState) => ({
    ...prevState,
    errors: prevState.errors.concat([error]),
  }));

  const setUser = (user) => setState((prevState) => ({
    ...prevState,
    user,
  }));

  return {
    context: state,
    addError,
    setUser,
  };
};

export default useAppContext;
