import { Component, OnInit } from '@angular/core';
import { Userdictionary } from '../model/userdictionary';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { DictionaryService } from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-table',
  templateUrl: './dictionary-table.component.html',
  styleUrls: ['./dictionary-table.component.css'],
  providers:  [ DictionaryService ]
})
export class DictionaryTableComponent implements OnInit {

  dataSource!: Userdictionary[];
  id!: number;

  displayedColumns: string[] = ['id', 'name', 'action'];



  constructor(private route: ActivatedRoute,
              private dictionaryService: DictionaryService,
              private router: Router) { }

  ngOnInit(): void {
        this.refresh();
  }

  refresh(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'));
    });

    this.dictionaryService.findByUserId(this.id).subscribe(dataSource => this.dataSource=dataSource);
  }

  openDialog(action: string, obj: object): void {
  }

  public delete(): void {
  }

}
