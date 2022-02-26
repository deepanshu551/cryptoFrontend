import React from "react";
import ReactDOM from "react-dom"
import { shallow } from "enzyme";
import Header from "./Pages/Header";

import App from "./App"
describe("App component", () => {


    it("check the navbar", () => {

        const component = shallow( < App / > )

        const wrapper = component.containsAllMatchingElements([ < Header / > ]);

        expect(wrapper).toEqual(true);
    })
    it("check the Alert", () => {

        const component = shallow( < App / > )


        const wrapper = component.exists(".alert");

        expect(wrapper).toEqual(true);
    })
})