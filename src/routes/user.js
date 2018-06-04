
import express from 'express'

const router = express.Router()


router.get('/:user',(req,res)=>{
    //console.log('variable user', req.params.user)
    res.render('user',{
        title: 'OW-USER',
        message: 'Bienvenido usuario ' + req.params.user
    })
})

export default router
