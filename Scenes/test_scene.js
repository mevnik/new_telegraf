const WizardScene = require('telegraf/scenes/wizard')



module.exports = testScene = new WizardScene(
  'test',

  async (ctx) => {
    await ctx.reply(`HelloHello!!`)
			return ctx.wizard.next()

  },
  async (ctx) => {

    await ctx.replyWithHTML(`Vot`)
			return ctx.scene.leave()

  },  
  
)