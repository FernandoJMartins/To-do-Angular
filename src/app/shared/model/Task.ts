export class Task {
  id?: number;
  titulo?: string;
  descricao?: string;
  prioridade?: 'baixa' | 'normal' | 'media' | 'alta';
  status?: 'feito' | 'pendente';
  donoId?: number; // FK para Usuario
  dataCriacao?: Date;
  dueDate?: Date;
  dataAlteracao?: Date;
  dataExclusao?: Date; // Exclusão lógica

}
