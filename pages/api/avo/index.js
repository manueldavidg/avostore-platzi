import DB from "@database"

const allAvos = async (request,response)=>{
    const db = new DB() //Creamos nueva instancia de la clase DB
    const allEntries = await db.getAll() //Await porque el metodo getAll es async
    const length = allEntries.length;
    response.statusCode = 200; //Significa que está bien
    response.end(JSON.stringify({length,data: allEntries}))
}

export default allAvos