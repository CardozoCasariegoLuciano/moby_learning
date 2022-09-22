import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  people: Person[] = [
    new Person("Luciano", "Cardozo", 24, 70, 1.75),
    new Person("Lucas", "Loco", 30, 90, 1.75),
  ];

  constructor() {}

  ngOnInit(): void {}

  showPerson($event: Person) {
    console.log($event)
  }
}
