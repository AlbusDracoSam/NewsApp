import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusniessnewsComponent } from './busniessnews.component';

describe('BusniessnewsComponent', () => {
  let component: BusniessnewsComponent;
  let fixture: ComponentFixture<BusniessnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusniessnewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusniessnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
