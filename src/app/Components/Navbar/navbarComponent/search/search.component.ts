import { NgModel } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSearch(data: NgModel) {
    if (data.value.trim() === '' || data.invalid) {
      return;
    }

    this.router.navigate(['/home/search'], {
      queryParams: { key: data.value.trim() },
    });
  }

  clearSearchBox(textbox: NgModel) {
    textbox.control.setValue('');
  }
}
