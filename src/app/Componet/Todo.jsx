import React, {useState} from 'react'
import styles from "../page.module.css"

const Todo = ({total, index, deleteTodo}) => {
    return (
        <>
            <div className={styles.list}>
                <h3 className={styles.result}>{total}</h3>
                <button className={styles.btn_delete} onClick={()=>deleteTodo(index)}>X</button>
            </div>
        </>
    )
}
export default Todo