import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:"",
    component:IndexComponent
    },
    {path:"home",
    component:HomeComponent
    },
    {path:"about",
    component:AboutComponent
    },
    {path:"gallery",
    component:GalleryComponent
    },
    {path:"register",
    component:RegisterComponent
    }

];
