import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  public showWallet:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  goToHistory(){
    this.showWallet = false;
  }

}
