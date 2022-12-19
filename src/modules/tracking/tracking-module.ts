import { DotdigitalIntegrationDecorator } from "../../dotditial-intergration-decorator.js";
import { ConfigurationCollection } from "../../collection/index.js";
import { ArgumentInterface } from "../../api/index.js";
import { CallableTrackingFunctions } from "./index.js";
import * as DotdigitalTreackingScript from "./lib/main.js";

declare global {
    var dmpt: {
        q: any
    }
    var dmtrackingobjectname: any
}

export class Tracking extends DotdigitalIntegrationDecorator{
        
        private gloablReference:any = 'dmpt';

        constructor(configratuon: ConfigurationCollection) {
            super(configratuon, null);
        }

        protected validateConfigurtation(): boolean {

            return true;

        }
        
        protected teardown(): Promise<any> {
            return new Promise((resolve, reject) => {
                try {
                    globalThis[dmtrackingobjectname] = undefined;
                }
                catch (error) {
                    reject(error);
                }
                resolve(this);
            }).catch((error) => {
                console.log(error);
            });
        }

        protected setup(): Promise<any> {

            return new Promise((resolve, reject) => {
                
                try {
                    this.validateConfigurtation();
                    globalThis.dmtrackingobjectname = this.gloablReference;
                    globalThis[this.gloablReference] = {};
                    globalThis[this.gloablReference].q = [];
                    DotdigitalTreackingScript.init()
                    this.setWrappee(globalThis['dmpt']);
                    
                }
                catch (error) {
                    reject(error);
                }

                resolve(this);
            }).catch((error) => {

                console.log(error);

            });
        }

        public async call(action:CallableTrackingFunctions, data: ArgumentInterface[]): Promise<any> {
            try {
                const args = data.map(argument => argument.getData());

                await this.setup();
                await this.wrappee(action, data);
                await this.teardown();
                return this;
            }
            catch (error) {
                console.log(error);
            }  
        }

}