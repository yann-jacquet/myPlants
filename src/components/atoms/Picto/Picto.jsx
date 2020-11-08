import React from 'react';
import PropTypes from 'prop-types';

// Pictos
import { ReactComponent as ArrowLeft } from '../../../assets/pictos/arrow-left.svg';
import { ReactComponent as Camera } from '../../../assets/pictos/camera.svg';
import { ReactComponent as ChevronRight } from '../../../assets/pictos/chevron-right.svg';
import { ReactComponent as Cross } from '../../../assets/pictos/cross.svg';
import { ReactComponent as Heart } from '../../../assets/pictos/heart.svg';
import { ReactComponent as Home } from '../../../assets/pictos/home.svg';
import { ReactComponent as Leaves } from '../../../assets/pictos/leaves.svg';
import { ReactComponent as Menu } from '../../../assets/pictos/menu.svg';
import { ReactComponent as Search } from '../../../assets/pictos/search.svg';
import { ReactComponent as Sliders } from '../../../assets/pictos/sliders.svg';
import { ReactComponent as Sun } from '../../../assets/pictos/sun.svg';
import { ReactComponent as Temperature } from '../../../assets/pictos/temperature.svg';
import { ReactComponent as User } from '../../../assets/pictos/user.svg';
import { ReactComponent as WateringCan } from '../../../assets/pictos/watering-can.svg';

const pictos = {
  arrowLeft: <ArrowLeft />,
  camera: <Camera />,
  chevronRight: <ChevronRight />,
  cross: <Cross />,
  heart: <Heart />,
  home: <Home />,
  leaves: <Leaves />,
  menu: <Menu />,
  search: <Search />,
  sliders: <Sliders />,
  sun: <Sun />,
  temperature: <Temperature />,
  user: <User />,
  wateringCan: <WateringCan />,
};

const Picto = ({ icon, ...props }) => (
  React.cloneElement(
    pictos[icon],
    props,
  )
);

Picto.propTypes = {
  icon: PropTypes.oneOf(Object.keys(pictos)).isRequired,
};

export default Picto;
