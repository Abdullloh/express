const Router = require('../framework/Router')
const {createUser,getUsers} = require('../controller/user-controller')
const router = new Router()


router.get('/users', getUsers )

router.post('/users', createUser )


module.exports = router