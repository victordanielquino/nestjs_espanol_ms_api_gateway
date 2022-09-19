import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { ProxyModule } from '../../../../common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
