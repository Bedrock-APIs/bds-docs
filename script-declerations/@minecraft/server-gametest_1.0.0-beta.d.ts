import * as _1e from '@minecraft/common';
import * as _2c from '@minecraft/server';

// Enums - 2
export enum GameTestErrorType { Assert = "Assert", AssertAtPosition = "AssertAtPosition", ExecutionTimeout = "ExecutionTimeout", ExhaustedAttempts = "ExhaustedAttempts", FailConditionsMet = "FailConditionsMet", LevelStateModificationFailed = "LevelStateModificationFailed", MethodNotImplemented = "MethodNotImplemented", SimulatedPlayerOutOfBounds = "SimulatedPlayerOutOfBounds", Unknown = "Unknown", Waiting = "Waiting"};
export enum LookDuration { Continuous = "Continuous", Instant = "Instant", UntilMove = "UntilMove"};

// Interfaces - 2
export interface GameTestErrorContext { absolutePosition: _2c.Vector3; relativePosition: _2c.Vector3; tickCount: number};
export interface MoveToOptions { faceTarget?: boolean; speed?: number};

// Classes - 8
export class FenceConnectivity { public readonly east: boolean; public readonly north: boolean; public readonly south: boolean; public readonly west: boolean; private constructor();};
export class GameTestSequence { public thenExecute(callback: ()=>void): GameTestSequence; public thenExecuteAfter(delayTicks: number, callback: ()=>void): GameTestSequence; public thenExecuteFor(tickCount: number, callback: ()=>void): GameTestSequence; public thenFail(errorMessage: string): void; public thenIdle(delayTicks: number): GameTestSequence; public thenSucceed(): void; public thenWait(callback: ()=>void): GameTestSequence; public thenWaitAfter(delayTicks: number, callback: ()=>void): GameTestSequence; private constructor();};
export class NavigationResult { public readonly isFullPath: boolean; public getPath(): _2c.Vector3[]; private constructor();};
export class RegistrationBuilder { public batch(batchName: string): RegistrationBuilder; public maxAttempts(attemptCount: number): RegistrationBuilder; public maxTicks(tickCount: number): RegistrationBuilder; public padding(paddingBlocks: number): RegistrationBuilder; public required(isRequired: boolean): RegistrationBuilder; public requiredSuccessfulAttempts(attemptCount: number): RegistrationBuilder; public rotateTest(rotate: boolean): RegistrationBuilder; public setupTicks(tickCount: number): RegistrationBuilder; public structureLocation(structureLocation: _2c.Vector3): RegistrationBuilder; public structureName(structureName: string): RegistrationBuilder; public tag(tag: string): RegistrationBuilder; private constructor();};
export class SculkSpreader { public readonly maxCharge: number; public addCursorsWithOffset(offset: _2c.Vector3, charge: number): void; public getCursorPosition(index: number): _2c.Vector3; public getNumberOfCursors(): number; public getTotalCharge(): number; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class SimulatedPlayer extends _2c.Player{ public readonly headRotation: _2c.Vector2; public isSprinting: boolean; public attack(): boolean; public attackEntity(entity: _2c.Entity): boolean; public breakBlock(blockLocation: _2c.Vector3, direction?: _2c.Direction): boolean; public chat(message: string): void; public disconnect(): void; public dropSelectedItem(): boolean; public fly(): void; public giveItem(itemStack: _2c.ItemStack, selectSlot?: boolean): boolean; public glide(): boolean; public interact(): boolean; public interactWithBlock(blockLocation: _2c.Vector3, direction?: _2c.Direction): boolean; public interactWithEntity(entity: _2c.Entity): boolean; public jump(): boolean; public lookAtBlock(blockLocation: _2c.Vector3, duration?: LookDuration): void; public lookAtEntity(entity: _2c.Entity, duration?: LookDuration): void; public lookAtLocation(location: _2c.Vector3, duration?: LookDuration): void; public move(westEast: number, northSouth: number, speed?: number): void; public moveRelative(leftRight: number, backwardForward: number, speed?: number): void; public moveToBlock(blockLocation: _2c.Vector3, options?: MoveToOptions): void; public moveToLocation(location: _2c.Vector3, options?: MoveToOptions): void; public navigateToBlock(blockLocation: _2c.Vector3, speed?: number): NavigationResult; public navigateToEntity(entity: _2c.Entity, speed?: number): NavigationResult; public navigateToLocation(location: _2c.Vector3, speed?: number): NavigationResult; public navigateToLocations(locations: _2c.Vector3[], speed?: number): void; public respawn(): boolean; public rotateBody(angleInDegrees: number): void; public setBodyRotation(angleInDegrees: number): void; public setItem(itemStack: _2c.ItemStack, slot: number, selectSlot?: boolean): boolean; public startBuild(slot?: number): void; public stopBreakingBlock(): void; public stopBuild(): void; public stopFlying(): void; public stopGliding(): void; public stopInteracting(): void; public stopMoving(): void; public stopSwimming(): void; public stopUsingItem(): (_2c.ItemStack | undefined); public swim(): void; public useItem(itemStack: _2c.ItemStack): boolean; public useItemInSlot(slot: number): boolean; public useItemInSlotOnBlock(slot: number, blockLocation: _2c.Vector3, direction?: _2c.Direction, faceLocation?: _2c.Vector3): boolean; public useItemOnBlock(itemStack: _2c.ItemStack, blockLocation: _2c.Vector3, direction?: _2c.Direction, faceLocation?: _2c.Vector3): boolean; private constructor();};
export class Tags { public static readonly suiteAll = "suite:all"; public static readonly suiteDebug = "suite:debug"; public static readonly suiteDefault = "suite:default"; public static readonly suiteDisabled = "suite:disabled"; public static readonly suiteNextUpdate = "suite:nextupdate"; private constructor();};
export class Test { public assert(condition: boolean, message: string): void; public assertBlockPresent(blockType: _2c.BlockType | string, blockLocation: _2c.Vector3, isPresent?: boolean): void; public assertBlockState(blockLocation: _2c.Vector3, callback: (arg0: _2c.Block)=>boolean): void; public assertCanReachLocation(mob: _2c.Entity, blockLocation: _2c.Vector3, canReach?: boolean): void; public assertContainerContains(itemStack: _2c.ItemStack, blockLocation: _2c.Vector3): void; public assertContainerEmpty(blockLocation: _2c.Vector3): void; public assertEntityHasArmor(entityTypeIdentifier: string, armorSlot: number, armorName: string, armorData: number, blockLocation: _2c.Vector3, hasArmor?: boolean): void; public assertEntityHasComponent(entityTypeIdentifier: string, componentIdentifier: string, blockLocation: _2c.Vector3, hasComponent?: boolean): void; public assertEntityInstancePresent(entity: _2c.Entity, blockLocation: _2c.Vector3, isPresent?: boolean): void; public assertEntityInstancePresentInArea(entity: _2c.Entity, isPresent?: boolean): void; public assertEntityPresent(entityTypeIdentifier: string, blockLocation: _2c.Vector3, searchDistance?: number, isPresent?: boolean): void; public assertEntityPresentInArea(entityTypeIdentifier: string, isPresent?: boolean): void; public assertEntityState(blockLocation: _2c.Vector3, entityTypeIdentifier: string, callback: (arg0: _2c.Entity)=>boolean): void; public assertEntityTouching(entityTypeIdentifier: string, location: _2c.Vector3, isTouching?: boolean): void; public assertIsWaterlogged(blockLocation: _2c.Vector3, isWaterlogged?: boolean): void; public assertItemEntityCountIs(itemType: _2c.ItemType | string, blockLocation: _2c.Vector3, searchDistance: number, count: number): void; public assertItemEntityPresent(itemType: _2c.ItemType | string, blockLocation: _2c.Vector3, searchDistance?: number, isPresent?: boolean): void; public assertRedstonePower(blockLocation: _2c.Vector3, power: number): void; public destroyBlock(blockLocation: _2c.Vector3, dropResources?: boolean): void; public fail(errorMessage: string): void; public failIf(callback: ()=>void): void; public getBlock(blockLocation: _2c.Vector3): _2c.Block; public getDimension(): _2c.Dimension; public getFenceConnectivity(blockLocation: _2c.Vector3): FenceConnectivity; public getSculkSpreader(blockLocation: _2c.Vector3): (SculkSpreader | undefined); public getTestDirection(): _2c.Direction; public idle(tickDelay: number): Promise<void>; public killAllEntities(): void; public onPlayerJump(mob: _2c.Entity, jumpAmount: number): void; public pressButton(blockLocation: _2c.Vector3): void; public print(text: string): void; public pullLever(blockLocation: _2c.Vector3): void; public pulseRedstone(blockLocation: _2c.Vector3, duration: number): void; public relativeBlockLocation(worldBlockLocation: _2c.Vector3): _2c.Vector3; public relativeLocation(worldLocation: _2c.Vector3): _2c.Vector3; public removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void; public rotateDirection(direction: _2c.Direction): _2c.Direction; public rotateVector(vector: _2c.Vector3): _2c.Vector3; public runAfterDelay(delayTicks: number, callback: ()=>void): void; public runAtTickTime(tick: number, callback: ()=>void): void; public setBlockPermutation(blockData: _2c.BlockPermutation, blockLocation: _2c.Vector3): void; public setBlockType(blockType: _2c.BlockType | string, blockLocation: _2c.Vector3): void; public setFluidContainer(location: _2c.Vector3, type: _2c.FluidType): void; public setTntFuse(entity: _2c.Entity, fuseLength: number): void; public spawn(entityTypeIdentifier: string, blockLocation: _2c.Vector3): _2c.Entity; public spawnAtLocation(entityTypeIdentifier: string, location: _2c.Vector3): _2c.Entity; public spawnItem(itemStack: _2c.ItemStack, location: _2c.Vector3): _2c.Entity; public spawnSimulatedPlayer(blockLocation: _2c.Vector3, name?: string, gameMode?: _2c.GameMode): SimulatedPlayer; public spawnWithoutBehaviors(entityTypeIdentifier: string, blockLocation: _2c.Vector3): _2c.Entity; public spawnWithoutBehaviorsAtLocation(entityTypeIdentifier: string, location: _2c.Vector3): _2c.Entity; public spreadFromFaceTowardDirection(blockLocation: _2c.Vector3, fromFace: _2c.Direction, direction: _2c.Direction): void; public startSequence(): GameTestSequence; public succeed(): void; public succeedIf(callback: ()=>void): void; public succeedOnTick(tick: number): void; public succeedOnTickWhen(tick: number, callback: ()=>void): void; public succeedWhen(callback: ()=>void): void; public succeedWhenBlockPresent(blockType: _2c.BlockType | string, blockLocation: _2c.Vector3, isPresent?: boolean): void; public succeedWhenEntityHasComponent(entityTypeIdentifier: string, componentIdentifier: string, blockLocation: _2c.Vector3, hasComponent: boolean): void; public succeedWhenEntityPresent(entityTypeIdentifier: string, blockLocation: _2c.Vector3, isPresent?: boolean): void; public triggerInternalBlockEvent(blockLocation: _2c.Vector3, event: string, eventParameters?: number[]): void; public until(callback: ()=>void): Promise<void>; public walkTo(mob: _2c.Entity, blockLocation: _2c.Vector3, speedModifier?: number): void; public walkToLocation(mob: _2c.Entity, location: _2c.Vector3, speedModifier?: number): void; public worldBlockLocation(relativeBlockLocation: _2c.Vector3): _2c.Vector3; public worldLocation(relativeLocation: _2c.Vector3): _2c.Vector3; private constructor();};

// Constants & Objects - 0


// Functions - 2
export function register(testClassName: string, testName: string, testFunction: (arg0: Test)=>void): RegistrationBuilder
export function registerAsync(testClassName: string, testName: string, testFunction: (arg0: Test)=>Promise<void>): RegistrationBuilder

// Errors - 1
export class GameTestError extends Error{ public readonly context?: GameTestErrorContext; public readonly messageParameters: string[]; public readonly type: GameTestErrorType; private constructor();};
