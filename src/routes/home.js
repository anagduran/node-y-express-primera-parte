
import express from 'express'

const router = express.Router()


router.get('/', (req, res)=>{
    res.render('home',{
        tite: 'Curso de OW',
        message: 'Curso de NodeJS y Express'
    })
    
       // res.write('<h1> Curso openwebinars</h1> <a href="/temario">Temario</a>')
       /* res.render ('home', {
            title:'Curso de Node y Express',
            message: 'nuestro primer layout con variables'
        
        })*/
       // res.end()
    
    })

export default router