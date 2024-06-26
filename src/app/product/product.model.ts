import { SharedUtil } from "../shared/shared-util";

export enum ProdStatus { WAIT_FOR_SALE, ON_SALE, NOT_FOR_SALE }
export declare type Products = Product[];

export class Product {
    no: number;
    name: string;
    listPrice: number;
    status: ProdStatus;
    qty: number;
    desc?: string;
    catNo?: number;

    constructor(no: number, status: ProdStatus) {
        this.no = no;
        this.name = '';
        this.listPrice = 0;
        this.status = status;
        this.qty = 0;
        this.desc = '';
        this.catNo = 0;
    }
}
