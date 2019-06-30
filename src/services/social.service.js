import ServiceConfigs from '../config/services.config'
import LoremIpsumGenerator from '../config/loremIpsum.config'
import _ from 'lodash'

export default class SocialService {
    constructor() {
        this.lorem = new LoremIpsumGenerator()
        this.socialService = ServiceConfigs.socialService
        this.getLoremTopPosts = this.lorem.getPost
    }

    getTopPosts (qty) {
        return this.getLoremTopPosts(qty)
    }
}