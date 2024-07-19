
//import express
const express = require('express');
//import body-parser
const bodyparser = require('body-parser');
//initialize to app
const app = express();
//setting port
const PORT = 2000;
//import sequelize
const Sequelize = require('sequelize');
//constructor of sequelize with dbname, username, password, in object host and dialect
const sequel = new Sequelize('college', 'postgres', 'qwert@123',
    {
        host: "localhost",
        dialect: "postgres"
    }
)
//empty object
const db = {};
db.Sequelize = Sequelize;
db.sequel = sequel;

//create table with const variable

const studenttable = db.sequel.define
    (
        "student",
        {
            rollno:
            {
                type: Sequelize.INTEGER,
                primaryKey: true,
                
            },
            name:
            {
                type: Sequelize.STRING
            },
            dept:
            {
                type: Sequelize.STRING
            },
            CGPA:
            {
                type: Sequelize.INTEGER
            },
            Location:
            {
                type: Sequelize.STRING
            }
        }

    );
console.log("studenttablestudenttable",studenttable)

//Check whether the same table exists

db.sequel.sync().then(
    () => {
        console.log("table created");
    }
)


//when creating there exist two colum with timestamp {createdAt and UpdatedAt}
//data entry using code
//create
// studenttable.bulkCreate(
//     [{
//         rollno:2,
//         name: "Aaklin",
//         dept: "ECE",
//         CGPA: 8,
//         Location: "Thenkaipattanam"

//     },
//     {
//         rollno:3,
//         name: "Aaklin",
//         dept: "ECE",
//         CGPA: 8,
//         Location: "Thenkaipattanam"

//     },
//     {
//         rollno:4,
//         name: "Aaklin",
//         dept: "ECE",
//         CGPA: 8,
//         Location: "Thenkaipattanam"

//     },
//     {
//         rollno:5,
//         name: "Aaklin",
//         dept: "ECE",
//         CGPA: 8,
//         Location: "Thenkaipattanam"

//     }]
    
// )


//update

studenttable.update(
    
        {
            Location:"Nagercoil",
        },
    {
        where:
        {
            rollno:2
        }

    }
    
        
    
)

// to retreive data use findAll() method
// also to retreive in the localhost make use of app,get()

app.get('/student', (req, res) => {
    studenttable.findAll(
        {
            where:
            {
                dept: "ECE"
            }
        }
    ).then(

        (data) => {
            console.log(`${data} received`);
            res.send(data);
        }


    ).catch(
        (error) => {
            console.error("Error retrieving data: ", error);
            res.status(500).send("Error retrieving data");
        }
    )


}
);















//app running
app.listen(PORT, () => {
    console.log(`${PORT} is running`);
})
