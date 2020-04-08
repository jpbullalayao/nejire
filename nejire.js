const Discord = require('discord.js');
const axios = require('axios');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setActivity('with Professor Ragna#1337');
});

client.on('message', async msg => {
  const prefix = '/jp';

  if (msg.content === 'Nejire') {
    msg.reply('Ragna-sama!');
  }

  if (msg.content.startsWith(prefix)) {
    const args = msg.content.slice(prefix.length).split(' ');
    const command = args[1].toLowerCase(); // Removes '' from args

    // TODO
    const headers = {
      'Authorization': 'Bearer <some token>',
      'Content-Type': 'application/json',
    };

    // TODO: TRY
    console.log(command);
    const response = await axios.post(
      'https://translation.googleapis.com/language/translate/v2',
      {
        q: command,
        source: 'ja',
        target: 'en',
        format: 'text',
      },
      {
        headers
      },
    );

    const { translatedText } = response.data.data.translations[0];
    // msg.reply(`-sama, ${command} translates to '${translatedText}'`);
    msg.channel.send(`${msg.author}-sama, ${command} translates to '${translatedText}'`);
  }

  // check if msg.content starts with '/jp'
  // get content after /jp
});

client.login('Njk3Mjg1NzY2MzI1NDY5MjQ1.Xo1FWA.fHJAhfG5Ke4Lx8tB_w99mUMtdNo');

