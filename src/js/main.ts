import '../css/style.css';

// import { ListItem } from "./model/List.model";
// import { Unit } from "./model/types";
import { ItemsController } from "./controller/list.controller";
import { ApiService } from './service/api.service';
import { BaseView } from "./view/Basis.view";
import { ListView } from './view/shoppingList.view';




const View: BaseView = new ListView('#app');
const apiService = new ApiService();
const controller = new ItemsController(View, apiService);

window.onload = async () => {
    controller.init();
}

