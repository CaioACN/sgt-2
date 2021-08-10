import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import {Responsavel} from "../../../../model/responsavel.model";
import {ResponsavelService} from "../../../../service/responsavel.service";

@Component({
  selector: 'app-responsavel-read',
  templateUrl: './responsavel-listar.component.html',
  styleUrls: ['./responsavel-listar.component.css']
})


export class ResponsavelListarComponent implements AfterViewInit {

  responsavel: Responsavel[] = [];


  displayedColumns: string[] = ['id', 'setor'];
  dataSource = new MatTableDataSource<Responsavel>(this.responsavel);

  constructor(private service: ResponsavelService, private router : Router)  { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.listar();
  }

  listar(): void {
    this.service.listar().subscribe((resposta) => {
      this.responsavel = resposta;
      console.log(resposta)
      this.dataSource = new MatTableDataSource<Responsavel>(this.responsavel);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToSalvar():void{
    this.router.navigate(['responsavel'])
  }

}



