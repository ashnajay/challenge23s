import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';

function Counter(props) {
  const count = useSelector((store) => store.count);
  return (
    <div>
      Current Count: {count}
    </div>
  );
}

export default Counter;