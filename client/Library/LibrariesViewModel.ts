import * as React from "react";
import { EncounterCommander } from "../Commands/EncounterCommander";
import { TrackerViewModel } from "../TrackerViewModel";
import { Libraries as LibrariesComponent, LibrariesProps } from "./Components/Libraries";
import { Libraries } from "./Libraries";

export class LibrariesViewModel {
    public component: React.ComponentElement<any, LibrariesComponent>;
    constructor(
        tracker: TrackerViewModel,
        encounterCommander: EncounterCommander,
        libraries: Libraries
    ){
        const props: LibrariesProps = {
            encounterCommander,
            tracker,
            encounterLibrary: libraries.Encounters,
            npcLibrary: libraries.NPCs,
            pcLibrary: libraries.PCs
        };
        this.component = React.createElement(LibrariesComponent, props);
    }
}
