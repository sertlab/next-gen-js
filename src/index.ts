import { Tracking,CallableTrackingFunctions } from "./modules/index.js";
import { ConfigurationCollection } from "./collection/configurtation-collection.js";
import { ModuleCallArgument } from "./model/module-call-argument.js";
import { ArgumentTypes, ConfigurationInterface } from './api/index.js';
import { Chat } from "./modules/chat/chat-module.js";
import { CallableChatFunctions } from "./modules/chat/callable-chat-functions-enum.js";

export const TrackingModule = {
    Tracking,
    CallableTrackingFunctions,
    ConfigurationCollection,
    ModuleCallArgument,
    ArgumentTypes
}


export const ChatModule = {
    Chat,
    CallableChatFunctions,
    ConfigurationCollection,
    ModuleCallArgument,
    ArgumentTypes
}