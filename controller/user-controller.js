
const User = require('../src/user-schema')

const getUsers = async (req,res)=>{
    let users;
    if(req.params.id){
        users = await User.findById(req.params.id)
         res.send(users)
    }else {
        users = await User.find()
        res.send(users)
    }
}


const createUser = async (req,res)=>{
    const user = await User.create(req.body)
    res.send(user)
}

module.exports = {getUsers,createUser}