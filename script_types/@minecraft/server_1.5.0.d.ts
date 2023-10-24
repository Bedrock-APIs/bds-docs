import * as _00 from '@minecraft/common';
export enum Direction {Down = "Down", East = "East", North = "North", South = "South", Up = "Up", West = "West"}
export enum DisplaySlotId {BelowName = "BelowName", List = "List", Sidebar = "Sidebar"}
export enum EntityDamageCause {anvil = "anvil", blockExplosion = "blockExplosion", charging = "charging", contact = "contact", drowning = "drowning", entityAttack = "entityAttack", entityExplosion = "entityExplosion", fall = "fall", fallingBlock = "fallingBlock", fire = "fire", fireTick = "fireTick", fireworks = "fireworks", flyIntoWall = "flyIntoWall", freezing = "freezing", lava = "lava", lightning = "lightning", magic = "magic", magma = "magma", none = "none", override = "override", piston = "piston", projectile = "projectile", stalactite = "stalactite", stalagmite = "stalagmite", starve = "starve", suffocation = "suffocation", suicide = "suicide", temperature = "temperature", thorns = "thorns", void = "void", wither = "wither"}
export enum EquipmentSlot {Chest = "Chest", Feet = "Feet", Head = "Head", Legs = "Legs", Mainhand = "Mainhand", Offhand = "Offhand"}
export enum GameMode {adventure = "adventure", creative = "creative", spectator = "spectator", survival = "survival"}
export enum ItemLockMode {inventory = "inventory", none = "none", slot = "slot"}
export enum ObjectiveSortOrder {Ascending = 0, Descending = 1}
export enum ScoreboardIdentityType {Entity = "Entity", FakePlayer = "FakePlayer", Player = "Player"}
export enum ScriptEventSource {Block = "Block", Entity = "Entity", NPCDialogue = "NPCDialogue", Server = "Server"}
export enum TimeOfDay {Day = 1000, Midnight = 18000, Night = 13000, Noon = 6000, Sunrise = 23000, Sunset = 12000}
export class Block { private constructor(); readonly dimension: Dimension; readonly location: Vector3; readonly permutation: BlockPermutation; readonly x: number; readonly y: number; readonly z: number; getComponent(componentName: string): BlockComponent; isValid(): number; setPermutation(permutation: BlockPermutation): void}
//@ts-ignore allow class inheritance for native classes
export class BlockComponent extends Component{ private constructor(); readonly block: Block}
export class BlockEvent { private constructor(); readonly block: Block; readonly dimension: Dimension}
//@ts-ignore allow class inheritance for native classes
export class BlockInventoryComponent extends BlockComponent{ private constructor(); static readonly componentId: "minecraft:inventory"; readonly container?: Container}
export class BlockPermutation { private constructor(); static resolve(blockName: string, states?: Record<string,number | number | string>): BlockPermutation; matches(blockName: string, states?: Record<string,number | number | string>): number}
//@ts-ignore allow class inheritance for native classes
export class ButtonPushAfterEvent extends BlockEvent{ private constructor(); readonly source: Entity}
//@ts-ignore allow class inheritance for native classes
export class ButtonPushAfterEventSignal extends IButtonPushAfterEventSignal{ private constructor()}
export class CommandResult { private constructor(); readonly successCount: number}
export class Component { private constructor(); readonly typeId: string; isValid(): number}
export class Container { private constructor(); readonly emptySlotsCount: number; readonly size: number; addItem(itemStack: ItemStack): ItemStack; clearAll(): void; getItem(slot: number): ItemStack; isValid(): number; moveItem(fromSlot: number, toSlot: number, toContainer: Container): void; setItem(slot: number, itemStack?: ItemStack): void; swapItems(slot: number, otherSlot: number, otherContainer: Container): void; transferItem(fromSlot: number, toContainer: Container): ItemStack}
export class Dimension { private constructor(); readonly id: string; getBlock(location: Vector3): Block; getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit; getEntities(options?: EntityQueryOptions): Entity[]; getEntitiesAtBlockLocation(location: Vector3): Entity[]; getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[]; getPlayers(options?: EntityQueryOptions): Player[]; runCommand(commandString: string): CommandResult; runCommandAsync(commandString: string): Promise<CommandResult>; spawnEntity(identifier: string, location: Vector3): Entity; spawnItem(itemStack: ItemStack, location: Vector3): Entity; spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void}
export class Effect { private constructor(); readonly amplifier: number; readonly displayName: string; readonly duration: number; readonly typeId: string; isValid(): number}
export class EffectType { private constructor(); getName(): string}
export class Entity { private constructor(); readonly dimension: Dimension; readonly id: string; readonly location: Vector3; nameTag: string; readonly scoreboardIdentity?: ScoreboardIdentity; readonly typeId: string; addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): void; addTag(tag: string): number; applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): number; applyImpulse(vector: Vector3): void; applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void; clearVelocity(): void; getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit; getComponent(componentId: string): EntityComponent; getComponents(): EntityComponent[]; getEffect(effectType: EffectType | string): Effect; getEffects(): Effect[]; getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[]; getHeadLocation(): Vector3; getTags(): string[]; getVelocity(): Vector3; getViewDirection(): Vector3; hasComponent(componentId: string): number; hasTag(tag: string): number; isValid(): number; kill(): number; removeEffect(effectType: EffectType | string): number; removeTag(tag: string): number; runCommand(commandString: string): CommandResult; runCommandAsync(commandString: string): Promise<CommandResult>; teleport(location: Vector3, teleportOptions?: TeleportOptions): void; triggerEvent(eventName: string): void; tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): number}
//@ts-ignore allow class inheritance for native classes
export class EntityAttributeComponent extends EntityComponent{ private constructor(); readonly currentValue: number; readonly defaultValue: number; readonly effectiveMax: number; readonly effectiveMin: number; resetToDefaultValue(): void; resetToMaxValue(): void; resetToMinValue(): void; setCurrentValue(value: number): number}
//@ts-ignore allow class inheritance for native classes
export class EntityBaseMovementComponent extends EntityComponent{ private constructor(); readonly maxTurn: number}
//@ts-ignore allow class inheritance for native classes
export class EntityCanClimbComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:can_climb"}
//@ts-ignore allow class inheritance for native classes
export class EntityCanFlyComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:can_fly"}
//@ts-ignore allow class inheritance for native classes
export class EntityCanPowerJumpComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:can_power_jump"}
//@ts-ignore allow class inheritance for native classes
export class EntityColorComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:color"; value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityComponent extends Component{ private constructor()}
export class EntityDieAfterEvent { private constructor(); readonly damageSource: EntityDamageSource; readonly deadEntity: Entity}
export class EntityDieAfterEventSignal { private constructor(); subscribe(callback: (arg0: EntityDieAfterEvent)=>void, options?: EntityEventOptions): (arg0: EntityDieAfterEvent)=>void; unsubscribe(callback: (arg0: EntityDieAfterEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class EntityEquippableComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:equippable"; getEquipment(equipmentSlot: EquipmentSlot): ItemStack; setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): number}
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
export class EntityHealableComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:healable"; readonly forceUse: number; getFeedItems(): FeedItem[]}
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
//@ts-ignore allow class inheritance for native classes
export class EntityMarkVariantComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:mark_variant"; value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.amphibious"}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementBasicComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.basic"}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementFlyComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.fly"}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementGenericComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.generic"}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementHoverComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.hover"}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementJumpComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.jump"}
//@ts-ignore allow class inheritance for native classes
export class EntityMovementSkipComponent extends EntityBaseMovementComponent{ private constructor(); static readonly componentId: "minecraft:movement.skip"}
//@ts-ignore allow class inheritance for native classes
export class EntityPushThroughComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:push_through"; value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityScaleComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:scale"; value: number}
//@ts-ignore allow class inheritance for native classes
export class EntitySkinIdComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:skin_id"; value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityVariantComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:variant"; readonly value: number}
//@ts-ignore allow class inheritance for native classes
export class EntityWantsJockeyComponent extends EntityComponent{ private constructor(); static readonly componentId: "minecraft:wants_jockey"}
export class FeedItem { private constructor(); readonly healAmount: number; readonly item: string; getEffects(): FeedItemEffect[]}
export class FeedItemEffect { private constructor(); readonly amplifier: number; readonly chance: number; readonly duration: number; readonly name: string}
export class IButtonPushAfterEventSignal { private constructor(); subscribe(callback: (arg0: ButtonPushAfterEvent)=>void): (arg0: ButtonPushAfterEvent)=>void; unsubscribe(callback: (arg0: ButtonPushAfterEvent)=>void): void}
export class ILeverActionAfterEventSignal { private constructor(); subscribe(callback: (arg0: LeverActionAfterEvent)=>void): (arg0: LeverActionAfterEvent)=>void; unsubscribe(callback: (arg0: LeverActionAfterEvent)=>void): void}
export class IPlayerJoinAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerJoinAfterEvent)=>void): (arg0: PlayerJoinAfterEvent)=>void; unsubscribe(callback: (arg0: PlayerJoinAfterEvent)=>void): void}
export class IPlayerLeaveAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerLeaveAfterEvent)=>void): (arg0: PlayerLeaveAfterEvent)=>void; unsubscribe(callback: (arg0: PlayerLeaveAfterEvent)=>void): void}
export class IPlayerSpawnAfterEventSignal { private constructor(); subscribe(callback: (arg0: PlayerSpawnAfterEvent)=>void): (arg0: PlayerSpawnAfterEvent)=>void; unsubscribe(callback: (arg0: PlayerSpawnAfterEvent)=>void): void}
export class ItemCompleteUseAfterEvent { private constructor(); readonly itemStack: ItemStack; readonly source: Player; readonly useDuration: number}
export class ItemCompleteUseAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemCompleteUseAfterEvent)=>void): (arg0: ItemCompleteUseAfterEvent)=>void; unsubscribe(callback: (arg0: ItemCompleteUseAfterEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class ItemComponent extends Component{ private constructor()}
export class ItemReleaseUseAfterEvent { private constructor(); readonly itemStack: ItemStack; readonly source: Player; readonly useDuration: number}
export class ItemReleaseUseAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemReleaseUseAfterEvent)=>void): (arg0: ItemReleaseUseAfterEvent)=>void; unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent)=>void): void}
export class ItemStack { constructor(itemType: ItemType | string, amount?: number); readonly amount: number; readonly isStackable: number; readonly keepOnDeath: number; readonly lockMode: ItemLockMode; readonly maxAmount: number; readonly nameTag?: string; readonly 'type': ItemType; readonly typeId: string; getComponent(componentId: string): ItemComponent; getComponents(): ItemComponent[]; getLore(): string[]; hasComponent(componentId: string): number; isStackableWith(itemStack: ItemStack): number; setLore(loreList?: string[]): void}
export class ItemStartUseAfterEvent { private constructor(); readonly itemStack: ItemStack; readonly source: Player; readonly useDuration: number}
export class ItemStartUseAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemStartUseAfterEvent)=>void): (arg0: ItemStartUseAfterEvent)=>void; unsubscribe(callback: (arg0: ItemStartUseAfterEvent)=>void): void}
export class ItemStartUseOnAfterEvent { private constructor(); readonly block: Block; readonly blockFace: Direction; readonly itemStack: ItemStack; readonly source: Player}
export class ItemStartUseOnAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemStartUseOnAfterEvent)=>void): (arg0: ItemStartUseOnAfterEvent)=>void; unsubscribe(callback: (arg0: ItemStartUseOnAfterEvent)=>void): void}
export class ItemStopUseAfterEvent { private constructor(); readonly itemStack: ItemStack; readonly source: Player; readonly useDuration: number}
export class ItemStopUseAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemStopUseAfterEvent)=>void): (arg0: ItemStopUseAfterEvent)=>void; unsubscribe(callback: (arg0: ItemStopUseAfterEvent)=>void): void}
export class ItemStopUseOnAfterEvent { private constructor(); readonly block: Block; readonly itemStack?: ItemStack; readonly source: Player}
export class ItemStopUseOnAfterEventSignal { private constructor(); subscribe(callback: (arg0: ItemStopUseOnAfterEvent)=>void): (arg0: ItemStopUseOnAfterEvent)=>void; unsubscribe(callback: (arg0: ItemStopUseOnAfterEvent)=>void): void}
export class ItemType { private constructor(); readonly id: string}
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
export class MinecraftDimensionTypes { private constructor(); static readonly nether: "minecraft:nether"; static readonly overworld: "minecraft:overworld"; static readonly theEnd: "minecraft:the_end"}
export class MolangVariableMap { constructor(); setColorRGB(variableName: string, color: RGB): void; setColorRGBA(variableName: string, color: RGBA): void; setFloat(variableName: string, number: number): void; setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void; setVector3(variableName: string, vector: Vector3): void}
//@ts-ignore allow class inheritance for native classes
export class Player extends Entity{ private constructor(); readonly name: string; readonly onScreenDisplay: ScreenDisplay; getSpawnPoint(): DimensionLocation; playSound(soundId: string, soundOptions?: PlayerSoundOptions): void; sendMessage(message: RawMessage | string[] | RawMessage | string): void; setSpawnPoint(spawnPoint?: DimensionLocation): void}
export class PlayerJoinAfterEvent { private constructor(); readonly playerId: string; readonly playerName: string}
//@ts-ignore allow class inheritance for native classes
export class PlayerJoinAfterEventSignal extends IPlayerJoinAfterEventSignal{ private constructor()}
export class PlayerLeaveAfterEvent { private constructor(); readonly playerId: string; readonly playerName: string}
//@ts-ignore allow class inheritance for native classes
export class PlayerLeaveAfterEventSignal extends IPlayerLeaveAfterEventSignal{ private constructor()}
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
export class System { private constructor(); readonly afterEvents: SystemAfterEvents; readonly currentTick: number; clearRun(runId: number): void; run(callback: ()=>void): number; runInterval(callback: ()=>void, tickInterval?: number): number; runTimeout(callback: ()=>void, tickDelay?: number): number}
export class SystemAfterEvents { private constructor(); readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal}
//@ts-ignore allow class inheritance for native classes
export class TargetBlockHitAfterEvent extends BlockEvent{ private constructor(); readonly hitVector: Vector3; readonly previousRedstonePower: number; readonly redstonePower: number; readonly source: Entity}
export class TargetBlockHitAfterEventSignal { private constructor(); subscribe(callback: (arg0: TargetBlockHitAfterEvent)=>void): (arg0: TargetBlockHitAfterEvent)=>void; unsubscribe(callback: (arg0: TargetBlockHitAfterEvent)=>void): void}
//@ts-ignore allow class inheritance for native classes
export class TripWireTripAfterEvent extends BlockEvent{ private constructor(); readonly isPowered: number; readonly sources: Entity[]}
export class TripWireTripAfterEventSignal { private constructor(); subscribe(callback: (arg0: TripWireTripAfterEvent)=>void): (arg0: TripWireTripAfterEvent)=>void; unsubscribe(callback: (arg0: TripWireTripAfterEvent)=>void): void}
export class World { private constructor(); readonly afterEvents: WorldAfterEvents; readonly beforeEvents: WorldBeforeEvents; readonly scoreboard: Scoreboard; getAbsoluteTime(): number; getAllPlayers(): Player[]; getDay(): number; getDefaultSpawnLocation(): Vector3; getDimension(dimensionId: string): Dimension; getPlayers(options?: EntityQueryOptions): Player[]; getTimeOfDay(): number; playMusic(trackId: string, musicOptions?: MusicOptions): void; playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void; queueMusic(trackId: string, musicOptions?: MusicOptions): void; sendMessage(message: RawMessage | string[] | RawMessage | string): void; setAbsoluteTime(absoluteTime: number): void; setDefaultSpawnLocation(spawnLocation: Vector3): void; setTimeOfDay(timeOfDay: number | TimeOfDay): void; stopMusic(): void}
export class WorldAfterEvents { private constructor(); readonly buttonPush: ButtonPushAfterEventSignal; readonly entityDie: EntityDieAfterEventSignal; readonly entityHealthChanged: EntityHealthChangedAfterEventSignal; readonly entityHitBlock: EntityHitBlockAfterEventSignal; readonly entityHitEntity: EntityHitEntityAfterEventSignal; readonly entityHurt: EntityHurtAfterEventSignal; readonly itemCompleteUse: ItemCompleteUseAfterEventSignal; readonly itemReleaseUse: ItemReleaseUseAfterEventSignal; readonly itemStartUse: ItemStartUseAfterEventSignal; readonly itemStartUseOn: ItemStartUseOnAfterEventSignal; readonly itemStopUse: ItemStopUseAfterEventSignal; readonly itemStopUseOn: ItemStopUseOnAfterEventSignal; readonly itemUse: ItemUseAfterEventSignal; readonly itemUseOn: ItemUseOnAfterEventSignal; readonly leverAction: LeverActionAfterEventSignal; readonly playerJoin: PlayerJoinAfterEventSignal; readonly playerLeave: PlayerLeaveAfterEventSignal; readonly playerSpawn: PlayerSpawnAfterEventSignal; readonly pressurePlatePop: PressurePlatePopAfterEventSignal; readonly pressurePlatePush: PressurePlatePushAfterEventSignal; readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal; readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal; readonly targetBlockHit: TargetBlockHitAfterEventSignal; readonly tripWireTrip: TripWireTripAfterEventSignal}
export class WorldBeforeEvents { private constructor(); readonly itemUse: ItemUseBeforeEventSignal; readonly itemUseOn: ItemUseOnBeforeEventSignal}
export interface BlockHitInformation {block: Block, face: Direction, faceLocation: Vector3}
export interface BlockRaycastHit {block: Block, face: Direction, faceLocation: Vector3}
export interface BlockRaycastOptions {includeLiquidBlocks?: number, includePassableBlocks?: number, maxDistance?: number}
export interface DimensionLocation {dimension: Dimension, x: number, y: number, z: number}
export interface EntityApplyDamageByProjectileOptions {damagingEntity?: Entity, damagingProjectile: Entity}
export interface EntityApplyDamageOptions {cause: EntityDamageCause, damagingEntity?: Entity}
export interface EntityDamageSource {cause: EntityDamageCause, damagingEntity?: Entity, damagingProjectile?: Entity}
export interface EntityEffectOptions {amplifier?: number, showParticles?: number}
export interface EntityEventOptions {entities?: Entity[], entityTypes?: string[]}
export interface EntityHitInformation {entity: Entity}
export interface EntityQueryOptions {closest?: number, excludeFamilies?: string[], excludeGameModes?: GameMode[], excludeNames?: string[], excludeTags?: string[], excludeTypes?: string[], families?: string[], farthest?: number, gameMode?: GameMode, location?: Vector3, maxDistance?: number, maxHorizontalRotation?: number, maxLevel?: number, maxVerticalRotation?: number, minDistance?: number, minHorizontalRotation?: number, minLevel?: number, minVerticalRotation?: number, name?: string, scoreOptions?: EntityQueryScoreOptions[], tags?: string[], 'type'?: string}
export interface EntityQueryScoreOptions {exclude?: number, maxScore?: number, minScore?: number, objective?: string}
export interface EntityRaycastHit {distance: number, entity: Entity}
export interface EntityRaycastOptions {maxDistance?: number}
export interface MusicOptions {fade?: number, loop?: number, volume?: number}
export interface PlayerSoundOptions {location?: Vector3, pitch?: number, volume?: number}
export interface RawMessage {rawtext?: RawMessage[], score?: RawMessageScore, text?: string, translate?: string, with?: string[] | RawMessage}
export interface RawMessageScore {name?: string, objective?: string}
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
export const system: System;
export const world: World;