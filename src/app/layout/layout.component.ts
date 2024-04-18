import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ResizableModule } from 'angular-resizable-element';
import { AngularSplitModule } from 'angular-split';
import {
  PersonalComponent,
  PersonalTableData,
} from '../personal/personal.component';
import {
  TechniqueComponent,
  TechniqueTableData,
} from '../technique/technique.component';
import { BehaviorSubject } from 'rxjs';

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

  techniqueData$: BehaviorSubject<TechniqueTableData[]> = new BehaviorSubject<
    TechniqueTableData[]
  >([]);

  personalData$: BehaviorSubject<PersonalTableData[]> = new BehaviorSubject<
    PersonalTableData[]
  >([]);

  constructor() {}

  ngOnInit() {
    let temp = 1;
    const timerTech = setInterval(() => {
      if (temp > 3) clearInterval(timerTech);
      const newData: TechniqueTableData[] = [
        {
          batteryIcon: 'batteryfulled',
          name: 'lol',
          output: 'jfksdjf',
          strongestNode: 'fjksdljfl',
          tabNumber: temp,
          timestamp: '8273897239',
        },
      ];
      this.techniqueData$.next(this.techniqueData$.getValue().concat(newData));
      temp++;
    }, 5000);

    const personalTech = setInterval(() => {
      if (temp > 3) clearInterval(personalTech);
      const newData: TechniqueTableData[] = [
        {
          batteryIcon: 'batteryfulled',
          name: 'Артем',
          output: 'jfksdjf',
          strongestNode: 'fjksdljfl',
          tabNumber: temp,
          timestamp: '8273897239',
        },
      ];
      this.personalData$.next(this.personalData$.getValue().concat(newData));
      temp++;
    }, 5000);
  }

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
