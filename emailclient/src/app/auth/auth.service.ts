import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { Observable, throwError  } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

interface usernameAvailableResponse {
  available: boolean;
}

interface SignupCredentials {
  username: string | null;
  password: string | null;
  passwordConfirmation: string| null;

}
interface SignupResponse {
  username: string;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) { }

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

  usernameAvailable(username: string) {
    return this.http
        .post<usernameAvailableResponse>(
          this.rootUrl + '/auth/username',
          {
            username
          });
  }

  checkUsername(username: any): Observable<usernameAvailableResponse> {
    const { uname }=  username.value;
   
    return this.http
      .post<usernameAvailableResponse>(
       this.rootUrl + '/auth/username',
       {uname},
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

  signup(credentials: any)
  {
    return this.http.post<SignupResponse>(this.rootUrl + '/auth/signup', credentials);

  }

}
