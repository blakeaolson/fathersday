import React from 'react';

export default function Card(props){
    return(
        <div className = 'card'>
            <img src={props.coverImg} className = 'card-img'></img>
        </div>
    );
}