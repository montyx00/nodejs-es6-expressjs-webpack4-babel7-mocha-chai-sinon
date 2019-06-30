import ServiceConfigs from '../config/services.config'
import _ from 'lodash'

class SocialService {
    constructor() {
        this.socialService = ServiceConfigs.socialService
    }
}

export default SocialService