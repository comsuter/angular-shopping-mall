import { Base } from "../shared/base.model";
import { SharedUtil } from "../shared/shared-util";

export declare type Categories = Category[];

export class Category extends Base {
    no: number;
    name: string = '';
    desc: string = '';

    constructor(no: number) {
        super(true, SharedUtil.getCurrentDateTime(), '');
        this.no = no;
    }
}
