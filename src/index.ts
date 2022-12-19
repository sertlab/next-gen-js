export {DotdigitalIntegrationDecorator} from './dotditial-intergration-decorator.js';

import { Tracking,CallableTrackingFunctions } from "./modules/index.js";
import { ConfigurationCollection } from "./collection/configurtation-collection.js";
import { ModuleCallArgument } from "./model/module-call-argument.js";
import ArgumentTypes from './api/argument-types.js';

function run()
{
    const config = new ConfigurationCollection();
    const tracking = new Tracking(config);
    const TrackingId = new ModuleCallArgument('account_id', 'DM-5862029334-01', ArgumentTypes.STRING)

    tracking.call(CallableTrackingFunctions.create, [TrackingId])
    tracking.call(CallableTrackingFunctions.track, []);
      
}

run();