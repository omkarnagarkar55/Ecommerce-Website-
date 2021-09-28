import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'Filter'
})

export class FilterPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        //console.log("In filter" ,value)
        if(!value)return null;
        if(!args)return value;

        return value.filter((item: any)=>{
            return item.name.toLowerCase().includes(args.toLowerCase());
        });
    }
}