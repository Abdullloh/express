
const usersJson = [{id:'1',name:'Abdulloh'},{id:'2' , name:'Alisher'}]

const getUsers = (req,res)=>{
    console.log(req.params);
    if(req.params.id){
        const data = usersJson.find(user=> user.id === req.params.id)
        return res.send(data)
    }
   res.send(usersJson)
}


const createUser = (req,res)=>{
    // console.log(req.body);
    const user = req.body
    usersJson.push(user)
    // console.log(usersJson);
    res.send(usersJson)
}

module.exports = {getUsers,createUser}