import model from '../models/algorithm.model'
import errors from '../models/errors.model'
import _ from 'lodash'
import moment from 'moment'

export default class AlgorithmService {
    constructor(){
        
    }

    get(algorithmId) {
        let algorithm = _.find(model.all, ['id', algorithmId])
        if(algorithm) {
            return algorithm
        }
        return errors.algorithm.missingAlgorithmException
    }

    getAll() {
        return model.all
    }

    

    getPostCountsForDays(media, days, algorithm) {
        let count = Math.floor(Math.random() * 1000)
        let price = Math.floor(Math.random() * 50000)
        let date = moment().add(0-days, 'day')
        let recommendation = model.recommendationAlgorithm(count, price, this.get(algorithm))

        let day = {
            count: count,
            price: price,
            date: date,
            recommendation: recommendation
        }
        return day
    }
}