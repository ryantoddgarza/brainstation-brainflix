import React from 'react';
// import axios from 'axios';

const Foo = (props) => {
  return (
    <div>{ props.content }</div>
  )
}

const RelatedClips = () => {
  const arr = [
    {'name': 'Ranee Hard'},
    {'name': 'Tyree Kammerer'},
    {'name': 'Cole Tamayo'},
  ];

  // axios.get('./data.json')
  //   .then((res) => console.log(res))
  //   .catch(err => console.error(err));

  return (
    <div>
      {arr.map((name, i) => {
        return (
          <Foo content={ arr[i].name } />
        )
      }
      )}
    </div>
  )
}

export default RelatedClips;

