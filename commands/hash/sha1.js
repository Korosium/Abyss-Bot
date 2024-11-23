const { SlashCommandBuilder } = require('discord.js');
const { sha1 } = require('../../scripts/sha1');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sha1')
		.setDescription('Returns the SHA-1 checksum of the input.')
        .addStringOption(option => 
            option.setName('input')
                .setDescription('The input to hash')
                .setRequired(true)
            ),
	async execute(interaction) {
        const input = interaction.options.getString('input');
		await interaction.reply(`\`\`\`INPUT    : ${input}\nCHECKSUM : ${sha1.hash.hex(input)}\`\`\``);
	},
};
