import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TransactionDetails } from '../models/transactionDetails';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  paymentService(transaction: TransactionDetails) {
    return (body: any): Observable<any> => {
      const { token } = JSON.parse(body)
      const url = `${environment.PRIMER_API_URL}/payments`
      const orderId = "order-123." + Math.random();
      
      return this.httpClient.post(url, {
        amount: Math.round(transaction.amount),
        currencyCode: transaction.currencyCode,
        orderId: orderId,
        paymentInstrument: {
          token
        }
      },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": environment.API_KEY
          }
        })
    }
  }
}
