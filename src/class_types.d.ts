import {RBXScriptSignal, UDim_class, UDim2_class, BrickColor_class, Color3_class, Vector2_class, Vector3_class, Enum, Enums, EnumItem, NumberRange_class, CFrame_class} from "./datatypes";

export declare type AttributeValue = undefined | string | boolean | number | UDim_class | UDim2_class | BrickColor_class | Color3_class | Vector2_class | Vector3_class | typeof EnumItem | NumberRange_class // | Rect;
export declare class Instance {
  Archivable: boolean;
  readonly ClassName: string;  
  Name: string;
  Parent: Instance | undefined;
  RobloxLocked: boolean;

  AddTag(tag: string): void;
  GetTags(): string[];
  HasTag(tag: string): boolean;
  RemoveTag(tag: string): void;
  ClearAllChildren(): void;
  Clone(): Instance | undefined;
  Destroy(): void;
  FindFirstAncestor(name: string): Instance | undefined;
  FindFirstAncestorOfClass(className: string): Instance | undefined;
  FindFirstAncestorWhichIsA(className: string): Instance | undefined;
  FindFirstChild(name: string, recursive: boolean): Instance | undefined;
  FindFirstChild(name: string): Instance | undefined;
  FindFirstChildOfClass(className: string, recursive: boolean): Instance | undefined;
  FindFirstChildOfClass(className: string): Instance | undefined;
  FindFirstChildWhichIsA(className: string, recursive: boolean): Instance | undefined;
  FindFirstChildWhichIsA(className: string): Instance | undefined;
  FindFirstDescendant(name: string): Instance | undefined;
  // GetActor(): Actor | undefined;
  GetAttribute(attribute: string): AttributeValue;  
  GetAttributeChangedSignal(attribute: string): RBXScriptSignal<[string,AttributeValue]>;
  GetAttributes(): { [s: string]: AttributeValue };
  GetChildren(): Instance[];
  GetDebugId(scope: number | undefined): string;
  GetDebugId(): string;
  GetDescendants(): Instance[];
  GetFullName(): string;
  GetPropertyChangedSignal(property: string): RBXScriptSignal<[string, any]>;
  IsA(className: string): boolean;
  IsAncestorOf(descendant: Instance): boolean;
  IsDescendantOf(ancestor: Instance): boolean;
  SetAttribute(attribute: string, value: AttributeValue): void;
  WaitForChild(childName: string, timeOut: number | undefined): Instance|undefined;
  WaitForChild(childName: string): Instance|undefined;
}
export declare class PVInstance extends Instance {
  Origin: CFrame_class;
  "Pivot Offset": CFrame_class;
  GetPivot(): CFrame_class;
  PivotTo(targetCFrame: CFrame_class): void;
}
export declare class BasePart extends PVInstance {
  Anchored: boolean;
  AssemblyAngularVelocity: Vector3_class;
  readonly AssemblyCenterOfMass: Vector3_class;
  AssemblyLinearVelocity: Vector3_class;
  readonly AssemblyMass: number;
  readonly AssemblyRootPart: typeof BasePart;
  BackSurface: EnumItem<Enums.SurfaceType>;
  BottomSurface: EnumItem<Enums.SurfaceType>;
  BrickColor: BrickColor_class;
  CFrame: CFrame_class;
  CanCollide: boolean;
  CanQuery: boolean;
  CanTouch: boolean;
  CastShadow: boolean;
  readonly CenterOfMass: Vector3_class;
  CollisionGroup: string;
  Color: Color3_class;
  //readonly CurrentPhysicalProperties: PhysicalProperties_class;
  //CustomPhysicalProperties: PhysicalProperties_class;
  readonly ExtentsCFrame: CFrame_class;
  readonly ExtentsSize: Vector3_class;
  FrontSurface: EnumItem<Enums.SurfaceType>;
  LeftSurface: EnumItem<Enums.SurfaceType>;
  LocalTransparencyModifier: number;
  Locked: boolean;
  readonly Mass: number;
  Massless: boolean;
  Material: typeof EnumItem;//<Enums.Material>;
  MaterialVariant: string;
  Orientation: Vector3_class;
  PivotOffset: CFrame_class;
  Position: Vector3_class;
  readonly ReceiveAge: number;
  Reflectance: number;
  readonly ResizeIncrement: number;
  //readonly ResizableFaces: Faces_class;
  RightSurface: EnumItem<Enums.SurfaceType>;
  RootPriority: number;
  Rotation: Vector3_class;
  Size: Vector3_class;
  TopSurface: EnumItem<Enums.SurfaceType>;
  Transparency: number;

  ApplyAngularImpulse(impulse: Vector3_class): void;
  ApplyImpulse(impulse: Vector3_class): void;
  ApplyImpulseAtPosition(impulse: Vector3_class, position: Vector3_class): void;
  CanCollideWith(part: typeof BasePart): boolean;
  CanSetNetworkOwnership(): boolean;
  GetClosestPointOnSurface(pos: Vector3_class): Vector3_class;
  GetConnectedParts(recursive: boolean): Instance[];
  GetJoints(): Instance[];
  GetMass(): number;
  GetNetworkOwner(): Instance;//Player;
  GetNetworkOwnershipAuto(): boolean;
  GetRootPart(): Instance | undefined;
  GetTouchingParts(): Instance[];
  GetVelocityAtPosition(pos: Vector3_class): Vector3_class;
  IsGrounded(): boolean;
  Resize(normal: EnumItem<Enums.NormalId>, delta: number): boolean;
  SetNetworkOwner(playerInstance: Instance): void;
  SetNetworkOwnershipAuto(): void;
  // IntersectAsync, SubtractAsync, UnionAsync
}
export declare class FormFactorPart extends BasePart {}
export declare class Part extends FormFactorPart {
  Shape: typeof EnumItem;//<Enums.PartType>;
}
