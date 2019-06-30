import ServiceConfigs from '../config/services.config'
import _ from 'lodash'

class StockService {
    constructor() {
        this.stockService = ServiceConfigs.StockService
    }
}

export default StockService