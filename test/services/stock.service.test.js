import {expect} from 'chai'
import StockService from '../../src/services/stock.service'

let stock

beforeEach(() => {
    stock = new StockService()
})

describe('Stock Service', () => {
    describe('stockPriceGenerator', () => {
        it('should return an integer between 0-50000', () => {
            let price = stock.stockPriceGenerator('LOGM', new Date('2019-01-30'))
            expect(price).to.be.a('number')
            expect(price % 1).to.equal(0)
            expect(price).to.be.gte(0)
            expect(price).to.be.lte(50000)
        })
    })
})