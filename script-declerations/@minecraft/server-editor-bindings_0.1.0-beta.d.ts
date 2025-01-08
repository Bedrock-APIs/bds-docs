import * as _1e from '@minecraft/common';
import * as _2c from '@minecraft/server';

// Enums - 28
export enum Axis { X = 1, Y = 2, Z = 4};
export enum BlockMaskListType { Disabled = "Disabled", Mask = "Mask", Replace = "Replace"};
export enum BlockPaletteItemType { Probability = 1, Simple = 0};
export enum BrushShapeType { OffsetList = "OffsetList", WeightedSphere = "WeightedSphere"};
export enum CursorControlMode { Fixed = 3, Keyboard = 0, KeyboardAndMouse = 2, Mouse = 1};
export enum CursorTargetMode { Block = 0, Face = 1};
export enum DaylightCycle { AlwaysDay = 1, LockTime = 2, Normal = 0};
export enum EditorMode { Crosshair = "Crosshair", Tool = "Tool"};
export enum EntityOperationType { Create = 0, Delete = 1};
export enum ExportResult { EditorSystemFailure = 7, FileArchiverFetchFailed = 2, LevelFetchFailed = 1, PlayerNotFound = 4, ProjectConverterFetchFailed = 3, ValidWorldExport = 0, WorldExportBusy = 6, WorldExportFailed = 5};
export enum GamePublishSetting { FriendsOfFriends = 3, FriendsOnly = 2, InviteOnly = 1, NoMultiPlay = 0, Public = 4};
export enum GraphicsSettingsProperty { NightVision = "NightVision", ShowChunkBoundaries = "ShowChunkBoundaries", ShowCompass = "ShowCompass", ShowInvisibleBlocks = "ShowInvisibleBlocks"};
export enum InputModifier { Alt = 2, Any = 15, Control = 4, None = 1, Shift = 8, Unused = 0};
export enum KeyInputType { Invalid = 0, Press = 1, Release = 2};
export enum MouseActionCategory { Button = 1, Drag = 3, Invalid = 0, Wheel = 2};
export enum PaintCompletionState { Canceled = 1, Failed = 2, Success = 0};
export enum PaintMode { BlockPaint = 0, Flatten = 4, FreehandSelect = 1, Roughen = 3, Smooth = 2};
export enum Plane { XY = 1, XZ = 2, YZ = 4};
export enum PlayerPermissionLevel { Custom = 3, Member = 1, Operator = 2, Visitor = 0};
export enum PlaytestSessionResult { EditorSystemFailure = 7, InvalidLevelId = 8, InvalidSessionHandle = 1, OK = 0, PlayerNotFound = 9, ResponseTimeout = 10, SessionInfoNotFound = 2, TooManyPlayers = 3, UnspecifiedError = 11, UnsupportedScenario = 6, WorldExportBusy = 5, WorldExportFailed = 4};
export enum PrimitiveType { AxialSphere = 5, Box = 1, Disc = 4, Line = 2, Text = 0};
export enum ProjectExportType { PlayableWorld = 0, ProjectBackup = 1, WorldTemplate = 2};
export enum SpeedSettingsProperty { FlySpeedMultiplier = "FlySpeedMultiplier"};
export enum SplineType { Hermite = 1, Line = 0};
export enum ThemeSettingsColorKey { Caret = "Caret", Confirm1 = "Confirm1", Confirm2 = "Confirm2", Confirm3 = "Confirm3", ConfirmFill = "ConfirmFill", ControlsGeneralFill = "ControlsGeneralFill", ControlsGeneralHighlight = "ControlsGeneralHighlight", Coordinate1 = "Coordinate1", Coordinate2 = "Coordinate2", Coordinate3 = "Coordinate3", CoordinateControlX = "CoordinateControlX", CoordinateControlY = "CoordinateControlY", CoordinateControlZ = "CoordinateControlZ", CursorVolumeBorder = "CursorVolumeBorder", CursorVolumeFill = "CursorVolumeFill", Destroy1 = "Destroy1", Destroy2 = "Destroy2", Destroy3 = "Destroy3", DestroyFill = "DestroyFill", DisableBackground = "DisableBackground", DisableFill = "DisableFill", DisableOutline = "DisableOutline", DisableText = "DisableText", DropDown1 = "DropDown1", DropDown2 = "DropDown2", DropDown3 = "DropDown3", ElementBorder = "ElementBorder", Error = "Error", FocusOutline = "FocusOutline", HeaderBackground = "HeaderBackground", HotbarOutline = "HotbarOutline", Info1 = "Info1", Info2 = "Info2", Info3 = "Info3", InfoFill = "InfoFill", PanelBackground = "PanelBackground", PanelBorder = "PanelBorder", PlacementVolumeBorder = "PlacementVolumeBorder", PlacementVolumeFill = "PlacementVolumeFill", PrefillVolumeBorder = "PrefillVolumeBorder", PrefillVolumeFill = "PrefillVolumeFill", PrimaryActive = "PrimaryActive", PrimaryBackground1 = "PrimaryBackground1", PrimaryBackground2 = "PrimaryBackground2", PrimaryBackground3 = "PrimaryBackground3", PrimaryBackground4 = "PrimaryBackground4", PrimaryDefault = "PrimaryDefault", PrimaryDisable = "PrimaryDisable", PrimaryMute = "PrimaryMute", ScrollBar = "ScrollBar", SecondaryActive = "SecondaryActive", SecondaryBackground1 = "SecondaryBackground1", SecondaryBackground2 = "SecondaryBackground2", SecondaryBackground3 = "SecondaryBackground3", SecondaryDefault = "SecondaryDefault", SecondaryDisable = "SecondaryDisable", SecondaryMute = "SecondaryMute", SelectionVolumeBorder = "SelectionVolumeBorder", SelectionVolumeFill = "SelectionVolumeFill", TitleBarBackground = "TitleBarBackground", ViewportOutline = "ViewportOutline", Warning = "Warning"};
export enum WidgetComponentType { Clipboard = "Clipboard", Entity = "Entity", Gizmo = "Gizmo", Guide = "Guide", RenderPrim = "RenderPrim", Spline = "Spline", Text = "Text"};
export enum WidgetGroupSelectionMode { Multiple = "Multiple", None = "None", Single = "Single"};
export enum WidgetMouseButtonActionType { Drag = 2, Pressed = 0, Released = 1};

