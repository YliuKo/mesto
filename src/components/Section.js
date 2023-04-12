export default class Section {
  constructor({ renderer }, container) {
    this._renderer = renderer;
    this._container = container;
  }

  render(data) {
    console.log("Render!");
    data.forEach((newItem) => {
      this._renderer(newItem);
    });
  }

  addItem(element) {
    // TEST IT
    this._container.prepend(element);
  }
}
