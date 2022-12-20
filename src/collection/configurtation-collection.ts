import { ConfigurationInterface } from '../api/configuration-interface';

export class ConfigurationCollection {

    private _collection: ConfigurationInterface[] = [];

    public add(config: ConfigurationInterface) {
        this._collection.push(config);
    }

    public has(key): boolean {
        return this._collection.some((config: ConfigurationInterface) => {
            return config.key === key;
        });
    }

    public get(key: string): ConfigurationInterface|null {

        const configutaion = this._collection.find((config: ConfigurationInterface) => {
            return config.key === key;
        });

        if (configutaion) {
            return configutaion;
        }

        return null;

    }

    public getAll(): ConfigurationInterface[] {
        return this._collection;
    }

    public getValues(): any[] {
        return this._collection.map((config: ConfigurationInterface) => {
            return config.value;
        });
    }

}