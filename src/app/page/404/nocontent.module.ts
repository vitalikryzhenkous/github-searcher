import { NoContentComponent } from './nocontent.component';
import { NgModule } from '@angular/core';
import { routing } from './nocontent.routing';

@NgModule({
  imports: [routing],
  declarations: [NoContentComponent]
})
export class NoContentModule {}
