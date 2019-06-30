import model from '../models/algorithm.model'
import errors from '../models/errors.model'
import _ from 'lodash'

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

    recommendationAlgorithm(price, media) {
        let rnd = Math.floor(Math.random() * 3)
        return model.recommendations[rnd]
    }
}