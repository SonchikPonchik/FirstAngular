import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'FirstAngular';
  name = '';
  names: Array<string> = new Array();

  addItem(name: string): void {
    console.log(name);
    if(name==null || name.trim()=="")
        return;
    this.names.push(name);
  }
  
}
