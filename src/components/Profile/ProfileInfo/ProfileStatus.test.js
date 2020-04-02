import React from 'react';
import { create } from "react-test-renderer";
import ProfileStatus from './ProfileStatus.tex';

describe('ProfileStatus component', () => {
    test("status from test must be in state", () => {
        const component = create(<ProfileStatus status="SQQQQQQ" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("SQQQQQQ")
    });
    test("Check span", () => {
        const component = create(<ProfileStatus status="SQQQQQQ" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull()
    });
    test("Check input after creation", () => {
        const component = create(<ProfileStatus status="SQQQQQQ" />);
        const root = component.root;
        expect(() => {
            const input = root.findByType("input");
        }).toThrow()
    });
    test("Check span after creation", () => {
        const component = create(<ProfileStatus status="SQQQQQQ" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe("SQQQQQQ")
    });
    test("Changing to edit mode instead of span", () => {
        const component = create(<ProfileStatus status="SQQQQQQ" />);
        const root = component.root;        
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect( input.props.value).toBe("SQQQQQQ")
    });
    test("Callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="SQQQQQQ" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();

        expect(mockCallback.mock.calls.length).toBe(1)
    });
})