# Modding
Mods will consist of HTML pages uploaded to the 'mods' folder. Players will then be able to select the mod they choose to play with.

# Technology Trees
The primary Technology tree is defined by the children of the custom HTML tag `<rigel-technologies>`.
By default, there are six categories of technology, each of which can be researched concurrently. If you define a custom tech tree, you can define arbitrary categories by creating `<tech-category>` tags with the `name` property set to your custom category name and putting relevant techs inside, like so:

```
<rigel-technologies>
    <tech-category name="custom category ">
        <tech name="custom technology" ...></tech>
    </tech-category>
    <tech-category name="custom category 2">
        ...
    </tech-category>
</rigel-technologies>
```

This should still work if you define different numbers of categories than six.

Modifying the primary tech tree should be done before a game is started to avoid glitches, as all references to tech will refer to the primary tech tree - modifying the tree can therefore cause players to have different technologies available, or potentially to have a reference to nothing, which may cause undefined behaviour.

# Technologies
Technologies are defined in `<tech>` tags.

## Attributes
The behaviour of a tech is defined by the attributes of the `<tech>` tag. All techs must have a `name` attribute, but all other attributes are optional. A brief explanation of each attribute is laid out below.
For some attributes, I give recommended positions that they should be placed in within the html tag. Obviously there is no enforcement of these recommendations, but keeping the rules consistant will help people to comprehend these 

### `name="<string>"`
The tech name. Use Title case where possible (i.e. "Tri-Focussed Plasma Cannon" rather than "Tri-focussed plasma Cannon")

Recommended location: immediately after the tech-level, if using. 
For example, either: 

`<tech tech-level="1" name="lasers" ...>`

or

`<tech name="example tech" ...>`

### `tech-level="<number>"`
The tech tree for each civilisation is randomised on game start. Each technology has a 50% chance to be removed from a civilisation's tech tree, with few exceptions.

When generating individual tech trees, the primary tech tree is split up into blocks of technologies within their categories based on their tech-level. These blocks contain 5 tech-levels each (except for the first, because `tech-level="1"` is a special case). The tech levels are 2-5, 6-10, 11-15, etc. 

Each block is guaranteed to have at least one technology in the tech tree - if all other techs in a given block have been removed from your civilisation's tech tree then the final tech in that block will not be removed. This guarantees that tech gets more expensive incrementally, without giant leaps in cost that may make investment in that tech category a complete dead end, strategically.

`tech-level` is also used to allow ship technologies to be miniaturised. To allow your technology to miniaturise over time, you must include the `tech-level` attribute.

Techs without a `tech-level` attribute will never appear in the tech tree, but can still be accessed through special events. The details of creating such an event will be detailed later.

Reccommended location: `tech-level` should be the very first attribute of the `<tech>` tag, e.g: `<tech tech-level="1" ...>`

### `not-in-tree`
The attribute `not-in-tree` will ensure that the tech is exempt from the tech tree generation process.

These techs can still be accessed through specific events. For example, "Death Ray" is unlocked when a player first colonises Rigel.

### Ship Slot Attributes
Most technologies give options for customising ship designs. Each ship can have: 1 battle computer, 1 ecm system, 1 shield, 1 engine, 4 weapons, and 3 special devices. There are special attributes that mark a technology as available to fill one of these slots.  Only items in the weapon and special slots can use any targetted ability. 

These special attributes will also act as modifiers to other attributes: e.g. `attack-bonus` on most technologies will boost the attack attribute of the ship for all attacks, but `attack-bonus` on a tech in the weapon slot will only provide it's boost to that weapon.

As a stylistic choice, these attributes should be placed immediately after the `name` attribute, for example:
`<tech name="example weapon" weapon ...>`

#### `computer`
A technology with the `computer` attribute can be assigned to a ship's battle computer slot.

#### `ecm`
A technology with the `ecm` attribute can be assigned to a ship's ecm slot. This modifies the behaviour of the `defense-bonus` attribute, so that it only helps defend against missile or torpedo attacks.

#### `shield`
A technology with the `shield` attribute can be assigned to a ship's shield slot.

#### `engine`
A technology with the `engine` attribute can be assigned to a ship's engine slot.

#### `weapon`
A technology with the `weapon` attribute can be assigned to a ship's weapon slots. Only items in the weapon and special slots can use any targetted ability.

The `attack-bonus` attribute on a tech in the weapon slot will only provide it's boost to that weapon.

#### `missile`
A technology with the `missile` attribute can be assigned to a ship's weapon slots. Only items in the weapon and special slots can use any targetted ability.

