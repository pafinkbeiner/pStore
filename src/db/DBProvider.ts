import Storage from "../model/Storage"
import fs from "fs"

export default class DBProvider {

    private static db: Database;

    private constructor() { }

    public static getInstance(): Database {
        if (!this.db) {
            this.db = new Database();
        }
        return this.db;
    }

}


class Database implements Storage {

    private store: { [id: string]: any; } = {};

    constructor() {
        if (fs.existsSync('./db.json')) {
            let buffer: any = fs.readFileSync('./db.json');
            this.store = JSON.parse(buffer);
        }
    }

    get(): { [id: string]: any; } {
        return this.store;
    }

    set(key: string, value: any): { [id: string]: any; } {
        this.store[key] = value;
        this.persist();
        return this.store;
    }

    getById(key: string): any {
        return this.store[key];
    }

    wipe() {
        this.store = {};
        this.persist();
    }

    private persist() {
        fs.writeFileSync('./db.json', JSON.stringify(this.store));
    }
}