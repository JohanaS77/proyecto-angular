import { TestBed } from '@angular/core/testing';

import { Notificacion } from './notificacion.service';

describe('Notificacion', () => {
  let service: Notificacion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Notificacion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
