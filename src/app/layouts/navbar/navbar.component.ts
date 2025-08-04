import { ScartService } from './../../core/services/cart/scart.service';
import { AuthService } from './../../core/services/auth/auth.service';
import { Component, OnInit, Inject, input } from '@angular/core';
import { FlowbiteService } from '../../core/services/flowbite.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
    imports: [ RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  numcart: number = 0;

  constructor(@Inject(FlowbiteService) private flowbiteService: FlowbiteService,private authService:AuthService,private scartService:ScartService) {}
  isloggedIn = input(true);
  ngOnInit(): void {
    this.scartService.getCart().subscribe({
       next:(res)=>{
        this.scartService.cartNumber.next(res.numOfCartItems);
  }
})

     this.scartService.cartNumber.subscribe({
      next:(value) => {
        this.numcart = value;
      }
    });
    this.flowbiteService.loadFlowbite((flowbite: any) => {
      this.initFlowbite();
    });
  }

  initFlowbite(): void {
    // your init code here
  }
  logOut(): void {
    this.authService.signOut();

  }
}
