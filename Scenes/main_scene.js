const WizardScene = require('telegraf/scenes/wizard')



module.exports = calcScene = new WizardScene(
	'calc',
	async (ctx) => {
		try {
			await ctx.replyWithHTML(ctx.i18n.t('first_number'))

			return ctx.wizard.next()
		} catch {}
	},
	async (ctx) => {
		try {

			const a = Number(ctx.message.text)
//			const a = +ctx.message.text //а можно так
			if (isNaN(a)) return 
				ctx.session.a = a

			await ctx.replyWithHTML(ctx.i18n.t('second_number'))
			return ctx.wizard.next()
		} catch {}
	},
	async (ctx) => {
		try {
			const b = +ctx.message.text
			if (isNaN(b)) return

			const { a } = ctx.session
			const res = a + b
		console.log('res:',res)

			await ctx.replyWithHTML(ctx.i18n.t('result',{res}))
			//await ctx.replyWithHTML(ctx.i18n.t('result',{a,b})) // можно так. а вычисления производить в файле yuml
			return ctx.scene.leave()
		} catch {}
	}
)