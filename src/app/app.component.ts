import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateShortenedUrlService } from './services/create-shortened-url.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  form: FormGroup;
  createShortenedUrl: CreateShortenedUrlService;

  constructor(private fb: FormBuilder, createShortenedUrl: CreateShortenedUrlService) {
    this.form = this.fb.group({
      originalUrl: ['', Validators.required],
      slug: ['', []],
      urlShortened: ['', []]
    });

    this.createShortenedUrl = createShortenedUrl;
  }

  onSubmit() {
    if (this.form.valid) {
      let response = this.createShortenedUrl.execute(this.form.value)
      response.subscribe((data: formResponse) => {
        this.form.patchValue({
          urlShortened: data.urlShortened
        })
      });
    }
  }

}

interface formResponse {
  originalUrl: string;
  slug: string;
  clicks: number;
  urlShortened: string;
}
