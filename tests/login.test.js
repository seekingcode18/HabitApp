import React from 'react';
import {shallow, mount} from 'enzyme';
import Login from '../src/containers/Login/Login';
import Habits from '../src/containers/Habits/Habits';
import Add_habit from '../src/components/Add_habit/Add_habit';
import {Link} from 'react-router-dom';


describe("shallow login", () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Login />))

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })

    it("Should render a h2 element", () => {
        expect(wrapper.find("h2").length).toEqual(1);
    })
})

describe("Shallow Habits", () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Habits />))

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })

    it("Should render a h2 element", () => {
        expect(wrapper.find("h2").length).toEqual(1);
    })

    it("Should render 2 p elements", () => {
        expect(wrapper.find("p").length).toEqual(3);
    })

    // it("calls habitMap which prints a habit component", () => {
    //     const spy = jest.spyOn(wrapper.instance(), "habitMap");
    //     wrapper.instance.forceUpdate();
    //     expect(spy).toHaveBeenCalledTimes(0);
    //     wrapper.find()
    // })
})

describe("shallow add a habit",() =>{
    let wrapper;

    beforeEach(() => wrapper = shallow(<Add_habit 
        title="eat fruit"
        habitId={ObjectId("1092381023821")}
        freq_actual={5}
        freq_goal={5}
        streak={5}
        userId="10238218321"
    />))

    // it("Should render a h2 element", () => {
    //     expect(wrapper.find("h2").length).toEqual(1);
    // })

    // it("Should update the state", () => {
    //     const spy = jest.spyOn(wrapper.instance(), "handleTitle");
    //     wrapper.instance().forceUpdate();
    //     expect(spy).toHaveBeenCalledTimes(0);
    //     wrapper.find("input").first().simulate("change");
    //     expect(spy).toHaveBeenCalledTimes(1);
    // })
})

