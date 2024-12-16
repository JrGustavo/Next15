import {Users} from "@/app/Next-15/Users";
import InstrumentationExample from "@/app/Next-15/components/Instrumentation";
import AsyncRequestExample from "@/app/Next-15/components/AsyncRequest";

import FormExample from "@/app/Next-15/components/form";
import ServerActionsExample from "@/app/Next-15/components/ServerActionsExample";
import React from "react";
import {AfterApiExample} from "@/app/Next-15/components/AfterResponse";


const NextJsPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Lista de Usuarios</h1>
            <Users />
            <InstrumentationExample />
            <AsyncRequestExample />
            <AfterApiExample>Despúes de mi</AfterApiExample>
            <FormExample />
            <ServerActionsExample />
        </div>
    )
}

export default NextJsPage
