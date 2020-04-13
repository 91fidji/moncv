import { Component, OnInit } from '@angular/core';
import { ProductionsService } from '../services/productions.service';
import { Router } from '@angular/router';
import { FormGroup, FormControlName, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-productions',
  templateUrl: './productions.component.html',
  styleUrls: ['./productions.component.css']
})
export class ProductionsComponent implements OnInit {
  productions: any;
  addProductionForm: FormGroup;

  constructor(private productionsServices: ProductionsService, private router: Router) { }

  ngOnInit(): void {
    this.getProductions();
    this.createForm();
  }

  getProductions() {
    return this.productionsServices.getProductions().subscribe(result => {
      this.productions = result;
    });
  }

  onSubmit(website) {
    console.log('le website', website);
    this.productionsServices.addProduction(website);
  }

  createForm() {
    this.addProductionForm = new FormGroup({
      name: new FormControl(),
      url: new FormControl(),
      websiteName: new FormControl(),
    });
  }



}
