import { Content } from "../typings"

export const fetchContent = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}get-content`)

    const data = await res.json()
    const content:Content[] = data.content

    return content
}