import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.css']
})
export class ShoppingBagComponent implements OnInit {

  public rewardPoints: number = 2000;
  public reward:boolean = false;
  public bagTotal: number = 6150;
  public grandTotal: number = this.bagTotal;
  private sustainable: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onChange(event){
    this.reward = event.target.checked;
    this.grandTotal = (this.reward)? this.bagTotal - Math.floor(this.rewardPoints/100): this.bagTotal;
  }

  proceed() {
    this.router.navigate(['checkout']);
  }

  onChangeSustainable(event){
    this.sustainable = event.target.checked;
  }

}
