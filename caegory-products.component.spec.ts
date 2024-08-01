import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaegoryProductsComponent } from './caegory-products.component';

describe('CaegoryProductsComponent', () => {
  let component: CaegoryProductsComponent;
  let fixture: ComponentFixture<CaegoryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaegoryProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaegoryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
