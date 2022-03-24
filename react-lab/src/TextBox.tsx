import React from 'react';
import logo from './logo.svg';
import './App.css';

function TextBox(props: { change : (str : any) => void; label : String}) {
    return (
        <div className="Horoscope">
            {props.label}: {""}
            <input
                type={'text'}
                onChange={event => props.change(event.target.value)}
            />
        </div>
    );
}

export default TextBox;