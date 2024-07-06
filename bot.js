require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

const sourceChatUsername = process.env.SOURCE_CHAT_USERNAME;
const sourceChatId = process.env.SOURCE_CHAT_ID;
const destChatId = process.env.DESTINATION_CHAT_ID
const destinationChatUsername = process.env.DESTINATION_CHAT_USERNAME;

// Function to validate if a message contains a Solana contract address (basic example)
function isValidSolanaAddress(address) {
  return address.length === 44 && /^[A-Za-z0-9]+$/.test(address);
}

// Event listener for new messages in the source chat
bot.on('message', async (ctx) => {
  const chatUsername = ctx.chat.username;

  if (ctx.chat.id.toString() === sourceChatId) {
    const message = ctx.message.text;

    console.log("messages entered")

    //Check if the message contains a valid Solana contract address
    if (isValidSolanaAddress(message)) {
      const forwardedMessage = `Solana Contract Address: ${message}`;

      // Forward the contract address to the destination chat
      await bot.telegram.sendMessage(destChatId, forwardedMessage);
    }

    await bot.telegram.sendMessage(destChatId, message);
  }
});

// Start the bot
bot.launch();
console.log('Bot started...');
