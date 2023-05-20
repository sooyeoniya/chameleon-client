import React from "react";
import EmptyInputModule from "../input/EmptyInputModule"
import {HistoryEntityData, ModelInputType, ModelParameters} from "../../../../types/chameleon-platform.common";
import {InputModelInfo} from "../../../../types/chameleon-client";
import {PageType} from "../../../../types/chameleon-client.enum";

export default function InputModule(type: PageType, parameters: ModelParameters, modelData: InputModelInfo, executeData: HistoryEntityData) {
    let inputType = modelData?.inputType;
    let Module;

    if (inputType === ModelInputType.EMPTY) {
        Module = (parameters && modelData) ? () => EmptyInputModule(type, parameters, modelData, executeData) : null;
    } else if (inputType === undefined) {
        Module = null;
    } else
        Module = (parameters && modelData) ? () => InputModule(type, parameters, modelData, executeData) : null;

    return (
        <div className="row-span-2 rounded-lg border-1 border-gray-300 overflow-auto">
            {Module ? <Module/> : <></>}
        </div>
    );
}