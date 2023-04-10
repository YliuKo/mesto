export default class Section {
  constructor(rendererObj, container) {
    this.items = rendererObj.items;
    this.renderer = rendererObj.renderer;
    this.container = container;
  }

  render() {
    console.log("Render!");
    this.items.forEach((newItem) => {
      this.container.append(this.renderer(newItem));
    });
  }

  addItem(element) {
    // TEST IT
    this.container.prepend(this.renderer(element));
  }
}
