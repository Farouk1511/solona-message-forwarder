require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

// Event listener for new messages
bot.on('message', (ctx) => {
  const chatId = ctx.chat.id;
  const chatTitle = ctx.chat.title || ctx.chat.username || 'Private Chat';
  console.log(`Chat ID: ${chatId} - Chat Title: ${chatTitle}`);

  // Reply with the chat ID
  //ctx.reply(`Chat ID: ${chatId}`);
});

bot.on("message",)

// Start the bot
bot.launch();
console.log('Bot started...');
