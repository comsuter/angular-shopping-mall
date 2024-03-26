import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  thisYear: number = new Date().getFullYear();

  constructor() {}
  ngOnInit() {}
}
