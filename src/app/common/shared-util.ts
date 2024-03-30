import format from 'date-fns/format';

export class SharedUtil {
  static getCurrentDate() {
    return format.format(new Date(), 'YYYY-MM-DD');
  }

  static getCurrentDateTime() {
    return format.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
  }
}
