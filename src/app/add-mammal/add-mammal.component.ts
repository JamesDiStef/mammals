import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-add-mammal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-mammal.component.html',
})
export class AddMammalComponent {
  speciesForm = new FormGroup({
    species: new FormControl(''),
    funFact: new FormControl(''),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Initialize the form group with form controls
    this.speciesForm = this.fb.group({
      species: ['', [Validators.required, Validators.email]], // Email validation for "species"
      funFact: ['', Validators.required], // Required field for fun fact
    });
  }

  onSubmit() {
    if (this.speciesForm.valid) {
      console.log('Form submitted:', this.speciesForm.value);
    } else {
      console.log('Form is not valid', this.speciesForm.errors);
    }
  }
}
