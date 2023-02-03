/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateHelpDto } from './dto/create-help.dto';
import { UpdateHelpDto } from './dto/update-help.dto';

@Injectable()
export class HelpService {
  create(createHelpDto: CreateHelpDto) {
    return 'This action adds a new help';
  }

  findAll() {
    return `This action returns all help`;
  }

  findOne(id: number) {
    return `This action returns a #${id} help`;
  }

  update(id: number, updateHelpDto: UpdateHelpDto) {
    return `This action updates a #${id} help`;
  }

  remove(id: number) {
    return `This action removes a #${id} help`;
  }
}
