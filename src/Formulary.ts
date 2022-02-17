export class Formulary {
    list: Set<string> = new Set<string>();

    add(...items: string[]): void {
        items.forEach(item => this.list.add(item));
    };

    print(): void {
        console.table(this.list);
    }
};
