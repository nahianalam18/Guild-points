import { HtmlParser } from '@angular/compiler';
import { Component} from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'ap-entry-page',
  templateUrl: './ap-entry-page.component.html',
  styleUrls: ['./ap-entry-page.component.scss']
})
export class ApEntryPageComponent {
    shouldShowWrongAuthMessage: boolean = false;
    renderApInsertionUI: boolean = false;
    selectedMaze: string = '';
    refinedNames: string[] = [];

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
}
