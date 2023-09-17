export class GPPointsTableData {
    constructor(public playerName: string, public actualGps: number, public oldGps: number) {
        this.playerName = playerName
        this.actualGps = actualGps;
        this.oldGps = oldGps;
    }
}