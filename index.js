const { Telegraf, Markup } = require('telegraf');
const moment = require('moment');

// dotenv
require("dotenv").config()

const TOKEN = process.env.TELEGRAM_API_TOKEN
const bot = new Telegraf(TOKEN, {
    'telegram': {
        'apiRoot': 'https://public-telegram-bypass.solyfarzane9040.workers.dev/bot'
    }
});
const messageText = "برای مشاهده زمان باقی مانده تا شروع همایش روی دکمه زیر کلیک کنید.";
const targetDate = moment("2024-02-29");

function calculateRemainingTime() {
    const now = moment();
    const remainingTime = moment.duration(targetDate.diff(now));
    const days = remainingTime.days();
    const hours = remainingTime.hours();
    const minutes = remainingTime.minutes();
    return `${days} روز، ${hours} ساعت و ${minutes} دقیقه`;
}

bot.start((ctx) => {
    const remainingTime = calculateRemainingTime();
    ctx.reply(`🥕 سلام به فرانت چپتری های عزیز\n${messageText}`, Markup.inlineKeyboard([
        Markup.button.callback('⏳ نمایش زمان باقی‌مانده ⏳', 'showRemainingTime')
    ]));
});

bot.action('showRemainingTime', (ctx) => {
    const remainingTime = calculateRemainingTime();
    ctx.answerCbQuery(`🥕 زمان باقی‌مانده: ${remainingTime}`);
});

bot.launch();