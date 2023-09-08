import {randomUUID} from "node:crypto"
 
 export class DatabaseMemory{
    #videos = new Map()

    list(){

      return Array.from(this.#videos.values())
      .map((videoArray)=>{

        const id = videoArray[0]
        const data = videoArray[1]

        return{
            id,
            ...data,
        }

      })

      .filter(video=>{
        if(search){
            return video.title.includes(search)
        }
      })
    }
    create(video){
        const videoId = randomUUID()


        this.#videos.set(videoId,video)

    }

    update(id,video){
        this.#videos.set(id,video)

    }

    delete(id){
        this.#videos.delete(id,video)

    }

}