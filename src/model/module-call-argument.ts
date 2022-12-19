import { ArgumentInterface } from "../api";
import { ArgumentTypes } from '../api';

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
        return this.key;
    }

    /**
     * {@inheritdoc}
     */
    getData(): any {
        return this.data;
    }

    /**
     * {@inheritdoc}
     */
    getType(): ArgumentTypes {
        return this.type;
    }
    
}