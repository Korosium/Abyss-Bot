const { SlashCommandBuilder } = require('discord.js');
const { md5 } = require('../../scripts/md5');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('md5')
		.setDescription('Return the MD5 checksum of the input.')
        .addStringOption(option => 
            option.setName('input')
                .setDescription('The input to hash')
                .setRequired(true)
            ),
	async execute(interaction) {
        const input = interaction.options.getString('input');
		await interaction.reply(`\`\`\`INPUT    : ${input}\nCHECKSUM : ${md5.hash.hex(input)}\`\`\``);
	},
};
