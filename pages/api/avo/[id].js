import DB from "@database"

const allAvos = async (request,response)=>{
    const db = new DB() //Creamos nueva instancia de la clase DB
    const id = request.query.id; //en este caso no usamos useRouter sino lo que me llega del request.
    const entryById = await db.getById(id); //Await porque el metodo getAll es async
    console.log("log desde api:",entryById);
    response.statusCode = 200; //Significa que está bien
    response.end(JSON.stringify(entryById))
    
    // Es equivalente:
    //response.status(200).json({length,data: entryById});
    //Este es un helper que nos da next.js
}

export default allAvos 