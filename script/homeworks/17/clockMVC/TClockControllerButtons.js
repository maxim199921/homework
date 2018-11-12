class TClockControllerButtons {
    constructor(model, view, timezone) {
        this.model = model;
        this.view = view;
        this.timezone = timezone;
        // контроллер при снятии флажка в представлении
        // перестает слушать изменения модели,
        // а при установке - продолжает
        this.view.setChangeHandler(
            checked => {
                if (checked) {
                    this.registerModelHandler();
                } else {
                    this.model.setChangeListener(null);
                }
            }
        );

        this.registerModelHandler();
    }

    registerModelHandler() {
        this.model.setChangeListener(
            () => this.handleModelChange());
        this.handleModelChange();
    }

    handleModelChange() {
        // при вызове функции обратного вызова
        // контроллер перерисовывает представление
        this.view.render(this.model, this.timezone);
    }
}

