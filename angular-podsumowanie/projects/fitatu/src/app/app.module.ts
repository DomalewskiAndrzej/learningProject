import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './core/layouts/layouts.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { appReducer } from './store/app.reducer';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MealsEffects } from './modules/meals/store/meals-state/meals.effects';
import { HistoryEffects } from './modules/history/store/history-state/history.effects';
import { UserEffects } from './modules/user/store/user-state/user.effects';
import { AuthEffects } from './modules/auth/store/auth-state/auth.effects';
import { AuthInterceptorService } from './modules/auth/auth-interceptor-service';
import { ToastrModule } from 'ngx-toastr';
import { RecipesEffects } from './modules/recipes/store/recipes-state/recipes.effects';
import { TrainingEffects } from './modules/training/store/training-state/training.effects';
import { CloudsEffects } from './modules/clouds/store/clouds-state/clouds.effects';
import { CloudsModule } from './modules/clouds/clouds.module';

function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['auth'], rehydrate: true })(reducer);
}

function logout(reducer) {
  return function (state, action) {
    return reducer(
      action.type === '[Auth] Auto Logout' ? undefined : state,
      action
    );
  };
}
const metaReducers: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer,
  logout,
];

@NgModule({
  declarations: [AppComponent, LayoutsComponent],
  imports: [
    ToastrModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    CloudsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([
      MealsEffects,
      HistoryEffects,
      UserEffects,
      AuthEffects,
      RecipesEffects,
      TrainingEffects,
      CloudsEffects,
    ]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
