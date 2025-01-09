import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Animal {
  species: string;
  description: string;
  wiki: string;
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  // private apiUrl = 'http://localhost:3000/animals';
  private apiUrl =
    'https://us-central1-xenon-heading-433720-j4.cloudfunctions.net/api/animals';
  constructor(private http: HttpClient) {}

  async getAllAnimals(): Promise<Animal[]> {
    let data = await fetch(this.apiUrl);
    return (await data.json()) ?? [];
  }

  async getAnimalBySpecies(species: string): Promise<Animal[] | undefined> {
    let data = await fetch(this.apiUrl + '/' + species);
    return (await data.json()) ?? {};
  }
}
