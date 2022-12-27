import {
  SlashCommandBuilder,
  ContextMenuCommandBuilder,
  CommandInteraction,
  ButtonInteraction,
  AnySelectMenuInteraction,
  RESTPostAPIChatInputApplicationCommandsJSONBody,
  RESTPostAPIContextMenuApplicationCommandsJSONBody,
  ModalSubmitInteraction,
} from "discord.js";

export type commandFileProps = {
  data: SlashCommandBuilder | ContextMenuCommandBuilder;
  run: (CommandInteraction: CommandInteraction) => Promise<void>;
};

export type componentFileProps = {
  data: { name: string };
  run: (
    ButtonInteraction:
      | ButtonInteraction
      | AnySelectMenuInteraction
      | ModalSubmitInteraction
  ) => Promise<void>;
};

export type RESTPostAPItoJSONData =
  | RESTPostAPIChatInputApplicationCommandsJSONBody
  | RESTPostAPIContextMenuApplicationCommandsJSONBody;
