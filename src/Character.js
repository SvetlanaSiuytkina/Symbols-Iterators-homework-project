export default class Character {
  constructor(name, type, health = 50, level = 1, attack = 40, defence = 10) {
    this.name = name,
    this.type = type,
    this.health = health,
    this.level = level,
    this.attack = attack,
    this.defence = defence;
  }
}
