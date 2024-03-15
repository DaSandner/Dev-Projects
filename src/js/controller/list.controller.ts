import { BaseView } from "../view/Basis.view";
import { ID } from "../model/types";
import { ListItem } from "../model/List.model";
import { IStorageService } from "../service/storage.service";

export class ItemsController {
    private storage: IStorageService<ListItem>;
    private view: BaseView;

    constructor(view: BaseView, apiService: IStorageService<ListItem>) {
        this.storage = apiService;
        this.view = view;
    }
    async init() {
        this.view.bindOnDelete((id: ID) => this.removeItem(id));
        this.view.render(await this.storage.readAll());
    }

    private async removeItem(id: ID) {
        this.storage.delete(id)
            .then(() => {
                window.location.reload();
            }).catch((err) => {
                throw new Error(err);
            });
        this.view.render(await this.storage.readAll());
    }

}