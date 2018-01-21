import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  reqList = [{
    reqNo: "1",
    name: "XYZ Name",
    phoneNo: "9999999999"

  }, {
    reqNo: "2",
    name: "ABC Name",
    phoneNo: "123456789"

  }];
}
