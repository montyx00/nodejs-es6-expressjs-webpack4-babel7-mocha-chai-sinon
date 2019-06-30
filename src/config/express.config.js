import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from '../routes/index.route'

const app = express()

app.set('layout extractScripts', true)
app.set('layout extractStyles', true)

// parse body params and attach them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes);

// enable CORS - Cross Origin Resource Sharing
app.use(cors())

// catch 404 and forward to error handler
app.use((req, res, next) => {
    return next(new Error('API not found'))
})

export default app