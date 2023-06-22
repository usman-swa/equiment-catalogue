import { TestBed } from '@angular/core/testing';
import { type ActivatedRouteSnapshot } from '@angular/router';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { testStates } from '@app/core/store/reducers/mock-store';
import { chapterActions } from '@app/dashboard/store/actions';

import { LoadChapterResultsResolver } from './load-equipments.resolver';

describe('LoadChapterResultsResolver', () => {
    let resolver: LoadChapterResultsResolver;

    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [provideMockStore({ initialState: testStates })] });
        resolver = TestBed.inject(LoadChapterResultsResolver);
    });

    it('should be created', () => {
        expect(resolver).toBeTruthy();
    });

    it('should load the chapter results', () => {
        const dispatchSpy = jest.spyOn(TestBed.inject(MockStore), 'dispatch');
        expect(
            resolver.resolve({
                params: { feedId: 'feedId-1', chapterId: 'chapterId-1' },
            } as Partial<ActivatedRouteSnapshot> as ActivatedRouteSnapshot)
        ).toBe(true);

        expect(dispatchSpy).toHaveBeenCalledWith(
            chapterActions.loadChapterResults({
                feedId: 'feedId-1',
                containerEsId: 'chapterId-1',
                containerType: 'chapter',
            })
        );
    });
});
