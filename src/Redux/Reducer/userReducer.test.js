import { LOGIN, LOGOUT, SHOWALERT, HIDEALERT } from "../Action/Types";
import { userReducer } from "./UserReducer";
describe("User Reducer Test", () => {

    it("should return new state", () => {
        const newState = userReducer({ user: "deep", alertData: { msg: "yes done", status: "success" } }, {});

        var user = {};
        if (localStorage.getItem('user')) {
            user = JSON.parse(localStorage.getItem("user"));
        } else {
            user = {}
        }
        expect(newState).toEqual({ alertData: { msg: "yes done", status: "success" }, user: "deep" });

    })

})