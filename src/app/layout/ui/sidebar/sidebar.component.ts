import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_TOOLTIP_DEFAULT_OPTIONS,
  MatTooltipDefaultOptions,
  MatTooltipModule,
} from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 0,
  hideDelay: 500,
  touchendHideDelay: 1000,
};

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults },
  ],
})
export class SidebarComponent implements AfterViewInit {
  @Output() techniqueEvent = new EventEmitter();
  @Output() personalEvent = new EventEmitter();

  @ViewChild('technique', { read: ElementRef })
  techniqueButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('personal', { read: ElementRef })
  personalButton!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit(): void {}

  selectTechnique() {
    this.techniqueEvent.emit();
    this.updateButtonStyle(this.techniqueButton);
    this.resetButtonStyle(this.personalButton);
  }

  selectPersonal() {
    this.personalEvent.emit();
    this.updateButtonStyle(this.personalButton);
    this.resetButtonStyle(this.techniqueButton);
  }

  updateButtonStyle(button: ElementRef<HTMLButtonElement> | undefined) {
    if (button) {
      const img = button.nativeElement.querySelector('img');
      if (img) {
        if (button === this.personalButton) {
          img.src = '../../../../assets/icons/SelectedStaff.svg';
        } else if (button === this.techniqueButton) {
          img.src = '../../../../assets/icons/SelectedMachinery.svg';
        }
      }
      button.nativeElement.style.background = '#2D49D2';
      button.nativeElement.style.borderRadius = 'unset';
    }
  }

  resetButtonStyle(button: ElementRef<HTMLButtonElement> | undefined) {
    if (button) {
      const img = button.nativeElement.querySelector('img');
      if (img) {
        if (button === this.personalButton) {
          img.src = '../../../../assets/icons/Staff.svg';
        } else if (button === this.techniqueButton) {
          img.src = '../../../../assets/icons/Machinery.svg';
        }
      }
      button.nativeElement.style.background = '';
      button.nativeElement.style.borderRadius = '';
    }
  }
}
