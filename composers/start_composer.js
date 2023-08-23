const {Composer} = require('telegraf')

const composer = new Composer()

composer.command('start', async (ctx) => {
	try {
		ctx.users.push(ctx.from.id)

		await ctx.replyWithHTML(ctx.i18n.t('wellcome',{ctx}))
	} catch (e) {
		console.error('cant handle start command', e)
	}
})

composer.command('help', async (ctx) => {
	try {
		await ctx.replyWithHTML(ctx.i18n.t('help'))
	} catch (e) {
		console.error('cant handle help command', e)
	}
})

module.exports = composer