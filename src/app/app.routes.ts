import { Routes, RouterModule } from '@angular/router';
import {
   FourOhFourComponent,
   HomeComponent,
   PrivacyPolicyComponent,
   SchemaValidatorComponent
 } from './utils/app-components';
import { EXPLORE_CODE_ROUTES } from './routes/explore-code';
import { POLICY_GUIDE_ROUTES } from './routes/policy-guide';
import { TOOLS_ROUTES } from './routes/tools';
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  ...EXPLORE_CODE_ROUTES,
  ...POLICY_GUIDE_ROUTES,
  ...TOOLS_ROUTES,
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '**', component: FourOhFourComponent }
];
