export function strongTrace(text:string):void {
    colorTrace(text, "#FFFFFF", "#214565");
}
/**
 *
 * 可以用顏色寫console.log
 *
 *
 * @param text
 * @param textColor e.g. "#00ff00"
 * @param backgroundColor e.g. "#EFEFEF"
 */
export function colorTrace(text:string, textColor:string, backgroundColor:string):void {
    if (console) {
        console.log('%c' + text, "background:" + backgroundColor + "; color:" + textColor + ";");
    }
}