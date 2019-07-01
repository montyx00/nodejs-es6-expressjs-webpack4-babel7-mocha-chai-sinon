import ServiceConfigs from '../config/services.config'
import model from '../models/stock.model'

class StockService {
    constructor() {
        this.stockService = ServiceConfigs.StockService
    }

    stockPriceGenerator(symbol, date) {
        return Math.floor(Math.random() * 50001)
    }

    getAllSymbols() {
        return model.symbols
    }
}

export default StockService