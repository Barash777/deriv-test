import React from 'react';
import styles from './Button.module.css'


export const Button = ({name, cb, style}) => {
    return (
        <button className={`${styles.btn} ${style}`} onClick={cb}>{name}</button>
    );
};