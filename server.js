const express = require ('express')
const expressLayouts = require ('express-ejs-layouts') 
const app = express ()
const router = require('./router')
const port = 1500
const routers = require('./router')

// setup view engine
app.set('view engine', 'ejs')
// setup public folder
app.use(express.static ('public') )
// setup ejs layouts
app.use(expressLayouts)


app.use((req, res, next) => {
    req.app.set('layout', 'layouts/default')
    next()
})
// default route
app.get('/', (req, res) => {
    res.render('index')
})
app.use('/dashboard/', routers.dashboard)
// listener
app.listen(port, ()=>{
    console.log(`localhost: ${port} is running`)
})





module.express = app