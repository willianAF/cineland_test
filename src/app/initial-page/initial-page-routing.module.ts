import { RouterModule, Routes } from "@angular/router";
import { InitialPageComponent } from "./initial-page/initial-page.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {path: "", component: InitialPageComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: []
})

export class InitialPageRoutingModule {}