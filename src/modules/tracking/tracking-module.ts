import { DotdigitalIntegrationDecorator } from "../../dotditial-intergration-decorator.js";
import { ConfigurationCollection } from "../../collection/configurtation-collection.js";
import { ArgumentInterface } from "src/api/argument-interface.js";
import * as DotdigitalTreackingScript from './lib/main.js';

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
            
            if (!this.configurtation.get('account_id')) {
                throw new Error('Account id is not set');
            }

            return true;

        }

        public setup(): Promise<any> {

            return new Promise((resolve, reject) => {
                
                try {
                    this.validateConfigurtation();

                    window.dmtrackingobjectname = this.gloablReference;
                    DotdigitalTreackingScript.init(this.configurtation.get('account_id')?.value as string)
                    this.setWrappee(window['dmpt']);
                    this.wrappee.create();
                }
                catch (error) {
                    reject(error);
                }

                resolve(this);
            }).catch((error) => {

                console.log(error);

            });
        }

        public call(action: string, data: ArgumentInterface[]): Promise<any> {

            return new Promise((resolve) => {
                this.wrappee[action](...data.map( argument => argument.getData() ));
                resolve(this);
            }).catch((error) => {
                console.log(error);
            });
            throw new Error("Method not implemented.");
        }

}