import { Routes } from '@angular/router';
import { WorldComponent } from './world/world.component';
import { KittyComponent } from './kitty/kitty.component';

export const routes: Routes = [
    {
        path: ""
        , component: WorldComponent
    },
    {
        path: "kitty"
        , component: KittyComponent
    }
];
