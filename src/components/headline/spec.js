import React from "react";
import {
    shallow
} from "enzyme";
import {
    findByTestAtrr
} from "./../../../utils";

import Headline from './index'
import {
    wrap
} from "module";

const setUp = (props = {}) => {
        const component = shallow( < Headline {
                ...props
            }
            />);
            return component
        }

        describe('Headline Component', () => {
            describe('Have props', () => {
                let wrapper;
                beforeEach(() => {
                    const props = {
                        header: 'Test Header',
                        desc: 'Test Description'
                    }
                    wrapper = setUp(props)
                });

                it('Should render without errors', () => {
                    const component = findByTestAtrr(wrapper, 'HeadlineComponent');
                    expect(component.length).toBe(1)
                });

                it('Should render H1', () => {
                    const H1 = findByTestAtrr(wrapper, 'header')
                    expect(H1.length).toBe(1)
                });

                it('Should render desc', () => {
                    const desc = findByTestAtrr(wrapper, 'desciption')
                    expect(desc.length).toBe(1)
                });
            });


            describe('Have NO props', () => {
                let wrapper
                beforeEach(() => {
                    wrapper = setUp();
                });

                it('Should NOT render', () => {
                    const component = findByTestAtrr(wrapper, 'HeadlineComponent')
                    expect(component.length).toBe(0)
                });

            });
        });