import {expect} from 'chai'
import SocialService from '../../src/services/social.service'

let social

beforeEach(() => {
    social = new SocialService()
})

describe('Get top posts', () => {
    it('should return give back a post with 2 string properties', () => {
        let posts = social.getLoremTopPosts(1)
        expect(posts).to.have.lengthOf(1)
        expect(posts[0]).to.have.property('author')
        expect(posts[0]).to.have.property('content')
        expect(posts[0].author).is.string
        expect(posts[0].content).is.string
    })
})

describe('Get posts count', () => {
    it('should return a random number between 0-200', () => {
        let count = social.getPostCount('LOGM')
        expect(count).to.be.gte(0)
        expect(count).to.be.lte(200)
    })
})