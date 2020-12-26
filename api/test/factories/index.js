const factoryGirl = require('factory-girl')
const adapter = new factoryGirl.SequelizeAdapter()
const factory = factoryGirl.factory
factory.setAdapter(adapter)

factory.cleanUp()

const db = require('../../src/models')

factory.define('Post', db.Post, async () => {
    const attrs = {
        id: factory.seq('Post.id'),
        title: factory.chance('sentence', { words: 5 }),
        content: factory.chance('sentence', { words: 15 }),

    }
    return attrs
})

module.exports = factory