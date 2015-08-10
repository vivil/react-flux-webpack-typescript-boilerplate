import { Dispatcher } from "../dispatcher/Dispatcher";
import { ActionTypes } from  "../constants/Constants";

interface ViewAction {
    click(): void;
}

class ViewActionClass implements ViewAction {

    public click(): void {
        Dispatcher.dispatch({
            actionType: ActionTypes.ACTION_CLICK
        });
    }
}

export var ViewActions = new ViewActionClass();