Missiles all have a certain amount of ammo, defined by their `missile-ammo` attribute, which determines how many times they can be fired in a single battle. 

Missiles will last 2 turns after being fired from a ship (or `missile-fuel` turns, if that attribute is set) and 5 turns after being fired from a planetary missile base.

Missiles do not have their damage halved when attacking a planet's surface, as most weapons do.

The `attack-bonus` or `ammo-bonus` attribute on a tech in the weapon slot will only provide it's boost to that weapon.

#### `torpedo`
A technology with the `torpedo` attribute can be assigned to a ship's weapon slots. Only items in the weapon and special slots can use any targetted ability.

Torpedos fire projectiles which travel on the map towards their target ship. 

Torpedos can be fired every other turn until the battle ends. 

Torpedos will last 2 turns after being fired from a ship (or `missile-fuel` turns, if that attribute is set) and 5 turns after being fired from a planetary missile base.

The `attack-bonus` attribute on a tech in the weapon slot will only provide it's boost to that weapon.

#### `bomb`
A technology with the `bomb` attribute can be assigned to a ship's weapon slots. Only items in the weapon and special slots can use any targetted ability. 

Bombs can only target planets, but do not have their damage halved when attacking a planet's surface, as most weapons do. 

Bombs have a limited amount of ammo, defined by their `missile-ammo` attribute, which determines how many times they can be fired in a single battle.

Bombs have a range of 1, regardless of the modifiers placed on them.

The `attack-bonus` or `ammo-bonus` attribute on a tech in the weapon slot will only provide it's boost to that weapon.

#### `special`
A tech with the `special` attribute can be assigned to a ship's special slots. Only items in the weapon and special slots can use any targetted ability.

### Ship Resource Attributes
These attributes are required for any technology that will be equipped onto a ship. 

They define the base costs in their respective resources - the true cost of a technology will be reduced as the relevant technology category's research level increases, based on it's `tech-level` parameter. Removing the `tech-level` not only means a technology will not appear in any civilisation's the tech tree, but also removes any ability for miniaturisation.

#### `power="[<number>]"`
The amount of power this tech consumes when equipped to a ship. 

Accepts 4 numbers, one for each potential ship size from smallest to largest, or 1 number, which is shorthand for just inputting the same number for all 4 inputs.

#### `space="[<number>]"`
The amount of space this tech requires when equipped to a ship. 

Accepts 4 numbers, one for each potential ship size from smallest to largest, or 1 number, which is shorthand for just inputting the same number for all 4 inputs.


#### `cost="[<number>]"`
The amount of money this tech adds to a ship's construction cost. 

Accepts 4 numbers, one for each potential ship size from smallest to largest, or 1 number, which is shorthand for just inputting the same number for all 4 inputs.

This attribute may be required by some civilisation-wide effect attributes, in which case the largest given cost will be used in whatever way that technology requires.


### Ship Effect Attributes
These attributes only have effects when the tech is equipped to a ship. Most of these effects are agnostic of the slot that the tech is equipped to: a tech with the `defense-bonus="1"` attribute will give the ship a +1 to it's defense roll regardless of whether the tech is in the shield, computer, weapon or special slot - however, in the ecm slot the tech would only give a +1 to defense rolls involving enemy missiles/torpedos.

#### `attack-bonus="<number>"`
The `attack-bonus` attribute gives a bonus to the ship's attack rolls. The number is added onto the ship's attack value when attacking with any weapon/special that causes damage.

If the tech is in a weapon slot then the bonus only applies to that weapon.

#### `defense-bonus="<number>"`
The `defense-bonus` attribute gives a bonus to the ship's defense rolls. The number is added on the ship's defense value, which is subtracted from the damage of any weapon that hits the ship.

If the tech is in the ecm slot then the bonus is only applied to missile and torpedo defense.

#### `missile-fuel="<number>"`
The number of turns a missile or torpedo will remain on the battlefield. After this many turns, the projectile will dissapear.

#### `missile-ammo="<number>"`
The amount of shots a missile or bomb can fire per combat. 

If used on a non-weapon, will be treated like `ammo-bonus`.

#### `ammo-bonus="<number>"`
The `ammo-bonus` attribute adds it's value onto the amount of ammo a weapon has. Only effects weapons with ammo - i.e: `bomb` and `missile` weapons.

If used on a non-weapon, applies to all valid weapons.

#### `initiative-bonus="<number>"`
The `initiative-bonus` attribute adds it's value to the equipped ship's initiative. This determines it's turn in combat.

#### `min-damage="<number>"`
The minimum damage that a weapon can deal, when it hits.

