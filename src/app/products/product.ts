import { IProduct } from "./product.model";

export class Product implements IProduct{
    public id : number
    public name ? : string
    public category? : string
    public price ?: number
    public description ?: string
    public image ?:string
    public rating ?:number
    public discount?:number 
    public reviewCount?:number

}