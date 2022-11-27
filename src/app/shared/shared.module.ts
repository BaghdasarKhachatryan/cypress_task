import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { DananzLogoComponent } from './ui/dananz-logo/logo.component';

@NgModule({
  declarations: [DananzLogoComponent],
  imports: [CommonModule, MaterialModule],
  exports: [
    MaterialModule,

    //Components
    DananzLogoComponent,
  ],
})
export class SharedModule {}
