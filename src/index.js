import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.scss'

const Index = () => {
  return <div className={styles.hello}>Hello World!{process.env.NODE_ENV}</div>;
};

ReactDOM.render(<Index />, document.getElementById("root"));