// Interfaces - 26
export interface BlockMaskList { blockList: (_2c.BlockPermutation | _2c.BlockType | string)[]; maskType: BlockMaskListType};
export interface BrushShape { icon: string; name: string};
export interface ClipboardWriteOptions { mirror?: _2c.StructureMirrorAxis; normalizedOrigin?: _2c.Vector3; offset?: _2c.Vector3; rotation?: _2c.StructureRotation};
export interface CursorPosition { FaceDirection: number; Position: _2c.Vector3};
export interface CursorProperties { controlMode?: CursorControlMode; fillColor?: _2c.RGBA; fixedModeDistance?: number; outlineColor?: _2c.RGBA; projectThroughLiquid?: boolean; targetMode?: CursorTargetMode; visible?: boolean};
export interface CursorRay { end: _2c.Vector3; hit: boolean; start: _2c.Vector3};
export interface DataTransferCollectionNameData { nameStringId: string; uniqueId: string};
export interface EditorStructure { storageLocation: string; structure: _2c.Structure; tags: string[]};
export interface EditorStructureSearchOptions { excludeTags?: string[]; idPattern?: string; includeLocation?: string[]; includeTags?: string[]};
export interface ExtensionOptionalParameters { description?: string; notes?: string; toolGroupId?: string};
export interface GameOptions { bedsWork?: boolean; bonusChest?: boolean; cheats?: boolean; commandBlockEnabled?: boolean; daylightCycle?: DaylightCycle; difficulty?: _2c.Difficulty; dimensionId?: string; disableWeather?: boolean; educationEdition?: boolean; entitiesDropLoot?: boolean; exportType?: ProjectExportType; fireSpreads?: boolean; friendlyFire?: boolean; gameMode?: _2c.GameMode; hardcore?: boolean; immediateRespawn?: boolean; keepInventory?: boolean; lanVisibility?: boolean; mobGriefing?: boolean; mobLoot?: boolean; mobSpawning?: boolean; multiplayerGame?: boolean; naturalRegeneration?: boolean; playerAccess?: GamePublishSetting; playerPermissions?: PlayerPermissionLevel; randomTickSpeed?: number; recipeUnlocking?: boolean; respawnBlocksExplode?: boolean; respawnRadius?: number; showCoordinates?: boolean; showDaysPlayed?: boolean; simulationDistance?: number; sleepSkipPercent?: number; spawnPosition?: _2c.Vector3; startingMap?: boolean; tileDrops?: boolean; timeOfDay?: number; tntExplodes?: boolean; weather?: number; worldName?: string};
export interface InputBindingInfo { actionId?: string; canRebind: boolean; label?: string; tooltip?: string};
export interface LogProperties { player?: _2c.Player; tags?: string[]};
export interface ProjectExportOptions { alwaysDay?: boolean; difficulty?: _2c.Difficulty; disableWeather?: boolean; exportName?: string; exportType: ProjectExportType; gameMode?: _2c.GameMode; initialTimOfDay?: number};
export interface SettingsUIElementOptions { dropdownItems?: string[]; max?: number; min?: number; refreshOnChange?: boolean};
export interface WeightedBlock { block: _2c.BlockType; weight: number};
export interface WidgetComponentBaseOptions { lockToSurface?: boolean; offset?: _2c.Vector3; stateChangeEvent?: (arg0: WidgetComponentStateChangeEventData)=>void; visible?: boolean};
export interface WidgetComponentClipboardOptions extends WidgetComponentBaseOptions{ boundsFillColor?: _2c.RGBA; boundsOutlineColor?: _2c.RGBA; clipboardMirror?: _2c.StructureMirrorAxis; clipboardNormalizedOrigin?: _2c.Vector3; clipboardOffset?: _2c.Vector3; clipboardRotation?: _2c.StructureRotation; showBounds?: boolean};
export interface WidgetComponentEntityOptions extends WidgetComponentBaseOptions{ deselectedAnimation?: string; isClickable?: boolean; selectedAnimation?: string};
export interface WidgetComponentGizmoOptions extends WidgetComponentBaseOptions{ axes?: Axis; enablePlanes?: boolean};
export interface WidgetComponentGuideOptions extends WidgetComponentBaseOptions{ };
export interface WidgetComponentRenderPrimitiveOptions extends WidgetComponentBaseOptions{ };
export interface WidgetComponentSplineOptions extends WidgetComponentBaseOptions{ controlPoints: Widget[]; splineType?: SplineType};
export interface WidgetComponentTextOptions extends WidgetComponentBaseOptions{ color?: _2c.RGBA};
export interface WidgetCreateOptions { bindPositionToBlockCursor?: boolean; collisionOffset?: _2c.Vector3; collisionRadius?: number; lockToSurface?: boolean; selectable?: boolean; snapToBlockLocation?: boolean; stateChangeEvent?: (arg0: WidgetStateChangeEventData)=>void; visible?: boolean};
export interface WidgetGroupCreateOptions { groupSelectionMode?: WidgetGroupSelectionMode; showBounds?: boolean; visible?: boolean};

