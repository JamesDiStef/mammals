import { Component, Input } from '@angular/core';
import { Animal } from '../search/search.service';

@Component({
  selector: 'selected-animal',
  standalone: true,
  imports: [],
  templateUrl: './selected-animal.component.html',
})
export class SelectedAnimalComponent {
  @Input() animal!: Animal | undefined;

  constructor() {}

  ngOnInit() {
    if (this.animal) console.log(this.animal.description);
  }
}
