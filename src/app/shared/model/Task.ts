export class Task {
  id?: number;
  titulo?: string;
  descricao?: string;
  prioridade?: 'baixa' | 'normal' | 'média' | 'alta';
  status?: 'feito' | 'não feito';
  donoId?: number; // FK para Usuario
  dataCriacao?: Date;
  dataAlteracao?: Date;
  dataExclusao?: Date; // Exclusão lógica
}
