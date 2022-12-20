import { ArgumentInterface, ArgumentTypes } from "../api/index.js";
import { sanitize } from '../utilities.js';

export class ModuleCallArgument implements ArgumentInterface
{
    /**
     * {@inheritdoc}
     */
    key: string;

    /**
     * {@inheritdoc}
     */
    data: any;

     /**
     * {@inheritdoc}
     */
    type: ArgumentTypes;

     /**
     * {@inheritdoc}
     */
    constructor(key: string, data: any, type: ArgumentTypes) {
        this.key = key;
        this.data = data;
        this.type = type;
    }

    /**
     * {@inheritdoc}
     */
    getKey(): string {
        return sanitize(this.key);
    }

    /** 
     * {@inheritdoc}
     */
    getData(): any {

        if (this.type === ArgumentTypes.STRING) {
            return sanitize(this.data);
        }

        return this.data;
    }

    /**
     * {@inheritdoc}
     */
    getType(): ArgumentTypes {
        return this.type;
    }
    
}