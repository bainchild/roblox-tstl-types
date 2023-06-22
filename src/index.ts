import * as classes from "./class_types";
import * as types from "./datatypes"

/** @noSelf **/
declare function print(...text: any[]): void;

declare var game: classes.PVInstance;
declare var workspace: classes.PVInstance;

print(game,workspace,types.CFrame.new())
