import { AppService } from './app.service';
import { Controller, Get, StreamableFile  } from '@nestjs/common';
import * as fs from 'node:fs/promises';
// import * as fs from 'fs';
import { join } from 'path';
import * as xml2js from 'xml2js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('file')
  getFile(): any {
    var parser = new xml2js.Parser();
    return fs.readFile(join(process.cwd(), '000000000000032924 list.xml'), "utf8").then((data) => data);
    // return fs.readFile(join(process.cwd(), '000000000000032924 list.xml'), "utf8", function(err, data) {
      // return data;
      // return 'data';
    //   parser.parseString(data, function (err, result) {
    //     console.dir(result);
    //     console.log('Done');
    // });
    // });

    // return 'hello';
  }
}
