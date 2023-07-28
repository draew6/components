import Alert from "./Alert.svelte"

export default (message: string, color: "green" | "blue" | "red" | "yellow" = "green") => {
    new Alert({
        target: document.body,
        props: {
            message,
            color
        }
    })
}