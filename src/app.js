const f = () => {};

class Hero {
  #name;
  construcror(name) {
    this.#name = name;
  }

  get name() {
    this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }
}

const h = new Hero("kiwi");
