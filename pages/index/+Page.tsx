import { HomePage } from "#pages/HomePage/ui/HomePage.jsx";
import { useState } from "react";
import { useData } from "vike-react/useData";

export default function Page() {
    // const data = useData();
    const [name, setName] = useState('')
    // window.location.search = `?name=${name}`

    return (
        <HomePage />
    )
}