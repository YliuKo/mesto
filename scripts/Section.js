export default class Section {
    constructor(rendererObj, selector) {
        this.items = rendererObj.items;
        this.renderer = rendererObj.renderer;
        this.selector = selector;
    }

    render() {
        this.items.forEach(newItem => {
            this.selector.prepend(this.renderer(newItem));
        })
    }

    addItem(element) {
        // TEST IT
        this.selector.prepend(element);
    }
}