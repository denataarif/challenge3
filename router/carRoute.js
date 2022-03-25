const express = require('express')
const router = express.Router()
const carCOntroller = require('../controllers/carController')
const { route } = require('./dashboardRoute')

router.use((req, res, next)=>{
    req.app.set('layout', 'layouts/dasboardLayouts')
    next()
})

route.get('/', carCOntroller.index)
