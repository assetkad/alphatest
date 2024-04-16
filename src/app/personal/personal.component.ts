import { Component } from '@angular/core';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.scss',
})
export class PersonalComponent {
  ngOnInit() {
    console.log('personal initied');
  }
}
