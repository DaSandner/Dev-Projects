import { ID, Unit } from "./types";

export interface ListItem {
    id: ID;
    name: string;
    amount: number;
    unit: Unit;
}