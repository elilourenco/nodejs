import {sql} from "./db.js"

sql`
CREATE TABLE videos (

    id serial PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INTERVAL
);
`.then(()=>{
    console.log("Tabela criada")
})