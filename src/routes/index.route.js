import express from 'express'
import url from 'url'
import SocialService from '../services/social.service'
import StockService from '../services/stock.service'

const router = express.Router() // eslint-disable-line new-cap
const social = new SocialService()
const stock = new StockService()
router
    .get('/social/topposts', (req, res) => {
        if(req.query.qty) {
            res.send(social.getTopPosts(req.query.qty))
        }
        else {res.sendStatus(404)}
    })
    .get('/social/getcount', (req, res) => {
        if(req.query.symbol && req.query.media) {
            res.send({count: social.socialMediaCountGenerator(req.query.symbol, req.query.media)})
        }
        else {res.sendStatus(404)}
    })
    .get('/social/medias/getall', (req, res) => {
        res.send(social.getAll())
    })
    .get('/stock/symbols/getall', (req, res) => {
        res.send(stock.getAllSymbols())
    })

export default router