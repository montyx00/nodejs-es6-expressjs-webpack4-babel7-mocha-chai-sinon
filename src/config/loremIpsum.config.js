import LoremIpsum from "lorem-ipsum-generator"

export default class LoremIpsumGenerator {
    constructor() {}

    getPost(qty) {
        let posts = []
        
        for(let i = 0; i < qty; ++i) {
            let post = {}

            post.author = LoremIpsum.getLoremIpsumText(2),
            post.content = LoremIpsum.getLoremIpsumText(20)
            
            posts.push(post)
        }
        return posts
    }
}