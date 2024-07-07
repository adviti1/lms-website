import React from 'react';
import './Menu.css';

function Menu() {
    return (
        <div>
           <div>
           <img src='timer.png' className='dash-img'/>
           <h3 className='dash'>Dashboard</h3></div>
           <div className='item'>User</div>
           <div className='item'>groups</div>
           <div className='item'>subject</div>
           <div className='item'>courses</div>
           <div className='item'>Achievements</div>
           <div className='item'>Logout </div>
        </div>
    );
}

export default Menu;