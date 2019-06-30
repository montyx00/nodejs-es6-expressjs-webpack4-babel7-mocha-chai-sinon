import ServiceConfigs from '../config/services.config'
import _ from 'lodash'

class StockService {
    constructor() {
        this.stockService = ServiceConfigs.StockService
    }

    stockPriceGenerator(symbol, date) {
        return Math.floor(Math.random() * 50001)
    }
}

export default StockService