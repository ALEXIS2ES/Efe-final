import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( img: string, tipo: string = 'usuario'): any {

    let url = URL_SERVICIOS + '/imagen';

    if ( !img ) {
      return url + '/usuarios/xxx';
    }

    switch ( tipo ) {

      case 'usuario':
        url += '/usuarios/' + img;
      break;

      case 'medico':
        url += '/medicos/' + img;
      break;

      case 'hospital':
         url += '/hospitales/' + img;
      break;

      case 'articulo':
         url += '/articulos/' + img;
      break;

      default:
        console.log('tipo de imagen no existe, usuario, medicos, hospitales, articulos');
        url += '/usurios/xxx';
    }

    return url;
  }

}
