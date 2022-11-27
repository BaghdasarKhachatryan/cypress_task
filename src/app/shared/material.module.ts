import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatSidenavModule, MatIconModule, MatToolbarModule],
  exports: [MatSidenavModule, MatIconModule, MatToolbarModule],
})
export class MaterialModule {}
