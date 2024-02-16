// Import necessary libraries
const { Telegraf, Markup } = require('telegraf');
const moment = require('moment-timezone'); // استفاده از moment-timezone بجای moment

// Load environment variables
require("dotenv").config();

// Telegram API token
const TOKEN = process.env.TELEGRAM_API_TOKEN;

// Initialize the bot with the API token
const bot = new Telegraf(TOKEN, {
    telegram: {
        apiRoot: 'https://public-telegram-bypass.solyfarzane9040.workers.dev/bot'
    }
});

// Set timezone to Tehran
moment.tz.setDefault('Asia/Tehran');

// Initial message text and target date
const messageText = "برای مشاهده زمان باقی مانده تا شروع همایش روی دکمه زیر کلیک کنید.";
const targetDate = moment("2024-02-29");

// Function to calculate remaining time
function calculateRemainingTime() {
    const now = moment();
    const remainingTime = moment.duration(targetDate.diff(now));
    const days = remainingTime.days();
    const hours = remainingTime.hours();
    const minutes = remainingTime.minutes();
    return `${days} روز، ${hours} ساعت و ${minutes} دقیقه`;
}

// Command to start the bot
bot.start((ctx) => {
    ctx.reply(`🥕 سلام ${ctx.from.first_name} جان!\n${messageText}`, Markup.inlineKeyboard([
        Markup.button.callback('⏳ نمایش زمان باقی‌مانده ⏳', 'showRemainingTime')
    ]));
});

// Action to display remaining time
bot.action('showRemainingTime', (ctx) => {
    const remainingTime = calculateRemainingTime();
    ctx.answerCbQuery(`🥕 زمان باقی‌مانده: ${remainingTime}`);
});

// Launch the bot
bot.launch();
