import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class SubscriptionService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createSubscriptionDto: CreateSubscriptionDto) {
    return 'This action adds a new subscription';
  }

  findAll() {
    return `This action returns all subscription`;
  }
}
