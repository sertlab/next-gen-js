import { ConfigurationCollection } from "./collection/index";
import { ArgumentInterface } from './api/index';
import { CallableTrackingFunctions } from "./modules/tracking/index";
import { CallableChatFunctions } from "./modules/chat/index";

export abstract class DotdigitalIntegrationDecorator {

    protected configurtation: ConfigurationCollection;
    protected wrappee: any

    constructor(configratuon: ConfigurationCollection, wrappee: any) {
        this.configurtation = configratuon;
        this.wrappee = wrappee;
    }

    public setWrappee(wrappee: any) {
        this.wrappee = wrappee;
    }

    public setConfiguration(config: ConfigurationCollection) {
        this.configurtation = config;
    }

    protected abstract validateConfigurtation():boolean

    protected abstract setup():Promise<any>

    protected abstract teardown():Promise<any>

    public abstract call(action:CallableTrackingFunctions|CallableChatFunctions, data: ArgumentInterface[]):Promise<any>



}