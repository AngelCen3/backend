import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {

  constructor(private prismaService: PrismaService) {

  }
  /*La funcion para crear */
  create(createProductDto: CreateProductDto) {
    return this.prismaService.product.create(
      { data: createProductDto }
    )
  }
  /*La funcion para listar todos los productos*/
  findAll() {
    return this.prismaService.product.findMany();
  }
  /*Esto trabaja con product.controller.ts */
  async findOne(id: number) {
    const productFound = await this.prismaService.product.findUnique({
      where: {
        id: id
      }
    })
    if (!productFound) {
      throw new NotFoundException('Product with id ${id} not found')
    }

    return productFound;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    const productId = await this.prismaService.product.delete({
      where:
    })
  }
}
