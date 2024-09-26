import { Injectable, OnModuleInit } from '@nestjs/common';
import {PrismaClient} from '@prisma/client'


/*Cada vez que quiera conectarme a un servicio debere llamar esta clase */
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }    
}
