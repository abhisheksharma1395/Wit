import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public rewardPoints: number = 2000;
  public reward:boolean = false;
  public bagTotal: number = 6150;
  public grandTotal: number = this.bagTotal-Math.floor(this.rewardPoints/100);
  public showPayment: boolean = false;
  public orderSuccess: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  pay(){
    this.orderSuccess = true;
  }

  ship(){
    this.showPayment=true;
  }

  orderPlaced() {
    this.router.navigate(['wallet']);
  }

}
