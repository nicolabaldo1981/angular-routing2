import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';

import { InforoutingModule } from './inforouting/inforouting.module';

@NgModule({
  imports: [CommonModule, InforoutingModule],
  declarations: [InfoComponent],
})
export class InfoModule {}
