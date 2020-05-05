const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        if (!this.peoples.some(p => p.id == id)) return false;

        let peopleToUpdate = this.peoples.findIndex(p => p.id == id);
        this.peoples[peopleToUpdate].name = people.name;
        return true;
    }

    getPeople(filters) {
        return this.peoples.filter(p => {
            return Object.keys(filters).every(f => {
                return p[f] === filters[f];
            });
        });
    }
}