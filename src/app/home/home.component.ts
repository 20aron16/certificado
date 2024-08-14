import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; // Todavía no lo usamos

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nombres;
  public nit;
  public retef;
  public retei;
  public view;
  public cm;
  VIDEOGAMES = [
    {
      id : 1,
      name: "Animal Crossing",
      platform: "Nintendo Switch",
      reference : "1-770-736-8031"
    },
    {
      id: 2,
      name: "The Legend of Zelda: Ocarina of Time CV",
      platform: "Wii U",
      reference: "1-770-736-2323"
    },
    {
      id: 3,
      name: "Metal Gear Solid",
      platform: "Playstation (PSX)",
      reference: "1-4564-736-334"
    },
    {
      id: 4,
      name: "ShenMue",
      platform: "Sega Dreamcast",
      reference: "3-770-736-4532"
    },
    {
      id: 5,
      name: "Rise of the Tomb Raider",
      platform: "Playstation 4",
      reference: "1-324-736-3245"
    },
    {
      id: 6,
      name: "Resident Evil 2",
      platform: "Playstation",
      reference: "1-123-3336-4321"
    }
  ];

  constructor() {
    this.nombres = '';
    this.nit = '';
    this.retef = false;
    this.retei = false;
    this.view = true;
    this.cm = false;
    //this.downloadPDF();
  }
/*
  public downloadPDF(): void {
    const doc = new jsPDF();

    doc.text('Hello world!', 10, 10);
    doc.save('hello-world.pdf');
  }
*/

   downloadPDF() {
    // Extraemos el
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: '#000000',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save('certificado.pdf');
    });
  }


  ngOnInit() {
     this.nombres = sessionStorage.getItem('nombre');
     this.nit = sessionStorage.getItem('nit');
     if(this.nit == 891904029){
      this.cm = true;
      console.log('BIENVENIDO CM');
     }else{
      this.cm = false;
     }
  }

  clicRetef(){
    if(this.retef == true){
      this.retef = false;
      console.log('true: '+this.retef);  
    }else{
      this.retef = true;
      console.log('else: '+this.retef);  
    }
    
  }

  clicReteI(){
    if(this.retei == true){
      this.retei = false;
      console.log('true: '+this.retei);  
    }else{
      this.retei = true;
      console.log('else: '+this.retei);  
    }
    
  }


  guardarDocumentos(){
  
  if(this.filesToUpload.length == 0){
      //this.setAlerta('Vehiculo','Catalogo no cargado','info');
    console.log('Catalogo no cargado');
    }else{
      /*
       this._accesorioService.makeFileRequestImg(this.vehiculo, this.filesToUpload).then(
      (result) => {
        console.log(result);
        this.setAlerta('Vehiculo','Catalogo guardado correctamente','success');
        this.filesToUpload = [];
        this.vehiculo = null;
    },error=>{
        console.log(error);
    });
    */
    }
  }


}
