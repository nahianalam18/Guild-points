export class GPPointsTableData {
    constructor(public playerName: string, public actualGps: string, public oldGps: string) {
        this.playerName = playerName
        this.actualGps = actualGps;
        this.oldGps = oldGps;
    }
}