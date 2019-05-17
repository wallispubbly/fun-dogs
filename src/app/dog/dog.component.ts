import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  
  results = '';

  constructor(private http: HttpClient) {};

  ngOnInit(): void {
  	this.http.get('https://random.dog/woof.json').subscribe(
  		data => {this.results = data['url']});
  }

}
