import { Component, Input } from '@angular/core';
import { Animal } from '../../services/search.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'selected-animal',
  imports: [FontAwesomeModule],
  templateUrl: './selected-animal.component.html',
})
export class SelectedAnimalComponent {
  faEdit = faEdit;
  toggleMenu() {
    console.log('editing');
  }
  @Input() animal!: Animal | undefined;

  constructor() {}

  ngOnInit() {
    if (this.animal) console.log(this.animal.description);
  }
}
