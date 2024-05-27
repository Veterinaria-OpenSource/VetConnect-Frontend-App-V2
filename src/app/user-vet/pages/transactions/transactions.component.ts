import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatCell, MatHeaderCell, MatHeaderCellDef, MatRow, MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Transaction {
  id: number;
  email: string;
  service: string;
  date: Date;
  price: number;
  commission: number;
  netPrice: number;
}

const ELEMENT_DATA: Transaction[] = [
  { id: 1, email: "usuario1@example.com", service: "Servicio A", date: new Date(2024, 4, 1), price: 100, commission: 10, netPrice: 90 },
  { id: 2, email: "usuario2@example.com", service: "Servicio B", date: new Date(2024, 4, 2), price: 200, commission: 20, netPrice: 180 },
  { id: 3, email: "usuario3@example.com", service: "Servicio C", date: new Date(2024, 4, 3), price: 300, commission: 30, netPrice: 270 },
  { id: 4, email: "usuario4@example.com", service: "Servicio D", date: new Date(2024, 4, 4), price: 400, commission: 40, netPrice: 360 },
  { id: 5, email: "usuario5@example.com", service: "Servicio E", date: new Date(2024, 4, 5), price: 500, commission: 50, netPrice: 450 },
  { id: 6, email: "usuario6@example.com", service: "Servicio F", date: new Date(2024, 4, 6), price: 600, commission: 60, netPrice: 540 },
  { id: 7, email: "usuario7@example.com", service: "Servicio G", date: new Date(2024, 4, 7), price: 700, commission: 70, netPrice: 630 },
  { id: 8, email: "usuario8@example.com", service: "Servicio H", date: new Date(2024, 4, 8), price: 800, commission: 80, netPrice: 720 },
  { id: 9, email: "usuario9@example.com", service: "Servicio I", date: new Date(2024, 4, 9), price: 900, commission: 90, netPrice: 810 },
  { id: 10, email: "usuario10@example.com", service: "Servicio J", date: new Date(2024, 4, 10), price: 1000, commission: 100, netPrice: 900 }
];

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'email', 'service', 'date','price','commission',"netPrice"];
  dataSource = new MatTableDataSource<Transaction>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    // No inicializar paginator y sort aquí
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}


