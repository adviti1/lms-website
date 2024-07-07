import React from 'react';
import './ID.css';

function ID() {
    return (
        <div>
            <span className='e'>
                <span className='e1'><img src='write.png' className='edit-img' alt='edit' /></span><span className="g-text e1">Edit profile</span>
            </span>
            <span className='e'>
                <div className='flex'>
                    <img src='OIP.jpeg' className='profile' alt='profile picture' />
                </div>
            </span>
            <span className='e'>
                <div className='flex'>
                    <p className='name'>Name</p>
                </div>
            </span>
            <span className='e'>
                <div className='group'>
                <img src='team.png' className='g-icon'/> <span className='g-text'>Group</span>
                </div>
            </span>
        </div>
    );
}

export default ID;