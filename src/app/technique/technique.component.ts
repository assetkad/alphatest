import { Component } from '@angular/core';

@Component({
  selector: 'app-technique',
  standalone: true,
  imports: [],
  templateUrl: './technique.component.html',
  styleUrl: './technique.component.scss',
})
export class TechniqueComponent {
  ngOnInit() {
    console.log('technique inited');
  }
}
