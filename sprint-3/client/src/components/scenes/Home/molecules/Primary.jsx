import React from 'react';
import Info from '../../../molecules/Info/Info'
import Comments from '../../../molecules/Comments/Comments'

const Primary = (props) => {
  return (
    <div>
      <Info data={ props.data } />
      <Comments data={ props.data } />
    </div>
  )
}

export default Primary;

