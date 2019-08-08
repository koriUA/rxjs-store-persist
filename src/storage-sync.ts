import * as deepmerge from "deepmerge";
import {validateStateKeys} from "./helpers";
import {config} from "./options";

const INIT_ACTION = '@ngrx/store/init';
const UPDATE_ACTION = '@ngrx/store/update-reducers';

export function storageSync(reducer: any) {
    const stateKeys = validateStateKeys(config.keys);
    const rehydratedState = rehydrateApplicationState(stateKeys, config.storage);

    return function (state: any, action: any) {
        let nextState;

        if ((action.type === INIT_ACTION) && !state) {
            nextState = reducer(state, action);
        } else {
            nextState = {...state};
        }
        if (action.type === INIT_ACTION || action.type === UPDATE_ACTION) {
            // @ts-ignore
            const overwriteMerge = (destinationArray: any, sourceArray: any) => sourceArray;
            const options: deepmerge.Options = {
                arrayMerge: overwriteMerge
            };
            nextState = deepmerge(nextState, rehydratedState, options);
        }

        nextState = reducer(nextState, action);

        if (action.type !== INIT_ACTION) {
            syncStateUpdate(
                nextState,
                stateKeys,
                config.storage
            );
        }

        return nextState;
    };
};

export const rehydrateApplicationState = (
    keys: any[],
    storage: Storage
) => {
    return keys.reduce((acc, curr) => {
        let key = curr;

        if (storage !== undefined) {
            let stateSlice = storage.getItem(key);
            if (stateSlice) {
                const isObjectRegex = new RegExp('{|\\[');
                let raw = stateSlice;

                if (stateSlice === 'null' || isObjectRegex.test(stateSlice.charAt(0))) {
                    raw = JSON.parse(stateSlice);
                }

                return Object.assign({}, acc, {
                    [key]: raw
                });
            }
        }
        return acc;
    }, {});
};

export const syncStateUpdate = (
    state: any,
    keys: any[],
    storage: Storage
) => {
    keys.forEach(key => {
        let stateSlice = state[key];
        let replacer = undefined;
        let space = undefined;

        if (typeof stateSlice !== 'undefined' && storage !== undefined) {
            try {
                storage.setItem(
                    key,
                    typeof stateSlice === 'string'
                        ? stateSlice
                        : JSON.stringify(stateSlice, replacer, space)
                );
            } catch (e) {
                console.warn('Unable to save state to localStorage:', e);
            }
        } else if (typeof stateSlice === 'undefined') {
            try {
                storage.removeItem(key);
            } catch (e) {
                console.warn(
                    `Exception on removing/cleaning undefined '${key}' state`,
                    e
                );
            }
        }
    });
};
