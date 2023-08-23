const {Composer} = require('telegraf')
const randomstring = require('randomstring')

const composer = new Composer()



composer.command('pass', async (ctx) => {
	try {
		const pass = randomstring.generate()
		await ctx.reply(pass)
	} catch (e) {
		console.error('cant handle pass command', e)
	}
})

composer.command('calc', async (ctx) => {
	try {
		await ctx.scene.enter('calc')
	} catch (e) {
		console.error('cant enter calc scene', e)
	}
})

module.exports = composer