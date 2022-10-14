import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TokenService } from "../inicioSesion/token.service";

@Component({
    selector: 'app-header',
    templateUrl: `./header.component.html`
})
export class HeaderComponent{
    isLogged = false;

    constructor(private tokenService: TokenService,private router: Router) { }
  
    ngOnInit() {
      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    }
  
    onLogOut(): void {
      this.tokenService.logOut();
      this.router.navigate(['/'])
      
    }
}