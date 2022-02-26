import { CURRENCYCHANGE, LOGIN, LOGOUT, SHOWALERT, HIDEALERT } from "./Types";
import { changeCurrency, userLogin, userLogout, showAlert, hideAlert } from "./index";


describe("test all the actions ", () => {


    it("should create the action to change the currency", () => {

        const text = "INR";
        const expectedAction = { type: CURRENCYCHANGE, payload: text };

        expect(changeCurrency(text)).toStrictEqual(expectedAction)
    });
    it("should create the action to login", () => {

        const text = { userName: "deep@123.com", token: "sjdkjshdkjashkjh" };
        const expectedAction = { type: LOGIN, payload: text };
        expect(userLogin(text)).toEqual(expectedAction)
    });
    it("should create the action to logout", () => {


        const expectedAction = { type: LOGOUT };
        expect(userLogout()).toEqual(expectedAction)
    });
    it("should create the action to showalert", () => {

        const text = { message: "deep logged in successfully", type: "success" };
        const expectedAction = { type: SHOWALERT, payload: text };
        expect(showAlert(text)).toEqual(expectedAction)
    });
    it("should create the action to hidealert", () => {


        const expectedAction = { type: HIDEALERT };
        expect(hideAlert()).toEqual(expectedAction)
    });
})