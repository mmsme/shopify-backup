import { Component, OnInit } from '@angular/core';
import { FormsService } from 'src/app/Services/Forms/forms.service';

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.css']
})
export class AccountOverviewComponent implements OnInit {

  constructor(private userService: FormsService) { }
  data: any;
  ngOnInit(): void {
    let token = localStorage.getItem('token');
    var splitted = token.split('.', 3); 
    let id = splitted[2];
    console.log(id)
     this.userService.getCustomerData(id).subscribe(
       e => {
         this.data = e.applicationUser;
          console.log(e.applicationUser.address);
        })
  }

}
