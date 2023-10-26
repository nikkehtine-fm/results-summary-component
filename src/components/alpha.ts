/**
 * Gets the hsla value and changes the last property
 *
 * I am aware this is a hilariously overengineered solution,
 * and I'm proud of it.
 */
export default function changeAlpha(color: string, alphaVal: number): string {
    const params: string[] = color.split(", ");
    let transparency: number = alphaVal / 100;
    params[3] = transparency.toString() + ")";
    return params.join(", ");
}
