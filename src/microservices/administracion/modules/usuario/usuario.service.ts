import { Injectable } from '@nestjs/common';
import { ClientProxyAdministration } from '../../../../common/proxy/client-proxy';
import { UsuarioCreateDto } from '../../models/dtos/usuario.dto';
import { Observable } from 'rxjs';
import { UsuarioI } from '../../models/iterfaces/usuario.interface';
import { UsuarioMSG } from '../../../../common/enums';

@Injectable()
export class UsuarioService {
  constructor(private readonly _clientProxy: ClientProxyAdministration) {}
  private _clientProxyUsuario = this._clientProxy.clientProxyUsers();

  createOne(dto: UsuarioCreateDto): Observable<UsuarioI> {
    return this._clientProxyUsuario.send(UsuarioMSG.CREATE_ONE, dto);
  }
}
