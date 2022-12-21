import { ArgumentInterface, ArgumentTypes } from "../api/index.js";
import { sanitize } from '../utilities.js';

export class ModuleCallArgument implements ArgumentInterface
{
    /**
     * @inheritDoc
     */
    key: string;

    /**
     * @inheritDoc
     */
    data: any;

     /**
     * @inheritDoc
     */
    type: ArgumentTypes;

     /**
     * @inheritDoc
     */
    constructor(key: string, data: any, type: ArgumentTypes) {
        this.key = key;
        this.data = data;
        this.type = type;
    }

    /**
     * @inheritDoc
     */
    getKey(): string {
        return sanitize(this.key);
    }

    /** 
     * @inheritDoc
     */
    getData(): any {

        if (this.type === ArgumentTypes.STRING) {
            return sanitize(this.data);
        }

        return this.data;
    }

    /**
     * @inheritDoc
     */
    getType(): ArgumentTypes {
        return this.type;
    }
    
}