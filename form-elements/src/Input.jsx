import { useLayoutEffect } from "react"

export default function Input({ callBack = null }) {

    useLayoutEffect(() => {
        if (!callBack) {
            console.warn("No callBack provided to Input component");
        }
    }, [callBack]);

    return (
        <input onChange={callBack} />
    )
}
