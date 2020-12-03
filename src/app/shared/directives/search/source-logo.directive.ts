import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSourceLogo]'
})
export class SourceLogoDirective implements OnInit {

  @Input() type: string;
  path: string = '../../../../assets/imgs/logos/';

  constructor(
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {


    const imgName = this.getImgName(this.type);
    this.elementRef.nativeElement.src = this.path+imgName;    
  }

  getImgName(type: string){

    let imgName: string = 'default.jpg'

    switch(type){

      case 'Personas':
      imgName = 'crc.jpg';
      break;

      case 'Canciones':
      imgName = 'itunes.jpg';
      break;

      case 'Películas':
      imgName = 'itunes.jpg';
      break;

      case 'Documentos':
      imgName = 'itunes.jpg';
      break;

      case 'Televisión':
      imgName = 'tvmaze.jpg';
      break;

    }

    return imgName;

  }



}
