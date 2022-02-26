import {CURRENCYCHANGE} from "../Action/Types";
import { coinReducer } from "./CoinReducer";
describe("Coin Reducer Test", () => {

    it("should return default state", () => {
        const newState = coinReducer(undefined, {});
        expect(newState).toStrictEqual({currency:"USD"});
    })
    it("should return correct state when value is passed",()=>{

        const newState=coinReducer(undefined,{type:CURRENCYCHANGE,payload:"INR"});
        expect(newState).toStrictEqual({currency:"INR"})
    })
})