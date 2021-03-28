export function getExpireTime() {
    return Date.now() + 15 * 1000;
}

let nextID = 0;
export function generateID() {
    const ID = nextID ++;
    return ID;
}