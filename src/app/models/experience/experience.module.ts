import { NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Experience {

  constructor(@Inject(String) public title: string, @Inject(String) public employer: string) {}

}
