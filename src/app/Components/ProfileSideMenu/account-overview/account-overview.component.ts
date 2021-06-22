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
    
     this.userService.getCustomerData().subscribe(
       e => {
         this.data = e.applicationUser;
          console.log(e.applicationUser.address);
        })
  }

}
