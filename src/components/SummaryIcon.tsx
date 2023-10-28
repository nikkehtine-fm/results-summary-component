import icon_memory from "../assets/icon-memory.svg";
import icon_reaction from "../assets/icon-reaction.svg";
import icon_verbal from "../assets/icon-verbal.svg";
import icon_visual from "../assets/icon-visual.svg";

/**
 * Generates the icon image source based on the given props.
 *
 * Another hilariously overengineered solution. Just how I like them.
 */
export default function Icon(props: { source: string }): JSX.Element {
    console.log(props.source);
    let icon: string;
    let paths: string[] = props.source.split("/");
    let target: string = paths[2].slice(
        paths[2].indexOf("-") + 1,
        paths[2].indexOf(".")
    );
    switch (target) {
        case "reaction":
            icon = icon_reaction;
            break;
        case "memory":
            icon = icon_memory;
            break;
        case "verbal":
            icon = icon_verbal;
            break;
        case "visual":
            icon = icon_visual;
            break;
        default:
            icon = "404";
    }
    return <img src={icon} aria-hidden alt="icon" />;
}
