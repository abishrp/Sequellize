const { Sequelize } = require('sequelize');

// Create a new instance of Sequelize
const sequelize = new Sequelize('college','postgres','qwert@123', {
//   host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => {
    console.log("Connection success.");
  })
  .catch((err) => {
    console.error("Error!!!! Unable to connect to the database:", err);
  });

// Other tasks
console.log("Another task");

const User = sequelize.define('user',{
    user_id:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    username:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.DataTypes.STRING,
    },
    Age:{
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 20
    }
})

User.sync({alter:true}).then(()=>{
    return User.create({
        username:"Abish",
        password:"123",
        Age:24
    })
    return User.bulkCreate([
        {
            username:'collins',
            Age:22,
            password:"collins"
        },
        {
            username:'ger',
            Age:22,
            password:"briyo"
        }
        
    ])
    return User.findAll();  //SELECT * FROM "users' AS "users';
    return User.findAll({attributes:['username','password']});  //SELECT 'username', 'password FROM 'users' AS 'users';
    return User.findAll({attributes:[['username', 'myname'],['password','pd']]}); //SELECT ' username' AS " myName*, password' AS" pd
    return User.findAll({where:{age:45}}); 
    return User.findAll({ attributes: ['username'], where: { age: 45}});
    return User.findAll({limit:2});
    return User.findAll({order: [['age','DESC']]});    
    return User.findAll({ attributes: ['username' ,
        [sequelize.fn('SUM', sequelize.col('age')), 'sum_age']], group: 'username' });
    return UserfindByPk(5)
    return User.findOne({ where: {age:{
        [Op.or]: {
        [Op. lt]: 25,   //less than
        [Op.ne]: 25, // not equal
        [Op.eq]: null,  //equal
        [Op.gt]: 25, //greater than
        [Op.gte]: 25, // greater than and equal 
        [Op.lte]: 25, //less than and equal
        [Op.between]: [20, 30],
        [Op.notBetween]: [20, 30],
        [Op.in]: [20, 25, 30],
        [Op.notIn]: [20, 25, 30],
        [Op.like]: '%john%',
        [Op.startsWith]: 'john',
        [Op.endsWith]: 'john',
        [Op.and]: [{ age: { [Op.gt]: 18 } }, { status: 'active' }],
        age: { [Op.not]: 25,
        age: { [Op.is]: null 
        }
    }}
}}})


})
return User.update({ username:'pizza'}, 
    { where: { age: 25 }
}).then((data)=>{
    data.forEach((element)=>{
        console.log(element.toJSON);
    })
})
.then((data)=>{
    data.username='ram';
    data.Age=55;
    return data.save();
})
.catch((err)=>{
    console.log("Failed");
})