If this is defined without a corresponding `max-damage` attribute defined then the `min-damage` value is used as both the `min-damage` and `max-damage` values.

#### `max-damage="<number>"`
The maximum damage that a weapon can deal, when it hits.

If this is defined without a corresponding `min-damage` attribute defined then the `max-damage` value is used as both the `min-damage` and `max-damage` values.

#### `weapon-range="<number>"`
The number of squares out from the ship an equipped weapon can fire. If unset, this value is treated as "1".

If a non-weapon is given a `weapon-range` value then it will be treated like a `weapon-range-bonus` value instead.

This attribute does not effect bombs or special items.

#### `weapon-range-bonus="<number>"`
The `weapon-range-bonus` attribute adds it's value to the range of valid weapons.

If the tech is not a weapon, then this effects all valid weapons. If it is a weapon then it only effects that weapon's range.

This attribute does not effect bombs or special items.

#### `pulse-attack-damage-min="<number>"`
A weapon or special with this attribute will attack every enemy ship in the surrounding squares of the battlefield. If it hits, this will be the minimum damage dealt.

If this item doesn't have the `pulse-attack-damage-max` attribute, then this attribute's value will be used as both minimum and maximum damage.

#### `pulse-attack-damage-max="<number>"`
A weapon or special item with this attribute will attack every enemy ship in the surrounding squares of the battlefield. If it hits, this will be the maximum damage dealt.

If this item doesn't have the `pulse-attack-damage-min` attribute, then this attribute's value will be used as both maximum and minimum damage.

#### `max-movement-speed="<number>"`
This is the max combat speed that a ship with this tech equipped can equip.

#### `travel-speed="<number>"`
The distance that an equipped ship can travel in 1 turn on the galaxy map.

#### `target-speed-reduction-min="<number>"`
This weapon or special will reduce it's target's speed by at least this amount.

#### `target-speed-reduction-max="<number>"`
This weapon or special will reduce it's target's speed by this amount at most.

#### `multi-shot="<number>"`
The number of times a weapon is fired per use.

If this attribute is missing from a weapon then it's value is treated as "1".

#### `split-into-missiles="<number>"`
The number of missiles each launcher of this missile fires at once. Always consumes 1 ammo, regardless of the number of missiles that are actually fired.

If this attribute is missing from a missile then it's value is treated as "1".

#### `stream-min-damage-percent="<number>"`
The maximum percentage of the target's health dealt as damage by a successful stream attack, based on the number of ships in the stack. Stream attacks deal damage to every ship in a stack.

#### `stream-max-damage-percent="<number>"`
The maximum percentage of the target's health dealt as damage by a successful stream attack, based on the number of ships in the stack. Stream attacks deal damage to every ship in a stack.

#### `damage-reduction-per-space="<number>"`
The amount of damage lost per space travelled. On `missile` and `torpedo` weapons, calculated as the projectiles move. On other weapons, calculated as the weapon fires. Irrelivant to `bomb` weapons, as they can not have any range other than "1"

#### `dodge-attack-percent="<number>"`
The chance of dodging any attacks, as a percentage. This is separate from the normal attack calculation; the ship will additionally have it's usual chance of avoiding attacks.

#### `min-habitat="<habitat-name>"`
The ship with this tech equiped can colonise any system with an environment equal to or better than the given habitat. This will destroy the ship.

#### `regen-health-percent="<number>"`
The ship with this tech equipped will regain a percentage of it's max health equal to the value of this attribute at the start of each turn.

#### `apply-regen-only-to-first-ship-in-stack`
This attribute changes the behaviour of the `regen-health-percent` attribute, so that it applies to only the first ship in a stack, to conform with behaviour in Master of Orion.

#### `piercing`
A weapon with this attribute will ignore half the defense of it's target.

#### `damage-overflow`
Usually, a weapon will only ever damage the first ship in a stack, even if it deals more damage than the ship has health left. A weapon with this attribute will deal damage to the next ship in a stack when it destroys the previous one with damage left over, then the next, etc.

#### `repulsor-beam-effect="<number>"`
Pushes back enemy ships that move within the effective area of the repulsor beam. The effective area is a circle with a radius equal to the value of the `repulsor-beam-effect` attribute, centred on the space ship.

Ships that teleport, move into the effective area while under cloak, or decloak next to the ship with this equipped will not trigger the repulsor beam.

#### `anti-missile-percent="<number>"`
The chance of this tech destroying missiles that would otherwise hit the ship. The value is reduced by 1% for each level of the missile.

#### `armour-base`
The amount of hit points a cruiser class ship has. Behemoths will get six times as many hit points, 

