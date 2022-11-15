import React from 'react';
import styles from './Accordion.module.css';
import {Button} from "../Button/Button";

export const Accordion = ({text, name}) => {
    const [collapsed, setCollapsed] = React.useState(true)

    const onButtonClickHandler = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={styles.accordion}>
            {/*<button className={styles.btn} onClick={onButtonClickHandler}>{name}</button>*/}
            <Button style={styles.btn} name={name} cb={onButtonClickHandler} />
            {!collapsed && <div className={styles.text}>
                {text}
            </div>}
        </div>
    );
};