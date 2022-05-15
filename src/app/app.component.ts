import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  language: string = '';
  listOfLenguages: string[] = ["English", "Hindi", "Spanish"];

  addLanguage() {
    console.log("addLanguage() called!")
    this.listOfLenguages.push(this.language)

    console.log(this.listOfLenguages)
  }

  deleteFirst(){
    this.listOfLenguages.splice(0, 1)
  }
}
