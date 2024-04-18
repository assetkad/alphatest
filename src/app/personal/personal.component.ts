import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

export interface PersonalTableData {
  batteryIcon: string;
  tabNumber: number;
  name: string;
  output: string;
  strongestNode: string;
  timestamp: string;
}

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
  ],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.scss',
})
export class PersonalComponent {
  @Output() tabCloseEvent = new EventEmitter();
  @Input() data!: PersonalTableData[] | null;

  displayedColumns: string[] = [
    'select',
    'batteryIcon',
    'tabNumber',
    'name',
    'output',
    'strongestNode',
    'timestamp',
  ];
  selection = new SelectionModel<PersonalTableData>(true, []);

  ngOnInit() {}

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data?.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.data?.forEach((row) => this.selection.select(row));
  }
}
