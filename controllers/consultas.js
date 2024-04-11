import pool from '../config/db.js'


//query para crear rutinas
const agregarRutinas = async (datos)=>{
    try{
        const consultaRutinas = {
            text: 'insert into ejercicios (nombre, series, repeticiones, descanso) values ($1, $2, $3, $4) returning *', 
            values: datos, //y donde está datos? :c aaaah
        }
        const response= await pool.query(consultaRutinas);
        return response.rows
    }catch(err){
        console.log(err)
    }
}

//query para obtener registros
const getRutinas = async ()=>{
    try{
        const consultaRutinas = {
            text:'select * from ejercicios;'
        }
        const result = await pool.query(consultaRutinas);
        console.log(result.rows);
        return result.rows;

    }catch(err){
        console.log(err)
    }
}

export {getRutinas, agregarRutinas};