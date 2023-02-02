import { UserInputModel } from '../../../modules/users/api/models/user-input.mode';
import { User } from '../../../modules/users/domain/user.entity';
import { v4 as uuidv4 } from 'uuid';
import { UpdateProfileInputModel } from '../api/models/update-input.model';

describe('test user methods', () => {
  const userParams: UserInputModel = {
    name: 'Петр',
    lastName: 'Лешков',
    inn: '746237462373462',
  };

  const profileParams: UpdateProfileInputModel = {
    name: 'Cергуй',
    lastName: 'Лешков',
  };

  it('should return the newly created user', async () => {
    const newUser = new User(userParams);
    newUser.profile.update(profileParams);
    expect(newUser.getFullName()).toBe(
      `${profileParams.name} ${profileParams.lastName}`,
    );
  });
});
