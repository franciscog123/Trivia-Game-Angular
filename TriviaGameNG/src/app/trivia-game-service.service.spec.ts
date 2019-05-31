import { TestBed } from '@angular/core/testing';

import { TriviaGameServiceService } from './trivia-game-service.service';

describe('TriviaGameServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TriviaGameServiceService = TestBed.get(TriviaGameServiceService);
    expect(service).toBeTruthy();
  });
});
