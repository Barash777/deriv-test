import React from 'react';
import styles from './Accordion.module.css';
import {Button} from "../Button/Button";

export const Accordion = ({text, name}) => {
    const [collapsed, setCollapsed] = React.useState(true)

    const onButtonClickHandler = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <>
            {/*<button onClick={onButtonClickHandler}>{name}</button>*/}
            <Button name={name} cb={onButtonClickHandler} />
            {!collapsed && <div className={styles.text}>
                {text}
            </div>}
        </>
    );
};