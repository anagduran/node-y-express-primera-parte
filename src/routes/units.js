
import express from 'express'

const router = express.Router()


router.get('/',(req, res)=>{
    res.render('temario',{
        title: 'Curso de OW',
        message: 'Temario del curso de NodeJS y Express'
    })
  //  res.write('<h1>Temario del curso de NodeJS</h1> <a href="/">Volver</a>')
    //res.end()
})

export default router