
import { ArgumentTypes } from './index';

export interface  ArgumentInterface {
  
    /**
     * @var string
     */
    key: string;

    /**
     * @var any
     */
    data: any;

    /**
     * @var string
     */
    type: ArgumentTypes;

    /**
     * Argument constructor
     * 
     */
    /**
     * Get key
     * @returns {string}
     */
    getKey(): string;

    /**
     * Get data
     * @returns {any}
     */
    getData(): any;

    /**
     * Get type
     * @returns {string}
     */
    getType(): ArgumentTypes;

}