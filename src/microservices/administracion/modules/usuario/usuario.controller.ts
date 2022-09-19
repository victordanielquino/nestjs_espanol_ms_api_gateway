import { Body, Controller, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsuarioI } from '../../models/iterfaces/usuario.interface';
import { UsuarioCreateDto } from '../../models/dtos/usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('api/v1/usuario')
export class UsuarioController {
  constructor(private readonly _usuarioService: UsuarioService) {}

  @Post()
  createOne(@Body() dto: UsuarioCreateDto): Observable<UsuarioI> {
    return this._usuarioService.createOne(dto);
  }
}
