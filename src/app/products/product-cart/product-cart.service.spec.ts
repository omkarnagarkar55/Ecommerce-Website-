import { inject, TestBed,waitForAsync } from "@angular/core/testing";


import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { ProductService } from "../product.service";
import { Product } from "../product";
import { ProductCartService } from "./product-cart.service";



describe('Testing Product Services',() =>{
    let productCartService :ProductCartService
    let httpMock :HttpTestingController

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[ProductService]
            //providers :[{provide:ProductServices,useValue:mockProductServices}]
        })

        productCartService = TestBed.inject(ProductCartService)
        httpMock =TestBed.inject(HttpTestingController)
    })

    // it('should be created ',
    //     inject([ProductService ],(service:ProductService)=>{
    //         expect(service).toBeTruthy()
    //     })
    // )

    // xit('should successfuly get the products',waitForAsync(()=>{
    //     const productData :Product[] = [
    //         {"id":1,"name":"mobile","category":"electronics","price":78999,"description":'This is a Mobile Phone',"image":'https://static.toiimg.com/photo/73078527.cms',"rating":4}];
    //         productCartService.getProducts().subscribe(res => expect(res).toEqual(productData))
    //     let productRequest = httpMock.expectOne('api/products')
    //     productRequest.flush(productData)
    // }))

//     it('#getObservableValue should return value from observable',
//     (done: DoneFn) => {
//         productCartService.cartItemChange.subscribe(value => {
//       expect(value).toBe([]);
//       done();
//     });
//   });

    

    // it('should successfuly get the products',waitForAsync(()=>{
    //     const errorType ="CANNOT LOAD PRODUCTS FROM GIVEN URL"
    //     productService.getProducts().subscribe(()=>{},
    //     errorResponse => expect(errorResponse.error?.type).toEqual(errorType))
    //     let productRequest = httpMock.expectOne('api/products')
    //     productRequest.error(new ErrorEvent(errorType))

    // }))

    afterEach(()=>httpMock.verify())


})