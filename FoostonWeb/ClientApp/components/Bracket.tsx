import '../css/bracket.css';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

function Box(props: any) {
    const style: React.CSSProperties = {
        width: "200px",
        height: "60px",
        border: "1px dashed grey"
    };
    return <div style={style}>&nbsp;</div>
}

export class Bracket extends React.Component<RouteComponentProps<any>, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h1>Double Elimination</h1>
                <Box /><Box />
                <h1>Single Elimination</h1>   
                <div className="tournament">
                    <ul className="round round-1">
                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top winner">Lousville <span>79</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom">NC A&T <span>48</span></li>

                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top winner">Colo St <span>84</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom">Missouri <span>72</span></li>

                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top winner">Colo St <span>84</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom">Missouri <span>72</span></li>

                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top winner">Colo St <span>84</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom">Missouri <span>72</span></li>

                        <li className="spacer">&nbsp;</li>
                    </ul>

                    <ul className="round round-2">
                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top winner">Lousville <span>79</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom">Colo St<span>48</span></li>

                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top winner">Lousville <span>79</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom">Colo St<span>48</span></li>

                        <li className="spacer">&nbsp;</li>
                    </ul>

                    <ul className="round round-3">
                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top winner">Lousville <span>79</span></li>
                        <li className="game game-spacer">&nbsp;</li>
                        <li className="game game-bottom">Colo St<span>48</span></li>

                        <li className="spacer">&nbsp;</li>
                    </ul>

                    <ul className="round round-4">
                        <li className="spacer">&nbsp;</li>

                        <li className="game game-top winner">Lousville <span>80</span></li>

                        <li className="spacer">&nbsp;</li>
                    </ul>
                </div>
            </div>
        );
    }
}
