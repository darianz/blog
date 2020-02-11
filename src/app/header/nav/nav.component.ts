import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  displayName = "pita";
  constructor(private authService: AuthService) { }

  ngOnInit() {
    
    if(this.authService.getLogged()){
      console.log("displayname:" + this.authService.getDisplayName());
      this.displayName = this.authService.displayName;
    }
    
  }

}
