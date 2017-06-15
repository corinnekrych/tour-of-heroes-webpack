import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: HeroesComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class HeroesRoutingModule {
}
