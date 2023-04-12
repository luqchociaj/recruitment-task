import {
	Pipe, PipeTransform
} from '@angular/core';
import { CountryListItemModel } from '../models/country-list-item.model';

@Pipe( { name: 'sortByName' } )
export class SortByNamePipe implements PipeTransform {
	public transform( countries: CountryListItemModel[] ): CountryListItemModel[] {

		return countries.sort( ( a, b ) => a.name.localeCompare( b.name ) );

	}
}
