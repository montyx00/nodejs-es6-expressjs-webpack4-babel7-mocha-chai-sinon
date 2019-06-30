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

const ERROR_ALG_OBJECT = {
    errorMsg: "The requested algorithm is not exist",
    errorCode: "111"
}

beforeEach(() => {
    algorithm = new AlgorithmService()
})

describe('Algorithm Service', () => {
    describe('get', () => {
        it('should give back an object with the algorithm properties in case of change', () => {
            let algorithmProps = algorithm.get('algorithm01')
            expect(algorithmProps).to.be.equal(ALL_ALGORITHMS(0))
        })
        it('should give back error object in case of missing algorithm ID', () => {
            let algorithmProps = algorithm.get('algorithm04')
            expect(algorithmProps).to.be.equal(ERROR_ALG_OBJECT)
        })
    })

    describe('getAll', () => {
        it('should give back all the possible algorithms', () => {
            let all = algorithm.getAll()
            expect(all).to.be.deep.equal(ALL_ALGORITHMS)
        })
    })

    describe('recommendationAlgorithm', () => {
        it('should return an integer between 0-50000', () => {
            let price = algorithm.recommendationAlgorithm(12171, 136)
            // Integer check
            expect(price).to.be.a('number')
            expect(price % 1).to.equal(0)

            expect(price).to.be.gte(0)
            expect(price).to.be.lte(50000)
        })
    })
})

