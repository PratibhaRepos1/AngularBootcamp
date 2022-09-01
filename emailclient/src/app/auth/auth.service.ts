import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { Observable, throwError  } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

interface usernameAvailableResponse {
  available: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

  usernameAvailable(username: string) {
    debugger;
    return this.http
        .post<usernameAvailableResponse>('https://api.angular-email.com/auth/username', {
            username
        })
  }

  checkUsername(username: any): Observable<usernameAvailableResponse> {
    const { uname }=  username.value;
    console.log(uname);
    return this.http
      .post<usernameAvailableResponse>(
        'https://api.angular-email.com/auth' + '/username',
       {username: uname},
       this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
 }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }


}
