const Applicaiton = require('./framework/Application')
const userRouter = require('./src/user-router')
const postsRouter = require('./src/posts-router')
const parserMiddleware = require('./middlewares/parser.middleware')
const parserUrl = require('./middlewares/parser-url')
const app =  new Applicaiton()

app.listen(5001,()=> console.log('server started On port 5001'))
app.use(parserMiddleware)
app.use(parserUrl('http://localhost:5001/'))
app.addRouter(userRouter)
app.addRouter(postsRouter)



// Whithout express js request like this we need to create multiple if else and handlers for each path

// const server = http.createServer((req,res)=>{

//     if(req.url === '/users'){
//        return res.end(JSON.stringify([{id:1}]))
//     }
   
//     res.end('hi22')
// })

// server.listen(5001,()=>console.log('server started'))


// const endpoints = {
//     'users/':{
//         'GET':handler,
//         'POST':handler,
//         'PUT':handler
//     }
// }
