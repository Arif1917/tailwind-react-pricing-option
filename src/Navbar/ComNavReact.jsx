import React from 'react';

const ComNavReact = ({data}) => {
    console.log(data)
    return (
        <div>
          <li className='mr-10'>
            <a href={data.path}>{data.name}</a>
          </li>
        </div>
    );
};

export default ComNavReact;