import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchSubject = new BehaviorSubject<string>('');
  search$ = this.searchSubject.asObservable();

  setSearch(query: string) {
    this.searchSubject.next(query);
  }

  clear() {
    this.searchSubject.next('');
  }

  get value(): string {
    return this.searchSubject.value;
  }
}
