import { Component, OnInit } from '@angular/core';
import {Userdictionary} from "../model/userdictionary";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {DictionaryService} from "../service/dictionary.service";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  dictionary!: Userdictionary;
  id!: number;

  constructor(private dictionaryService: DictionaryService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params.get('id'));

      this.id = Number(params.get('id'));

    });
    this.dictionaryService.findById(this.id).subscribe(dictionary => this.dictionary=dictionary);
  }

}
