import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'
import { AboutComponent} from './about/about.component'
import { IndexToUserComponent } from './index-to-user/index-to-user.component';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ViewMyPostsComponent } from './view-my-posts/view-my-posts.component';
import { ShowDeletedComponent } from './show-deleted/show-deleted.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { IndexToAdmComponent } from './index-to-adm/index-to-adm.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'about', component: AboutComponent },
    { path: 'indexUser', component: IndexToUserComponent },
    { path: 'addPost', component: AddPostsComponent },
    { path: 'viewPosts', component: ViewPostsComponent },
    { path: 'viewDetails', component: ViewDetailsComponent },
    { path: 'viewMyPosts', component: ViewMyPostsComponent },
    { path: 'showDeleted', component: ShowDeletedComponent},
    { path: 'editPost', component: EditPostComponent },
    { path: 'indexToAdm', component: IndexToAdmComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class RoutingModule {}