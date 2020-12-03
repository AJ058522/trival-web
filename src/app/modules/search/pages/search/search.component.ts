import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SearchService } from '../../../../core/services/search/search.service';
import { SearchResult } from '../../../../shared/models/search/search-result';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  isLoading: boolean = false;
  results: Array<SearchResult> = [];
  showResults: string = null;

  constructor(
    private _formBuilder: FormBuilder,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {

    this.searchForm = this._formBuilder.group({
      term: ['', Validators.required]
    });

  }

  search(){

    this.loading();
    this.results = [];
    this.showResults = null;
    const term: string = this.searchForm.get('term').value;

    this.searchService.search(term)
    .then(data => {
      const resp: any = data;
      this.results = resp;
      this.showResults = (resp.length > 0)? 'success' : 'error';
      this.loading();
    },
      error => {
        this.showResults = 'error';
        this.loading();
      });

  }

  loading(){

    this.isLoading = !this.isLoading;
  }

}
