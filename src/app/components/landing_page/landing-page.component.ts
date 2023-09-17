import { LandingePageService } from './landinge-page.services';
import { Component } from '@angular/core';
import { GPPointsTableData } from 'src/app/model/gp_points_table_data';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  name = 'Nahian Alam';
  tableData : GPPointsTableData[] = [];
  displayedColumns: string[] = ['name', 'actualGps', 'oldGps'];

  constructor(private serv: LandingePageService) {
    this.tableData = serv.getTableData();
    console.log('heelooo');
    console.log(this.tableData);
  }
}
