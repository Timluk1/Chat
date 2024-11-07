import { Module } from "@nestjs/common";
import { CloudImagesService } from "./cloudImages.service";

@Module({
  exports: [CloudImagesService],
  providers: [CloudImagesService],
})

export class CloudImagesModule { }

