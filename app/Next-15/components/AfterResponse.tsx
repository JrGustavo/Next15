import { NextResponse } from "next/server";
import {  as after } from "next/server";

export async function AfterApiExample() {
    const response = NextResponse.json({ message: "Respuesta principal enviada" });

    // Ejecutar una tarea secundaria después de enviar la respuesta
    after(() => {
        console.log("Tarea secundaria ejecutada después de la respuesta");
        // Aquí puedes realizar tareas como registrar logs o ejecutar scripts
    });

    return response;
}
