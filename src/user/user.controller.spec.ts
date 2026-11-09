import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller.js';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the user matching the query id', () => {
    expect(controller.getUserByQueryParam('1')).toEqual([
      { id: 1, name: 'John Doe' },
    ]);
  });

  it('should return an empty array when the query id does not match', () => {
    expect(controller.getUserByQueryParam('3')).toEqual([]);
  });
});
