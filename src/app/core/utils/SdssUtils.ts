
export class SdssUtils {

  static isEmpty(val: string) {
    return val === undefined || val === null || val.trim().length === 0;
  }
}
