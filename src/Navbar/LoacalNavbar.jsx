import React from 'react';

const LoacalNavbar = () => {
    return (
        <div>
            <nav>
                <ul className='flex justify-center mt-10'>
                    <li className='mr-10'><a href="/">Home</a></li>
                    <li className='mr-10'><a href="/blogs">Blogs</a></li>
                    <li className='mr-10'><a href="/about">About</a></li>
                    <li className='mr-10'><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default LoacalNavbar;