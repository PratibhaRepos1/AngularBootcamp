import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { Observable, throwError  } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

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
interface SignInResponse {
  authenticated: boolean;
  username: string;

}
interface SigninCredentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject(true);
  username: string = '';
  
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
    return this.http.post<SignupResponse>(this.rootUrl + '/auth/signup', credentials)
    .pipe(
      tap(({ username }) => {
        this.signedin$.next(true);
        this.username = username;
      })
    );

  }

  checkAuth() {
    //using here template string
    return this.http.get<SignInResponse>(`${this.rootUrl}/auth/signedin`)
    .pipe(
      tap(({authenticated, username}) => {
        this.signedin$.next(authenticated);
        this.username = username;

      })
    );
  }

  signOut() {

    return this.http.post(this.rootUrl + '/auth/signout', {})
    .pipe(
      tap(() => {
        this.signedin$.next(false);
      })
    );
  }

  signin(credentials: any) {
     //using here template string
     return this.http.post<SignInResponse>(`${this.rootUrl}/auth/signin`, credentials)
     .pipe(
      tap(({ username}) => {
        this.signedin$.next(true);
        this.username = username;
      })
     )
    
    
  }

}
