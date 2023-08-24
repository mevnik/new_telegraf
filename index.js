const { Telegraf, Stage, session } = require('telegraf')
const TelegrafI18n = require('telegraf-i18n') // для подключения файлов с текстами https://www.npmjs.com/package/telegraf-i18n
const path = require('path');
const Scene = require('telegraf/scenes/base')
const randomstring = require('randomstring')
require('dotenv').config()
//const { leave } = Stage

const token = process.env.TOKEN_test_mevnik
const bot = new Telegraf(token)

const i18n = new TelegrafI18n({
  defaultLanguage: 'ru',
  allowMissing: false, // Default true
  directory: path.resolve(__dirname, 'locales')
})

const users = []
bot.context.users = users



/*
const greeter = new Scene('greeter')
greeter.enter((ctx) => ctx.reply('Hi'))
greeter.leave((ctx) => ctx.reply('Bye'))
greeter.hears('try', leave())
greeter.on('message', (ctx) => ctx.reply('Send `hi`'))

// Create scene manager


//Scene registration

const baseScene = new Scene('baseScene');
baseScene.hears('/hi/gi',async (ctx) => {
	console.log('Hi')
	 await ctx.replyWithHTML(`what can I get you?`)
			return ctx.scene.leave()
});


stage.command('cancel', leave())
stage.register(greeter)
//bot.on('greeter', (ctx) => ctx.scene.leave('greeter'))
bot.on('message', (ctx) => {
  console.log(ctx.scene.state)                                    // Current scene state (persistent)
  ctx.scene.enter('greeter')   // Enter scene
//  ctx.scene.reenter()                                // Reenter current scene
//  ctx.scene.leave()                                  // Leave scene
})
*/
const stage = new Stage([require('./Scenes/main_scene.js'),require('./Scenes/test_scene.js')])
bot.use(session())
bot.use(i18n.middleware())
bot.use(stage.middleware())
bot.use(require('./composers/start_composer'))
bot.use(require('./composers/utilitis_composer'))
bot.use(require('./composers/admin_composer'))
bot.use(require('./composers/test_composer'))


bot.launch().then(() => {
	console.log(`bot started on @${bot.options.username}`)
})
