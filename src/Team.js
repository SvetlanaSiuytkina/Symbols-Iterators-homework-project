export default class Team {
  constructor() {
    this.characters = [];
  }

  addCharacter(character) {
    this.characters.push(character);
  }
    
  addAllCharacters(...characters) {
    for (const char of characters) {
      this.addCharacter(char);
    }
  }

  sizeArrayCharacters() {
    return this.characters.length;
  }

  [Symbol.iterator]() {
    const characters = this.characters;
    let index = 0;

    return {
      next() {
        if (index >= characters.length) {
          return {
            value: undefined,
            done: true
          };
        }

        return {
          value: characters[index++],     //
          done: false
        };
      }
    };
  }
}
