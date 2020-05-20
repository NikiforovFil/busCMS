import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, MDBBootstrapModule.forRoot()],
    exports: [FormsModule, ReactiveFormsModule, MDBBootstrapModule]
})

export class SharedModule { }