import axios from 'axios';

export class ApEntryPageService {
    async getPlayerList() {
        const publicLink = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQvDZTF6N5IlMszBB3hWbpIB6_sLOqxB563FGn3EY9U4kr9o_kX4sV2rddOGk70pLiZ2mUs1Yofo8Cr/pub?gid=0&single=true&output=csv';
        const response = axios.get(publicLink);
        const dataFromCsv = (await response).data;

        const guildData = [];
        var line = '';
        for (const character of dataFromCsv) {
            line += character;
            if(character == '\n') {
                line = line.slice(0, -5);
                guildData.push(line);
                line = '';
               }
        }

        const playerNames = [];
        for (const data of guildData) {
            const cleanValue = data.split(',');
            const name = cleanValue[0];
            if (name.length == 0) continue;
            playerNames.push(name);
        }
       
        return playerNames;
    }
}