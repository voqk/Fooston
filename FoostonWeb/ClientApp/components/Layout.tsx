import * as React from 'react';
import NavMenu from './NavMenu';

interface LayoutProps {
    children?: React.ReactNode;
}

export default class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return (
            <div>
                <NavMenu />
                { this.props.children }
            </div>
        );
    }
}
