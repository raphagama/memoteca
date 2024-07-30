import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada pelo @Input',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis sagittis nisi. Aenean hendrerit eros odio, placerat ullamcorper leo semper sed. Nam lorem erat, ornare eget pulvinar et, lobortis id diam. Nulla sodales felis non ultricies laoreet. Pellentesque posuere iaculis odio nec dictum. Vivamus sodales tempor eleifend. Curabitur pharetra mi vitae turpis tincidunt, non viverra nunc aliquet. Nunc molestie nibh id leo ultricies, nec blandit sem auctor. Morbi faucibus ex est, non ornare orci hendrerit at. ',
      autoria: 'Pensamento maior',
      modelo: 'modelo1'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
