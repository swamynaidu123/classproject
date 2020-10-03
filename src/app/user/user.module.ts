import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsercommonComponent } from './usercommon/usercommon.component';
import { Router, RouterModule } from '@angular/router';
var obj = [{ path: '', component: UsercommonComponent }];
@NgModule({
  declarations: [UsercommonComponent],
  imports: [CommonModule, RouterModule.forChild(obj)],
})
export class UserModule {}
