import { inject, TestBed,waitForAsync } from "@angular/core/testing";

import { ProductService } from "./product.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { Product } from "./product";


describe('Testing Product Services',() =>{
    let productService :ProductService
    let httpMock :HttpTestingController

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[ProductService]
            //providers :[{provide:ProductServices,useValue:mockProductServices}]
        })

        productService = TestBed.inject(ProductService)
        httpMock =TestBed.inject(HttpTestingController)
    })

    // it('should be created ',
    //     inject([ProductService ],(service:ProductService)=>{
    //         expect(service).toBeTruthy()
    //     })
    // )

    it('should successfuly get the products',waitForAsync(()=>{
        const productData :Product[] = [
            {"id":1,"name":"mobile","category":"electronics","price":78999,"description":'This is a Mobile Phone',"image":'https://static.toiimg.com/photo/73078527.cms',"rating":4}];
        productService.getProducts().subscribe(res => expect(res).toEqual(productData))
        let productRequest = httpMock.expectOne('api/products')
        productRequest.flush(productData)
    }))


    // it('should successfuly get the products',waitForAsync(()=>{
    //     const errorType ="CANNOT LOAD PRODUCTS FROM GIVEN URL"
    //     productService.getProducts().subscribe(()=>{},
    //     errorResponse => expect(errorResponse.error?.type).toEqual(errorType))
    //     let productRequest = httpMock.expectOne('api/products')
    //     productRequest.error(new ErrorEvent(errorType))

    // }))

    afterEach(()=>httpMock.verify())


})