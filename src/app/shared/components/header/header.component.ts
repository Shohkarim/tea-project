import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private searchService: SearchService, private router: Router) { }

  searchQuery: string = '';

  ngOnInit() {
    this.searchQuery = this.searchService.value;
  }

  onSearch(event: Event) {
    event.preventDefault();
    this.searchService.setSearch(this.searchQuery);
    this.router.navigate(['/catalog']);
  }

  clearSearch() {
    this.searchService.clear();
    this.searchQuery = '';
    this.router.navigate(['/catalog']);
  }

}
