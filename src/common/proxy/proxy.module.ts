import { Module } from '@nestjs/common';
import { ClientProxyAdministration } from './client-proxy';

@Module({
  providers: [ClientProxyAdministration],
  exports: [ClientProxyAdministration],
})
export class ProxyModule {}
