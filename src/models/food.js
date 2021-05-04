'use strict';

class Food {
    constructor() {
        this.id = 0;
        this.db = [];
    }

    get(id) {
        if (id) {
            return this.db.find(record=> record.id === id);
        } else {
            return this.db;
        }
    }

    create(obj) {
        let record = {
            id: ++this.id,
            record: obj
        };
        this.db.push(record);
        return record;
    }

    update(obj) {
        this.db.forEach(element => {
            if(record.id == obj.id) {
                element.record = obj
                return element
            }
        })
    }

    delete(id) {
        this.db = this.db.filter(element => {
            if(element.id !== id ) {
                return element
            }
        })
    }
}

module.exports = Food;