import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    public http: HttpClient
  ) { }

  async search(term: string) {

    const url = 'search?term=' + term;

    return new Promise((resolve, reject) => {

      const httpRequest = this.http.get(url);
      httpRequest.subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });

    });

  }
}
