const { SlashCommandBuilder } = require('discord.js');
const { sha256 } = require('../../scripts/sha256');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sha256')
		.setDescription('Returns the SHA-256 checksum of the input.')
        .addStringOption(option => 
            option.setName('input')
                .setDescription('The input to hash')
                .setRequired(true)
            ),
	async execute(interaction) {
        const input = interaction.options.getString('input');
		await interaction.reply(`\`\`\`INPUT    : ${input}\nCHECKSUM : ${sha256.hash.hex(input)}\`\`\``);
	},
};
