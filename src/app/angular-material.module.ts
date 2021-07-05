import { NgModule } from "@angular/core";
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { MatSelectModule } from "@angular/material/select";


@NgModule({

exports:[
    MatInputModule,
    MatCardModule,
    MatSelectModule
]
})
export class AngularMaterialModule { }