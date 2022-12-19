import { ConfigurationInterface } from '../api/configuration-interface';

export class ConfigurationCollection {

    private _collection: ConfigurationInterface[] = [];

    public add(config: ConfigurationInterface) {
        this._collection.push(config);
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

}