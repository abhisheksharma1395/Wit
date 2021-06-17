import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public rewardPoints: number = 646;
  public reward:boolean = false;
  public bagTotal: number = 6150;
  public grandTotal: number = this.bagTotal-Math.floor(this.rewardPoints/100);
  constructor() { }

  ngOnInit(): void {
  }

}
