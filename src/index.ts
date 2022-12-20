export { Tracking, CallableTrackingFunctions } from "./modules/index.js";
export { ConfigurationCollection } from "./collection/configurtation-collection.js";
export { ModuleCallArgument } from "./model/module-call-argument.js";
export { ArgumentTypes, ConfigurationInterface } from './api/index.js';

import { Tracking,CallableTrackingFunctions } from "./modules/index.js";
import { ConfigurationCollection } from "./collection/configurtation-collection.js";
import { ModuleCallArgument } from "./model/module-call-argument.js";
import { ArgumentTypes, ConfigurationInterface } from './api/index.js';
import { Chat } from "./modules/chat/chat-module.js";
import { CallableChatFunctions } from "./modules/chat/callable-chat-functions-enum.js";

export const TrankingModule = {
    Tracking,
    CallableTrackingFunctions,
    ConfigurationCollection,
    ModuleCallArgument,
    ArgumentTypes
}


function runTracking()
{
    const config = new ConfigurationCollection();
    config.add({
        key:'regeion',
        value:"r1"
    } as ConfigurationInterface)
    const tracking = new Tracking(config);


    tracking.call(CallableTrackingFunctions.create, [
        new ModuleCallArgument('account_id', 'DM-5862029334-01', ArgumentTypes.STRING)
    ])
    tracking.call(CallableTrackingFunctions.track, []);
    
}

function runChat()
{
    const config = new ConfigurationCollection();
    config.add({ key:'apiSpace', value:"9ec294be-1bd9-4714-8fe7-73bab454c263"})
    config.add({ key:'urlBase', value:"https://webchat.dotdigital.com"})
    const chat = new Chat(config);
    chat.call(CallableChatFunctions.init,[])
    
}
runChat();
//runTracking();