import { ApEntryPageService } from './ap-entry-page.services';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'ap-entry-page',
  templateUrl: './ap-entry-page.component.html',
  styleUrls: ['./ap-entry-page.component.scss'],
})
export class ApEntryPageComponent implements OnInit {
    shouldShowWrongAuthMessage: boolean = false;
    renderApInsertionUI: boolean = false;

    selectedMaze: string = '';
    refinedNames: string[] = [];

    allPlayerNames: string[] = [];
    filteredOptions: string[];

    addedPlayers: Set<string> = new Set();

    constructor(private service: ApEntryPageService) {
        this.filteredOptions = this.allPlayerNames.slice();
    }

    async ngOnInit() {
        this.allPlayerNames = await this.service.getPlayerList();
    }

    async enterAuthKey(event: Event) {
    const authKey = (event.target as HTMLInputElement).value;
    const url = 'https://ebmoyg1up1.execute-api.us-east-2.amazonaws.com/auth/user-authentication?authKey=';
    const urlWithQParams = url + authKey;
    const response = await fetch(urlWithQParams);
    const json = await response.json();
    if(await json['success'] == false) {
        this.shouldShowWrongAuthMessage = true;
    } else {
        this.renderApInsertionUI = true;
        this.shouldShowWrongAuthMessage = false;
    }
   }

   onChange(event: Event){
    const inputValue = (event.target as HTMLInputElement).value;
    const playerNames = inputValue.split(',');
    this.refinedNames = playerNames.map((name) => name.trim());
   }

   onSelection(event: MatSelectChange) {
    this.selectedMaze = event.value;
   }

   select(): void {
    const input = document.querySelector('input')! as HTMLInputElement;
    const inputValue = input.value;
    if(inputValue == '') return;

    if(this.addedPlayers.has(inputValue)){
        this.addedPlayers.delete(inputValue);
        return;
    }

    this.addedPlayers.add(inputValue);
   }

   filter(): void {
    const input = document.querySelector('input')! as HTMLInputElement;
    const filterValue = input.value;
    this.filteredOptions = this.allPlayerNames.filter(o => o.includes(filterValue));
  }
}
