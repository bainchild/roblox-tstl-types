declare class Enum {
    GetEnumItems(): Enum[];
}
declare class EnumItem<T> {
  EnumType: T;
  Value: number;
  Name: string;
}
declare namespace Enums {
  export function GetEnums(): Enum[];
  export class NormalId extends Enum {
    Top: EnumItem<this>;
    Bottom: EnumItem<this>;
    Back: EnumItem<this>;
    Front: EnumItem<this>;
    Right: EnumItem<this>;
    Left: EnumItem<this>;
  }
  export class SurfaceType extends Enum {
    Smooth: EnumItem<this>;
    Glue: EnumItem<this>;
    Weld: EnumItem<this>;
    Studs: EnumItem<this>;
    Inlet: EnumItem<this>;
    Universal: EnumItem<this>;
    Hinge: EnumItem<this>;
    Motor: EnumItem<this>;
    SteppingMotor: EnumItem<this>;
    SmoothNoOutlines: EnumItem<this>;
  }
}

declare class UDim_class {
  Scale: number;
  Offset: number;
}
/** @noSelf **/
declare namespace UDim {
  function new_(): UDim_class;
  function new_(Scale: number, Offset: number): UDim_class;
  export { new_ as new }
}

declare class UDim2_class {
  X: UDim_class;
  Y: UDim_class;
  Width: UDim_class;
  Height: UDim_class;
}
/** @noSelf **/
declare namespace UDim2 {
  function fromScale(xScale: number, yScale: number): UDim2_class;
  function fromOffset(xOffset: number, yOffset: number): UDim2_class;
  function new_(): UDim2_class;
  function new_(xScale: number | undefined, xOffset: number, yScale: number, yOffset: number): UDim2_class;
  function new_(x: UDim_class | undefined, y: UDim_class): UDim2_class;
  export { new_ as new, fromScale, fromOffset }
}

declare class BrickColor_class {
  Number: number;
  r: number;
  g: number;
  b: number;
  Name: string;
  Color: Color3_class;
}
/** @noSelf **/
declare namespace BrickColor {
  function new_(val: number): BrickColor_class;
  function new_(r: number, g: number | undefined, b:number | undefined): BrickColor_class;
  function new_(name: string): BrickColor_class;
  function new_(color: Color3_class): BrickColor_class;
  function palette(paletteValue: number): BrickColor_class;
  function random(): BrickColor_class;
  export { new_ as new, palette, random };
}

declare class Color3_class {
  R: number;
  G: number;
  B: number;
  Lerp(color: Color3_class, alpha: number): typeof this;
  /** @tupleReturn **/
  ToHSV(): [number, number, number];
  ToHex(): string;
}
/** @noSelf **/
declare namespace Color3 {
  function fromRGB(R: number, G: number, B: number): Color3_class;
  function fromHSV(H: number, S: number, V: number): Color3_class;
  function fromHex(hex: string): Color3_class;
  function new_(red: number, green: number, blue: number): Color3_class;
  export { new_ as new, fromRGB, fromHSV, fromHex }
}

declare class Vector2_class {
  zero: Vector2_class;
  one: Vector2_class;
  xAxis: Vector2_class;
  yAxis: Vector2_class;
  X: number;
  Y: number;
  Magnitude: number;
  Unit: typeof this;
  Cross(other: typeof this): typeof this;
  Dot(v: typeof this): number;
  Lerp(v: typeof this, alpha: number): typeof this;
  Max(...others: typeof this[]): typeof this;
  Min(...others: typeof this[]): typeof this;
}
/** @noSelf **/
declare namespace Vector2 {
  var zero: Vector2_class;
  var one: Vector2_class;
  var xAxis: Vector2_class;
  var yAxis: Vector2_class;
  function new_(x: number, y: number): Vector2_class;
  export { new_ as new, zero, one, xAxis, yAxis }
}

