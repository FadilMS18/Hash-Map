class Helper{
    static takeKey(obj){
        return Object.keys(obj)[0]
    }
}

class Node{
    constructor(key, value){
        this[key] = value
        this.next = null
    }
}