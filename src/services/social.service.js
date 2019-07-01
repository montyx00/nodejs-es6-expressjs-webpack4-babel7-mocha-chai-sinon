import ServiceConfigs from '../config/services.config'
import LoremIpsumGenerator from '../config/loremIpsum.config'
import model from '../models/social.model'

export default class SocialService {
    constructor() {
        this.lorem = new LoremIpsumGenerator()
        this.socialService = ServiceConfigs.socialService
        this.getLoremTopPosts = this.lorem.getPost
    }

    getTopPosts(qty) {
        return this.getLoremTopPosts(qty)
    }

    socialMediaCountGenerator(symbol, media) {
        return Math.floor(Math.random() * 201)
    }

    getAll() {
        return model.medias
    }
}