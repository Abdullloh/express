const Router = require('../framework/Router')
const router = new Router()

const postsArr = [{id:1,description:'Description added'},{id:2,description:'Description added'}]

router.get('/posts',(req,res)=>{
    res.send(postsArr)
})

module.exports = router