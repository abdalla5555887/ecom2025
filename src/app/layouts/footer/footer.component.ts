import { Component, Inject } from '@angular/core';
import { initFlowbite } from 'flowbite/lib/esm/components';
import { FlowbiteService } from '../../core/services/flowbite.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [ RouterLink,RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}