// Classes - 76
export class BlockPalette { public constructor(); public getItem(index: number): IBlockPaletteItem; public removeItemAt(index: number): void; public removeItems(): void; public setItem(blockPaletteItem: IBlockPaletteItem, index: number): void;};
export class BlockPaletteManager { public addOrReplacePalette(paletteId: string, palette: BlockPalette): void; public getPalette(paletteId: string): (BlockPalette | undefined); public getPaletteIdList(): string[]; public getPaletteItem(paletteId: string, index: number): IBlockPaletteItem; public getPrimaryPalette(): BlockPalette; public getSelectedBlockType(): _2c.BlockType; public getSelectedItem(): IBlockPaletteItem; public removePalette(paletteId: string): void; public setPaletteItem(paletteId: string, index: number, item: IBlockPaletteItem): void; public setPrimaryPalette(paletteId: string): void; public setSelectedItem(item: IBlockPaletteItem): void; private constructor();};
export class BlockUtilities { public fillVolume(volume: _2c.BlockVolumeBase | _2c.CompoundBlockVolume | Selection, block?: _2c.BlockPermutation | _2c.BlockType | string): void; private constructor();};
export class BrushShapeManager { public readonly activeBrushShape?: BrushShape; public readonly activeBrushVolume?: _2c.CompoundBlockVolume; public readonly brushShapeList: BrushShape[]; public activateBrushTool(): void; public beginPainting(onComplete: (arg0: PaintCompletionState)=>void): void; public deactivateBrushTool(): void; public endPainting(cancelled: boolean): void; public getBrushShapeOffset(): _2c.Vector3; public getSettingsUIElements(brushName: string): SettingsUIElement[]; public registerBrushShape(name: string, icon: string, rebuild: ()=>_2c.CompoundBlockVolume, getSettingsUIElements: ()=>SettingsUIElement[]): void; public setBrushMask(mask: BlockMaskList): void; public setBrushShape(shape: _2c.Vector3[] | _2c.CompoundBlockVolume): void; public setBrushShapeOffset(offset: _2c.Vector3): void; public setBrushShapeVisible(visible: boolean): void; public setFlattenHeight(flattenHeight: number): void; public setFlattenRadius(flattenRadius: number): void; public setTerrainStrength(terrainStrength: number): void; public singlePaint(onComplete: (arg0: PaintCompletionState)=>void): void; public switchBrushPaintMode(paintMode: PaintMode): void; public switchBrushShape(name: string): _2c.CompoundBlockVolume; public uiSettingValueChanged(elementName: string, newValue: boolean | number | string | _2c.Vector3): boolean; private constructor();};
export class ClipboardChangeAfterEvent { public readonly isPrimary: boolean; public readonly itemId: string; private constructor();};
export class ClipboardChangeAfterEventSignal { public subscribe(callback: (arg0: ClipboardChangeAfterEvent)=>void): (arg0: ClipboardChangeAfterEvent)=>void; public unsubscribe(callback: (arg0: ClipboardChangeAfterEvent)=>void): void; private constructor();};
export class ClipboardItem { public readonly id: string; public readonly isEmpty: boolean; public clear(): void; public getPredictedWriteAsCompoundBlockVolume(location: _2c.Vector3, options?: ClipboardWriteOptions): _2c.CompoundBlockVolume; public getPredictedWriteAsSelection(location: _2c.Vector3, options?: ClipboardWriteOptions): Selection; public getSize(): _2c.Vector3; public readFromSelection(selection: Selection): void; public readFromStructure(structure: EditorStructure): void; public readFromWorld(from: _2c.Vector3, to: _2c.Vector3): void; public writeToWorld(location: _2c.Vector3, options?: ClipboardWriteOptions): boolean; private constructor();};
export class ClipboardManager { public readonly clipboard: ClipboardItem; public create(): ClipboardItem; private constructor();};
export class CurrentThemeChangeAfterEvent { public readonly id: string; private constructor();};
export class CurrentThemeChangeAfterEventSignal { public subscribe(callback: (arg0: CurrentThemeChangeAfterEvent)=>void): (arg0: CurrentThemeChangeAfterEvent)=>void; public unsubscribe(callback: (arg0: CurrentThemeChangeAfterEvent)=>void): void; private constructor();};
export class CurrentThemeColorChangeAfterEvent { public readonly color: _2c.RGBA; public readonly colorKey: string; private constructor();};
export class CurrentThemeColorChangeAfterEventSignal { public subscribe(callback: (arg0: CurrentThemeColorChangeAfterEvent)=>void): (arg0: CurrentThemeColorChangeAfterEvent)=>void; public unsubscribe(callback: (arg0: CurrentThemeColorChangeAfterEvent)=>void): void; private constructor();};
export class Cursor { public readonly faceDirection: number; public readonly isVisible: boolean; public getPosition(): _2c.Vector3; public getProperties(): CursorProperties; public getRay(): CursorRay; public hide(): void; public moveBy(offset: _2c.Vector3): _2c.Vector3; public resetToDefaultState(): void; public setProperties(properties: CursorProperties): void; public show(): void; private constructor();};
export class CursorPropertiesChangeAfterEvent { public readonly position?: CursorPosition; public readonly properties: CursorProperties; private constructor();};
export class CursorPropertyChangeAfterEventSignal { public subscribe(callback: (arg0: CursorPropertiesChangeAfterEvent)=>void): (arg0: CursorPropertiesChangeAfterEvent)=>void; public unsubscribe(callback: (arg0: CursorPropertiesChangeAfterEvent)=>void): void; private constructor();};
export class DataStore { public readonly actionBarContainer: DataStoreActionBarContainer; public readonly actionContainer: DataStoreActionContainer; public readonly afterEvents: DataStoreAfterEvents; public readonly menuContainer: DataStoreMenuContainer; public readonly modalToolContainer: DataStoreModalToolContainer; private constructor();};
export class DataStoreActionBarContainer { public getItemPayload(id: string): string; public getItemProperty(id: string, property: string): (boolean | number | string | undefined); public hasItemPayload(id: string): boolean; public hasItemProperty(id: string, property: string): boolean; public registerItem(id: string, payload: string): void; public unregisterItem(id: string): void; public updateRegisteredItem(id: string, payload: string): void; public updateRegisteredItemProperty(id: string, payload: string, property: string): void; private constructor();};
export class DataStoreActionContainer { public bindActionToControl(controlId: string, actionPayload: string): void; public removeActionFromControl(controlId: string, actionPayload?: string): void; private constructor();};
export class DataStoreAfterEvents { public readonly payloadReceived: DataStorePayloadAfterEventSignal; private constructor();};
export class DataStoreMenuContainer { public createItem(id: string, payload: string): void; public destroyItem(id: string): void; public getPayload(id: string): string; public getProperty(id: string, property: string): (boolean | number | string | undefined); public hasPayload(id: string): boolean; public hasProperty(id: string, property: string): boolean; public updateItem(id: string, payload: string): void; private constructor();};
export class DataStoreModalToolActivationChangedEvent { public readonly isActive: boolean; public readonly toolId?: string; private constructor();};
export class DataStoreModalToolActivationChangedEventSignal { public subscribe(callback: (arg0: DataStoreModalToolActivationChangedEvent)=>void): (arg0: DataStoreModalToolActivationChangedEvent)=>void; public unsubscribe(callback: (arg0: DataStoreModalToolActivationChangedEvent)=>void): void; private constructor();};
export class DataStoreModalToolContainer { public readonly toolActivationChanged: DataStoreModalToolActivationChangedEventSignal; public getSelectedTool(): (string | undefined); public getToolPayload(id: string): string; public getToolProperty(id: string, property: string): (boolean | number | string | undefined); public hasToolPayload(id: string): boolean; public hasToolProperty(id: string, property: string): boolean; public registerTool(id: string, payload: string): void; public unregisterTool(id: string): void; public updateRegisteredTool(id: string, payload: string): void; public updateRegisteredToolProperty(id: string, payload: string, property: string): void; public updateSelectedTool(toolId?: string): void; private constructor();};
export class DataStorePayloadAfterEvent { public readonly dataTag: string; public readonly payload: string; private constructor();};
export class DataStorePayloadAfterEventSignal { public subscribe(callback: (arg0: DataStorePayloadAfterEvent)=>void): (arg0: DataStorePayloadAfterEvent)=>void; public unsubscribe(callback: (arg0: DataStorePayloadAfterEvent)=>void): void; private constructor();};
export class DataTransferManager { public getRegisteredAccessors(): DataTransferCollectionNameData[]; public requestData(collectionUniqueId: string): Promise<DataTransferRequestResponse>; public sendData(collectionUniqueId: string, jsonData: string): void; public sendDataToClipboard(jsonData: string): void; private constructor();};
export class DataTransferRequestResponse { public readonly collectionName: string; public readonly data: string; public readonly schema: string; private constructor();};
export class EditorStructureManager { public createFromClipboardItem(item: ClipboardItem, structureName: string): EditorStructure; public getExistingTags(): string[]; public loadStructure(location: string, id: string): EditorStructure; public saveStructure(structure: EditorStructure): void; public searchStructures(options?: EditorStructureSearchOptions): EditorStructure[]; private constructor();};
export class ExportManager { public beginExportProject(options: GameOptions): Promise<ExportResult>; public canExportProject(): boolean; public getGameOptions(useDefault?: boolean): GameOptions; public getGameVersion(): string; private constructor();};
export class Extension { public readonly defaultToolGroupId: string; public readonly description: string; public readonly name: string; public readonly notes: string; private constructor();};
export class ExtensionContext { public readonly afterEvents: ExtensionContextAfterEvents; public readonly blockPalette: BlockPaletteManager; public readonly blockUtilities: BlockUtilities; public readonly brushShapeManager: BrushShapeManager; public readonly clipboardManager: ClipboardManager; public readonly cursor: Cursor; public readonly exportManager: ExportManager; public readonly extensionInfo: Extension; public readonly player: _2c.Player; public readonly playtest: PlaytestManager; public readonly selectionManager: SelectionManager; public readonly settings: SettingsManager; public readonly structureManager: EditorStructureManager; public readonly transactionManager: TransactionManager; public readonly widgetManager: WidgetManager; private constructor();};
export class ExtensionContextAfterEvents { public readonly clipboardChange: ClipboardChangeAfterEventSignal; public readonly currentThemeChange: CurrentThemeChangeAfterEventSignal; public readonly currentThemeColorChange: CurrentThemeColorChangeAfterEventSignal; public readonly cursorPropertyChange: CursorPropertyChangeAfterEventSignal; public readonly modeChange: ModeChangeAfterEventSignal; public readonly primarySelectionChange: PrimarySelectionChangeAfterEventSignal; private constructor();};
export class GraphicsSettings { public get(property: GraphicsSettingsProperty): (boolean | number | string | undefined); public getAll(): Record<string,boolean | number | string | undefined>; public set(property: GraphicsSettingsProperty, value: boolean | number | string): void; public setAll(properties: Record<string,boolean | number | string | undefined>): void; private constructor();};
export class IBlockPaletteItem { public getBlock(): (_2c.BlockType | undefined); public getDisplayName(): (string | undefined); public getType(): BlockPaletteItemType; public setBlock(block: _2c.BlockPermutation | _2c.BlockType | string): void; private constructor();};
export class InputService { public focusViewport(): void; public registerKeyBinding(contextId: string, bindingId: string, key: number, modifier: InputModifier, info: InputBindingInfo): void; public registerMouseBinding(contextId: string, bindingId: string, mouseAction: MouseActionCategory): void; public unregisterKeyBinding(controlId: string, bindingId: string): void; public unregisterMouseBinding(controlId: string, bindingId: string): void; private constructor();};
export class InternalPlayerServiceContext { public readonly dataStore: DataStore; public readonly dataTransfer: DataTransferManager; public readonly input: InputService; public readonly tickingArea: TickingAreaManager; private constructor();};
export class Logger { public debug(message: string, properties?: LogProperties): void; public error(message: string, properties?: LogProperties): void; public info(message: string, properties?: LogProperties): void; public warning(message: string, properties?: LogProperties): void; private constructor();};
export class MinecraftEditor { public readonly log: Logger; public readonly simulation: SimulationState; private constructor();};
export class MinecraftEditorInternal { public fireTelemetryEvent(player: _2c.Player, source: string, eventName: string, metadata: string): void; public getMapColorUnsafe(player: _2c.Player, coordinate: _2c.Vector3): _2c.RGBA; public getPlayerServices(player: _2c.Player): InternalPlayerServiceContext; public registerExtension(extensionName: string, activationFunction: (arg0: ExtensionContext)=>void, shutdownFunction: (arg0: ExtensionContext)=>void, options?: ExtensionOptionalParameters): Extension; private constructor();};
export class ModeChangeAfterEvent { public readonly mode: EditorMode; private constructor();};
export class ModeChangeAfterEventSignal { public subscribe(callback: (arg0: ModeChangeAfterEvent)=>void): (arg0: ModeChangeAfterEvent)=>void; public unsubscribe(callback: (arg0: ModeChangeAfterEvent)=>void): void; private constructor();};
export class PlaytestManager { public beginPlaytest(options: GameOptions): Promise<PlaytestSessionResult>; public getPlaytestSessionAvailability(): PlaytestSessionResult; private constructor();};
export class PrimarySelectionChangeAfterEventSignal { public subscribe(callback: (arg0: SelectionEventAfterEvent)=>void): (arg0: SelectionEventAfterEvent)=>void; public unsubscribe(callback: (arg0: SelectionEventAfterEvent)=>void): void; private constructor();};
export class PrimarySelectionChangedEvent { public readonly volume?: _2c.CompoundBlockVolume; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class ProbabilityBlockPaletteItem extends IBlockPaletteItem{ public addBlock(block: _2c.BlockPermutation | _2c.BlockType | string, weight: number): void; public constructor(displayName?: string); public getBlocks(): WeightedBlock[]; public removeBlockAt(index: number): void;};
export class Selection { public readonly isEmpty: boolean; public visible: boolean; public clear(): void; public getBlockLocationIterator(): _2c.BlockLocationIterator; public getBoundingBox(): _2c.BoundingBox; public getFillColor(): _2c.RGBA; public getOutlineColor(): _2c.RGBA; public getVolumeOrigin(): _2c.Vector3; public moveBy(delta: _2c.Vector3): _2c.Vector3; public moveTo(location: _2c.Vector3): _2c.Vector3; public peekLastVolume(forceRelativity?: _2c.CompoundBlockVolumePositionRelativity): (_2c.CompoundBlockVolumeItem | undefined); public popVolume(): void; public pushVolume(item: _2c.CompoundBlockVolumeItem): void; public set(other: _2c.CompoundBlockVolume | Selection): void; public setFillColor(color: _2c.RGBA): void; public setOutlineColor(color: _2c.RGBA): void; private constructor();};
export class SelectionEventAfterEvent { public readonly selectionEvent: PrimarySelectionChangedEvent; private constructor();};
export class SelectionManager { public readonly selection: Selection; public create(): Selection; private constructor();};
export class SettingsManager { public readonly graphics: GraphicsSettings; public readonly speed: SpeedSettings; public readonly theme: ThemeSettings; private constructor();};
export class SettingsUIElement { public readonly initialValue: boolean | number | string | _2c.Vector3; public readonly name: string; public readonly onChange: (arg0: boolean | number | string | _2c.Vector3)=>void; public readonly options: SettingsUIElementOptions; public constructor(name: string, initialValue: boolean | number | string | _2c.Vector3, onChange: (arg0: boolean | number | string | _2c.Vector3)=>void, options?: SettingsUIElementOptions);};
//@ts-ignore extending for classes with private constructor is possible with native API
export class SimpleBlockPaletteItem extends IBlockPaletteItem{ public constructor(displayName?: string);};
export class SimulationState { public isPaused(): boolean; public setPaused(isPaused: boolean): void; private constructor();};
export class SpeedSettings { public get(property: SpeedSettingsProperty): (number | undefined); public getAll(): Record<string,number | undefined>; public set(property: SpeedSettingsProperty, value: number): void; public setAll(properties: Record<string,number | undefined>): void; private constructor();};
export class ThemeSettings { public addNewTheme(id: string, name?: string, sourceThemeId?: string): void; public canThemeBeModified(id: string): boolean; public deleteTheme(id: string): void; public getCurrentTheme(): string; public getThemeColors(id: string): (Record<string,_2c.RGBA> | undefined); public getThemeIdList(): string[]; public getThemeName(id: string): string; public resolveColorKey(key: ThemeSettingsColorKey): _2c.RGBA; public setCurrentTheme(id: string): void; public setThemeName(id: string, name: string): void; public updateThemeColor(id: string, key: ThemeSettingsColorKey, newColor: _2c.RGBA): void; private constructor();};
export class TickingAreaManager { public isTickingAreaActive(areaIdentifier: string): boolean; public purgeTickingAreas(areaIdentifier: string): boolean; public releaseTickingArea(areaIdentifier: string): boolean; public requestTickingArea(areaIdentifier: string, from: _2c.Vector3, to: _2c.Vector3): boolean; private constructor();};
export class TransactionManager { public addEntityOperation(entity: _2c.Entity, type: EntityOperationType): boolean; public addUserDefinedOperation(transactionHandlerId: UserDefinedTransactionHandlerId, operationData: string, operationName?: string): void; public commitOpenTransaction(): boolean; public commitTrackedChanges(): number; public createUserDefinedTransactionHandler(undoClosure: (arg0: string)=>void, redoClosure: (arg0: string)=>void): UserDefinedTransactionHandlerId; public discardOpenTransaction(): boolean; public discardTrackedChanges(): number; public openTransaction(name: string): boolean; public redo(): void; public redoSize(): number; public trackBlockChangeArea(from: _2c.Vector3, to: _2c.Vector3): boolean; public trackBlockChangeCompoundBlockVolume(compoundBlockVolume: _2c.CompoundBlockVolume): boolean; public trackBlockChangeList(locations: _2c.Vector3[]): boolean; public trackBlockChangeSelection(selection: Selection): boolean; public undo(): void; public undoSize(): number; private constructor();};
export class UserDefinedTransactionHandlerId { private constructor();};
export class Widget { public bindPositionToBlockCursor: boolean; public collisionOffset: _2c.Vector3; public collisionRadius: number; public location: _2c.Vector3; public lockPositionToSurface: boolean; public readonly selectable: boolean; public selected: boolean; public showBoundingBox: boolean; public showCollisionRadius: boolean; public snapToBlockLocation: boolean; public visible: boolean; public addClipboardComponent(componentName: string, clipboardItem?: ClipboardItem, options?: WidgetComponentClipboardOptions): WidgetComponentClipboard; public addEntityComponent(componentName: string, actorNameId: string, options?: WidgetComponentEntityOptions): WidgetComponentEntity; public addGizmoComponent(componentName: string, options?: WidgetComponentGizmoOptions): WidgetComponentGizmo; public addGuideComponent(componentName: string, options?: WidgetComponentGuideOptions): WidgetComponentGuide; public addRenderPrimitiveComponent(componentName: string, primitiveType: WidgetComponentRenderPrimitiveTypeAxialSphere | WidgetComponentRenderPrimitiveTypeBox | WidgetComponentRenderPrimitiveTypeDisc | WidgetComponentRenderPrimitiveTypeLine, options?: WidgetComponentRenderPrimitiveOptions): WidgetComponentRenderPrimitive; public addSplineComponent(componentName: string, options?: WidgetComponentSplineOptions): WidgetComponentSpline; public addTextComponent(componentName: string, label: string, options?: WidgetComponentTextOptions): WidgetComponentText; public delete(): void; public deleteComponent(componentOrName: string | WidgetComponentBase): void; public getComponent(componentName: string): WidgetComponentBase; public getComponents(): WidgetComponentBase[]; public setStateChangeEvent(eventFunction?: (arg0: WidgetStateChangeEventData)=>void): void; private constructor();};
export class WidgetComponentBase { public readonly componentType: WidgetComponentType; public readonly location: _2c.Vector3; public lockToSurface: boolean; public readonly name: string; public offset: _2c.Vector3; public readonly valid: boolean; public visible: boolean; public readonly widget: Widget; public delete(): void; public setStateChangeEvent(eventFunction?: (arg0: WidgetComponentStateChangeEventData)=>void): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class WidgetComponentClipboard extends WidgetComponentBase{ public clipboardMirror: _2c.StructureMirrorAxis; public clipboardNormalizedOrigin: _2c.Vector3; public clipboardOffset: _2c.Vector3; public clipboardRotation: _2c.StructureRotation; public fillColor: _2c.RGBA; public outlineColor: _2c.RGBA; public showBounds: boolean; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class WidgetComponentEntity extends WidgetComponentBase{ public clickable: boolean; public playAnimation(animationName: string): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class WidgetComponentGizmo extends WidgetComponentBase{ public activated: boolean; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class WidgetComponentGuide extends WidgetComponentBase{ private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class WidgetComponentRenderPrimitive extends WidgetComponentBase{ public readonly primitiveType: PrimitiveType; public setPrimitive(primitive: WidgetComponentRenderPrimitiveTypeAxialSphere | WidgetComponentRenderPrimitiveTypeBox | WidgetComponentRenderPrimitiveTypeDisc | WidgetComponentRenderPrimitiveTypeLine): void; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class WidgetComponentRenderPrimitiveTypeAxialSphere extends WidgetComponentRenderPrimitiveTypeBase{ public center: _2c.Vector3; public color?: _2c.RGBA; public radius: number; public constructor(center: _2c.Vector3, radius: number, color?: _2c.RGBA);};
export class WidgetComponentRenderPrimitiveTypeBase { public readonly primitiveType: PrimitiveType; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class WidgetComponentRenderPrimitiveTypeBox extends WidgetComponentRenderPrimitiveTypeBase{ public center: _2c.Vector3; public color: _2c.RGBA; public size?: _2c.Vector3; public constructor(center: _2c.Vector3, color: _2c.RGBA, size?: _2c.Vector3);};
//@ts-ignore extending for classes with private constructor is possible with native API
export class WidgetComponentRenderPrimitiveTypeDisc extends WidgetComponentRenderPrimitiveTypeBase{ public center: _2c.Vector3; public color: _2c.RGBA; public radius: number; public constructor(center: _2c.Vector3, radius: number, color: _2c.RGBA);};
//@ts-ignore extending for classes with private constructor is possible with native API
export class WidgetComponentRenderPrimitiveTypeLine extends WidgetComponentRenderPrimitiveTypeBase{ public color: _2c.RGBA; public end: _2c.Vector3; public start: _2c.Vector3; public constructor(start: _2c.Vector3, end: _2c.Vector3, color: _2c.RGBA);};
//@ts-ignore extending for classes with private constructor is possible with native API
export class WidgetComponentSpline extends WidgetComponentBase{ public splineType: SplineType; public getControlPoints(): Widget[]; public getInterpolatedPoints(maxPointsPerControlSegment?: number): _2c.Vector3[]; public setControlPoints(widgetList: Widget[]): void; private constructor();};
export class WidgetComponentStateChangeEventData { public readonly component: WidgetComponentBase; public readonly gizmoActivated?: boolean; public readonly group: WidgetGroup; public readonly widget: Widget; private constructor();};
//@ts-ignore extending for classes with private constructor is possible with native API
export class WidgetComponentText extends WidgetComponentBase{ public color: _2c.RGBA; public label: string; private constructor();};
export class WidgetGroup { public readonly selectedWidgetCount: number; public visible: boolean; public visibleBounds: boolean; public createWidget(location: _2c.Vector3, options?: WidgetCreateOptions): Widget; public delete(): void; public deleteWidget(widgetToDelete: Widget): void; public deselectAllWidgets(): void; public selectAllWidgets(): void; private constructor();};
export class WidgetManager { public createGroup(options?: WidgetGroupCreateOptions): WidgetGroup; public deleteGroup(groupToDelete: WidgetGroup): void; private constructor();};
export class WidgetMouseButtonEventData { public readonly action: WidgetMouseButtonActionType; public readonly altPressed: boolean; public readonly controlPressed: boolean; public readonly shiftPressed: boolean; private constructor();};
export class WidgetStateChangeEventData { public readonly group: WidgetGroup; public readonly location?: _2c.Vector3; public readonly mouseEvent?: WidgetMouseButtonEventData; public readonly selected?: boolean; public readonly visible?: boolean; public readonly widget: Widget; private constructor();};

// Constants & Objects - 2

export const editor: MinecraftEditor;
export const editorInternal: MinecraftEditorInternal;

// Functions - 0

// Errors - 3
export class InvalidWidgetComponentError extends Error{ private constructor();};
export class InvalidWidgetError extends Error{ private constructor();};
export class InvalidWidgetGroupError extends Error{ private constructor();};
