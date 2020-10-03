import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincommonComponent } from './admincommon/admincommon.component';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { SubsubcategoryComponent } from './subsubcategory/subsubcategory.component';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './login/login.component';

var obj = [
  {
    path: '',
    component: AdmincommonComponent,
    children: [
      { path: 'cat', component: CategoryComponent },
      { path: 'subcat', component: SubcategoryComponent },
      { path: 'subsubcat', component: SubsubcategoryComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AdmincommonComponent,
    CategoryComponent,
    SubcategoryComponent,
    SubsubcategoryComponent,
    LoginComponent,
  ],
  imports: [MaterialModule, CommonModule, RouterModule.forChild(obj)],
})
export class AdminModule {}
