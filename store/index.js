class Store {

    constructor() {
        this.store = {};
        this.nextKey = 1;
    }

    getAll() {
        // Return a clone
        return {...this.store}
    }

    getByKey(key) {
        return this.store[key];
    }

    saveObject(object) {
        object._id = this.nextKey;
        this.store[this.nextKey] = object;
        this.nextKey++;

        // Clone
        return {...object};
    }

    updateObject(key, object) {
        this.store[key] = object;
    }

    deleteObject(key) {
        delete this.store[key];
    }

    clear() {
        this.store = {};
        this.nextKey = 1;
    }
}

module.exports = Store;