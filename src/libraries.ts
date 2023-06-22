import * as classes from "./class_types";
/** @noSelf **/
declare namespace Instance {
    function new_(x: string): classes.Instance;
    function new_(x: string, p: classes.Instance): classes.Instance;
    export {new_ as new}
}