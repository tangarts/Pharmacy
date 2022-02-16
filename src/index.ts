#!/usr/bin/env node

import { Formulary } from "./Formulary";
import { Inventory } from "./Inventory";
import { Order } from "./models";

let formulary = new Formulary();

formulary.add("Paracetamol", "Ibuprofen");
formulary.add("Amoxicillin");
formulary.add("Codeine", "Diclofenac", "Simvastatin", "Tramadol");

formulary.print();

let inventory = new Inventory(formulary, new Map<string, Order>());

inventory.addMedication({ name: "Paracetamol", strength: 500, packSize: 50 }, 100);
inventory.addMedication({ name: "Ibuprofen", strength: 500, packSize: 50 }, 100);
inventory.addMedication({ name: "Amoxicillin", strength: 250, packSize: 20 }, 20);
inventory.addMedication({ name: "Tramadol", strength: 50, packSize: 100 }, 5);
inventory.addMedication({ name: "Codeine", strength: 30, packSize: 10 }, 20);
inventory.addMedication({ name: "Simvastatin", strength: 10, packSize: 10 }, 10);
inventory.addMedication({ name: "Warfarin", strength: 3, packSize: 50 }, 5);

console.log(inventory.listMedication());
inventory.print();