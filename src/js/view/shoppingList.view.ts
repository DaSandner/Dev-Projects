import { ListItem } from "../model/List.model";
import { BaseView } from "./Basis.view";


export class ListView extends BaseView {

    render(data: ListItem[]): void {
        if (this.rootElement instanceof HTMLElement) {
            this.rootElement.innerHTML = template;
            const div: HTMLElement = this.rootElement.querySelector("tbody")!;

            data.forEach(item => {
                div.append(this.createTrElement(item));
            })
        } else {
            throw new Error("Root element is not an HTML element.");
        }
    }

    private createTrElement(data: ListItem): HTMLElement {
        const tr: HTMLElement = document.createElement("tr");
        tr.append(
            this.createTdElement(data.name),
            this.createTdElement(data.amount.toString()),
            this.createTdElement(data.unit.toString()),
            this.createDeleteBtn(data),
        );
        return tr;
    }

    private createTdElement(data: string): HTMLElement {
        const td: HTMLElement = document.createElement("td");
        td.innerText = data;
        return td;
    }

    private createDeleteBtn(data: ListItem): HTMLElement {
        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.innerText = "❌";
        deleteBtn.id = data.id.toString();

        // call callback
        deleteBtn.addEventListener("click", () => this.onDelete(data.id));

        const td = document.createElement("td");
        td.appendChild(deleteBtn);
        return td;
    }
}

const template = `
    <div class="shopping-list">
        <table>
        <thead>
        <tr>
        <th>Name</th>
        <th>Amount</th>
        <th>Unit</th>
        <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
        </table>
    </div>
`