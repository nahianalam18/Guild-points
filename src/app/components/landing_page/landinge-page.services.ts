import { GPPointsTableData } from 'src/app/model/gp_points_table_data';


export class LandingePageService {
    getTableData() {
        const tableData = [];
        for (let i = 0; i < 5; i++) {
            const data = new GPPointsTableData('Nathaniale', i, i+1);
            tableData.push(data);
        }
        return tableData;
    }
}