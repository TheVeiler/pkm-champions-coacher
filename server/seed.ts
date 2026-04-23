import { Ability, Item, Nature, Type } from "./src/seeders/index.js";

await Ability.up();
await Item.up();
// await Move.up();
await Nature.up();
// await Pokemon.up();
await Type.up();
