//import { createServer} from "node:http"

//const server = createServer((request, response)=>{
    //response.write("LEANDRO TAVARES")
    //return response.end();
    
//})

//server.listen(3333)

import  {fastify} from "fastify"
import { DatabaseMemory} from "./database-memory.js"

const server = fastify()
const database=  new DatabaseMemory()

server.post("/videos",(request,reply)=>{

    const {title,description,duration}= request.body

    console.log(body)

    database.create({
        title,
        description,
        duration,
    })

    return reply.status(201).send()
})

server.get("/videos",(request, reply)=>{
    const videos = database.list()

    console.log(videos)
    

    return videos
    
})
 server.put("/videos/:id",(request, reply) =>{
    const videoId = request.params.id

    const {title,description,duration}= request.body

    database.update(videoId,{
        title,
        description,
        duration,

    })

    reply.status(204).send()
 })

server.delete("/videos/:id",(request, reply)=>{
    const videoId=  request.params.id

    database.delete(videoId)

    return reply.status(204).send()
})


server.listen({
    port:3333,

})