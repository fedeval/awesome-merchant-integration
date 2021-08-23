import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  getClientToken(): Observable<any> {
    const url = `${environment.PRIMER_API_URL}/auth/client-token`

    return this.httpClient.post<any>(url, {}, { headers:
      {
        "Content-Type": "application/json",
        "X-Api-Key": environment.API_KEY,
      }
    })
  }

}