declare class Vector3_class {
  zero: Vector3_class;
  one: Vector3_class;
  xAxis: Vector3_class;
  yAxis: Vector3_class;
  zAxis: Vector3_class;
  X: number;
  Y: number;
  Z: number;
  Magnitude: number;
  Unit: typeof this;
  _mul: LuaMultiplicationMethod<number,typeof this> & LuaMultiplicationMethod<typeof this,typeof this>;
  _div: LuaDivisionMethod<number,typeof this> & LuaDivisionMethod<typeof this,typeof this>;
  _add: LuaAdditionMethod<typeof this,typeof this>;
  _sub: LuaSubtractionMethod<typeof this,typeof this>;
  _negate: LuaNegationMethod<typeof this>;
  Cross(other: typeof this): typeof this;
  Angle(other: typeof this, axis: typeof this): typeof this;
  Dot(other: typeof this): number;
  FuzzyEq(other: typeof this, epsilon: number): boolean;
  Lerp(goal: typeof this, alpha: number): typeof this;
  Max(vector: typeof this): typeof this;
  Min(vector: typeof this): typeof this;
}
/** @noSelf **/
declare namespace Vector3 {
  var zero: Vector3_class;
  var one: Vector3_class;
  var xAxis: Vector3_class;
  var yAxis: Vector3_class;
  var zAxis: Vector3_class;
  const _mul: LuaMultiplication<Vector3_class,number,Vector3_class> & LuaMultiplication<Vector3_class,Vector3_class,Vector3_class>;
  const _div: LuaDivision<Vector3_class,number,Vector3_class> & LuaDivision<Vector3_class,Vector3_class,Vector3_class>;
  const _add: LuaAddition<Vector3_class,Vector3_class,Vector3_class>;
  const _sub: LuaSubtraction<Vector3_class,Vector3_class,Vector3_class>;
  const _negate: LuaNegation<Vector3_class,Vector3_class>;
  function new_(x: number|undefined, y: number|undefined, z: number|undefined): Vector3_class;
  function FromNormalId(normal: EnumItem<Enums.NormalId>): Vector3_class;
  //function FromAxis(axis: typeof Axis_class): Vector3_class;
  export {
    zero,
    one,
    xAxis,
    yAxis,
    zAxis,
    _mul,
    new_ as new,
    FromNormalId,
    //FromAxis
  }
}

declare class NumberRange_class {
  Min: number;
  Max: number;
}
/** @noSelf **/
declare namespace NumberRange {
  function new_(value: number): NumberRange_class;
  function new_(minimum: number, maximum: number | undefined): NumberRange_class;
  export { new_ as new };
}

declare class RBXScriptConnection<P> {
  Connected: boolean;
  Disconnect(): void;
}
declare class RBXScriptSignal<T extends any[]> {
  Connect(f: (...a: T)=>any): RBXScriptConnection<this>;
  ConnectParallel(f: (...a: T)=>any): RBXScriptConnection<this>;
  Once(f: (...a: T)=>any): RBXScriptConnection<this>;
  Wait(): T;
}

declare class CFrame_class {
  identity: CFrame_class;
  Position: Vector3_class;
  Rotation: CFrame_class;
  X: number;
  Y: number;
  Z: number;
  LookVector: Vector3_class;
  RightVector: Vector3_class;
  UpVector: Vector3_class;
  XVector: Vector3_class;
  YVector: Vector3_class;
  ZVector: Vector3_class;
  Inverse(): typeof this;
  Lerp(goal: typeof this, alpha: number): typeof this;
  Orthonormalize(): typeof this;
  ToWorldSpace(cf: typeof this): typeof this;
  ToObjectSpace(cf: typeof this): typeof this;
  PointToWorldSpace(v3: Vector3_class): Vector3_class;
  PointToObjectSpace(v3: Vector3_class): Vector3_class;
  VectorToWorldSpace(v3: Vector3_class): Vector3_class;
  VectorToObjectSpace(v3: Vector3_class): Vector3_class;
  GetComponents(): [number,number,number,number,number,number,number,number,number,number,number,number];
  ToEulerAnglesXYZ(): [number,number,number];
  ToEulerAnglesYXZ(): [number,number,number];
  ToOrientation(): [number, number, number];
  ToAxisAngle(): Vector3_class;
  components(): [number,number,number,number,number,number,number,number,number,number,number,number];
}
/** @noSelf **/
declare namespace CFrame {
  function new_(): CFrame_class;
  export { new_ as new }
}

export {
  Enums,
  EnumItem,
  Enum,
  UDim_class,UDim,
  UDim2_class,UDim2,
  BrickColor_class,BrickColor,
  Color3_class,Color3,
  Vector2_class,Vector2,
  Vector3_class,Vector3,
  NumberRange_class,NumberRange,
  RBXScriptSignal,RBXScriptConnection,
  CFrame_class,CFrame
}
