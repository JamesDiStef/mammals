import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from './search.service';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root',
})
export class AddMammalService {
  private apiUrl =
    'https://us-central1-xenon-heading-433720-j4.cloudfunctions.net/api/animals';
  constructor(private http: HttpClient) {}

  async addMammal(species: string, description: string, wiki: string) {
    let data = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify the content type
      },
      body: JSON.stringify({
        species: species,
        description: description,
        wiki: wiki,
      }),
    });
  }
}
