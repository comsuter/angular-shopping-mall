import format from 'date-fns/format';

export declare type Domain = 'product' | 'category';
export declare type ActionMode =  'create' | 'read' | 'edit';

export class SharedUtil {
  static getCurrentDate() {
    return format.format(new Date(), 'YYYY-MM-DD');
  }

  static getCurrentDateTime() {
    return format.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
  }
}
