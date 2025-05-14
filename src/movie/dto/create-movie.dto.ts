import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsEnum,
  IsArray,
  IsUUID,
  MinLength,
  MaxLength,
  Min,
  Max,
  IsOptional,
} from 'class-validator';

export enum SubscriptionTypeEnum {
  FREE = 'free',
  PREMIUM = 'premium',
}

export class CreateMovieDto {
  @IsNotEmpty({ message: "Kino nomi bo'sh bo'lishi mumkin emas" })
  @IsString({ message: "Kino nomi string bo'lishi kerak" })
  @MinLength(2, {
    message: "Kino nomi kamida 2 ta belgidan iborat bo'lishi kerak",
  })
  @MaxLength(100, { message: 'Kino nomi 100 ta belgidan oshmasligi kerak' })
  title: string;

  @IsOptional()
  @IsString({ message: "Kino ta'rifi string bo'lishi kerak" })
  description?: string;

  @IsNotEmpty({ message: "Chiqarilgan yil bo'sh bo'lishi mumkin emas" })
  @IsInt({ message: "Chiqarilgan yil butun son bo'lishi kerak" })
  @Min(1900, { message: "Chiqarilgan yil kamida 1900 bo'lishi kerak" })
  @Max(new Date().getFullYear() + 5, {
    message: "Chiqarilgan yil yaroqli bo'lishi kerak",
  })
  releaseYear: number;

  @IsNotEmpty({ message: "Davomiyligi bo'sh bo'lishi mumkin emas" })
  @IsInt({ message: "Davomiyligi butun son bo'lishi kerak" })
  @Min(1, { message: "Davomiyligi 1 daqiqadan kam bo'lishi mumkin emas" })
  durationMinutes: number;

  @IsEnum(SubscriptionTypeEnum, { message: 'Yaroqli obuna turini tanlang' })
  subscriptionType: SubscriptionTypeEnum;

  @IsArray({ message: "Kategoriyalar IDsi array bo'lishi kerak" })
  @IsUUID('4', {
    each: true,
    message: "Har bir kategoriya IDsi yaroqli UUID bo'lishi kerak",
  })
  categoryIds: string[];
}
