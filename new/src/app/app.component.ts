import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedItem;
  itemList = [{
   name: "WXYZ Name",
   confId: "1234",
   submittedDate: "01/01/2017",
   status: "APPROVED",
   fullName: "WXYZ Name",
   phoneNo: "123456789",
   emailId: "abcd@testmail.com",
   role: "Accountant",
   jobTitle: "Adminiatrator",
   statusDetail: "Approved by ABCD Person at 12451"
  },
  {
    name: "WXYZ Name",
    confId: "1234",
    submittedDate: "01/01/2017",
    status: "APPROVED",
    fullName: "WXYZ Name",
    phoneNo: "123456789",
    emailId: "abcd@testmail.com",
    role: "Accountant",
    jobTitle: "Adminiatrator",
    statusDetail: "Approved by ABCD Person at 12451"
   },
   {
    name: "Alan Peter",
    confId: "987654",
    submittedDate: "05/01/2014",
    status: "PENDING",
    fullName: "Alan Peter",
    phoneNo: "111111111111",
    emailId: "alanpeter@testmail.com",
    role: "kkvnrdk",
    jobTitle: "Supervisor",
    statusDetail: "In process"
   }];

   dialogTitle;
   openDialog(item){
     this.selectedItem = item;
     this.dialogTitle = "Completed Claims/EOB Request : " + item.confId;
   }
}