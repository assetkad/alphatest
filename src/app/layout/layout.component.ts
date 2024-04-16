import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ResizableModule } from 'angular-resizable-element';
import { AngularSplitModule } from 'angular-split';
import { PersonalComponent } from '../personal/personal.component';
import { TechniqueComponent } from '../technique/technique.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    SidebarComponent,
    RouterOutlet,
    ResizableModule,
    AngularSplitModule,
    PersonalComponent,
    TechniqueComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LayoutComponent {
  @ViewChild(SidebarComponent) sidebarComponent!: SidebarComponent;

  closeTechnique() {
    this.sidebarComponent.resetButtonStyle(
      this.sidebarComponent.techniqueButton
    );
  }

  closePersonal() {
    this.sidebarComponent.resetButtonStyle(
      this.sidebarComponent.personalButton
    );
  }
}
