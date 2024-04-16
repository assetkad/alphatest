import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-technique',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './technique.component.html',
  styleUrl: './technique.component.scss',
})
export class TechniqueComponent {
  @Output() tabCloseEvent = new EventEmitter();

  techniqueCount = 2;

  ngOnInit() {
    console.log('technique inited');
  }
}
