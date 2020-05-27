import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  const { hideComponent, children, timeSeconds } = props;
  console.log(children)
  setTimeout(() => hideComponent(), timeSeconds * 1000);
  return (
    <div className='Alert'>
      {children}
    </div>
  )
}

Alert.defaultProps = {
  timeSeconds: 3,
}

Alert.propTypes = {
  hideComponent: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  timeSeconds: PropTypes.number,
}

export default Alert;

