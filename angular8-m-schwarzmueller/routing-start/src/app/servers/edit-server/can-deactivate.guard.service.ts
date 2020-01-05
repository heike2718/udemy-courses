import { Observable } from 'rxjs';
import { RouterState, ActivatedRouteSnapshot, CanDeactivate, UrlTree, RouterStateSnapshot } from '@angular/router';

export interface CanDeactivateComponent {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {

    canDeactivate(component: CanDeactivateComponent,
        _currentRoute: ActivatedRouteSnapshot,
        _currentState: RouterStateSnapshot,
        _nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        return component.canDeactivate();
    }



}

