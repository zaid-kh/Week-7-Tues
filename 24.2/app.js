class Pokemon {
  constructor(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
  }
}
const pokemon1 = new Pokemon("Pikachu", "Electric", [
  "Thunderbolt",
  "Quick Attack",
  "Iron Tail",
]);
const pokemon2 = new Pokemon("Bulbasaur", "Grass/Poison", [
  "Vine Whip",
  "Razor Leaf",
  "Solar Beam",
]);
const pokemon3 = new Pokemon("Charizard", "Fire/Flying", [
  "Flamethrower",
  "Dragon Claw",
  "Air Slash",
]);

/**  A method called callPokemon will print the following:“I choose you, $pokemonName
 */

Pokemon.prototype.callPokemon = function () {
  console.log(`“I choose you, ${this.name}`);
};
/**     A method called attack that takes one parameter,
 *      an attack number, that will print the specific attack
 *      method from the pokemonAttackList array as the
 *      following: “$pokemonName used $attackMethod”
 */
Pokemon.prototype.attack = function (attackNumber) {
  console.log(`“${this.name} used ${this.attackList[attackNumber]}”`);
};

pokemon1.callPokemon();
pokemon1.attack(0);
pokemon2.callPokemon();
pokemon2.attack(1);
pokemon1.callPokemon();
pokemon3.attack(2);
