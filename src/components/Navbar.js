import {Link} from 'react-router-dom';
import React from 'react';


function TotalAuthors()
{
    return (
        <div className='navbar'>
            <div className='page-name'>Ghost Blog Data</div>
            <div className='links'>
                <div className='nav-links'><Link to='/'  className='nav-links-styling'>Dashboard</Link></div>
                <div className='nav-links'><Link to='/posts' className='nav-links-styling'>Posts</Link></div>
                <div className='nav-links'><Link to='/pages' className='nav-links-styling'>Pages</Link></div>
            </div>
        </div>
    );
}

export default TotalAuthors;
