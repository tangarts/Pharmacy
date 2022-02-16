export type Pack = {
    name: string;
    strength: number;
    packSize: number;
}

export type Order = {
    quantity: number;
    medication: Pack;
}

export type Medication = (
    "Amoxicillin" |
    "Codeine" |
    "Diclofenac" |
    "Ibuprofen" |
    "Paracetamol" |
    "Simvastatin" |
    "Tramadol" |
    "Warfarin"
)