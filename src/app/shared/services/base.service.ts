import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BaseService<T> {
  basePath: string = 'https://662af7eade35f91de156e1c5.mockapi.io/api/v1';
  vetCenterEndpoint: string = '/vetCenter';

  constructor(private http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    // Default error handling
    if (error.error instanceof ErrorEvent) {
      console.error(`An error occurred: ${error.error.message}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.log(`Api returned core ${error.status}, body was ${error.error}`);
    }
    // Return an observable with a user-facing error message
    return throwError(
      () =>
        new Error('Something happened with request, please try again later.')
    );
  }

  private vetCenterPath(): string {
    return `${this.basePath}${this.vetCenterEndpoint}`;
  }

  // get all vet centers
  getVetCenters(): Observable<T[]> {
    return this.http
      .get<T[]>(this.vetCenterPath())
      .pipe(retry(2), catchError(this.handleError));
  }

  getVetCenterById(id: string): Observable<T> {
    return this.http
      .get<T>(`${this.vetCenterPath()}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }
}
