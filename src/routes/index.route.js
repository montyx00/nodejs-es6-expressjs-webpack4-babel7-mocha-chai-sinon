import express from 'express'
import url from 'url'
import SocialService from '../services/social.service'
import StockService from '../services/stock.service'
import AlgorithmService from '../services/algorithm.service'

const router = express.Router() // eslint-disable-line new-cap
const social = new SocialService()
const stock = new StockService()
const algo = new AlgorithmService()
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
    .get('/algorithm/getall', (req, res) => {
        res.send(algo.getAll())
    })
    .get('/algorithm/getrangedata', (req, res) => {
        if(req.query.media && req.query.days && req.query.algorithm) {
            res.send(algo.getPostCountsForDays(req.query.media, req.query.days, req.query.algorithm))
        }
        else {res.sendStatus(404)}
    })

export default router