import {expect} from 'chai'
import AlgorithmService from '../../src/services/algorithm.service'

let algorithm
const ALL_ALGORITHMS = [
    {
        id: 'algorithm01',
        name: 'Algorithm 1',
        description: 'Very good algorithm'
    },
    {
        id: 'algorithm02',
        name: 'Algorithm 2',
        description: 'Optimistic algorithm'
    },
    {
        id: 'algorithm03',
        name: 'Algorithm 2',
        description: 'Optimistic algorithm'
    }
]

const RECOMMENDATIONS = [
    'buy',
    'hold',
    'sell'
]

const ERROR_ALG_OBJECT = {
    code: "111",
    message: "The requested algorithm is not exist"
}

beforeEach(() => {
    algorithm = new AlgorithmService()
})

describe('Algorithm Service', () => {
    describe('get', () => {
        it('should give back an object with the algorithm properties in case of change', () => {
            let algorithmProps = algorithm.get('algorithm01')
            expect(algorithmProps).to.be.deep.equal(ALL_ALGORITHMS[0])
        })
        it('should give back error object in case of missing algorithm ID', () => {
            let algorithmProps = algorithm.get('algorithm04')
            expect(algorithmProps).to.be.deep.equal(ERROR_ALG_OBJECT)
        })
    })

    describe('getAll', () => {
        it('should give back all the possible algorithms', () => {
            let all = algorithm.getAll()
            expect(all).to.be.deep.equal(ALL_ALGORITHMS)
        })
    })

    describe('recommendationAlgorithm', () => {
        it('should give back buy/hold/sell', () => {
            let recommendation = algorithm.recommendationAlgorithm(12171, 136)
            expect(RECOMMENDATIONS).includes(recommendation)
        })
    })
})

