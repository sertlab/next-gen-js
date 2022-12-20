import { DotdigitalIntegrationDecorator } from "../../dotditial-intergration-decorator.js";
import { ConfigurationCollection } from "../../collection/index.js";
import { ArgumentInterface } from "../../api/index.js";
import { CallableChatFunctions } from "./index.js";
import * as DotdigitalChatScript from "./lib/bootstrap.js";
import { Console } from "console";

export class Chat extends DotdigitalIntegrationDecorator{

        constructor(configratuon: ConfigurationCollection) {
            super(configratuon, null);
        }

        protected validateConfigurtation(): boolean {
            if (window === undefined) {
                throw new Error('chat not available outside of a browser')
            }

            if(!this.configurtation.has('apiSpace')) {
                throw new Error('apiSpace is not set');
            }

            if(!this.configurtation.has('urlBase')) {
                throw new Error('urlBase is not set');
            }

            return true;
        }
        
        protected teardown(): Promise<any> {
            return new Promise((resolve, reject) => {
                //no-op
                resolve(this);
            }).catch((error) => {
                console.log(error);
            });
        }

        protected setup(): Promise<any> {
            return new Promise((resolve, reject) => {
                
                try {
                    this.validateConfigurtation();
                    globalThis['ddgChatConfig'] = {
                        apiSpace: this.configurtation.get('apiSpace'),
                        urlBase: this.configurtation.get('urlBase')};


                    var x = DotdigitalChatScript.init();
                        
                    console.log(x);
                }
                catch (error) {
                    reject(error);
                }

                resolve(this);
            }).catch((error) => {
                console.error(error);
            });
        }

        public async call(action:CallableChatFunctions, data: ArgumentInterface[]): Promise<any> {
            try {
                await this.setup();
                return this;
            }
            catch (error) {
                console.log(error);
            }  
        }
}