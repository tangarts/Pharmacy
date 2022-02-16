import { Formulary } from "./Formulary";
import { Pack, Order } from "./models";

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
            // increase quantity
            this.stock.set(name, { medication: medication, quantity: quantity });
            return true;
        }
        //throw new Error(`medication ${name} not present in the formulary.`);
        console.error(`Medication ${name} not present in the formulary.`);
        return false;

    }

    listMedication(): Order[] {
        return [...this.stock.values()];
    }
    print(): void {
        console.log("| name | strength | size | total |");
        this.stock.forEach((order: Order, _: string) => {
            console.log(`| ${order.medication.name} | ${order.medication.strength} | ${order.medication.packSize} | ${order.quantity} |`);
        });
    }
    getMedication(name: string): Order {
        if (this.stock.has(name)) {
            return this.stock.get(name);
        }
        throw new Error(`Medication ${name} does not exist in the stock`);
    }
}
