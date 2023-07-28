import Alert from "./Alert.svelte";
export default (message, color = "green") => {
    new Alert({
        target: document.body,
        props: {
            message,
            color
        }
    });
};
