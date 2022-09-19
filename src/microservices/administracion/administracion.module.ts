import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsuarioModule } from './modules/usuario/usuario.module';

@Module({
  imports: [AuthModule, UsuarioModule],
})
export class AdministracionModule {}
