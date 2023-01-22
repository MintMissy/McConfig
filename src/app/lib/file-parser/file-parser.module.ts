import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YamlFileService } from './service/yaml-file.service';
import { JsonFileService } from './service/json-file.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [YamlFileService, JsonFileService]
})
export class FileParserModule { }
