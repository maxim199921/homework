export class MainController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.render();
        this.evenChangeHashMe();
        this.evenChangeHashSkills();
        this.evenChangeHashContacts();
        this.view.switchFoto();
    }

    evenChangeHashMe() {
        document.getElementById('me').addEventListener('click', (event) => {
            event.preventDefault();
            this.model.getHashMe(this.view);
        })
    }

    evenChangeHashSkills() {
        document.getElementById('skills').addEventListener('click', (event) => {
            event.preventDefault();
            this.model.getHashSkills(this.view);
        })
    }

    evenChangeHashContacts() {
        document.getElementById('contacts').addEventListener('click', (event) => {
            event.preventDefault();
            this.model.getHashContacts(this.view);
        })
    }
}
