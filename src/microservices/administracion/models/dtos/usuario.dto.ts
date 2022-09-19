import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsPositive,
  Length,
  IsEnum,
  IsBoolean,
  IsArray,
  IsNumber,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

//import { EnumToString } from "../../../helpers/enumToString";
//import { RoleEnum, StateEnum } from "../../../shared/enums";

export class UsuarioReadDto {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ description: 'the username of user' })
  @Type(() => Number)
  @Expose()
  readonly id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'the username of user' })
  @Expose()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'the username of user' })
  @Expose()
  readonly enabled: boolean;
}

export class UsuarioCreateDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 25)
  @ApiProperty({ description: 'ej: 123456789' })
  @Expose()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'ej: pass123' })
  @Expose()
  readonly password: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ description: 'ej: true / false' })
  @Expose()
  readonly activo: boolean;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  @ApiProperty({ description: 'ej: 1' })
  @Expose()
  readonly personaId: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'ej: 1' })
  @Type(() => Number)
  @Expose()
  readonly usuarioId: number;

  /*    @IsArray()
    @IsNotEmpty()
    @ApiProperty()
    readonly rolesIds: number[];*/
}

export class UsuarioUpdateDto extends PartialType(UsuarioCreateDto) {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ description: 'ej: 1' })
  @Type(() => Number)
  @Expose()
  readonly usuarioId: number;
}
