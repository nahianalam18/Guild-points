import { GPPointsTableData } from 'src/app/model/gp_points_table_data';
import axios from 'axios';

export class LandingePageService {
    async getTableData() {
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
        const firstData = guildData.shift()?.substring(1);
        const headers = ['Name'];
        var header = ''
        for (const character of firstData!) {
            header += character;
            if(character == ',') {
                header = header.slice(0, -1);
                headers.push(header.trim());
                header = '';
            }
        }
        headers.push(header);
        const dataICareAbout = [];
        for (const data of guildData) {
            const cleanValue = data.split(',').splice(0, 19);

            const name = cleanValue[0];
            if (name.length == 0) continue;
            const actualGps = cleanValue[1];
            const oldGps = cleanValue[cleanValue.length-1];
            const mazeAps = cleanValue[2];
            const tableData = new GPPointsTableData(name,mazeAps, actualGps, oldGps);
            dataICareAbout.push(tableData);
        }
       
        return dataICareAbout;
    }
}