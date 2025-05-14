import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export enum VideoQualityEnum {
  P240 = '240p',
  P360 = '360p',
  P480 = '480p',
  P720 = '720p',
  P1080 = '1080p',
  K4 = '4K',
}

export class CreateMovieFileDto {
  @IsNotEmpty({ message: "Video sifati bo'sh bo'lishi mumkin emas" })
  @IsEnum(VideoQualityEnum, { message: 'Yaroqli video sifatini tanlang' })
  quality: VideoQualityEnum;

  @IsOptional()
  @IsString({ message: "Til string bo'lishi kerak" })
  @MaxLength(20, { message: 'Til 20 ta belgidan oshmasligi kerak' })
  language?: string = 'uz';
}
