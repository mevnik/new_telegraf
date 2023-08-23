const {Composer} = require('telegraf')

const composer = new Composer()

composer.command('test', async (ctx) => {
	try {
		await ctx.scene.enter('test')
	} catch (e) {
		console.error('cant enter calc scene', e)
	}
})

module.exports = composer
