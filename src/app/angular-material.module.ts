import { NgModule } from "@angular/core";
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatSelectModule } from "@angular/material/select";


@NgModule({

exports:[
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule
]
})
export class AngularMaterialModule { }