const { Client, Intents, MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const prefix = '/';

client.on('messageCreate', async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'clear') {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            return message.reply('No Permission!');
        }

        const amount = parseInt(args[0]);
        if (isNaN(amount) || amount <= 0 || amount > 200) {
            return message.reply('Please give a focused amount. (1-200).');
        }

        await message.channel.bulkDelete(amount);

        message.channel.send({ embeds: [createInfoEmbed('Messages are getting cleared!')] })
            .then((sentMessage) => {
                setTimeout(() => {
                    sentMessage.delete();
                }, 5000);
            })
            .catch((error) => console.error('Error:', error));
    }
});

client.on('messageCreate', async (message) => {
  if (!message.content.startsWith('/') || message.author.bot) return;

  const args = message.content.slice('/'.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'a2' && message.member.roles.cache.some(role => role.name === 'Name')) { /* Add Role Id here */
      const mentionedUser = message.mentions.members.first();

      if (!mentionedUser) {
          return message.reply({ embeds: [createErrorEmbed('@someone.')] });
      }

      const roleId = '1194296699041095701'; /* Add Role Id here */
      const role = message.guild.roles.cache.get(roleId);
      const roleId1 = '1194287483911950386'; /* Add Role Id here */
      const role1 = message.guild.roles.cache.get(roleId1);
      const roleId2 = '1194293405614878780'; /* Add Role Id here */
      const role2 = message.guild.roles.cache.get(roleId2);

      if (!role) {
          return message.reply({ embeds: [createErrorEmbed('Role not found!')] });
      }

      try {
          await mentionedUser.roles.add(role);
          await mentionedUser.roles.add(role1);
          await mentionedUser.roles.remove(role2);
          message.reply({ embeds: [createSuccessEmbed(`${mentionedUser.toString()} hat die <@&1194287483911950386> bestanden! Somit auch den Rang <@&1194296699041095701> erhalten!`)] }); /* Add Custom message here */
      } catch (error) {
          console.error('Error:', error);
          message.reply({ embeds: [createErrorEmbed('Error.')] });
      }
  }
});

client.on('messageCreate', async (message) => {
  if (!message.content.startsWith('/') || message.author.bot) return;

  const args = message.content.slice('/'.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'a3' && message.member.roles.cache.some(role => role.name === 'Name')) { /* Add Role Id here */
      const mentionedUser = message.mentions.members.first();

      if (!mentionedUser) {
          return message.reply({ embeds: [createErrorEmbed('@someone')] });
      }

      const roleId = '1194287353888518185'; /* Add Role Id here */
      const role = message.guild.roles.cache.get(roleId);
      const roleId1 = '1194296879069012069'; /* Add Role Id here */
      const role1 = message.guild.roles.cache.get(roleId1);
      const roleId2 = '1194296699041095701'; /* Add Role Id here */
      const role2 = message.guild.roles.cache.get(roleId2);

      if (!role) {
          return message.reply({ embeds: [createErrorEmbed('Role not found!')] });
      }

      try {
          await mentionedUser.roles.add(role);
          await mentionedUser.roles.add(role1);
          await mentionedUser.roles.remove(role2);
          message.reply({ embeds: [createSuccessEmbed(`${mentionedUser.toString()} hat die <@&1194287353888518185> bestanden! Somit auch den Rang <@&1194296879069012069> erhalten!`)] }); /* Add Custom message here */
      } catch (error) {
          console.error('Error:', error);
          message.reply({ embeds: [createErrorEmbed('Error')] });
      }
  }
});

client.on('messageCreate', async (message) => {
  if (!message.content.startsWith('/') || message.author.bot) return;

  const args = message.content.slice('/'.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'ga' && message.member.roles.cache.some(role => role.name === 'Name')) { /* Add Role Name here */
      const mentionedUser = message.mentions.members.first();

      if (!mentionedUser) {
          return message.reply({ embeds: [createErrorEmbed('@someone')] });
      }

      const roleId = '1130090546346590218'; /* Add Role Id here */
      const role = message.guild.roles.cache.get(roleId);
      const roleId1 = '1127172422131535963'; /* Add Role Id here */
      const role1 = message.guild.roles.cache.get(roleId1);
      const roleId2 = '1231620143105183855'; /* Add Role Id here */
      const role2 = message.guild.roles.cache.get(roleId2);
      const roleId3 = '1231620145919561758'; /* Add Role Id here */
      const role3 = message.guild.roles.cache.get(roleId3);
      const roleId4 = '1231621059485106186'; /* Add Role Id here */
      const role4 = message.guild.roles.cache.get(roleId4);

      if (!role) {
          return message.reply({ embeds: [createErrorEmbed('Role not found!')] });
      }

      try {
          await mentionedUser.roles.add(role);
          await mentionedUser.roles.add(role1);
          await mentionedUser.roles.add(role2);
          await mentionedUser.roles.add(role3);
          await mentionedUser.roles.add(role4);
          message.reply({ embeds: [createSuccessEmbed(`${mentionedUser.toString()} hat das FOB nicht in die Luft gesprengt! Somit auch den Rang <@&1130090546346590218> erhalten!`)] }); /* Add Custom message here */
      } catch (error) {
          console.error('Error:', error);
          message.reply({ embeds: [createErrorEmbed('Error')] });
      }
  }
});

function createSuccessEmbed(message) {
  return new MessageEmbed()
      .setColor('#00ff00')
      .setFooter("Made by Daniel")
      .setDescription(message);
}

function createErrorEmbed(message) {
  return new MessageEmbed()
      .setColor('#ff0000')
      .setFooter("Made by Daniel")
      .setDescription(message);
}

function createInfoEmbed(message) {
  return new MessageEmbed()
      .setColor('#ffdd00')
      .setFooter("Made by Daniel")
      .setDescription(message);
}

client.login('TOKENHERE');
