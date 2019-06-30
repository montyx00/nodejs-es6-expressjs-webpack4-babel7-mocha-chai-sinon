import express from 'express'
import url from 'url'
import SocialService from '../services/social.service'
import StockService from '../services/stock.service'

const router = express.Router() // eslint-disable-line new-cap
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
    .use('/bank', BankRoute)
    .use('/aisp', aispRoute)

export default router