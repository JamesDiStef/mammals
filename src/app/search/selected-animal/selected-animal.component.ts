import { Component, Input } from '@angular/core';
import { Animal } from '../../services/search.service';

@Component({
    selector: 'selected-animal',
    imports: [],
    templateUrl: './selected-animal.component.html'
})
export class SelectedAnimalComponent {
  @Input() animal!: Animal | undefined;

  constructor() {}

  ngOnInit() {
    if (this.animal) console.log(this.animal.description);
  }
}
