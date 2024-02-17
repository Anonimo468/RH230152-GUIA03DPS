'use client'
import React, { useState } from 'react'
import Store from './Store'
import styles from "../page.module.css"

const Form = () => {
    const [nombre, setName] = useState({})
    const [marca, setMarc] = useState({})
    const [cantidad, setCant] = useState({})
    const [precio, setPrice] = useState({})
    const [todos, setTodos] = useState([])
    const handleChange = e => setName({ [e.target.name]: e.target.value })
    const handleChangeM = e => setMarc({ [e.target.name]: e.target.value })
    const handleChangeC = e => setCant({ [e.target.name]: e.target.value })
    const handleChangeP = e => setPrice({ [e.target.name]: e.target.value })

    const handleClick = e => {
        if (Object.keys(nombre).length === 0 || nombre.nombre.trim() === '') {
            alert('el campo no puede ser vacio')
            return
        }
        if (Object.keys(marca).length === 0 || marca.marca.trim() === '') {
            alert('el campo no puede ser vacio')
            return
        }
        if (Object.keys(cantidad).length === 0 || cantidad.cantidad.trim() === '') {
            alert('el campo no puede ser vacio')
            return
        }
        if (Object.keys(precio).length === 0 || precio.precio.trim() === '') {
            alert('el campo no puede ser vacio')
            return
        }

        const resume = "Nombre: " + nombre.nombre + "\n Marca: " + marca.marca + "\n Cantidad: " + cantidad.cantidad + "\n Precio: " +  precio.precio
        const total = { total: resume }
        console.log(total)
        setTodos([...todos, total])
    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }

    return (
        <>
            <div className={styles.content}>
                <form className={styles.form} onSubmit={e => e.preventDefault()}>
                    <h4 className={styles.form_title}>Agregar Compra 🛒 </h4>
                    <label className={styles.inputt}>Nombre del producto</label>
                    <input className={styles.form_input} type="text" name='nombre' onChange={handleChange} />
                    <label className={styles.inputt}>Marca del producto</label>
                    <input className={styles.form_input} type="text" name='marca' onChange={handleChangeM} />
                    <label className={styles.inputt}>Cantidad</label>
                    <input className={styles.form_inputN} type="number" step="0.1" min="0" name='cantidad' onChange={handleChangeC}/>
                    <label className={styles.inputt}>Precio</label>
                    <input className={styles.form_inputN} type="number" name='precio' step="0.1" min="0" onChange={handleChangeP}/>
                    <button className={styles.form_button} onClick={handleClick}>Agregar</button>
                </form>
                <br></br>
                {
                    todos.map((value, index) => (
                        <Store total={value.total} key={index} index={index} deleteTodo={deleteTodo} />

                    ))
                }
            </div >
        </>
    )
}
export default Form