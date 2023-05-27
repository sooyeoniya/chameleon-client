import React from "react";
import {HistoryEntityData, HistoryStatus} from "../../../../types/chameleon-platform.common";
import {OutputModuleMap} from "../../../../types/chameleon-client.enum";
import EmptyOutputModule from "../output/EmptyOutputModule";

export default function OutputModule(executeData: HistoryEntityData) {
    let Module
    if(executeData?.status === HistoryStatus.FINISHED)
        Module = executeData?.outputType ? OutputModuleMap[executeData.outputType] : EmptyOutputModule
    else
        Module = EmptyOutputModule
    return (
        <div className="row-span-3 col-span-2 rounded-lg border-1 border-gray-300">
            <Module {...executeData}/>
        </div>
    );
}