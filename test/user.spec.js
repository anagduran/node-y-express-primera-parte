import got from 'got'
import {expect} from 'chai'
import cheerio from 'cheerio'
import babel from 'babel-polyfill'
import server from '../src'

describe('Test: Home',()=>{
    beforeEach(()=>{
        server.start()
    })
    afterEach(()=>{
        server.close()
    })

    describe('GET /ana',()=>{
        it('it should use a name send route', async () =>{
            const response = await got('http://localhost:9000/ana')
            const $ = cheerio.load(response)
            expect($('bd-title').text()).to.be.equal('Bienvenido usuario ana')


        })
    })
})