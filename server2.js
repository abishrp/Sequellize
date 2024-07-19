//import express
const { log } = require('console');
const express = require('express');


//initialize to app
const app = express();
//setting port
const PORT = 3000;
//import sequelize
const Sequelize = require('sequelize');
//constructor of sequelize with dbname, username, password, in object host and dialect
const sequel = new Sequelize('college', 'postgres', 'qwert@123',
    {
        host: "localhost",
        dialect: "postgres",
        define:
        {
            freezeTableName:true,
            timestamps:false,
    
        }
    }
)

//sync database
// sequel.sync({alter:true}).then(
//     (data)=>
//     {
//         console.log("Database altered Successful",data);
//     }
// ).catch(
//     (err)=>
//     {
//         console.log("Error in Database alteration",err);
//     }
// )

//database drop

// sequel.drop();

//based on promises
sequel.authenticate().then(
    (data)=>
    {
        console.log("Authentication Successful",data);
    }
).catch(
    (err)=>
    {
        console.log("Error occured in Authentication",err);
    }
)

// based on asyn await

// async function authentication ()
// {
//     await sequel.authenticate();
//     console.log("Successful");
// }

// authentication();


//creating table

const logintable = sequel.define('login',
    {
        userid:
        {
            type:Sequelize.DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        username:
        {
            type: Sequelize.DataTypes.STRING,
            allowNull:false
        },
        password:
        {
            type: Sequelize.DataTypes.STRING,
            allowNull:false
        },
        age:
        {
            type:Sequelize.DataTypes.INTEGER,
            defaultValue:18
        },
        location:
        {
            type:Sequelize.DataTypes.STRING,
        }
    },
    // {
    //     freezeTableName:true,
    //     timestamps:false,

    // }
)


//table drop
// logintable.drop();


//model syncronization
//force:true drop table whereas alter:true just alter the table




//insert based on build() and save()
// logintable.sync({alter:true}).then(
//     (data)=>
//     {
//         const users = logintable.build(
//             {
//                 username:"Abish",
//                 password:"123",
//                 age:21,
//                 location:"Rajakamangalam"
//             }
//         )
//         users.username="Aaklin";
//         console.log("Table created Successful",data);
//         return users.save();
        
//     }
// ).then(
//     (data)=>
//     {
//         console.log("Added to database",data);
//     }

// )
// .catch(
//     (err)=>
//     {
//         console.log("Error in Table creation",err);
//     }
// )


//insert based on create() and use of save()

// logintable.sync({alter:true}).then
// (
//     (data)=>
//     {
//         return logintable.create(
//             {
//                 username:"Aravind",
//                 password:"123562",
//                 age:21,
//                 location:"colachel"
//             }
//         )
//     }
// ).then(
//     (data)=>
//     {
//         console.log("Added to database",data.toJSON());
//         data.username="Akash";
        
//         return data.destroy();  //data.save()
//     }

// ).then((data)=>
// {
//     // console.log("Added to database",data.toJSON());
// }

// )
// .catch(
//     (err)=>
//     {
//         console.log("Error in Table creation",err);
//     }
// )


//reload()
// logintable.sync({alter:true}).then
// (
//     (data)=>
//     {
//         return logintable.create(
//             {
//                 username:"Arjun",
//                 password:"123562",
//                 age:21,
//                 location:"colachel"
//             }
//         )
//     }
// ).then(
//     (data)=>
//     {
//         console.log("Added to database",data.toJSON());
//         data.username="Amir";
        
//         return data.reload();  //data.save()
//     }

// ).then((data)=>
// {
//     // console.log("Added to database",data.toJSON());
// }

// )
// .catch(
//     (err)=>
//     {
//         console.log("Error in Table creation",err);
//     }
// )


// save with fields object

// logintable.sync({alter:true}).then
// (
//     (data)=>
//     {
//         return logintable.create(
//             {
//                 username:"Aravind",
//                 password:"123562",
//                 age:21,
//                 location:"colachel"
//             }
//         )
//     }
// ).then(
//     (data)=>
//     {
//         console.log("Added to database",data.toJSON());
//         data.username="Amir";
//         data.age=50;
        
//         return data.save({fields:['username']});  //data.save() with fiels
//     }

// ).then((data)=>
// {
//     console.log("Added to database",data.toJSON());
// }

// )
// .catch(
//     (err)=>
//     {
//         console.log("Error in Table creation",err);
//     }
// )


//increment or decrement

// logintable.sync({alter:true}).then
// (
//     (data)=>
//     {
//         return logintable.create(
//             {
//                 username:"Aravind",
//                 password:"123562",
//                 age:21,
//                 location:"colachel"
//             }
//         )
//     }
// ).then(
//     (data)=>
//     {
//         console.log("Added to database",data.toJSON());
//         data.username="Ajith";
//         data.age=50;
        
//         return data.save();
//     }

// ).then((data)=>
// {
//     data.increment({age:5})
//     console.log(data.toJSON());
// }

// )
// .catch(
//     (err)=>
//     {
//         console.log("Error in Table creation",err);
//     }
// )