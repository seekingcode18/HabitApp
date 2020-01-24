import React from 'react';
import {shallow, mount} from 'enzyme';
import Login from '../src/containers/Login/Login';
import Habits from '../src/containers/Habits/Habits';
import AddHabit from '../src/components/Add_habit/Add_habit';
import Habit from '../src/components/Habit/Habit';


describe("Login.js", () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Login />))

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })

    it("Should render a h2 element", () => {
        expect(wrapper.find("h2").length).toEqual(1);
    })
})

describe("Habit.js", () => {
    let wrapper;

    beforeEach(() => wrapper = mount(<Habit />))

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })

    it("Should render a div element", () => {
        expect(wrapper.find("div").length).toEqual(1);
    })

    it("Should render a a element", () => {
        expect(wrapper.find("a").length).toEqual(1);
    })
});

describe("Shallow Habits", () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Habits />))

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })

    it("Should render a h2 element", () => {
        expect(wrapper.find("h2").length).toEqual(1);
    })

    it("Should render 3 p elements", () => {
        expect(wrapper.find("p").length).toEqual(3);
    })

})
