import {cookies} from "next/headers";


export default async function AsyncRequest() {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')

    return (
        <div>
            <h1>Async Request API</h1>
            <p>Este es un componente donde utilizamos la API de  Cookies </p>
            <pre className="bg-sky-950 p-4 rounded">
            <code>Token actual: {token?.value}</code>
           </pre>
        </div>
    )
}
