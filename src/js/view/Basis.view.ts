import { ListItem } from "../model/List.model";
import { ID } from "../model/types";

type OnDeleteHandler = (id: ID) => void; // function type

export abstract class BaseView {
    protected rootElement: HTMLElement;
    protected onDelete: OnDeleteHandler = () => { throw Error("Handler not bound!") };

    constructor(rootSelectElement: string) {
        this.rootElement = this.getElement(rootSelectElement);
    }

    abstract render(items: ListItem[]): void;

    bindOnDelete(handler: OnDeleteHandler) {
        this.onDelete = handler;
    }

    protected getElement(selector: string): HTMLElement {
        const element = document.querySelector(selector);
        if (!(element instanceof HTMLElement)) {
            throw new Error(`selector is not a string, it is a ${typeof selector}`);
        }
        return element;
    }
}

