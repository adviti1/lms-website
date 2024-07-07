    import React from 'react';
    import './Boxes.css';

    function Boxes() {
        return (<div>
            <div className='top'>
                <div className='box1'><div className='one'><img src='group.png' className='img1'/></div></div>
                <div className='box2'><div className='two'><img src='group.png' className='img1'/></div></div>
                <div className='box3'><div className='three'><img src='group.png' className='img1'/></div></div>
            </div>
            {/*
            <div className='bottom'>
                <div className='box4'><div className='four'></div></div>
                <div className='box5'><div className='five'></div></div>
                <div className='box6'><div className='six'></div></div>
            </div>*/}
        </div>
        );
    }

    export default Boxes;