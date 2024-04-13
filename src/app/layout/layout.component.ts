import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  standalone: true,
  imports: [MatSidenavModule, SidebarComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LayoutComponent {}
