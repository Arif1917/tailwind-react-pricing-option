import React from 'react';
import ComNavReact from './ComNavReact';
const navigationData = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
  ];
const ReactNav = () => {
    return (
        <div>
            {/* <ul className='flex justify-center mt-5'>
                {
                    navigationData.map(data => <li className='mr-10 '><a href={data.path}>{data.name}</a></l>)
                }
            </ul> */}

            <ul className='flex justify-center mt-5'>
                {
                    navigationData.map(data =><ComNavReact data={data}></ComNavReact>)
                }
            </ul>
        </div>
    );
};

export default ReactNav;