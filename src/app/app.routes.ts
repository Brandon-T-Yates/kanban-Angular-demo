import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MainViewComponent } from './pages/main-view/main-view.component';

export const routes: Routes = [
    { path: '', component: MainViewComponent, }

];

@NgModule({
    declarations: [MainViewComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        DragDropModule // Add DragDropModule here
    ],
    bootstrap: [MainViewComponent]
})
export class AppModule { }