#### `reduce-enemy-attack-min="<number>"`
Reduces the target's attack by at least this much.

#### `reduce-enemy-attack-max="<number>"`
Reduces the target's attack by at most this much.

#### `cloaking-device`
When this special or weapon is triggered, cloaks or decloaks the ship. A cloaked ship has a +5 to defense rolls, and after uncloaking the ship fires first, regardless of initiative. Once it's moved or decloaked, a ship must wait till it's next turn to cloak again.

#### `teleporter`
If the `teleporter` attribute is set on an item then the ship it's equipped to can instantaniously move to any spot on the battlefield instead of normal movement. Also, a ship that has an active teleporter fires first, regardless of initiative.

Blocked by the global tech attribute `block-teleporter` on any tech researched by the system owner when orbitting their system, so long as they have at least 1 missile base.

#### `scan`
Allows ships to scan ships. Automatically equipped to missile bases.

### Civilisation Effect Attributes
Some attributes have effects on the civilisation that unlocks a tech.

#### `ground-combat-shield="<number>"`
The technology with the highest `ground-combat-shield` will be equipped to all soldiers during ground combat.

This value is added to your soldiers' ground attack value during ground combat.

#### `ground-combat-rifle="<number>"`
The technology with the highest `ground-combat-rifle` will be equipped to all soldiers during ground combat.

This value is added to your soldiers' ground attack value during ground combat.

#### `ground-combat-material="<number>"`
The technology with the highest `ground-combat-material` will be equipped to all soldiers during ground combat.

This value is added to your soldiers' ground attack value during ground combat.

#### `ground-combat-armour="<number>"`
The technology with the highest `ground-combat-armour` will be equipped to all soldiers during ground combat.

This value is added to your soldiers' ground attack value during ground combat.

#### `planetary-shield="<number>"`
TODO: confirm order that planetary shields are built in.

Planets will try and build the technology with the highest `planetary-shield` value using their planetary defense spending. The `cost` attribute of this technology will refer to the cost that the planet must pay to develop the shield.

TODO: check whether previous shields reduce the cost of later ones.


#### `max-travel-distance="<number>"`
The value of this attribute defines the maximum distance that ships can travel from their systems on the world map.

#### `max-travel-distance-bonus="<number>"`
Adds this many parsecs onto the distance this ship can travel.

#### `transport-speed="<number>"`
The distance that transports will move each turn on the galaxy map. Transports are stuck with the highest `transport-speed` a player has unlocked before launch. If a transport is launched, and the next turn you unlock a faster `transport-speed`, then the transport will travel with the initial speed.

#### `block-teleporters`
When unlocked, this technology blocks spaceship teleporters over your planets.

#### `ground-combat-teleporter-percent="<number>"`
When unlocked, this technology guarantees that this percentage of transports will land. 

TODO: is this blocked by `block-teleporters`?

#### `ecological-recovery="<number>"`
The number of units of polution your planets clear up per credit of ecological spending.

#### `terraform-level="<number>"`
Planetary spending above the level needed to clean up waste will be spent unlocking the tech with the highest `terraform-level`, gradually increasing the planet's max population to that value above the planet's base max population.

This attribute will only apply if this tech has an associated cost.

#### `improve-environment-from="[<habitat name>]"` 
Only works if `cost` and `improve-environment-to` are included on the same technology.

#### `improve-environment-to="<habitat name>"`
Only works if `cost` and `improve-environment-from` are included on the same technology.

#### `increase-planet-size-percent="<number>"`
Only works if `cost` is included on this technology.

#### `innoculate="<number>"`
Reduces the damage from bio weapons by this value. 

#### `factories-per-pop="<number>"`
The number of factories each planet can support per population.

#### `ship-detection-range-from-colonies="<number>"`
How far from your colonies you detect other ships.

#### `ship-detection-range-from-ships="<number>"`
How far from your ship you detect other ships.

#### `detect-ship-destination`
Displays the destination of detected ships.

#### `detect-ship-ETA`
displays the ETA of detected ships

#### `communicate-with-fleets-in-transit`
Allows communication with fleets in transit.

#### `give-piercing-to-weapon-type="[<weapon type>]"`
Gives piercing to all equipped weapons of given types.

#### `armour-missile-base="<number>"`


#### `factory-cost="<number>"`
Cost of building a new factory on your planets.

#### `factory-polution-mult="<number>"`
The amount of polution per factory on your planets.

# Creating an event
The event system has not yet been designed - it will be possible to link unlocks to colonising different planets, exploring a system or destroying special enemies, but whether other actions (such as scanning a system) will be able to trigger events is not decided yet.