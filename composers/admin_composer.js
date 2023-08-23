const {Composer} = require('telegraf')

const composer = new Composer()

composer.command('stats', async (ctx) => {
	try {
		await ctx.replyWithHTML(`Кол-во пользователей: ${ctx.users.length}`)
	} catch (e) {
		console.error('cant handle stats command', e)
	}
})

module.exports = composer