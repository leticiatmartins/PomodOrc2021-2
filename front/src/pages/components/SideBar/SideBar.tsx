import React from 'react';
import usuario from '../../../assets/usuario.svg';
import alarm from '../../../assets/alarm.svg';
import list from '../../../assets/list.svg';
import './SideBar.css';

function SideBar () {
    return(
        <div className="Sidebar">         
            <img className="usuario" src={usuario} />
            <img className="alarm" src={alarm} />
            <img className="list" src={list} />

        </div>
    )
};

export default SideBar;