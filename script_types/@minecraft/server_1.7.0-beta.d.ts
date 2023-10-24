import * as _00 from '@minecraft/common';
export enum BlockVolumeIntersection {Contains = 1, Disjoint = 0, Intersects = 2}
export enum CompoundBlockVolumeAction {Add = 0, Subtract = 1}
export enum CompoundBlockVolumePositionRelativity {Absolute = 1, Relative = 0}
export enum Difficulty {Easy = 1, Hard = 3, Normal = 2, Peaceful = 0}
export enum Direction {Down = "Down", East = "East", North = "North", South = "South", Up = "Up", West = "West"}
export enum DisplaySlotId {BelowName = "BelowName", List = "List", Sidebar = "Sidebar"}
export enum DyeColor {Black = "Black", Blue = "Blue", Brown = "Brown", Cyan = "Cyan", Gray = "Gray", Green = "Green", LightBlue = "LightBlue", Lime = "Lime", Magenta = "Magenta", Orange = "Orange", Pink = "Pink", Purple = "Purple", Red = "Red", Silver = "Silver", White = "White", Yellow = "Yellow"}
export enum EasingType {InBack = "InBack", InBounce = "InBounce", InCirc = "InCirc", InCubic = "InCubic", InElastic = "InElastic", InExpo = "InExpo", InOutBack = "InOutBack", InOutBounce = "InOutBounce", InOutCirc = "InOutCirc", InOutCubic = "InOutCubic", InOutElastic = "InOutElastic", InOutExpo = "InOutExpo", InOutQuad = "InOutQuad", InOutQuart = "InOutQuart", InOutQuint = "InOutQuint", InOutSine = "InOutSine", InQuad = "InQuad", InQuart = "InQuart", InQuint = "InQuint", InSine = "InSine", Linear = "Linear", OutBack = "OutBack", OutBounce = "OutBounce", OutCirc = "OutCirc", OutCubic = "OutCubic", OutElastic = "OutElastic", OutExpo = "OutExpo", OutQuad = "OutQuad", OutQuart = "OutQuart", OutQuint = "OutQuint", OutSine = "OutSine", Spring = "Spring"}
export enum EntityDamageCause {anvil = "anvil", blockExplosion = "blockExplosion", campfire = "campfire", charging = "charging", contact = "contact", drowning = "drowning", entityAttack = "entityAttack", entityExplosion = "entityExplosion", fall = "fall", fallingBlock = "fallingBlock", fire = "fire", fireTick = "fireTick", fireworks = "fireworks", flyIntoWall = "flyIntoWall", freezing = "freezing", lava = "lava", lightning = "lightning", magic = "magic", magma = "magma", none = "none", override = "override", piston = "piston", projectile = "projectile", ramAttack = "ramAttack", sonicBoom = "sonicBoom", soulCampfire = "soulCampfire", stalactite = "stalactite", stalagmite = "stalagmite", starve = "starve", suffocation = "suffocation", suicide = "suicide", temperature = "temperature", thorns = "thorns", void = "void", wither = "wither"}
export enum EntityInitializationCause {Born = "Born", Event = "Event", Loaded = "Loaded", Spawned = "Spawned", Transformed = "Transformed"}
export enum EntityLifetimeState {Loaded = "Loaded", Unloaded = "Unloaded"}
export enum EquipmentSlot {Chest = "Chest", Feet = "Feet", Head = "Head", Legs = "Legs", Mainhand = "Mainhand", Offhand = "Offhand"}
export enum FluidType {Lava = "Lava", Potion = "Potion", PowderSnow = "PowderSnow", Water = "Water"}
export enum GameMode {adventure = "adventure", creative = "creative", spectator = "spectator", survival = "survival"}
export enum ItemLockMode {inventory = "inventory", none = "none", slot = "slot"}
export enum MoonPhase {FirstQuarter = 2, FullMoon = 0, LastQuarter = 6, NewMoon = 4, WaningCrescent = 3, WaningGibbous = 1, WaxingCrescent = 5, WaxingGibbous = 7}
export enum ObjectiveSortOrder {Ascending = 0, Descending = 1}
export enum ScoreboardIdentityType {Entity = "Entity", FakePlayer = "FakePlayer", Player = "Player"}
export enum ScriptEventSource {Block = "Block", Entity = "Entity", NPCDialogue = "NPCDialogue", Server = "Server"}
export enum SignSide {Back = "Back", Front = "Front"}
export enum TimeOfDay {Day = 1000, Midnight = 18000, Night = 13000, Noon = 6000, Sunrise = 23000, Sunset = 12000}
export enum WatchdogTerminateReason {Hang = "Hang", StackOverflow = "StackOverflow"}
export enum WeatherType {Clear = "Clear", Rain = "Rain", Thunder = "Thunder"}
export class Block { private constructor(); readonly dimension: Dimension; readonly isAir: number; readonly isLiquid: number; readonly isSolid: number; isWaterlogged: number; readonly location: Vector3; readonly permutation: BlockPermutation; readonly 'type': BlockType; readonly typeId: string; readonly x: number; readonly y: number; readonly z: number; above(steps?: number): Block; below(steps?: number): Block; bottomCenter(): Vector3; canPlace(blockToPlace: BlockPermutation | BlockType | string, faceToPlaceOn?: Direction): number; center(): Vector3; east(steps?: number): Block; getComponent(componentName: string): BlockComponent; getItemStack(amount?: number, withData?: number): ItemStack; getRedstonePower(): number; getTags(): string[]; hasTag(tag: string): number; isValid(): number; north(steps?: number): Block; offset(offset: Vector3): Block; setPermutation(permutation: BlockPermutation): void; setType(blockType: BlockType | string): void; south(steps?: number): Block; trySetPermutation(permutation: BlockPermutation): number; west(steps?: number): Block}
export class BlockAreaSize { constructor(x: number, y: number, z: number); x: number; y: number; z: number; equals(other: BlockAreaSize): number}
//@ts-ignore allow class inheritance for native classes
export class BlockComponent extends Component{ private constructor(); readonly block: Block}
export class BlockEvent { private constructor(); readonly block: Block; readonly dimension: Dimension}
//@ts-ignore allow class inheritance for native classes
export class BlockExplodeAfterEvent extends BlockEvent{ private constructor(); readonly explodedBlockPermutation: BlockPermutation; readonly source?: Entity}
export class BlockExplodeAfterEventSignal { private constructor(); subscribe(callback: (arg0: BlockExplodeAfterEvent)=>void): (arg0: BlockExplodeAfterEvent)=>void; unsubscribe(callback: (arg0: BlockExplodeAfterEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class BlockInventoryComponent extends BlockComponent{ private constructor(); static readonly componentId: "minecraft:inventory"; readonly container?: Container}
//@ts-ignore allow class inheritance for native classes
export class BlockLavaContainerComponent extends BlockLiquidContainerComponent{ private constructor(); static readonly componentId: "minecraft:lavaContainer"}
//@ts-ignore allow class inheritance for native classes
export class BlockLiquidContainerComponent extends BlockComponent{ private constructor(); fillLevel: number; isValidLiquid(): number}
export class BlockLocationIterator { private constructor()}
export class BlockPermutation { private constructor(); static resolve(blockName: string, states?: Record<string,number | number | string>): BlockPermutation; readonly 'type': BlockType; clone(): BlockPermutation; getAllStates(): Record<string,number | number | string>; getItemStack(amount?: number): ItemStack; getState(stateName: string): number | number | string; getTags(): string[]; hasTag(tag: string): number; matches(blockName: string, states?: Record<string,number | number | string>): number; withState(name: string, value: number | number | string): BlockPermutation}
//@ts-ignore allow class inheritance for native classes
export class BlockPistonComponent extends BlockComponent{ private constructor(); static readonly componentId: "minecraft:piston"; readonly isExpanded: number; readonly isExpanding: number; readonly isMoving: number; readonly isRetracted: number; readonly isRetracting: number; getAttachedBlocks(): Vector3[]}
//@ts-ignore allow class inheritance for native classes
export class BlockPotionContainerComponent extends BlockLiquidContainerComponent{ private constructor(); static readonly componentId: "minecraft:potionContainer"; setPotionType(itemStack: ItemStack): void}
//@ts-ignore allow class inheritance for native classes
export class BlockRecordPlayerComponent extends BlockComponent{ private constructor(); static readonly componentId: "minecraft:recordPlayer"; clearRecord(): void; isPlaying(): number; setRecord(recordItemType: ItemType | string): void}
//@ts-ignore allow class inheritance for native classes
export class BlockSignComponent extends BlockComponent{ private constructor(); static readonly componentId: "minecraft:sign"; readonly isWaxed: number; getRawText(side: SignSide): RawText; getText(side: SignSide): string; getTextDyeColor(side: SignSide): DyeColor; setText(message: RawMessage | RawText | string, side: SignSide): void; setTextDyeColor(color?: DyeColor, side?: SignSide): void; setWaxed(): void}
//@ts-ignore allow class inheritance for native classes
export class BlockSnowContainerComponent extends BlockLiquidContainerComponent{ private constructor(); static readonly componentId: "minecraft:snowContainer"}
export class BlockStates { private constructor(); static get(stateName: string): BlockStateType; static getAll(): BlockStateType[]}
export class BlockStateType { private constructor(); readonly id: string; readonly validValues: number | number | string[]}
export class BlockType { private constructor(); readonly canBeWaterlogged: number; readonly id: string}
export class BlockTypes { private constructor(); static get(typeName: string): BlockType; static getAll(): BlockType[]}
export class BlockVolumeUtils { private constructor(); static doesLocationTouchFaces(volume: BlockVolume, pos: Vector3): number; static doesVolumeTouchFaces(volume: BlockVolume, other: BlockVolume): number; static equals(volume: BlockVolume, other: BlockVolume): number; static getBlockLocationIterator(volume: BlockVolume): BlockLocationIterator; static getBoundingBox(volume: BlockVolume): BoundingBox; static getCapacity(volume: BlockVolume): number; static getMax(volume: BlockVolume): Vector3; static getMin(volume: BlockVolume): Vector3; static getSpan(volume: BlockVolume): Vector3; static intersects(volume: BlockVolume, other: BlockVolume): BlockVolumeIntersection; static isInside(volume: BlockVolume, pos: Vector3): number; static translate(volume: BlockVolume, delta: Vector3): BlockVolume}
//@ts-ignore allow class inheritance for native classes
export class BlockWaterContainerComponent extends BlockLiquidContainerComponent{ private constructor(); static readonly componentId: "minecraft:waterContainer"; addDye(itemType: ItemType): void; getCustomColor(): RGBA; setCustomColor(color: RGBA): void}
export class BoundingBoxUtils { private constructor(); static createValid(min: Vector3, max: Vector3): BoundingBox; static dilate(box: BoundingBox, size: Vector3): BoundingBox; static equals(box: BoundingBox, other: BoundingBox): number; static expand(box: BoundingBox, other: BoundingBox): BoundingBox; static getCenter(box: BoundingBox): Vector3; static getIntersection(box: BoundingBox, other: BoundingBox): BoundingBox; static getSpan(box: BoundingBox): Vector3; static intersects(box: BoundingBox, other: BoundingBox): number; static isInside(box: BoundingBox, pos: Vector3): number; static isValid(box: BoundingBox): number; static translate(box: BoundingBox, delta: Vector3): BoundingBox}
//@ts-ignore allow class inheritance for native classes
export class ButtonPushAfterEvent extends BlockEvent{ private constructor(); readonly source: Entity}
//@ts-ignore allow class inheritance for native classes
export class ButtonPushAfterEventSignal extends IButtonPushAfterEventSignal{ private constructor()}
export class Camera { private constructor(); clear(): void; fade(fadeCameraOptions?: CameraFadeOptions): void; setCamera(cameraPreset: string, setOptions?: CameraDefaultOptions | CameraSetFacingOptions | CameraSetLocationOptions | CameraSetPosOptions | CameraSetRotOptions): void}
export class ChatSendAfterEvent { private constructor(); message: string; sender: Player; sendToTargets: number; getTargets(): Player[]}
export class ChatSendAfterEventSignal { private constructor(); subscribe(callback: (arg0: ChatSendAfterEvent)=>void): (arg0: ChatSendAfterEvent)=>void; unsubscribe(callback: (arg0: ChatSendAfterEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class ChatSendBeforeEvent extends ChatSendAfterEvent{ private constructor(); cancel: number; setTargets(players: Player[]): void}
export class ChatSendBeforeEventSignal { private constructor(); subscribe(callback: (arg0: ChatSendBeforeEvent)=>void): (arg0: ChatSendBeforeEvent)=>void; unsubscribe(callback: (arg0: ChatSendBeforeEvent)=>void): void}
export class CommandResult { private constructor(); readonly successCount: number}
export class Component { private constructor(); readonly typeId: string; isValid(): number}
export class CompoundBlockVolume { constructor(origin?: Vector3); readonly capacity: number; readonly volumeCount: number; clear(): void; getBlockLocationIterator(): BlockLocationIterator; getBoundingBox(): BoundingBox; getMax(): Vector3; getMin(): Vector3; getOrigin(): Vector3; isEmpty(): number; isInside(worldLocation: Vector3): number; peekLastVolume(forceRelativity?: CompoundBlockVolumePositionRelativity): CompoundBlockVolumeItem; popVolume(): number; pushVolume(item: CompoundBlockVolumeItem): void; replaceOrAddLastVolume(item: CompoundBlockVolumeItem): number; setOrigin(position: Vector3, preserveExistingVolumes?: number): void; translateOrigin(delta: Vector3, preserveExistingVolumes?: number): void}
export class Container { private constructor(); readonly emptySlotsCount: number; readonly size: number; addItem(itemStack: ItemStack): ItemStack; clearAll(): void; getItem(slot: number): ItemStack; getSlot(slot: number): ContainerSlot; isValid(): number; moveItem(fromSlot: number, toSlot: number, toContainer: Container): void; setItem(slot: number, itemStack?: ItemStack): void; swapItems(slot: number, otherSlot: number, otherContainer: Container): void; transferItem(fromSlot: number, toContainer: Container): ItemStack}
export class ContainerSlot { private constructor(); amount: number; readonly isStackable: number; keepOnDeath: number; lockMode: ItemLockMode; readonly maxAmount: number; nameTag?: string; readonly 'type': ItemType; readonly typeId?: string; getItem(): ItemStack; getLore(): string[]; getTags(): string[]; hasTag(tag: string): number; isStackableWith(itemStack: ItemStack): number; isValid(): number; setCanDestroy(blockIdentifiers?: string[]): void; setCanPlaceOn(blockIdentifiers?: string[]): void; setItem(itemStack?: ItemStack): void; setLore(loreList?: string[]): void}
export class DataDrivenEntityTriggerAfterEvent { private constructor(); readonly entity: Entity; readonly id: string; getModifiers(): DefinitionModifier[]}
export class DataDrivenEntityTriggerAfterEventSignal { private constructor(); subscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent)=>void, options?: EntityDataDrivenTriggerEventOptions): (arg0: DataDrivenEntityTriggerAfterEvent)=>void; unsubscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent)=>void): void}
export class DataDrivenEntityTriggerBeforeEvent { private constructor(); cancel: number; readonly entity: Entity; readonly id: string; getModifiers(): DefinitionModifier[]; setModifiers(modifiers: DefinitionModifier[]): void}
export class DataDrivenEntityTriggerBeforeEventSignal { private constructor(); subscribe(callback: (arg0: DataDrivenEntityTriggerBeforeEvent)=>void, options?: EntityDataDrivenTriggerEventOptions): (arg0: DataDrivenEntityTriggerBeforeEvent)=>void; unsubscribe(callback: (arg0: DataDrivenEntityTriggerBeforeEvent)=>void): void}
export class DefinitionModifier { constructor(); getComponentGroupsToAdd(): string[]; getComponentGroupsToRemove(): string[]; getTriggers(): Trigger[]; setComponentGroupsToAdd(newGroups: string[]): void; setComponentGroupsToRemove(removedGroups: string[]): void; setTriggers(newTriggers: Trigger[]): void}
export class Dimension { private constructor(); readonly heightRange: NumberRange; readonly id: string; createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): void; fillBlocks(begin: Vector3, end: Vector3, block: BlockPermutation | BlockType | string, options?: BlockFillOptions): number; getBlock(location: Vector3): Block; getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit; getEntities(options?: EntityQueryOptions): Entity[]; getEntitiesAtBlockLocation(location: Vector3): Entity[]; getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[]; getPlayers(options?: EntityQueryOptions): Player[]; getWeather(): WeatherType; runCommand(commandString: string): CommandResult; runCommandAsync(commandString: string): Promise<CommandResult>; setWeather(weatherType: WeatherType, duration?: number): void; spawnEntity(identifier: string, location: Vector3): Entity; spawnItem(itemStack: ItemStack, location: Vector3): Entity; spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void}
export class DimensionType { private constructor(); readonly typeId: string}
export class DimensionTypes { private constructor(); static get(dimensionTypeId: string): DimensionType; static getAll(): DimensionType[]}
export class Effect { private constructor(); readonly amplifier: number; readonly displayName: string; readonly duration: number; readonly typeId: string; isValid(): number}
export class EffectAddAfterEvent { private constructor(); effect: Effect; effectState: number; entity: Entity}
export class EffectAddAfterEventSignal { private constructor(); subscribe(callback: (arg0: EffectAddAfterEvent)=>void, options?: EntityEventOptions): (arg0: EffectAddAfterEvent)=>void; unsubscribe(callback: (arg0: EffectAddAfterEvent)=>void): void}
export class EffectType { private constructor(); getName(): string}
export class EffectTypes { private constructor(); static get(identifier: string): EffectType; static getAll(): EffectType[]}
export class Enchantment { constructor(enchantmentType: EnchantmentType | string, level?: number); level: number; readonly 'type': EnchantmentType}
export class EnchantmentList { constructor(enchantmentSlot: number); readonly slot: number; addEnchantment(enchantment: Enchantment): number; canAddEnchantment(enchantment: Enchantment): number; getEnchantment(enchantmentType: EnchantmentType | string): Enchantment; hasEnchantment(enchantmentType: EnchantmentType | string): number; removeEnchantment(enchantmentType: EnchantmentType | string): void}
export class EnchantmentSlot { private constructor(); static readonly all: -1; static readonly armorFeet: 4; static readonly armorHead: 1; static readonly armorLegs: 8; static readonly armorTorso: 2; static readonly axe: 512; static readonly bow: 32; static readonly carrotStick: 8192; static readonly cosmeticHead: 262144; static readonly crossbow: 65536; static readonly elytra: 16384; static readonly fishingRod: 4096; static readonly flintsteel: 256; static readonly gArmor: 15; static readonly gDigging: 3648; static readonly gTool: 131520; static readonly hoe: 64; static readonly none: 0; static readonly pickaxe: 1024; static readonly shears: 128; static readonly shield: 131072; static readonly shovel: 2048; static readonly spear: 32768; static readonly sword: 16}
export class EnchantmentType { private constructor(); readonly id: string; readonly maxLevel: number}
export class EnchantmentTypes { private constructor(); static get(enchantmentId: string): EnchantmentType}
export class Entity { private constructor(); readonly dimension: Dimension; readonly fallDistance: number; readonly id: string; readonly isClimbing: number; readonly isFalling: number; readonly isInWater: number; readonly isOnGround: number; readonly isSleeping: number; isSneaking: number; readonly isSprinting: number; readonly isSwimming: number; readonly lifetimeState: EntityLifetimeState; readonly location: Vector3; nameTag: string; readonly scoreboardIdentity?: ScoreboardIdentity; readonly target: Entity; readonly typeId: string; addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): void; addTag(tag: string): number; applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): number; applyImpulse(vector: Vector3): void; applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void; clearDynamicProperties(): void; clearVelocity(): void; extinguishFire(useEffects?: number): number; getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit; getComponent(componentId: string): EntityComponent; getComponents(): EntityComponent[]; getDynamicProperty(identifier: string): number | number | number | string | Vector3; getDynamicPropertyIds(): string[]; getDynamicPropertyTotalByteCount(): number; getEffect(effectType: EffectType | string): Effect; getEffects(): Effect[]; getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[]; getHeadLocation(): Vector3; getProperty(identifier: string): number | number | string; getRotation(): Vector2; getTags(): string[]; getVelocity(): Vector3; getViewDirection(): Vector3; hasComponent(componentId: string): number; hasTag(tag: string): number; isValid(): number; kill(): number; matches(options: EntityQueryOptions): number; playAnimation(animationName: string, options?: PlayAnimationOptions): void; remove(): void; removeEffect(effectType: EffectType | string): number; removeTag(tag: string): number; resetProperty(identifier: string): number | number | string; runCommand(commandString: string): CommandResult; runCommandAsync(commandString: string): Promise<CommandResult>; setDynamicProperty(identifier: string, value?: number | number | number | string | Vector3): void; setOnFire(seconds: number, useEffects?: number): number; setProperty(identifier: string, value: number | number | string): void; setRotation(rotation: Vector2): void; teleport(location: Vector3, teleportOptions?: TeleportOptions): void; triggerEvent(eventName: string): void; tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): number}
//@ts-ignore allow class inheritance for native classes
export class EntityAddRiderComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:addrider"; readonly entityType: string; readonly spawnEvent: string}
//@ts-ignore allow class inheritance for native classes
export class EntityAgeableComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:ageable"; readonly duration: number; readonly growUp: Trigger; getDropItems(): string[]; getFeedItems(): EntityDefinitionFeedItem[]}
//@ts-ignore allow class inheritance for native classes
export class EntityAttributeComponent extends EntityComponent{ private constructor(); readonly currentValue: number; readonly defaultValue: number; readonly effectiveMax: number; readonly effectiveMin: number; resetToDefaultValue(): void; resetToMaxValue(): void; resetToMinValue(): void; setCurrentValue(value: number): number}
//@ts-ignore allow class inheritance for native classes
export class EntityBaseMovementComponent extends EntityComponent{ private constructor(); readonly maxTurn: number}
//@ts-ignore allow class inheritance for native classes
export class EntityBreathableComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:breathable"; readonly breathesAir: number; readonly breathesLava: number; readonly breathesSolids: number; readonly breathesWater: number; readonly generatesBubbles: number; readonly inhaleTime: number; readonly suffocateTime: number; readonly totalSupply: number; getBreatheBlocks(): BlockPermutation[]; getNonBreatheBlocks(): BlockPermutation[]; setAirSupply(value: number): void}
//@ts-ignore allow class inheritance for native classes
export class EntityCanClimbComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:can_climb"}
//@ts-ignore allow class inheritance for native classes
export class EntityCanFlyComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:can_fly"}
//@ts-ignore allow class inheritance for native classes
export class EntityCanPowerJumpComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:can_power_jump"}
//@ts-ignore allow class inheritance for native classes
export class EntityColorComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:color"; value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityComponent extends Component{ private constructor(); readonly entity: Entity}
export class EntityDefinitionFeedItem { private constructor(); readonly growth: number; readonly item: string}
export class EntityDieAfterEvent { private constructor(); readonly damageSource: EntityDamageSource; readonly deadEntity: Entity}
export class EntityDieAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityDieAfterEvent)=>void, options?: EntityEventOptions): (arg0: EntityDieAfterEvent)=>void; unsubscribe(callback: (arg0: EntityDieAfterEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class EntityEquippableComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:equippable"; getEquipment(equipmentSlot: EquipmentSlot): ItemStack; getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot; setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): number}
//@ts-ignore allow class inheritance for native classes
export class EntityFireImmuneComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:fire_immune"}
//@ts-ignore allow class inheritance for native classes
export class EntityFloatsInLiquidComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:floats_in_liquid"}
//@ts-ignore allow class inheritance for native classes
export class EntityFlyingSpeedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:flying_speed"; value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityFrictionModifierComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:friction_modifier"; value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityGroundOffsetComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:ground_offset"; value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityHealableComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:healable"; readonly filters: FilterGroup; readonly forceUse: number; getFeedItems(): FeedItem[]}
export class EntityHealthChangedAfterEvent { private constructor(); readonly entity: Entity; readonly newValue: number; readonly oldValue: number}
export class EntityHealthChangedAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityHealthChangedAfterEvent)=>void, options?: EntityEventOptions): (arg0: EntityHealthChangedAfterEvent)=>void; unsubscribe(callback: (arg0: EntityHealthChangedAfterEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class EntityHealthComponent extends EntityAttributeComponent{ private constructor(); static readonly componentId: "minecraft:health"}
export class EntityHitBlockAfterEvent { private constructor(); readonly blockFace: Direction; readonly damagingEntity: Entity; readonly hitBlock: Block}
export class EntityHitBlockAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityHitBlockAfterEvent)=>void, options?: EntityEventOptions): (arg0: EntityHitBlockAfterEvent)=>void; unsubscribe(callback: (arg0: EntityHitBlockAfterEvent)=>void): void}
export class EntityHitEntityAfterEvent { private constructor(); readonly damagingEntity: Entity; readonly hitEntity: Entity}
export class EntityHitEntityAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityHitEntityAfterEvent)=>void, options?: EntityEventOptions): (arg0: EntityHitEntityAfterEvent)=>void; unsubscribe(callback: (arg0: EntityHitEntityAfterEvent)=>void): void}
export class EntityHurtAfterEvent { private constructor(); readonly damage: number; readonly damageSource: EntityDamageSource; readonly hurtEntity: Entity}
export class EntityHurtAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityHurtAfterEvent)=>void, options?: EntityEventOptions): (arg0: EntityHurtAfterEvent)=>void; unsubscribe(callback: (arg0: EntityHurtAfterEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class EntityInventoryComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:inventory"; readonly additionalSlotsPerStrength: number; readonly canBeSiphonedFrom: number; readonly container: Container; readonly containerType: string; readonly inventorySize: number; readonly private: number; readonly restrictToOwner: number}
//@ts-ignore allow class inheritance for native classes
export class EntityIsBabyComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_baby"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsChargedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_charged"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsChestedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_chested"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsDyeableComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_dyeable"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_hidden_when_invisible"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsIgnitedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_ignited"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsIllagerCaptainComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_illager_captain"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsSaddledComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_saddled"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsShakingComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_shaking"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsShearedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_sheared"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsStackableComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_stackable"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsStunnedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_stunned"}
//@ts-ignore allow class inheritance for native classes
export class EntityIsTamedComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:is_tamed"}
//@ts-ignore allow class inheritance for native classes
export class EntityItemComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:item"; readonly itemStack: ItemStack}
export class EntityIterator { private constructor()}
//@ts-ignore allow class inheritance for native classes
export class EntityLavaMovementComponent extends EntityAttributeComponent{ private constructor(); static readonly componentId: "minecraft:lava_movement"}
//@ts-ignore allow class inheritance for native classes
export class EntityLeashableComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:leashable"; readonly softDistance: number; leash(leashHolder: Entity): void; unleash(): void}
export class EntityLoadAfterEvent { private constructor(); entity: Entity}
export class EntityLoadAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityLoadAfterEvent)=>void): (arg0: EntityLoadAfterEvent)=>void; unsubscribe(callback: (arg0: EntityLoadAfterEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class EntityMarkVariantComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:mark_variant"; value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityMountTamingComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:tamemount"; setTamed(showParticles: number): void}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.amphibious"}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementBasicComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.basic"}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementComponent extends EntityAttributeComponent{ private constructor(); static readonly componentId: "minecraft:movement"}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementFlyComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.fly"}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementGenericComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.generic"}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementGlideComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.glide"; readonly speedWhenTurning: number; readonly startSpeed: number}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementHoverComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.hover"}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementJumpComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.jump"}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementSkipComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.skip"}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementSwayComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.sway"; readonly swayAmplitude: number; readonly swayFrequency: number}
//@ts-ignore allow class inheritance for native classes
export class EntityNavigationClimbComponent extends EntityNavigationComponent{ private constructor(); static readonly componentId: "minecraft:navigation.climb"}
//@ts-ignore allow class inheritance for native classes
export class EntityNavigationComponent extends EntityComponent{ private constructor(); readonly avoidDamageBlocks: number; readonly avoidPortals: number; readonly avoidSun: number; readonly avoidWater: number; readonly canBreach: number; readonly canBreakDoors: number; readonly canFloat: number; readonly canJump: number; readonly canOpenDoors: number; readonly canOpenIronDoors: number; readonly canPassDoors: number; readonly canPathFromAir: number; readonly canPathOverLava: number; readonly canPathOverWater: number; readonly canSink: number; readonly canSwim: number; readonly canWalk: number; readonly canWalkInLava: number; readonly isAmphibious: number}
//@ts-ignore allow class inheritance for native classes
export class EntityNavigationFloatComponent extends EntityNavigationComponent{ private constructor(); static readonly componentId: "minecraft:navigation.float"}
//@ts-ignore allow class inheritance for native classes
export class EntityNavigationFlyComponent extends EntityNavigationComponent{ private constructor(); static readonly componentId: "minecraft:navigation.fly"}
//@ts-ignore allow class inheritance for native classes
export class EntityNavigationGenericComponent extends EntityNavigationComponent{ private constructor(); static readonly componentId: "minecraft:navigation.generic"}
//@ts-ignore allow class inheritance for native classes
export class EntityNavigationHoverComponent extends EntityNavigationComponent{ private constructor(); static readonly componentId: "minecraft:navigation.hover"}
//@ts-ignore allow class inheritance for native classes
export class EntityNavigationWalkComponent extends EntityNavigationComponent{ private constructor(); static readonly componentId: "minecraft:navigation.walk"}
//@ts-ignore allow class inheritance for native classes
export class EntityOnFireComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:onfire"; readonly onFireTicksRemaining: number}
//@ts-ignore allow class inheritance for native classes
export class EntityPushThroughComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:push_through"; value: number}
export class EntityRemoveAfterEvent { private constructor(); readonly removedEntityId: string; readonly typeId: string}
export class EntityRemoveAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityRemoveAfterEvent)=>void, options?: EntityEventOptions): (arg0: EntityRemoveAfterEvent)=>void; unsubscribe(callback: (arg0: EntityRemoveAfterEvent)=>void): void}
export class EntityRemoveBeforeEvent { private constructor(); readonly removedEntity: Entity}
export class EntityRemoveBeforeEventSignal { private constructor(); subscribe(callback: (arg0: EntityRemoveBeforeEvent)=>void): (arg0: EntityRemoveBeforeEvent)=>void; unsubscribe(callback: (arg0: EntityRemoveBeforeEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class EntityRideableComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:rideable"; readonly controllingSeat: number; readonly crouchingSkipInteract: number; readonly interactText: string; readonly pullInEntities: number; readonly riderCanInteract: number; readonly seatCount: number; addRider(rider: Entity): number; ejectRider(rider: Entity): void; ejectRiders(): void; getFamilyTypes(): string[]; getRiders(): Entity[]; getSeats(): Seat[]}
//@ts-ignore allow class inheritance for native classes
export class EntityRidingComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:riding"; readonly entityRidingOn: Entity}
//@ts-ignore allow class inheritance for native classes
export class EntityScaleComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:scale"; value: number}
//@ts-ignore allow class inheritance for native classes
export class EntitySkinIdComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:skin_id"; value: number}
export class EntitySpawnAfterEvent { private constructor(); readonly cause: EntityInitializationCause; entity: Entity}
export class EntitySpawnAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntitySpawnAfterEvent)=>void): (arg0: EntitySpawnAfterEvent)=>void; unsubscribe(callback: (arg0: EntitySpawnAfterEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class EntityStrengthComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:strength"; readonly max: number; readonly value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityTameableComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:tameable"; readonly probability: number; getTameItems(): string[]; tame(): number}
export class EntityType { private constructor(); readonly id: string}
export class EntityTypeIterator { private constructor()}
export class EntityTypes { private constructor(); static get(identifier: string): EntityType; static getAll(): EntityTypeIterator}
//@ts-ignore allow class inheritance for native classes
export class EntityUnderwaterMovementComponent extends EntityAttributeComponent{ private constructor(); static readonly componentId: "minecraft:underwater_movement"}
//@ts-ignore allow class inheritance for native classes
export class EntityVariantComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:variant"; readonly value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityWantsJockeyComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:wants_jockey"}
export class ExplosionAfterEvent { private constructor(); readonly dimension: Dimension; readonly source?: Entity; getImpactedBlocks(): Block[]}
export class ExplosionAfterEventSignal { private constructor(); subscribe(callback: (arg0: ExplosionAfterEvent)=>void): (arg0: ExplosionAfterEvent)=>void; unsubscribe(callback: (arg0: ExplosionAfterEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class ExplosionBeforeEvent extends ExplosionAfterEvent{ private constructor(); cancel: number; setImpactedBlocks(blocks: Block[]): void}
export class ExplosionBeforeEventSignal { private constructor(); subscribe(callback: (arg0: ExplosionBeforeEvent)=>void): (arg0: ExplosionBeforeEvent)=>void; unsubscribe(callback: (arg0: ExplosionBeforeEvent)=>void): void}
export class FeedItem { private constructor(); readonly healAmount: number; readonly item: string; getEffects(): FeedItemEffect[]}
export class FeedItemEffect { private constructor(); readonly amplifier: number; readonly chance: number; readonly duration: number; readonly name: string}
export class FilterGroup { private constructor()}
export class FluidContainer { private constructor(); static readonly maxFillLevel: 6; static readonly minFillLevel: 0}
export class IButtonPushAfterEventSignal { private constructor(); subscribe(callback: (arg0: ButtonPushAfterEvent)=>void): (arg0: ButtonPushAfterEvent)=>void; unsubscribe(callback: (arg0: ButtonPushAfterEvent)=>void): void}
export class ILeverActionAfterEventSignal { private constructor(); subscribe(callback: (arg0: LeverActionAfterEvent)=>void): (arg0: LeverActionAfterEvent)=>void; unsubscribe(callback: (arg0: LeverActionAfterEvent)=>void): void}
export class IPlayerJoinAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerJoinAfterEvent)=>void): (arg0: PlayerJoinAfterEvent)=>void; unsubscribe(callback: (arg0: PlayerJoinAfterEvent)=>void): void}
export class IPlayerLeaveAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerLeaveAfterEvent)=>void): (arg0: PlayerLeaveAfterEvent)=>void; unsubscribe(callback: (arg0: PlayerLeaveAfterEvent)=>void): void}
export class IPlayerSpawnAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerSpawnAfterEvent)=>void): (arg0: PlayerSpawnAfterEvent)=>void; unsubscribe(callback: (arg0: PlayerSpawnAfterEvent)=>void): void}
export class ItemCompleteUseAfterEvent { private constructor(); readonly itemStack: ItemStack; readonly source: Player; readonly useDuration: number}
export class ItemCompleteUseAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemCompleteUseAfterEvent)=>void): (arg0: ItemCompleteUseAfterEvent)=>void; unsubscribe(callback: (arg0: ItemCompleteUseAfterEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class ItemComponent extends Component{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class ItemCooldownComponent extends ItemComponent{ private constructor(); static readonly componentId: "minecraft:cooldown"; readonly cooldownCategory: string; readonly cooldownTicks: number; startCooldown(player: Player): void}
export class ItemDefinitionAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemDefinitionTriggeredAfterEvent)=>void): (arg0: ItemDefinitionTriggeredAfterEvent)=>void; unsubscribe(callback: (arg0: ItemDefinitionTriggeredAfterEvent)=>void): void}
export class ItemDefinitionBeforeEventSignal { private constructor(); subscribe(callback: (arg0: ItemDefinitionTriggeredBeforeEvent)=>void): (arg0: ItemDefinitionTriggeredBeforeEvent)=>void; unsubscribe(callback: (arg0: ItemDefinitionTriggeredBeforeEvent)=>void): void}
export class ItemDefinitionTriggeredAfterEvent { private constructor(); readonly eventName: string; itemStack: ItemStack; readonly source?: Player}
//@ts-ignore allow class inheritance for native classes
export class ItemDefinitionTriggeredBeforeEvent extends ItemDefinitionTriggeredAfterEvent{ private constructor(); cancel: number}
//@ts-ignore allow class inheritance for native classes
export class ItemDurabilityComponent extends ItemComponent{ private constructor(); static readonly componentId: "minecraft:durability"; damage: number; readonly maxDurability: number; getDamageChance(unbreaking: number): number; getDamageRange(): NumberRange}
//@ts-ignore allow class inheritance for native classes
export class ItemEnchantsComponent extends ItemComponent{ private constructor(); static readonly componentId: "minecraft:enchantments"; enchantments: EnchantmentList; removeAllEnchantments(): void}
//@ts-ignore allow class inheritance for native classes
export class ItemFoodComponent extends ItemComponent{ private constructor(); static readonly componentId: "minecraft:food"; readonly canAlwaysEat: number; readonly nutrition: number; readonly saturationModifier: number; readonly usingConvertsTo: string}
export class ItemReleaseUseAfterEvent { private constructor(); readonly itemStack: ItemStack; readonly source: Player; readonly useDuration: number}
export class ItemReleaseUseAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemReleaseUseAfterEvent)=>void): (arg0: ItemReleaseUseAfterEvent)=>void; unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent)=>void): void}
export class ItemStack { constructor(itemType: ItemType | string, amount?: number); amount: number; readonly isStackable: number; keepOnDeath: number; lockMode: ItemLockMode; readonly maxAmount: number; nameTag?: string; readonly 'type': ItemType; readonly typeId: string; clone(): ItemStack; getCanDestroy(): string[]; getCanPlaceOn(): string[]; getComponent(componentId: string): ItemComponent; getComponents(): ItemComponent[]; getLore(): string[]; getTags(): string[]; hasComponent(componentId: string): number; hasTag(tag: string): number; isStackableWith(itemStack: ItemStack): number; setCanDestroy(blockIdentifiers?: string[]): void; setCanPlaceOn(blockIdentifiers?: string[]): void; setLore(loreList?: string[]): void; triggerEvent(eventName: string): void}
export class ItemStartUseAfterEvent { private constructor(); readonly itemStack: ItemStack; readonly source: Player; readonly useDuration: number}
export class ItemStartUseAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemStartUseAfterEvent)=>void): (arg0: ItemStartUseAfterEvent)=>void; unsubscribe(callback: (arg0: ItemStartUseAfterEvent)=>void): void}
export class ItemStartUseOnAfterEvent { private constructor(); readonly block: Block; readonly blockFace: Direction; readonly itemStack: ItemStack; readonly source: Player}
export class ItemStartUseOnAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemStartUseOnAfterEvent)=>void): (arg0: ItemStartUseOnAfterEvent)=>void; unsubscribe(callback: (arg0: ItemStartUseOnAfterEvent)=>void): void}
export class ItemStopUseAfterEvent { private constructor(); readonly itemStack: ItemStack; readonly source: Player; readonly useDuration: number}
export class ItemStopUseAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemStopUseAfterEvent)=>void): (arg0: ItemStopUseAfterEvent)=>void; unsubscribe(callback: (arg0: ItemStopUseAfterEvent)=>void): void}
export class ItemStopUseOnAfterEvent { private constructor(); readonly block: Block; readonly itemStack?: ItemStack; readonly source: Player}
export class ItemStopUseOnAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemStopUseOnAfterEvent)=>void): (arg0: ItemStopUseOnAfterEvent)=>void; unsubscribe(callback: (arg0: ItemStopUseOnAfterEvent)=>void): void}
export class ItemType { private constructor(); readonly id: string}
export class ItemTypes { private constructor(); static get(itemId: string): ItemType; static getAll(): ItemType[]}
export class ItemUseAfterEvent { private constructor(); itemStack: ItemStack; readonly source: Player}
export class ItemUseAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemUseAfterEvent)=>void): (arg0: ItemUseAfterEvent)=>void; unsubscribe(callback: (arg0: ItemUseAfterEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class ItemUseBeforeEvent extends ItemUseAfterEvent{ private constructor(); cancel: number}
export class ItemUseBeforeEventSignal { private constructor(); subscribe(callback: (arg0: ItemUseBeforeEvent)=>void): (arg0: ItemUseBeforeEvent)=>void; unsubscribe(callback: (arg0: ItemUseBeforeEvent)=>void): void}
export class ItemUseOnAfterEvent { private constructor(); readonly block: Block; readonly blockFace: Direction; readonly faceLocation: Vector3; readonly itemStack: ItemStack; readonly source: Player}
export class ItemUseOnAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemUseOnAfterEvent)=>void): (arg0: ItemUseOnAfterEvent)=>void; unsubscribe(callback: (arg0: ItemUseOnAfterEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class ItemUseOnBeforeEvent extends ItemUseOnAfterEvent{ private constructor(); cancel: number}
export class ItemUseOnBeforeEventSignal { private constructor(); subscribe(callback: (arg0: ItemUseOnBeforeEvent)=>void): (arg0: ItemUseOnBeforeEvent)=>void; unsubscribe(callback: (arg0: ItemUseOnBeforeEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class LeverActionAfterEvent extends BlockEvent{ private constructor(); readonly isPowered: number; readonly player: Player}
//@ts-ignore allow class inheritance for native classes
export class LeverActionAfterEventSignal extends ILeverActionAfterEventSignal{ private constructor()}
export class MessageReceiveAfterEvent { private constructor(); readonly id: string; readonly message: string; readonly player: Player}
export class MinecraftDimensionTypes { private constructor(); static readonly nether: "minecraft:nether"; static readonly overworld: "minecraft:overworld"; static readonly theEnd: "minecraft:the_end"}
export class MolangVariableMap { constructor(); setColorRGB(variableName: string, color: RGB): void; setColorRGBA(variableName: string, color: RGBA): void; setFloat(variableName: string, number: number): void; setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void; setVector3(variableName: string, vector: Vector3): void}
export class NavigationResult { private constructor(); readonly isFullPath: number; getPath(): Vector3[]}
//@ts-ignore allow class inheritance for native classes
export class PistonActivateAfterEvent extends BlockEvent{ private constructor(); readonly isExpanding: number; readonly piston: BlockPistonComponent}
export class PistonActivateAfterEventSignal { private constructor(); subscribe(callback: (arg0: PistonActivateAfterEvent)=>void): (arg0: PistonActivateAfterEvent)=>void; unsubscribe(callback: (arg0: PistonActivateAfterEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class PistonActivateBeforeEvent extends BlockEvent{ private constructor(); cancel: number; readonly isExpanding: number; readonly piston: BlockPistonComponent}
export class PistonActivateBeforeEventSignal { private constructor(); subscribe(callback: (arg0: PistonActivateBeforeEvent)=>void): (arg0: PistonActivateBeforeEvent)=>void; unsubscribe(callback: (arg0: PistonActivateBeforeEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class Player extends Entity{ private constructor(); readonly camera: Camera; readonly isEmoting: number; readonly isFlying: number; readonly isGliding: number; readonly isJumping: number; readonly level: number; readonly name: string; readonly onScreenDisplay: ScreenDisplay; selectedSlot: number; readonly totalXpNeededForNextLevel: number; readonly xpEarnedAtCurrentLevel: number; addExperience(amount: number): number; addLevels(amount: number): number; getItemCooldown(itemCategory: string): number; getSpawnPoint(): DimensionLocation; getTotalXp(): number; isOp(): number; playMusic(trackId: string, musicOptions?: MusicOptions): void; playSound(soundId: string, soundOptions?: PlayerSoundOptions): void; postClientMessage(id: string, value: string): void; queueMusic(trackId: string, musicOptions?: MusicOptions): void; resetLevel(): void; sendMessage(message: RawMessage | string[] | RawMessage | string): void; setOp(isOp: number): void; setSpawnPoint(spawnPoint?: DimensionLocation): void; startItemCooldown(itemCategory: string, tickDuration: number): void; stopMusic(): void}
//@ts-ignore allow class inheritance for native classes
export class PlayerBreakBlockAfterEvent extends BlockEvent{ private constructor(); readonly brokenBlockPermutation: BlockPermutation; readonly itemStackAfterBreak?: ItemStack; readonly itemStackBeforeBreak?: ItemStack; readonly player: Player}
export class PlayerBreakBlockAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerBreakBlockAfterEvent)=>void, options?: BlockEventOptions): (arg0: PlayerBreakBlockAfterEvent)=>void; unsubscribe(callback: (arg0: PlayerBreakBlockAfterEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class PlayerBreakBlockBeforeEvent extends BlockEvent{ private constructor(); cancel: number; itemStack?: ItemStack; readonly player: Player}
export class PlayerBreakBlockBeforeEventSignal { private constructor(); subscribe(callback: (arg0: PlayerBreakBlockBeforeEvent)=>void, options?: BlockEventOptions): (arg0: PlayerBreakBlockBeforeEvent)=>void; unsubscribe(callback: (arg0: PlayerBreakBlockBeforeEvent)=>void): void}
export class PlayerDimensionChangeAfterEvent { private constructor(); readonly fromDimension: Dimension; readonly fromLocation: Vector3; readonly player: Player; readonly toDimension: Dimension; readonly toLocation: Vector3}
export class PlayerDimensionChangeAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerDimensionChangeAfterEvent)=>void): (arg0: PlayerDimensionChangeAfterEvent)=>void; unsubscribe(callback: (arg0: PlayerDimensionChangeAfterEvent)=>void): void}
export class PlayerInteractWithBlockAfterEvent { private constructor(); readonly block: Block; readonly blockFace: Direction; readonly faceLocation: Vector3; readonly itemStack?: ItemStack; readonly player: Player}
export class PlayerInteractWithBlockAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent)=>void): (arg0: PlayerInteractWithBlockAfterEvent)=>void; unsubscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent)=>void): void}
export class PlayerInteractWithBlockBeforeEvent { private constructor(); readonly block: Block; readonly blockFace: Direction; cancel: number; readonly faceLocation: Vector3; readonly itemStack?: ItemStack; readonly player: Player}
export class PlayerInteractWithBlockBeforeEventSignal { private constructor(); subscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent)=>void): (arg0: PlayerInteractWithBlockBeforeEvent)=>void; unsubscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent)=>void): void}
export class PlayerInteractWithEntityAfterEvent { private constructor(); readonly itemStack?: ItemStack; readonly player: Player; readonly target: Entity}
export class PlayerInteractWithEntityAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent)=>void): (arg0: PlayerInteractWithEntityAfterEvent)=>void; unsubscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent)=>void): void}
export class PlayerInteractWithEntityBeforeEvent { private constructor(); cancel: number; readonly itemStack?: ItemStack; readonly player: Player; readonly target: Entity}
export class PlayerInteractWithEntityBeforeEventSignal { private constructor(); subscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent)=>void): (arg0: PlayerInteractWithEntityBeforeEvent)=>void; unsubscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent)=>void): void}
export class PlayerIterator { private constructor()}
export class PlayerJoinAfterEvent { private constructor(); readonly playerId: string; readonly playerName: string}
//@ts-ignore allow class inheritance for native classes
export class PlayerJoinAfterEventSignal extends IPlayerJoinAfterEventSignal{ private constructor()}
export class PlayerLeaveAfterEvent { private constructor(); readonly playerId: string; readonly playerName: string}
//@ts-ignore allow class inheritance for native classes
export class PlayerLeaveAfterEventSignal extends IPlayerLeaveAfterEventSignal{ private constructor()}
export class PlayerLeaveBeforeEvent { private constructor(); readonly player: Player}
export class PlayerLeaveBeforeEventSignal { private constructor(); subscribe(callback: (arg0: PlayerLeaveBeforeEvent)=>void): (arg0: PlayerLeaveBeforeEvent)=>void; unsubscribe(callback: (arg0: PlayerLeaveBeforeEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class PlayerPlaceBlockAfterEvent extends BlockEvent{ private constructor(); readonly player: Player}
export class PlayerPlaceBlockAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerPlaceBlockAfterEvent)=>void, options?: BlockEventOptions): (arg0: PlayerPlaceBlockAfterEvent)=>void; unsubscribe(callback: (arg0: PlayerPlaceBlockAfterEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class PlayerPlaceBlockBeforeEvent extends BlockEvent{ private constructor(); cancel: number; readonly face: Direction; readonly faceLocation: Vector3; itemStack: ItemStack; readonly player: Player}
export class PlayerPlaceBlockBeforeEventSignal { private constructor(); subscribe(callback: (arg0: PlayerPlaceBlockBeforeEvent)=>void, options?: BlockEventOptions): (arg0: PlayerPlaceBlockBeforeEvent)=>void; unsubscribe(callback: (arg0: PlayerPlaceBlockBeforeEvent)=>void): void}
export class PlayerSpawnAfterEvent { private constructor(); initialSpawn: number; player: Player}
//@ts-ignore allow class inheritance for native classes
export class PlayerSpawnAfterEventSignal extends IPlayerSpawnAfterEventSignal{ private constructor()}
//@ts-ignore allow class inheritance for native classes
export class PressurePlatePopAfterEvent extends BlockEvent{ private constructor(); readonly previousRedstonePower: number; readonly redstonePower: number}
export class PressurePlatePopAfterEventSignal { private constructor(); subscribe(callback: (arg0: PressurePlatePopAfterEvent)=>void): (arg0: PressurePlatePopAfterEvent)=>void; unsubscribe(callback: (arg0: PressurePlatePopAfterEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class PressurePlatePushAfterEvent extends BlockEvent{ private constructor(); readonly previousRedstonePower: number; readonly redstonePower: number; readonly source: Entity}
export class PressurePlatePushAfterEventSignal { private constructor(); subscribe(callback: (arg0: PressurePlatePushAfterEvent)=>void): (arg0: PressurePlatePushAfterEvent)=>void; unsubscribe(callback: (arg0: PressurePlatePushAfterEvent)=>void): void}
export class ProjectileHitBlockAfterEvent { private constructor(); readonly dimension: Dimension; readonly hitVector: Vector3; readonly location: Vector3; readonly projectile: Entity; readonly source?: Entity; getBlockHit(): BlockHitInformation}
export class ProjectileHitBlockAfterEventSignal { private constructor(); subscribe(callback: (arg0: ProjectileHitBlockAfterEvent)=>void): (arg0: ProjectileHitBlockAfterEvent)=>void; unsubscribe(callback: (arg0: ProjectileHitBlockAfterEvent)=>void): void}
export class ProjectileHitEntityAfterEvent { private constructor(); readonly dimension: Dimension; readonly hitVector: Vector3; readonly location: Vector3; readonly projectile: Entity; readonly source?: Entity; getEntityHit(): EntityHitInformation}
export class ProjectileHitEntityAfterEventSignal { private constructor(); subscribe(callback: (arg0: ProjectileHitEntityAfterEvent)=>void): (arg0: ProjectileHitEntityAfterEvent)=>void; unsubscribe(callback: (arg0: ProjectileHitEntityAfterEvent)=>void): void}
export class Scoreboard { private constructor(); addObjective(objectiveId: string, displayName: string): ScoreboardObjective; clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective; getObjective(objectiveId: string): ScoreboardObjective; getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions; getObjectives(): ScoreboardObjective[]; getParticipants(): ScoreboardIdentity[]; removeObjective(objectiveId: ScoreboardObjective | string): number; setObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId, objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions): ScoreboardObjective}
export class ScoreboardIdentity { private constructor(); readonly displayName: string; readonly id: number; readonly 'type': ScoreboardIdentityType; getEntity(): Entity; isValid(): number}
export class ScoreboardObjective { private constructor(); readonly displayName: string; readonly id: string; addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number; getParticipants(): ScoreboardIdentity[]; getScore(participant: Entity | ScoreboardIdentity | string): number; getScores(): ScoreboardScoreInfo[]; hasParticipant(participant: Entity | ScoreboardIdentity | string): number; isValid(): number; removeParticipant(participant: Entity | ScoreboardIdentity | string): number; setScore(participant: Entity | ScoreboardIdentity | string, score: number): void}
export class ScoreboardScoreInfo { private constructor(); readonly participant: ScoreboardIdentity; readonly score: number}
export class ScreenDisplay { private constructor(); isValid(): number; setActionBar(text: RawMessage | string[] | RawMessage | string): void; setTitle(title: RawMessage | string[] | RawMessage | string, options?: TitleDisplayOptions): void; updateSubtitle(subtitle: RawMessage | string[] | RawMessage | string): void}
export class ScriptEventCommandMessageAfterEvent { private constructor(); readonly id: string; readonly initiator?: Entity; readonly message: string; readonly sourceBlock?: Block; readonly sourceEntity?: Entity; readonly sourceType: ScriptEventSource}
export class ScriptEventCommandMessageAfterEventSignal { private constructor(); subscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent)=>void, options?: ScriptEventMessageFilterOptions): (arg0: ScriptEventCommandMessageAfterEvent)=>void; unsubscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent)=>void): void}
export class Seat { private constructor(); readonly lockRiderRotation: number; readonly maxRiderCount: number; readonly minRiderCount: number; readonly position: Vector3}
export class ServerMessageAfterEventSignal { private constructor(); subscribe(callback: (arg0: MessageReceiveAfterEvent)=>void): (arg0: MessageReceiveAfterEvent)=>void; unsubscribe(callback: (arg0: MessageReceiveAfterEvent)=>void): void}
export class System { private constructor(); readonly afterEvents: SystemAfterEvents; readonly beforeEvents: SystemBeforeEvents; readonly currentTick: number; clearRun(runId: number): void; run(callback: ()=>void): number; runInterval(callback: ()=>void, tickInterval?: number): number; runTimeout(callback: ()=>void, tickDelay?: number): number}
export class SystemAfterEvents { private constructor(); readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal}
export class SystemBeforeEvents { private constructor(); readonly watchdogTerminate: WatchdogTerminateBeforeEventSignal}
//@ts-ignore allow class inheritance for native classes
export class TargetBlockHitAfterEvent extends BlockEvent{ private constructor(); readonly hitVector: Vector3; readonly previousRedstonePower: number; readonly redstonePower: number; readonly source: Entity}
export class TargetBlockHitAfterEventSignal { private constructor(); subscribe(callback: (arg0: TargetBlockHitAfterEvent)=>void): (arg0: TargetBlockHitAfterEvent)=>void; unsubscribe(callback: (arg0: TargetBlockHitAfterEvent)=>void): void}
export class Trigger { constructor(eventName: string); eventName: string}
//@ts-ignore allow class inheritance for native classes
export class TripWireTripAfterEvent extends BlockEvent{ private constructor(); readonly isPowered: number; readonly sources: Entity[]}
export class TripWireTripAfterEventSignal { private constructor(); subscribe(callback: (arg0: TripWireTripAfterEvent)=>void): (arg0: TripWireTripAfterEvent)=>void; unsubscribe(callback: (arg0: TripWireTripAfterEvent)=>void): void}
export class Vector { constructor(x: number, y: number, z: number); static readonly back: void; static readonly down: void; static readonly forward: void; static readonly left: void; static readonly one: void; static readonly right: void; static readonly up: void; static readonly zero: void; static add(a: Vector3, b: Vector3): Vector; static cross(a: Vector3, b: Vector3): Vector; static distance(a: Vector3, b: Vector3): number; static divide(a: Vector3, b: number | Vector3): Vector; static lerp(a: Vector3, b: Vector3, t: number): Vector; static max(a: Vector3, b: Vector3): Vector; static min(a: Vector3, b: Vector3): Vector; static multiply(a: Vector3, b: number | Vector3): Vector; static slerp(a: Vector3, b: Vector3, s: number): Vector; static subtract(a: Vector3, b: Vector3): Vector; x: number; y: number; z: number; equals(other: Vector): number; length(): number; lengthSquared(): number; normalized(): Vector}
export class WatchdogTerminateBeforeEvent { private constructor(); cancel: number; readonly terminateReason: WatchdogTerminateReason}
export class WatchdogTerminateBeforeEventSignal { private constructor(); subscribe(callback: (arg0: WatchdogTerminateBeforeEvent)=>void): (arg0: WatchdogTerminateBeforeEvent)=>void; unsubscribe(callback: (arg0: WatchdogTerminateBeforeEvent)=>void): void}
export class WeatherChangeAfterEvent { private constructor(); readonly dimension: string; readonly lightning: number; readonly raining: number}
export class WeatherChangeAfterEventSignal { private constructor(); subscribe(callback: (arg0: WeatherChangeAfterEvent)=>void): (arg0: WeatherChangeAfterEvent)=>void; unsubscribe(callback: (arg0: WeatherChangeAfterEvent)=>void): void}
export class World { private constructor(); readonly afterEvents: WorldAfterEvents; readonly beforeEvents: WorldBeforeEvents; readonly scoreboard: Scoreboard; broadcastClientMessage(id: string, value: string): void; clearDynamicProperties(): void; getAbsoluteTime(): number; getAllPlayers(): Player[]; getDay(): number; getDefaultSpawnLocation(): Vector3; getDimension(dimensionId: string): Dimension; getDynamicProperty(identifier: string): number | number | number | string | Vector3; getDynamicPropertyIds(): string[]; getDynamicPropertyTotalByteCount(): number; getEntity(id: string): Entity; getMoonPhase(): MoonPhase; getPlayers(options?: EntityQueryOptions): Player[]; getTimeOfDay(): number; playMusic(trackId: string, musicOptions?: MusicOptions): void; playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void; queueMusic(trackId: string, musicOptions?: MusicOptions): void; sendMessage(message: RawMessage | string[] | RawMessage | string): void; setAbsoluteTime(absoluteTime: number): void; setDefaultSpawnLocation(spawnLocation: Vector3): void; setDynamicProperty(identifier: string, value?: number | number | number | string | Vector3): void; setTimeOfDay(timeOfDay: number | TimeOfDay): void; stopMusic(): void}
export class WorldAfterEvents { private constructor(); readonly blockExplode: BlockExplodeAfterEventSignal; readonly buttonPush: ButtonPushAfterEventSignal; readonly chatSend: ChatSendAfterEventSignal; readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerAfterEventSignal; readonly effectAdd: EffectAddAfterEventSignal; readonly entityDie: EntityDieAfterEventSignal; readonly entityHealthChanged: EntityHealthChangedAfterEventSignal; readonly entityHitBlock: EntityHitBlockAfterEventSignal; readonly entityHitEntity: EntityHitEntityAfterEventSignal; readonly entityHurt: EntityHurtAfterEventSignal; readonly entityLoad: EntityLoadAfterEventSignal; readonly entityRemove: EntityRemoveAfterEventSignal; readonly entitySpawn: EntitySpawnAfterEventSignal; readonly explosion: ExplosionAfterEventSignal; readonly itemCompleteUse: ItemCompleteUseAfterEventSignal; readonly itemDefinitionEvent: ItemDefinitionAfterEventSignal; readonly itemReleaseUse: ItemReleaseUseAfterEventSignal; readonly itemStartUse: ItemStartUseAfterEventSignal; readonly itemStartUseOn: ItemStartUseOnAfterEventSignal; readonly itemStopUse: ItemStopUseAfterEventSignal; readonly itemStopUseOn: ItemStopUseOnAfterEventSignal; readonly itemUse: ItemUseAfterEventSignal; readonly itemUseOn: ItemUseOnAfterEventSignal; readonly leverAction: LeverActionAfterEventSignal; readonly messageReceive: ServerMessageAfterEventSignal; readonly pistonActivate: PistonActivateAfterEventSignal; readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal; readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal; readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal; readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal; readonly playerJoin: PlayerJoinAfterEventSignal; readonly playerLeave: PlayerLeaveAfterEventSignal; readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal; readonly playerSpawn: PlayerSpawnAfterEventSignal; readonly pressurePlatePop: PressurePlatePopAfterEventSignal; readonly pressurePlatePush: PressurePlatePushAfterEventSignal; readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal; readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal; readonly targetBlockHit: TargetBlockHitAfterEventSignal; readonly tripWireTrip: TripWireTripAfterEventSignal; readonly weatherChange: WeatherChangeAfterEventSignal; readonly worldInitialize: WorldInitializeAfterEventSignal}
export class WorldBeforeEvents { private constructor(); readonly chatSend: ChatSendBeforeEventSignal; readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerBeforeEventSignal; readonly entityRemove: EntityRemoveBeforeEventSignal; readonly explosion: ExplosionBeforeEventSignal; readonly itemDefinitionEvent: ItemDefinitionBeforeEventSignal; readonly itemUse: ItemUseBeforeEventSignal; readonly itemUseOn: ItemUseOnBeforeEventSignal; readonly pistonActivate: PistonActivateBeforeEventSignal; readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal; readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal; readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal; readonly playerLeave: PlayerLeaveBeforeEventSignal; readonly playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal}
export class WorldInitializeAfterEvent { private constructor()}
export class WorldInitializeAfterEventSignal { private constructor(); subscribe(callback: (arg0: WorldInitializeAfterEvent)=>void): (arg0: WorldInitializeAfterEvent)=>void; unsubscribe(callback: (arg0: WorldInitializeAfterEvent)=>void): void}
export interface BlockEventOptions {blockTypes?: string[], permutations?: BlockPermutation[]}
export interface BlockFillOptions {matchingBlock?: BlockPermutation}
export interface BlockHitInformation {block: Block, face: Direction, faceLocation: Vector3}
export interface BlockRaycastHit {block: Block, face: Direction, faceLocation: Vector3}
export interface BlockRaycastOptions {includeLiquidBlocks?: number, includePassableBlocks?: number, maxDistance?: number}
export interface BlockVolume {from: Vector3, to: Vector3}
export interface BoundingBox {max: Vector3, min: Vector3}
export interface CameraDefaultOptions {easeOptions: CameraEaseOptions}
export interface CameraEaseOptions {easeTime?: number, easeType?: EasingType}
export interface CameraFadeOptions {fadeColor?: RGB, fadeTime?: CameraFadeTimeOptions}
export interface CameraFadeTimeOptions {fadeInTime: number, fadeOutTime: number, holdTime: number}
export interface CameraSetFacingOptions {easeOptions?: CameraEaseOptions, facingEntity: Entity, location?: Vector3}
export interface CameraSetLocationOptions {easeOptions?: CameraEaseOptions, location: Vector3}
export interface CameraSetPosOptions {easeOptions?: CameraEaseOptions, facingLocation: Vector3, location?: Vector3}
export interface CameraSetRotOptions {easeOptions?: CameraEaseOptions, location?: Vector3, rotation: Vector2}
export interface CompoundBlockVolumeItem {action?: CompoundBlockVolumeAction, locationRelativity?: CompoundBlockVolumePositionRelativity, volume: BlockVolume}
export interface DimensionLocation {dimension: Dimension, x: number, y: number, z: number}
export interface EntityApplyDamageByProjectileOptions {damagingEntity?: Entity, damagingProjectile: Entity}
export interface EntityApplyDamageOptions {cause: EntityDamageCause, damagingEntity?: Entity}
export interface EntityDamageSource {cause: EntityDamageCause, damagingEntity?: Entity, damagingProjectile?: Entity}
export interface EntityDataDrivenTriggerEventOptions {entities?: Entity[], entityTypes?: string[], eventTypes?: string[]}
export interface EntityEffectOptions {amplifier?: number, showParticles?: number}
export interface EntityEventOptions {entities?: Entity[], entityTypes?: string[]}
export interface EntityHitInformation {entity: Entity}
export interface EntityQueryOptions {closest?: number, excludeFamilies?: string[], excludeGameModes?: GameMode[], excludeNames?: string[], excludeTags?: string[], excludeTypes?: string[], families?: string[], farthest?: number, gameMode?: GameMode, location?: Vector3, maxDistance?: number, maxHorizontalRotation?: number, maxLevel?: number, maxVerticalRotation?: number, minDistance?: number, minHorizontalRotation?: number, minLevel?: number, minVerticalRotation?: number, name?: string, scoreOptions?: EntityQueryScoreOptions[], tags?: string[], 'type'?: string, volume?: BlockAreaSize}
export interface EntityQueryScoreOptions {exclude?: number, maxScore?: number, minScore?: number, objective?: string}
export interface EntityRaycastHit {distance: number, entity: Entity}
export interface EntityRaycastOptions {maxDistance?: number}
export interface ExplosionOptions {allowUnderwater?: number, breaksBlocks?: number, causesFire?: number, source?: Entity}
export interface MusicOptions {fade?: number, loop?: number, volume?: number}
export interface NumberRange {max: number, min: number}
export interface PlayAnimationOptions {blendOutTime?: number, controller?: string, nextState?: string, stopExpression?: string}
export interface PlayerSoundOptions {location?: Vector3, pitch?: number, volume?: number}
export interface RawMessage {rawtext?: RawMessage[], score?: RawMessageScore, text?: string, translate?: string, with?: string[] | RawMessage}
export interface RawMessageScore {name?: string, objective?: string}
export interface RawText {rawtext?: RawMessage[]}
export interface RGB {blue: number, green: number, red: number}
export interface RGBA {alpha: number, blue: number, green: number, red: number}
export interface ScoreboardObjectiveDisplayOptions {objective: ScoreboardObjective, sortOrder?: ObjectiveSortOrder}
export interface ScriptEventMessageFilterOptions {namespaces: string[]}
export interface TeleportOptions {checkForBlocks?: number, dimension?: Dimension, facingLocation?: Vector3, keepVelocity?: number, rotation?: Vector2}
export interface TitleDisplayOptions {fadeInDuration: number, fadeOutDuration: number, stayDuration: number, subtitle?: RawMessage | string[] | RawMessage | string}
export interface Vector2 {x: number, y: number}
export interface Vector3 {x: number, y: number, z: number}
export interface WorldSoundOptions {pitch?: number, volume?: number}
export class CommandError extends Error { private constructor() }
export class LocationInUnloadedChunkError extends Error { private constructor() }
export class LocationOutOfWorldBoundariesError extends Error { private constructor() }
export const MoonPhaseCount = 8;
export const TicksPerDay = 24000;
export const TicksPerSecond = 20;
export const system: System;
export const world: World;