export type Pack = {
    name: string;
    strength: number;
    packSize: number;
}

export type Order = {
    quantity: number;
    medication: Pack;
}


/// Use a medication type to constrain the
/// Medication allowed??
///
// export type Medication = (
//     "Amoxicillin" |
//     "Codeine" |
//     "Diclofenac" |
//     "Ibuprofen" |
//     "Paracetamol" |
//     "Simvastatin" |
//     "Tramadol" |
//     "Warfarin"
// )