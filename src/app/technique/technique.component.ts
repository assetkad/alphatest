import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

export interface TechniqueTableData {
  batteryIcon: string;
  tabNumber: number;
  name: string;
  output: string;
  strongestNode: string;
  timestamp: string;
}

@Component({
  selector: 'app-technique',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatSortModule,
  ],
  templateUrl: './technique.component.html',
  styleUrl: './technique.component.scss',
})
export class TechniqueComponent {
  @Output() tabCloseEvent = new EventEmitter();
  @Input() data!: TechniqueTableData[] | null;

  displayedColumns: string[] = [
    'select',
    'batteryIcon',
    'tabNumber',
    'name',
    'output',
    'strongestNode',
    'timestamp',
  ];
  selection = new SelectionModel<TechniqueTableData>(true, []);

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
