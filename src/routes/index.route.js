import express from 'express'
import url from 'url'
import SocialService from '../services/social.service'
import StockService from '../services/stock.service'

const router = express.Router() // eslint-disable-line new-cap
const social = new SocialService()
router
    .get('/public*', (req, res, next) => {
        if (req.cookies.user) {
            res.set({ 'Set-Cookie': 'user=' + req.cookies.user + '; Path=/; Expires=' + moment.utc(new Date()).add(10, 'm').toDate() })
        }
        next()
    })
    .get('/', (req, res) => {
        if (!req.cookies.user) {
            res.redirect('/login')
        }
        res.redirect('/public')
    })
    .get('/public/*', (req, res, next) => {
        !req.cookies.user
            ? res.redirect('/login')
            : next()
    })
    .get('/social/topposts', (req, res) => {
        if(req.query.qty) {
            console.log(social.getTopPosts(req.query.qty))
            res.send(social.getTopPosts(req.query.qty))
        }
    })

export default router