export { Tracking, CallableTrackingFunctions } from "./modules/index.js";
export { ConfigurationCollection } from "./collection/configurtation-collection.js";
export { ModuleCallArgument } from "./model/module-call-argument.js";
export { ArgumentTypes, ConfigurationInterface } from './api/index.js';

import { Tracking,CallableTrackingFunctions } from "./modules/index.js";
import { ConfigurationCollection } from "./collection/configurtation-collection.js";
import { ModuleCallArgument } from "./model/module-call-argument.js";
import { ArgumentTypes, ConfigurationInterface } from './api/index.js';

export const TrackingModule = {
    Tracking,
    CallableTrackingFunctions,
    ConfigurationCollection,
    ModuleCallArgument,
    ArgumentTypes
}