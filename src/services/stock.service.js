import ServiceConfigs from '../config/services.config'
import StockModel from '../models/stock.model'

class StockService {
    constructor() {
        this.stockService = ServiceConfigs.StockService
    }

    stockPriceGenerator(symbol, date) {
        return Math.floor(Math.random() * 50001)
    }

    getAllSymbols() {
        return StockModel.symbols
    }
}

export default StockService