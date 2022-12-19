import { ConfigurationCollection } from "./collection";
import { ArgumentInterface } from './api';

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

    public abstract call(action: string, data: ArgumentInterface[]):Promise<any>

    public abstract setup():Promise<any>


}