
//PRIMER SERVIDOR
import path from 'path'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { thisTypeAnnotation } from 'babel-types'
import router from './router'

let _server 
//encapsulando el arranque de la aplicacion 
const server ={
    start(){
        const app = express()
        app.disable('x-powered-y')

        //ejecutar el servidor en el ambiente development
        //app.set('env','development') 
        app.set('env', process.env.NODE_ENV) //cuando cargemos el entorno de test se cargara en NODE_ENV

        if(process.env.NODE_ENV!== 'test'){
            app.use(morgan('combined'))
        }

        // para usar un middleware: app.use
        //morgan: middleware para definir un log

        //app.use(morgan('combined'))
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended:false}))

        //aqui dice: tengo que buscar las vistas que vayas a utilizar dentro del directorio actual donde estes / views
        app.set('views',path.join(__dirname,'views'))
        app.set('view engine','pug')


        //rutas
        router(app)


        //creando middleware
        app.use((req,res,next)=>{
            res.render('404', {
            title: 'OpenWebinars-Error' ,
            message: 'La ruta que esta intentando acceder no existe!'
            })
        next(err)
        })

        // nuestros ficheros estaticos
        app.use('/static',express.static(path.join(__dirname,'public')))


        //le decimos a express que escuche el puerto 9000
        _server = app.listen('9000',()=>{
        console.log('Servidor arrancado en http://localhost:9000')
        })


    },
    close(){
        _server.close()
    }
}

export default server

if(!module.parent){
    server.start()
}

 