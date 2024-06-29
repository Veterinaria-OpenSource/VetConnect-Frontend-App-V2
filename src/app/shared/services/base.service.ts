import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BaseService<T> {
  basePath: string = 'http://localhost:8080/api/v1';
  resourceEndpoint: string = '';

  httpOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  constructor(public http: HttpClient) {}

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

  // path to vet centers
  private vetCenterPath(): string {
    return `${this.basePath}${this.resourceEndpoint}`;
  }

  // path to vet center by id
  private vetCenterByIdPath(id: string): string {
    return `${this.vetCenterPath()}/${id}`;
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

  // get reviews by vet center id
  getReviewsByVetCenterId(vetCenterId: number): Observable<T[]> {
    return this.http
      .get<T[]>(`${this.basePath}${this.resourceEndpoint}/${vetCenterId}`).pipe(retry(2), catchError(this.handleError));
  }

  // get pet owners by id
  getPetOwnerById(id: number): Observable<T> {
    return this.http
      .get<T>(`${this.basePath}${this.resourceEndpoint}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

}
