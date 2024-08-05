import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateShortenedUrlService {
  private apiUrl = 'http://localhost:8080/shortner';

  constructor(private http: HttpClient) { }

  execute(form: formRequest): Observable<formResponse> {
    return this.http.post<formResponse>(this.apiUrl, form).pipe(
      map(response => {
        response.urlShortened = `${this.apiUrl}/${response.slug}`;
        return response;
      })
    );
  }
}

interface formRequest {
  originalUrl: string;
  slug: string;
  urlShortened: string
}

interface formResponse {
  originalUrl: string;
  slug: string;
  clicks: number;
  urlShortened: string;
}
