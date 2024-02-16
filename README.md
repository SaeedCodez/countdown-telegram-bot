# Telegram Countdown Bot ⏳

A Telegram bot that displays the remaining time until a specified event.

## Description

This Telegram bot calculates and displays the remaining time until a specified event. Users can interact with the bot to view the countdown to the event.

## Usage

1. Start a chat with the bot by searching for it on Telegram or clicking on [this link](https://t.me/Front_chapter_countdown_bot).
2. Click on the "Start" button to initiate a conversation with the bot.
3. Follow the prompts to view the remaining time until the specified event.

## Features

- Displays remaining time in days, hours, and minutes.
- Supports customization for different target events.
- User-friendly interface with interactive buttons.

## Test Bot 🥕

You can test this bot by searching for `@Front_chapter_countdown_bot` on Telegram or by clicking on [this link](https://t.me/Front_chapter_countdown_bot).

## Installation

To run this bot locally or deploy it on your own server, follow these steps:

1. Clone this repository:
git clone https://github.com/SaeedCodez/front-chapter-countdown.git

2. Install dependencies:
cd front-chapter-countdown
`npm install`

3. Set up environment variables:
Create a `.env` file in the root directory and add your Telegram API token:
`TELEGRAM_API_TOKEN=your_telegram_api_token`

4. Start the bot: `node index.js`

## Credits

This bot is built using the [Telegraf](https://github.com/telegraf/telegraf) library for Telegram bots and [moment-timezone](https://github.com/moment/moment-timezone) for timezone handling.
