// Importing sqlite3 dependecies
const sqlite3 = require("sqlite3").verbose()

// Create database object
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// Use database object
// db.serialize( () => {      
//     // Create table
//     db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         image TEXT,
//         name TEXT,
//         address TEXT,
//         address2 TEXT,
//         state TEXT,
//         city TEXT,
//         items TEXT
//         );
//         `)
        
//         // Insert data in the table
//         const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//             ) VALUES (?,?,?,?,?,?,?);`
            
//             const values1 = [
//                 "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80",
//                 "Colectoria",
//                 "Guilherme Gemballa, Jardim América",
//                 "N° 260",
//                 "Santa Catarina",
//                 "Rio do Sul",
//                 "Resíduos Eletrônicos, Lâmpadas"
//             ]

//             const values2 = [
//                 "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//                 "Papersider",
//                 "Guilherme Gemballa, Jardim América",
//                 "N° 260",
//                 "Santa Catarina",
//                 "Rio do Sul",
//                 "Papéis e Papelão"
//             ]
            
//             function afterInsertData(err){
//                 if(err){
//                     return console.log(err)
//                 }
            
//                 console.log("Cadastrado com sucesso")
//                 console.log(this)
//             }      
            
//             const values = values2
//             // db.run(query, values, afterInsertData)
            
//             // Consult data in the table
//             db.all(`SELECT * FROM places`, function(err, rows){
//                 if(err){
//                     return console.log(err)
//                 }

//         console.log("Aqui estão os seus registros:")
//         console.log(rows)
//     })

//     // Remove data from the table
//     db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
//         if(err){
//             return console.log(err)
//         }

//         console.log("Registros deletados com sucesso!")
//     })
// })