import { DotdigitalIntegrationDecorator } from "../../dotditial-intergration-decorator.js";
import { ConfigurationCollection } from "../../collection/index.js";
import { ArgumentInterface } from "../../api/index.js";
import { CallableTrackingFunctions } from "./index.js";
import * as DotdigitalTreackingScript from "./lib/main.js";



export class Tracking extends DotdigitalIntegrationDecorator{
        
        private gloablReference:any = 'dmpt';

        constructor(configratuon: ConfigurationCollection) {
            super(configratuon, null);
        }

        protected validateConfigurtation(): boolean {

            if(!this.configurtation.has('region')) {
                throw new Error('Region is not set');
            }

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
                    DotdigitalTreackingScript.init(()=>{
                        // Possobile XXS 
                        const region = this.configurtation.get('region');
                        return `https://${region.value}.trackedweb.net/`;
                    })
                    this.setWrappee(globalThis['dmpt']);
                    
                }
                catch (error) {
                    reject(error);
                }

                resolve(this);
            }).catch((error) => {
                console.error(error);
            });
        }

        public async call(action:CallableTrackingFunctions, data: ArgumentInterface[]): Promise<any> {
            try {
                await this.setup();
                await this.wrappee(action, data.reduce((acc, arg) => {
                    acc.push(arg.getData());
                    return acc;
                }, []));
                await this.teardown();
                return this;
            }
            catch (error) {
                console.log(error);
            }  
        }

}