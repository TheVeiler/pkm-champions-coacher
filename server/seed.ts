import { Ability, Item, Move, Nature, Pokemon, Type } from "./src/seeders/index.js";

await Ability.up();
await Item.up();
await Move.up();
await Nature.up();
await Pokemon.up();
await Type.up();
