import { v4 as uuidv4 } from 'uuid';
import { UserInputModel } from '../api/models/user-input.mode';
import { User } from './user.entity';

describe('test user methods', () => {
  const userParams: UserInputModel = {
    name: 'Петр',
    lastName: 'Лешков',
    inn: '746237462373462',
  };

  const url1 = '/public/photo1';
  const url2 = '/public/photo2';

  const newUser = new User(userParams);
  it('should return the newly created user', async () => {
    expect(newUser.getName()).toBe(userParams.name);
    expect(newUser.getFullName()).toBe(
      `${userParams.name} ${userParams.lastName}`,
    );
    expect(newUser.getInn()).toBe(userParams.inn);
  });

  it('should return the newly created user', async () => {
    newUser.addPhoto(url1);
    newUser.addPhoto(url2);
    expect(newUser.getPhotos().length).toBe(2);
  });
});
