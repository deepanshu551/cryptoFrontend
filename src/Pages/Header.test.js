import React from "react";
import Header from "./Header";
import { shallow,mount } from "enzyme";
import { Provider } from "react-redux";
import store from "../Redux/CreateStore";

describe("Test cases for header component", () => {


    it('it should pass without errors', () => {

        const component = shallow( <Provider store={store}><Header/></Provider> );
        console.log(component.debug());
        const wrapper = component.containsAllMatchingElements([<Header />]);
        expect(wrapper).toBe(true);

    })

})