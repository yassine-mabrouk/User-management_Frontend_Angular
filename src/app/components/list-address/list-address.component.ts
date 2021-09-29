import { Component, OnInit } from '@angular/core';
import { AddressService } from './../../servises/address.service';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {
   addresses :any ;
  constructor(private addressService:AddressService) { }

  ngOnInit(): void {
    this.getAddresses();
  }

  getAddresses(){
    this.addressService.getAll().subscribe(res => {
      console.log("Adresses:")
      console.log(res)
  this.addresses=res;

    }, err=> console.log("Cannot get Adress "))
  };

}
