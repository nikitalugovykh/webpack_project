import {useState} from "react";
import styles from './Counter.module.scss'

export const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <>
            <h1 className={styles.title}>{counter}</h1>
            <button className={styles.button} onClick={() => setCounter(prev => prev +1)}>increase</button>
            <button className={styles.button} onClick={() => setCounter(prev => prev -1)}>decrease</button>
        </>
    )
}