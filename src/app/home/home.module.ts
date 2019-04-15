import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TgipOpenlayersModule } from 'tgip-openlayers';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, TgipOpenlayersModule]
})
export class HomeModule {}
