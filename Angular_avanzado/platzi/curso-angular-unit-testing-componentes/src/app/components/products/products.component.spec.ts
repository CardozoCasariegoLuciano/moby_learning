import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { generateManyProducts } from 'src/app/models/product.mock';
import { ProductsService } from 'src/app/services/product.service';
import { ProductComponent } from '../product/product.component';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productService: jasmine.SpyObj<ProductsService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj(productService, ['getAll']);
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent, ProductComponent],
      providers: [{ provide: ProductsService, useValue: spy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(
      ProductsService
    ) as jasmine.SpyObj<ProductsService>;

    const productsMock = generateManyProducts(3);
    productService.getAll.and.returnValue(of(productsMock));

    fixture.detectChanges(); //Aca ya se ejecutan los ngOnInit
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(productService.getAll).toHaveBeenCalled()
  });


  xdescribe("Tests for getAllProducts", () => {

    it('should return a product list from service', () => {
      const productsMock = generateManyProducts(6);
      productService.getAll.and.returnValue(of(productsMock))
      
      component.getAllProducts()
      fixture.detectChanges()

      expect(component.products).toHaveSize(productsMock.length)
    });
  })
});
