export class ContactsModel {
    constructor() {
        this.hashMe = `main`;
        this.hashSkills = `skills`;
        this.hashContacts = `contacts`;
    }

    getHashMe(view) {
        view.changeHashMe(this.hashMe);
    }

    getHashSkills(view) {
        view.changeHashMe(this.hashSkills);
    }

    getHashContacts(view) {
        view.changeHashMe(this.hashContacts);
    }
}