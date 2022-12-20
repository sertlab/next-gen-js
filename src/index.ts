export { Tracking, CallableTrackingFunctions } from "./modules/index.js";
export { ConfigurationCollection } from "./collection/configurtation-collection.js";
export { ModuleCallArgument } from "./model/module-call-argument.js";
export { ArgumentTypes, ConfigurationInterface } from './api/index.js';

import { Tracking,CallableTrackingFunctions } from "./modules/index.js";
import { ConfigurationCollection } from "./collection/configurtation-collection.js";
import { ModuleCallArgument } from "./model/module-call-argument.js";
import { ArgumentTypes, ConfigurationInterface } from './api/index.js';

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
      
}

run();