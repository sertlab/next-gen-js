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


function run()
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
      



    const config2 = new ConfigurationCollection();
    config2.add({key:'apiSpace', value:'fdsafdsa'});
    config2.add({key:'urlBase', value:'url test'});

    const chat = new Chat(config2);
    chat.call(CallableChatFunctions.init,[]);
}

run();