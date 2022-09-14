import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { Observable, throwError  } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Email } from './email';
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';

interface EmailSummary {
  id: string | null;
  subject: string | null;
  from: string| null;

}



@Injectable({
  providedIn: 'root'
})
export class EmailService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient,
    private router: Router) { }

  getEmails() {
    return this.http.get<EmailSummary[]>(`${this.rootUrl}/emails`);
  }

  getEmail(id: string) {
    return this.http.get<Email>(`${this.rootUrl}/emails/${id}`).pipe(
    catchError(() => {
      debugger;
      this.router.navigateByUrl('/inbox/not-found');
      return EMPTY;

    })
    );
  }
}
