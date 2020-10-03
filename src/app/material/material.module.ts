import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { MatInputModule } from "@angular/material/input"
import { MatSelectModule } from "@angular/material/select"
import { MatButtonModule } from "@angular/material/button"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatIconModule } from "@angular/material/icon"
import { MatToolbarModule } from "@angular/material/toolbar"
@NgModule({
  declarations: [],
  imports: [MatToolbarModule,
    CommonModule, MatIconModule, MatInputModule, MatSelectModule, MatButtonModule, MatSidenavModule
  ],
  exports: [MatToolbarModule,
    MatInputModule, MatIconModule, MatSelectModule, MatButtonModule, MatSidenavModule
  ]
})
export class MaterialModule { }
