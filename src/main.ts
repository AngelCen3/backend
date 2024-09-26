import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/*By default execute it in port 3000
  but for now we´ll change in port 4000 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');              /*We add the prefix 'api' */
  await app.listen(4000);
}
bootstrap();
