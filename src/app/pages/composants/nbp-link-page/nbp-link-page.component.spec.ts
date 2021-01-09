import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbpLinkPageComponent } from './nbp-link-page.component';

describe('NbpLinkPageComponent', () => {
  let component: NbpLinkPageComponent;
  let fixture: ComponentFixture<NbpLinkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbpLinkPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbpLinkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
