import { Exclude, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

import { RolesEnum } from '@decorators/roles.decorator';

export class UserResponseEntity {
  id: string = '';

  roles: RolesEnum[] = [RolesEnum.USER];

  verified: boolean = false;

  email: string = '';

  @Exclude()
  password: string = '';
}

export class AllUsersResponseEntity {
  @ValidateNested({ each: true })
  @Type(() => UserResponseEntity)
  data?: UserResponseEntity[] = []
}
