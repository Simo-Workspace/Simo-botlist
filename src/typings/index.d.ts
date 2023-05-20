import { ExtendedClient } from "../Client";
import { Message, AutocompleteInteraction, ChatInputCommandInteraction } from "discord.js";

export interface CommandStructure {
    name: string;
    aliases?: string[];
    run(client: ExtendedClient, message: Message<true>, args: string[]): Promise<unknown>;
};

export interface ApplicationCommandStructure {
    name: string;
    autocomplete?: (interaction: AutocompleteInteraction) => unknown;
    run?: (client: ExtendedClient, interaction: ChatInputCommandInteraction) => Promise<unknown>;
};