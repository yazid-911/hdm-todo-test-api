import { Injectable } from '@nestjs/common';
import { UseCase } from '../../index';
import SaveTaskDto from './SaveTaskDto';

@Injectable()
export default class SaveTaskUseCase
  // @todo DO NOT USE any HERE, USE THE ENTITY THAT YOU SHOULD RETURN
  implements UseCase<Promise<any>, [dto: SaveTaskDto]>
{
  constructor() {}

  // @todo DO NOT USE any HERE, USE THE ENTITY THAT YOU SHOULD RETURN
  async handle(dto: any) {
    /*
    * @todo IMPLEMENT HERE : VALIDATION DTO, DATA SAVING, ERROR CATCHING
     */
  }
}
