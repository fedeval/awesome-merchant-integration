import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { loadPrimer } from '@primer-io/checkout-web';
import { PaymentService } from 'src/app/services/payment.service';
import { TransactionDetails } from 'src/app/models/transactionDetails';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @Input() totalPrice: number;
  clientToken = '';
  transactionDetails: TransactionDetails = {
    amount: 0,
    currencyCode: 'EUR'
  };

  constructor(
    private router: Router, 
    private auth: AuthService,
    private payments: PaymentService) {
      this.totalPrice = 0
    }

  ngOnInit(): void {
    this.initializeCheckout()
  }

  ngOnChanges(): void {
    this.transactionDetails.amount = this.totalPrice * 100
  }

  initializeCheckout() {
    this.transactionDetails.amount = this.totalPrice * 100

    this.auth.getClientToken().subscribe(async (data) => {
      this.clientToken = data.clientToken

      const sendPayment = this.payments.paymentService(this.transactionDetails)

      const Primer = await loadPrimer();
      const primer = new Primer({
        credentials: { clientToken: this.clientToken, },
      });

      // @ts-ignore
      await primer.checkout({
        container: "#checkout-container",

        onTokenizeSuccess(paymentMethod) {
          return sendPayment(JSON.stringify(paymentMethod)).subscribe()
        },
      })
    })
  }

  ngDoCheck() {
    if (document.getElementById('primer-checkout-scene-success-check')) {
      setTimeout(() => {
        this.router.navigate([
          'confirmation',
          { fullName: 'John Applessed', address: '154 Bishopsgate, London' }
        ]);
      }, 2500);
    }
  }
}
