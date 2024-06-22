import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.css'
})
export class SearchFilterComponent {
  @Output() searchChange = new EventEmitter<string>();
  searchText: string = '';

  onSearchChange(event: Event): void {
    const inoutElement = event.target as HTMLInputElement;
    this.searchChange.emit(inoutElement.value);
  }

  updateSearch(searchText: string): void {
    this.searchText = searchText;
  }

}
