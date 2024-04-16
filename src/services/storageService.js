
export class StorageService {
    setItem(storeKey, storeValue) {
        localStorage.setItem(storeKey, JSON.stringify(storeValue));

    }

    getItem(key) {
        return localStorage.getItem(key);
    }

    removeItem(key) {
        localStorage.removeItem(key);
    }

    clearStorage() {
        localStorage.clear();
    }

}