import { ListItem } from "../model/List.model";
import { ID } from "../model/types";
import { IStorageService } from "./storage.service";

const API_URL: string = 'http://localhost:3001/shoppingList';

export class ApiService implements IStorageService<ListItem> {
    async create(item: Omit<ListItem, "id">): Promise<ListItem> {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item),
        });
        const data = await response.json();
        return data;
    }

    async readAll(): Promise<ListItem[]> {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            return data;
        } catch (err) {
            throw new Error(`${err}`);
        }

    }

    async update(item: ListItem): Promise<void> {
        const response = await fetch(`${API_URL}/${item.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item),
        });
        const data = await response.json();
        return data;
    }

    async delete(id: ID): Promise<void> {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });
        console.log(response);
        window.location.reload();
    }
}

