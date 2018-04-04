import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { ContactPickerValue } from './contact-picker.value';

@Injectable()
export class ContactPickerService {
    constructor(
        private http: HttpClient
    ) {}

    public getPeopleByQuery(
        /**
         * If an array of values, it will search in that array.
         * If a string, it will use that as URL for contacting the BFF,
         * appending search=<search> as query argument.
         */
        dataSource: ContactPickerValue[] | string,
        /** The string to search for */
        search: string
    ): Observable<ContactPickerValue[]> {
        if (Array.isArray(dataSource)) {
            return Observable.of(dataSource.filter((v: ContactPickerValue) => {
                const name = v.name.toLowerCase();
                const matchOn = search.toLowerCase();
                return name.indexOf(matchOn) >= 0;
            }));
        } else if (typeof dataSource === 'string') {
            const uri = dataSource +
                ((dataSource.indexOf('?') < 0) ? '?' : '&') +
                'search=' + search;
            return this.http.get<ContactPickerValue[]>(uri);
        } else {
            // should never happen
            throw new TypeError('unsupported dataSource type "' + (typeof dataSource) + '"');
        }
    }
}