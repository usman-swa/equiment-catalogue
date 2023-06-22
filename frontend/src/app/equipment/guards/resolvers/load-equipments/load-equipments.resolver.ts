import { Injectable } from '@angular/core';
import { type Resolve } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class LoadChapterResultsResolver implements Resolve<boolean> {
    constructor() {}
    resolve(): boolean {

        return true;
    }
}
