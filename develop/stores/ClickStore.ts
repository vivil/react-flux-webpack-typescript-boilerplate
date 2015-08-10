import { Dispatcher } from "../dispatcher/Dispatcher";
import { ActionTypes, ClickAction } from  "../constants/Constants";
import { EventEmitter } from "events";

class ClickStoreClass extends EventEmitter {

    private CHANGE_EVENT: string;
    private click: number;

    constructor() {
        super();
        this.CHANGE_EVENT = 'change';
        this.click = 0;
    }

    addChangeListener = (callback) => {
        this.on(this.CHANGE_EVENT, callback);
    }

    removeChangeListener = (callback) => {
        this.removeListener(this.CHANGE_EVENT, callback);
    }

    getClicks = () => {
        return this.click;
    }

    addClick = () => {
        this.click++;
    }

    emitChange = () => {
        this.emit(this.CHANGE_EVENT);
    }
}

export var ClickStore = new ClickStoreClass();

Dispatcher.register(function (action: ClickAction): void {
    switch (action.actionType) {
        case ActionTypes.ACTION_CLICK:
            ClickStore.addClick();
            ClickStore.emitChange();
            break;
        default:
        // nothing
    }
});
