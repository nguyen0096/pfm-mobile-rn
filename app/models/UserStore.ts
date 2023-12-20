import { Instance, SnapshotOut, types } from "mobx-state-tree";

export const UserStoreModel = types
    .model("UserStore")
    .props({
        isLoggedIn: types.maybe(types.boolean),
        authToken: types.string,
    })
    .actions(store => ({
        login(authToken: string) {
            store.authToken = authToken
            store.isLoggedIn = true
        },
        logout() {
            store.authToken = "";
            store.isLoggedIn = false;
        }
    }))

export interface UserStore extends Instance<typeof UserStoreModel> { }
export interface UserStoreSnapshot extends SnapshotOut<typeof UserStoreModel> { }