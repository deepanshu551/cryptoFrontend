import React from "react";
import { shallow,mount } from "enzyme";
import CryptoListComp from "./CryptoListComp";
import {Provider } from "react-redux";
import store from "../Redux/CreateStore";
import axios from "../Utils/axios";
import {act} from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";



describe("Test for CryptoListComp", () => {
   
 

    it("must render a loading span before api call success", async () => {

        const component = shallow(<Provider store={store}>< CryptoListComp / ></Provider>  );


        expect(component.find("linearProgress").exists).toBeTruthy();
    });

  
})