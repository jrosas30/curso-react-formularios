import { useRef } from 'react'

const FormNoControlado = () => {

    const formulario = useRef(null);
    const handleSubmit = e => {
        e.preventDefault();
        
        const datos = new FormData(formulario.current)

        const objetoDatos = Object.fromEntries([...datos.entries()])
        // console.log(objetoDatos);
        const {todoDescripcion, todoEstado, todoName} = objetoDatos;
        if(!todoDescripcion.trim()){
            console.log("descripcion está vacio");
            return
        }
        if(!todoName.trim()){
            console.log("nombre está vacio");
            return
        }
        console.log("datos ingresados");
    }

    return (
        <>
            <h2>No controlado</h2>
            <form ref={formulario} onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Ingrese un ToDo"
                    name='todoName'
                    className='form-control mb-2'
                    defaultValue="tarea #1"
                />
                <textarea 
                    name="todoDescripcion"
                    className='form-control mb-2'
                    placeholder='ingrese descripcion de tarea' 
                    id="" 
                    cols="30" 
                    rows="10" 
                    defaultValue="descripcion de la tarea #1"
                />
                <select 
                    name="todoEstado" 
                    className='form-control mb-2'
                    defaultValue="pendiente"
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>
                <button className='btn btn-primary' type="submit">Agregar</button>
            </form>
        </>
    )
}

export default FormNoControlado