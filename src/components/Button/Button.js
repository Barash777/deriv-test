import React from 'react';
import styles from './Button.module.css'


export const Button = ({name, cb}) => {
    return (
        <button className={styles.btn} onClick={cb}>{name}</button>
    );
};