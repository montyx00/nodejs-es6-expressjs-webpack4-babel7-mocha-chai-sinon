import {expect} from 'chai'
import getUsername from '../src/app'

describe('Get Username', () => {
    it("should return give back 'Joe'", () => {
        const username = getUsername()
        expect(username).to.be.equal('Joe')
    })
})