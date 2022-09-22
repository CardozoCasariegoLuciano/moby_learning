import { HttpStatusCode } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment.prod';
import {
  generateManyProducts,
  generateOneProduct,
} from '../models/product.mock';
import { CreateProductDTO, Product } from '../models/product.model';
import { ProductsService } from './products.service';

fdescribe('Products service', () => {
  let productsService!: ProductsService;
  let httpControl!: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    });

    productsService = TestBed.inject(ProductsService);
    httpControl = TestBed.inject(HttpTestingController);
  });

  it('Should be created', () => {
    expect(productsService).toBeTruthy();
  });

  describe('Test getAllSimple', () => {
    it('should return a product list"', (done) => {
      const mockData: Product[] = generateManyProducts(2);

      productsService.getAllSimple().subscribe((resp) => {
        expect(resp.length).toEqual(mockData.length);
        done();
      });

      //Configute HTTP control
      const url = `${environment.API_URL}/api/v1/products`;
      const req = httpControl.expectOne(url);
      req.flush(mockData);
      httpControl.verify();
    });
  });

  describe('Test getAll', () => {
    it('should return a product list"', (done) => {
      const mockData: Product[] = generateManyProducts(2);

      productsService.getAll().subscribe((resp) => {
        expect(resp.length).toEqual(mockData.length);
        done();
      });

      //Configute HTTP control
      const url = `${environment.API_URL}/api/v1/products`;
      const req = httpControl.expectOne(url);
      req.flush(mockData);
      httpControl.verify();
    });

    it('should return a product with taxes', (done) => {
      const mockData: Product[] = [
        {
          ...generateOneProduct(),
          price: 100,
        },
        {
          ...generateOneProduct(),
          price: 0,
        },
        {
          ...generateOneProduct(),
          price: -100,
        },
      ];

      productsService.getAll().subscribe((resp) => {
        expect(resp[0].taxes).toEqual(mockData[0].price * 0.19);
        expect(resp[1].taxes).toEqual(0);
        expect(resp[2].taxes).toEqual(0);
        done();
      });

      //Configute HTTP control
      const url = `${environment.API_URL}/api/v1/products`;
      const req = httpControl.expectOne(url);
      req.flush(mockData);
      httpControl.verify();
    });
  });

  describe('Tests create product', () => {
    it('should create a new product', (done) => {
      const mock = generateOneProduct();
      const dto: CreateProductDTO = {
        title: 'titulo1',
        price: 133,
        images: ['123', '123'],
        categoryId: 123,
        description: 'asdasd',
      };

      productsService.create({ ...dto }).subscribe((data) => {
        expect(data).toEqual(mock);
        done();
      });

      //Configute HTTP control
      const url = `${environment.API_URL}/api/v1/products`;
      const req = httpControl.expectOne(url);
      req.flush(mock);
      expect(req.request.body).toEqual(dto);
      expect(req.request.method).toBe('POST');
      httpControl.verify();
    });
  });

  describe('Tests getOne', () => {
    it('should get one product', (done) => {
      const mock = generateOneProduct();
      const id = '1';

      productsService.getOne(id).subscribe((data) => {
        expect(data).toEqual(mock);
        done();
      });

      //Configute HTTP control
      const url = `${environment.API_URL}/api/v1/products/${id}`;
      const req = httpControl.expectOne(url);
      req.flush(mock);
      expect(req.request.method).toBe('GET');
      httpControl.verify();
    });

    it('should return a 404 error', (done) => {
      const id = '1';
      const msgError = '404 Error';
      const mockError = {
        status: HttpStatusCode.NotFound,
        statusText: msgError,
      };

      productsService.getOne(id).subscribe({
        error: (err) => {
          expect(err).toBe("El producto no existe")
          done()
        },
      });

      //Configute HTTP control
      const url = `${environment.API_URL}/api/v1/products/${id}`;
      const req = httpControl.expectOne(url);
      req.flush(null, mockError);
      expect(req.request.method).toBe('GET');
      httpControl.verify();
    });
  });
});
