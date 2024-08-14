export class ReteIca {
	constructor(
		public id_rete_fuente: number,
		public cuenta: number,
		public descripcion: string,
		public nit: number,
		public tercero: string,
		public base: number,
		public retencion: number,
		public anio_gravable: number
	){}
}