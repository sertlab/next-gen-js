export {DotdigitalIntegrationDecorator} from './dotditial-intergration-decorator.js';

import { Tracking } from "./modules/tracking/tracking-module.js";
import { ConfigurationCollection } from "./collection/configurtation-collection.js";

const config = new ConfigurationCollection();
config.add({key: 'account_id', value: '123456789'});
const tracking = new Tracking(config);

tracking.setup().then((result) => {
    console.log(result);
});