export class GPPointsTableData {
    constructor(public playerName: string, public mazeAps: string, public actualGps: string, public oldGps: string) {
        this.playerName = playerName;
        this.mazeAps = mazeAps;
        this.actualGps = actualGps;
        this.oldGps = oldGps;
    }
}