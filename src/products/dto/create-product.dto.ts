//export class CreateProductDto {}
import {Product} from '@prisma/client'

/*Para especificar mejor que campos se tienen que omitir */
/*antes de que yo le pusiera la palabra export me salia un error en src\products\products.service.ts */
export type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updateAt'> 