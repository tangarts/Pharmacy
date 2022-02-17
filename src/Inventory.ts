import { Formulary } from "./Formulary";
import { Pack, Order } from "./types";

export class Inventory {
    formulary: Formulary;
    stock: Map<string, Order>;

    constructor(formulary: Formulary, stock: Map<string, Order>) {
        this.formulary = formulary;
        this.stock = stock;
    }

    addMedication(medication: Pack, quantity: number): boolean {
        let name = medication.name;
        if (this.formulary.list.has(name)) {
            let id = `${medication.name}-${medication.strength}-${medication.packSize}`
            this.stock.set(id, { medication: medication, quantity: quantity });
            return true;
        }
        //throw new Error(`medication ${name} not present in the formulary.`);
        console.error(`Medication ${name} not present in the formulary.`);
        return false;

    }

    listMedication(): Order[] {
        return Array.from(this.stock.values());
    }

    getMedication(id: string): Order {
        if (this.stock.has(id)) {
            return this.stock.get(id);
        }
        // throw new Error(`Medication ${id} does not exist in the stock`);
        console.error(`Medication ${id} does not exist in the stock`);
    }
}
