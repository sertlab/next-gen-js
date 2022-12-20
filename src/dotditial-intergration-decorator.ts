import { ConfigurationCollection } from "./collection/index.js";
import { ArgumentInterface } from './api/index.js';
import { CallableTrackingFunctions } from "./modules/tracking/index.js";

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

    public abstract call(action:CallableTrackingFunctions, data: ArgumentInterface[]):Promise<any>



}