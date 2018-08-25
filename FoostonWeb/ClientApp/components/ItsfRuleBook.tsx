import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import { StickyContainer, Sticky } from 'react-sticky';

export class ItsfRuleBook extends React.Component<RouteComponentProps<{}>, {}>{
    componentDidMount() {
        document.title = "Fooston | Official foosball rules";
    }

    render() {
        return (
            <div className="container">
                <Row>
                    <Col sm={12}>
                    <div className='page-header'>
                        <h1>Official foosball rules</h1>
                        <p>The official foosball rules come from ITSF and we've copied them into a more friendly format than the .pdf ITSF provides. You can find that official rule set at <a href="https://www.tablesoccer.com">www.tablesoccer.com</a> or download it directly: <a href="https://www.tablesoccer.org/rules/documents/2016_Rulebook.pdf">2016_Rulebook.pdf</a></p> 
                        <h2>ITSF 2016 Rule Book</h2>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} mdPush={9}>
                        <h3>Index</h3>
                        <Scrollspy
                            items={[
                                'INTRODUCTION',
                                'QUALIFIED-AUTHORITIES',
                                'MATERIALS-AND-HARDWARE',
                                "PARALYMPIC REGULATIONS",
                                "1.-code-of-ethics",
                                "2.-The-Match",
                                "3.-To-Start-a-Match",
                                "4.-Serve-and-Ready-Protocol",
                                "4.1-The-serve",
                                "5.-Subsequent-Serves"
                            ]}
                            currentClassName="is-current"
                            data-spy="affix"
                            style={{listStyle: "none", paddingLeft: 0}}

                        >
                            <li><a href={`${this.props.location.pathname}#INTRODUCTION`}>INTRODUCTION</a></li>
                            <li><a href={`${this.props.location.pathname}#QUALIFIED-AUTHORITIES`}>QUALIFIED AUTHORITIES</a></li>
                            <li><a href={`${this.props.location.pathname}#MATERIALS-AND-HARDWARE`}>MATERIALS AND HARDWARE</a></li>
                            <li><a href={`${this.props.location.pathname}#Paralympic-Technical-Regulations`}>PARALYMPIC REGULATIONS</a></li>
                            <li><a href={`${this.props.location.pathname}#1.-Code-of-Ethics`}>1. Code of Ethics</a></li>
                            <li><a href={`${this.props.location.pathname}#2.-The-Match`}>2. The Match</a></li>
                            <li><a href={`${this.props.location.pathname}#3.-To-Start-a-Match`}>3. To Start a Match</a></li>
                            {/*<li>
                                <a href={`${this.props.location.pathname}#4.-Serve-and-Ready-Protocol`}>4. Serve and Ready Protocol</a>
                                <ul style={{ listStyle: "none", paddingLeft: "2em"}}>
                                    <li><a href={`${this.props.location.pathname}#4.1-The-serve`}>4.1 The serve</a></li>
                                </ul>
                            </li>*/}
                            <li><a href={`${this.props.location.pathname}#5.-Subsequent-Serves`}>5. Subsequent Serves</a></li>
                            <li><a href={`${this.props.location.pathname}#6.-Ball-in-Play`}>6. Ball in Play</a></li>
                            <li><a href={`${this.props.location.pathname}#7.-Ball-Off-the-Table`}>7. Ball Off the Table</a></li>
                            <li><a href={`${this.props.location.pathname}#8.-Dead-Ball`}>8. Dead Ball</a></li>
                            <li><a href={`${this.props.location.pathname}#9.-Time-Out`}>9. Time Out</a></li>
                            <li><a href={`${this.props.location.pathname}#10.-Resuming-Play-After-a-Time-Out`}>10. Resuming Play After a Time Out</a></li>
                            <li><a href={`${this.props.location.pathname}#11.-Official-Time-Out`}>11. Official Time Out</a></li>
                            <li><a href={`${this.props.location.pathname}#12.-Point-Scored`}>12. Point Scored</a></li>
                            <li><a href={`${this.props.location.pathname}#13.-Table-Sides`}>13. Table Sides</a></li>
                            <li><a href={`${this.props.location.pathname}#14.-Change-of-Positions`}>14. Change of Positions</a></li>
                            <li><a href={`${this.props.location.pathname}#15.-Spinning-the-Rods`}>15. Spinning the Rods</a></li>
                            <li><a href={`${this.props.location.pathname}#16.-Jarring`}>16. Jarring</a></li>
                            <li><a href={`${this.props.location.pathname}#17.-Reset`}>17. Reset</a></li>
                            <li><a href={`${this.props.location.pathname}#18.-Reaching-Into-the-Playing-Area`}>18. Reaching Into the Playing Area</a></li>
                            <li><a href={`${this.props.location.pathname}#19.-Alterations-to-the-Table`}>19. Alterations to the Table</a></li>
                            <li><a href={`${this.props.location.pathname}#20.-Distraction`}>20. Distraction</a></li>
                            <li><a href={`${this.props.location.pathname}#21.-Practice`}>21. Practice</a></li>
                            <li><a href={`${this.props.location.pathname}#22.-Language-and-Behavior`}>22. Language and Behavior</a></li>
                            <li><a href={`${this.props.location.pathname}#23.-Passing`}>23. Passing</a></li>
                            <li><a href={`${this.props.location.pathname}#24.-Time-of-Possession`}>24. Time of Possession</a></li>
                            <li><a href={`${this.props.location.pathname}#25.-Delay-of-Game`}>25. Delay of Game</a></li>
                            <li><a href={`${this.props.location.pathname}#26.-Recalls-and-Forfeiture`}>26. Recalls and Forfeiture</a></li>
                            <li><a href={`${this.props.location.pathname}#27.-Technical-Fouls`}>27. Technical Fouls</a></li>
                            <li><a href={`${this.props.location.pathname}#28.-Rules-Decisions-and-Appeals`}>28. Rules Decisions and Appeals</a></li>
                            <li><a href={`${this.props.location.pathname}#29.-Dress-Code`}>29. Dress Code</a></li>
                            <li><a href={`${this.props.location.pathname}#30.-Tournament-Director`}>30. Tournament Director</a></li>
                            <li><a href={`${this.props.location.pathname}#31.-Side-Events`}>31. Side Events</a></li>
                        </Scrollspy>
                    </Col>
                    <Col md={9} mdPull={3}>
                        <section id="INTRODUCTION">
                            <h3>INTRODUCTION</h3>
                            <strong>All Players and organizers must follow this rulebook.</strong>
                            <ol type="a">
                                <li>The rulebook is meant as a guide to assist the Referees. Its goal is above all to explain the rules of the game. And so, as much as the Referee’s goal is to show his authority for the good of the game, he must also be careful not to slow it down by a too strict arbitration.</li>
                                <li>Reminder: Federation Referees represent the highest authority of the rulebook in a tournament. Their decisions must be respected and cannot be disputed. A Federation Referee can be called upon to advise on interpretations of the rulebook.  If no Federation Referee is present at the tournament, the Tournament Director assumes the duties of a Federation Referee.</li>
                                <li>The rules of the game of table soccer are conceived as much to facilitate ruling by Referees as by the Players themselves.</li>
                                <li>The objective is to limit subjective interpretations to an absolute minimum.</li>
                                <li>The aim of the rules is also to bring the game to a level of mutual respect between the Players while seeming transparent to the spectators.</li>
                                <li>We remind the reader that while the Referee’s judgment cannot be challenged, human errors can be a part of the game.</li>
                            </ol>
                        </section>
                        <section id="QUALIFIED-AUTHORITIES">
                            <h3>QUALIFIED AUTHORITIES</h3>
                            <ol type="a">
                                <li>This rulebook has been written and edited by the Rules Commission under the responsibility of the Sporting Commission. It is put to a vote and set up at the beginning of each season by the Executive Committee of the ITSF (International Table Soccer Federation). It can be examined and amended in a general assembly.</li>
                                <li>In cases of inconsistencies or of difficult situations, immediate amendments can be proposed by the Rules Commission in course of the season. These amendments must then be put to a vote by the Executive Committee.</li>
                                <li>The use of the rulebook is the responsibility of ITSF Federations, Referees, and the Players.</li>
                                <li>The matches can be either arbitrated or auto-arbitrated. In an arbitrated match, the Referee is the qualified authority. In a match without a Referee, any Referee by title that is present on the premises can be solicited. In the event of an unsolvable difficulty, the Tournament Organizer and Head Official can be summoned. They are responsible to make the decision known to the Sporting Commission which in turn is responsible to make this decision widely known to the members.</li>
                                <li>A Referee who is solicited during a match to make a ruling may gather information from other Referees, from spectators, and from video recordings, if available, to help make the best ruling possible.</li>
                                <li>Questions, requests for explanations, as well as requests for modifications of the rules, must be addressed to the person in charge of the Referees and Rules Commission. He in turn answers to the person in charge of the Sporting Commission.</li>
                                <li>The penalties and sanctions involving the loss of a game or match is the responsibility of the Head Officials. In the event of a more serious sanction, a report must be transmitted by the Tournament Director to the Discipline Commission.</li>
                                <li>These rules can be modified or adapted during a tournament in very exceptional circumstances with the consent of an ITSF Delegate and/or an ITSF Head Official. Any changes must be reported to the Sport Commission and the ITSF Executive Committee immediately for confirmation or the tournament can be disqualified from the ITSF ranking.</li>
                                <li>Rules relating to ITSF Paralympic Table-Soccer events are indicated with the ♿ symbol. The ITSF Paralympic Commission will evaluate any adjustments required in relation to any rules regarding disability.</li>
                            </ol>
                        </section>
                        <section id="MATERIALS-AND-HARDWARE">
                            <h3>MATERIALS AND HARDWARE</h3>
                            <h3>TABLE</h3>
                            <ol type="a">
                                <li>The Official tables are voted by ITSF General Assembly. This choice of table can be modified according to the agreements between the ITSF and manufacturers and partners.</li>
                                <li>The organizers must provide competitive equipment (sandpapered players, clean and straight bars).</li>
                                <li>In no cases may the surface of the table be sandpapered, and doing so will be penalized by exclusion of the tournament and reimbursement of the surface.</li>
                                <li>Players are free to lubricate the exterior of the bars. Not interior in case of telescopic bars.</li>
                                <li>The organizers may make it compulsory to utilize specific brands of lubrication products and cleaning agents. These must then be made accessible to the Players. Under these circumstances, the use of another brand will result in exclusion of the Player from the tournament.</li>
                                <li>Applying resin, magnesium, or any similar product, directly onto the table surface or balls is strictly prohibited. The penalty for violation may be grounds for exclusion of the player from the tournament.</li>
                                <li>The organizers are free to prohibit any products considered to be dangerous for the equipment or for the Players.</li>
                                <li>No changes may be made to affect the interior playing characteristics of the table or men with the exception of routine table maintenance.</li>
                            </ol>
                            <h4>BALLS</h4>
                            <ol>
                                <li>The Official balls are voted by ITSF sport commission. An appendix to this rule will be provided after the final choice for the season has been made.</li>
                                <li>During competition, games must be played with balls provided at the tournament site.</li>
                                <li>All Players are required to obtain an approved tournament ball.</li>
                            </ol>
                            <h4>HANDLES</h4>
                            <ol>
                                <li>Each Player may use the handles of his choice on tables where handles can be changed. They must be able to fit onto the bars without causing damage to the table or injury to the player.</li>
                                <li>The Players movements must be unassisted and unobstructed. No mechanical systems will be authorized. The handles must be securely attached to the bar on which they are installed.</li>
                                <li>The organizers may rule that specific handles are dangerous and therefore require that the Player not use them. Refusal by a Player to remove his handles will lead to exclusion from the tournament.</li>
                                <li>In a multiple game match players must be able to change the handles within the time allotted between games, time outs or between points.</li>
                            </ol>
                            <h4>OTHER ACCESSORIES</h4>
                            <ol type="a">
                                <li>All other accessories (gloves, elastic bands, no-skid handle-sleeves…) are authorized unless they are perceived to endanger the Player or other participants.</li>
                                <li>Under no circumstances may the surface or sides of the table be modified by the accessories.</li>
                            </ol>
                        </section>
                        <section id="Paralympic-Technical-Regulations">
                            <h3>Paralympic Technical Regulations ♿</h3>
                            <h4>ELIGIBILITY</h4>
                            <ol type="a">
                                <li>Players with congenital or acquired physical disabilities - A certificate of disability should be sent to the ITSF while getting the ITSF membership card, or at the time of registration for a match, in order to avoid problems during the match or after it. The ITSF Paralympic Commission will evaluate any exceptions to these regulations by analyzing each case individually.</li>
                                <li>Able-bodied players are not allowed to participate in competitions that are designated for disabled players, except during “Integrated sport” events where able and disabled players can play in doubles or for the same team.</li>
                                <li><strong>World Cup:</strong> a disabled player, who is allowed to participate in the World Cup within the disabled National Team, cannot compete in the able-bodied categories, since s/he should choose in which category s/he wants to play.</li>
                                <li><strong>World Championship:</strong> a disabled player can participate in both competitions for able and disabled categories simultaneously, taking into consideration the different ITSF official rules depending on the category in which s/he is playing.</li>
                                <li><strong>Coaches:</strong> a coach can also be a player if he or she has a physical disability; if not, he or she can only coach</li>
                            </ol>
                            <h4>WHEELCHAIR</h4>
                            <ol type="a">
                                <li>It is mandatory to play while seated in a wheelchair. Regular chairs are not allowed.</li>
                                <li>The use of additional materials such as pillows, wheel supporters, belts or straps with Velcro are permitted to guarantee correct body posture, and ensure stability and safety. Players may apply any kind of technical device in order to avoid short-term or long-term tendon/muscle injuries. Other sports items may be used with the permission of the ITSF Paralympic Commission.</li>
                                <li>It is forbidden to have the hip bone (Anterior Superior Iliac spine) higher than the handles. This can be measured by pulling out the 2-bar or 5-bar.</li>
                                <li>The handle of the extended rod should not touch the thigh of the player. It should be possible to pass the player’s hand between the handle and his/her thigh.</li>
                            </ol>
                            <h4>ASSISTIVE DEVICES AND PROSTHESES</h4>
                            <ol type="a">
                                <li>Unilateral amputee players cannot play with their prosthesis.</li>
                                <li>Bilateral amputee players can use only one prosthesis.</li>
                                <li>Players with Poliomyelitis disabilities can play only with feet placed on the footrests, except for some cases after getting the permission of the ITSF Paralympic Commission.</li>
                                <li>All other physical disabilities will be evaluated individually by the ITSF Paralympic Commission.</li>
                                <li>Players who can control one or both of their lower limbs must keep their feet on the footrest whereas all other players who cannot control the lower limbs can keep their feet either on footrests or on the floor.</li>
                            </ol>
                            <h4>VIOLATIONS</h4>
                            <ol type="a">
                                <li>A player has the right to call a foul on an opponent for violations of the technical regulations. If unresolved, the authorized tournament official will judge whether it is a breach. If the official notes repetition of any irregularity, the penalty is the loss of a set. If the breach is repeated a third time, this will cause the loss of the match. Repetition of the same irregularity may lead to disqualification from the competition.</li>
                                <li>Players need to have any exceptions to the technical regulations approved by the ITSF Paralympic Commission prior to competitions in order to avoid being called on breach of the regulations.</li>
                            </ol>
                        </section>
                        <section id="1.-Code-of-Ethics">
                            <h3>1. Code of Ethics</h3>
                            <p>Any action of an unsportsmanlike or unethical nature during tournament play, in the tournament room, or on the grounds of the host facility, will be considered a violation of the Code of Ethics. Mutual respect between all players, Referees and/or spectators is a requirement. It shall be the aim of every player and Referee to represent table-soccer in the most positive and sportsmanlike manner possible.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>1.1</strong> The penalty for breaking the Code of Ethics may be forfeiture of a game or match, expulsion from the tournament, and/or a fine. Whether or not the Code of Ethics has been broken, and what is the appropriate penalty for the infraction will be determined by the ITSF Disciplinary Commission or if not present by the Head Official and Tournament Director.</p>
                            </div>
                        </section>
                        <section id="2.-The-Match">
                            <h3>2. The Match</h3>
                            <p>Unless otherwise stated by the tournament director, a match shall consist of the first player or team to win 3 out of 5 games.  Each game shall consist of 5 points. The final game of the match shall be to 5 points with a 2 point margin up to a maximum of 8 points.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>2.1</strong> The number of games played is the responsibility of the Tournament Director and will be published in the tournament announcement.</p>
                                <p><strong>2.2</strong> The Tournament Director may modify the number of games, points, and match time, in order to complete the event in a timely manner or as needed for televised or recorded matches.</p>
                                <p><strong>2.3</strong> In every sanctioned ITSF tournament the number of games played will be announced by the ITSF Sports Commission and will be published in the official ITSF tournament announcement.</p>
                                <p><strong>2.4</strong> The penalty for breaking the specified number of games or points played may be forfeiture of a match or expulsion from the tournament to both teams involved.</p>
                            </div>
                        </section>
                        <section id="3.-To-Start-a-Match">
                            <h3>3. To Start a Match</h3>
                            <p>A coin flip shall precede the start of the match. The team that wins the flip has the choice of table side or first serve. The team that loses the flip has the remaining option.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>3.1</strong> Once a team has chosen either the table side or the first serve, they may not change their decision.</p>
                                <p><strong>3.2</strong> The match officially starts once the ball has been put into play. (BUT violations such as cursing, etc. may be called by the Referee assigned to judge the match as soon as he and both teams are present at the table.)</p>
                            </div>
                        </section>
                        <section id="4.-Serve-and-Ready-Protocol">
                            <h3>4. Serve and Ready Protocol</h3>
                            <p>A serve is defined as putting the ball into play at the five-man rod at the beginning of a game, after a point is scored, or if the ball is awarded to a player on the five-man rod following a rules infraction. The ready protocol will be used whenever putting the ball into play.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <section id="4.1-The-serve">
                                    <div><strong>4.1 The serve.</strong></div>
                                    <p>Once a team has chosen either the table side or the first serve, they may not change their decision.</p>
                                    <div style={{ paddingLeft: "2.0em" }}>
                                        <p><strong>4.1.1</strong> If the ball is served from a position other than the middle player figure and the violation is discovered before the ball is scored play shall stop and the ball will be re-served by the same team. Once a point is scored, no appeal shall be made. The penalty for subsequent violations is loss of possession to the opponent for serve.</p>
                                    </div>
                                </section>
                                <section id="4.2-Ready-Protocol">
                                    <div><strong>4.2 Ready Protocol</strong></div>
                                    <p>Before the ball can be put into play, the player in possession must ask the direct opponent if he or she is "ready". The direct opponent has three seconds to respond "ready". The player in possession now has three seconds to put the ball into play. Waiting beyond these time limits will be considered a delay of game (<a href={`${this.props.location.pathname}#25.-Delay-of-Game`}>See Rule 25</a>).</p>
                                    <div style={{ paddingLeft: "2.0em" }}>
                                        <p><strong>4.2.1</strong> The penalty for beginning to put the ball into play before the opponent responds “ready” is a warning and the ball shall be put into play from its original position. The penalty for subsequent violations is loss of possession to the opponent for serve.</p>
                                        <section id="4.2.2"><p><strong>4.2.2</strong> To begin play, the ball must be moved from one player figure to another but may not be directly advanced from the second figure. After contacting the second player figure, the ball may be directly advanced by any other player figure. The player does not have to stop the ball or wait prior to advancing the ball. The ball is considered to be in play and the time limits begin the moment the ball contacts the second player figure.</p></section>
                                        <p><strong>4.2.3</strong> The penalty for violation of rule <a href={`${this.props.location.pathname}#4.2.2`}>4.4.2</a> is the opponent's choice to either continue play from the current position (including the goal) or to serve the ball.</p>
                                    </div>
                                </section>
                            </div>
                        </section>
                        <section id="5.-Subsequent-Serves">
                            <h3>5. Subsequent Serves</h3>
                            <p>Following the first serve of a match, subsequent serves shall be made by the team last scored upon. The first serve in subsequent games of a multi-game match shall be made by the team that lost the preceding game.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>5.1</strong> If the ball is served by the wrong team, and the violation is discovered before the ball is scored, play shall be stopped and the ball shall be served by the proper team. Once the ball is scored, no protests shall be allowed, and play shall continue as if no infraction had been committed.</p>
                                <p><strong>5.2</strong> If a team is awarded possession because the opposing team is penalized for a rules infraction and the ball subsequently goes dead between the five-man rods it shall be served by the team who originally served that ball.</p>
                            </div>
                        </section>
                        <section id="6.-Ball-in-Play">
                            <h3>6. Ball in Play</h3>
                            <p>Once a ball is put into play it shall remain in play until the ball is hit off the table, a dead ball is declared, time out is called, or a point is scored.</p>
                        </section>
                        <section id="7.-Ball-Off-the-Table">
                            <h3>7. Ball Off the Table</h3>
                            <p>If the ball leaves the playing area and strikes the score markers, light fixture, or any object that is not part of the table, or if the ball rolls or comes to rest on the top of the cabinet, it shall be declared off the table. Otherwise, if the ball hits the top of the side rails or cabinet ends and subsequently returns to the playing surface, the ball is still in play.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>7.1</strong> The play area shall be defined as the area above the playing surface to the height of the sideboards of the cabinet.  The top of the side rails and cabinet ends are only in play if the ball returns to the playing surface.</p>
                                <p><strong>7.2</strong> If the ball enters the serving hole (if present) and returns to the playfield it is still considered to be "in play." If the ball remains in the serving hole, it will be treated as a dead ball between the five-man rods.</p>
                                <p><strong>7.3</strong> If a player advances the ball and it subsequently goes off the table, it will be put back into play at the opposing team’s goalie rods. A defensive player is not considered to have advanced the ball if it goes off the table as a result of blocking or reacting to a blocked pass or shot.</p>
                                <section id="7.4"><p><strong>7.4</strong> A player may not perform any shot that causes the ball to lob or volley over the opponent’s rods (Example: Aerial Shot). It is not considered a penalty if a shot, which leaves the current rod of possession, deflects off another rod and then goes airborne.</p></section>
                                <p><strong>7.5</strong> Penalty for violating rule <a href={`${this.props.location.pathname}#7.4`}>7.4</a> is loss of possession to opponent’s five-man rod for serve.</p>
                            </div>
                        </section>
                        <section id="8.-Dead-Ball">
                            <h3>8. Dead Ball</h3>
                            <p>A ball shall be declared a dead ball when it has completely stopped its motion and is not within reach of any player figure.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>8.1</strong> If the ball is declared dead anywhere between the five-man rods, it shall be put back into play at the five-man rod by the team who originally served the ball. (<a href={`${this.props.location.pathname}#4.-Serve-and-Ready-Protocol`}>See Rule 4</a>).</p>
                                <p><strong>8.2</strong> If the ball is declared dead between the goal and five-man rods, it shall be put back into play at the two-man rod nearest the spot of the dead ball. Play shall resume using the “Ready” Protocol (<a href={`${this.props.location.pathname}#4.-Serve-and-Ready-Protocol`}>See Rule 4</a>).</p>
                                <p><strong>8.3</strong> In the goalie area, if the ball is spinning in place but out of reach of any player figure it is not considered a dead ball and time limits shall be suspended until the ball either moves within reach or goes dead.</p>
                                <p><strong>8.4</strong> A ball that is intentionally made dead shall be awarded to the opposing team for a serve. (Example: pushing the ball from the bottom until out of reach)</p>
                            </div>
                        </section>
                        <section id="9.-Time-Out">
                            <h3>9. Time Out</h3>
                            <p>Each team is allowed two time outs per game during which the players may leave the table. Such time outs shall not exceed 30 seconds. If the ball is in play, time out may only be called by the team in possession of the ball. If the ball is not in play, either team may call time out.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>9.1</strong> Either team may take the full 30 seconds, even if the team that called the time out does not wish to take the full allotment.</p>
                                <p><strong>9.2</strong> In any doubles event, either team may switch positions during a time out. (See Rule 14.1)</p>
                                <p><strong>9.3</strong> A time out called between games shall count towards the number of time-outs allowed in the following game.</p>
                                <p><strong>9.4</strong> A player who removes both hands from the handles and turns completely away from the table while the ball is in play shall be deemed to have requested a time out.</p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>9.4.1</strong> A player can take his hands from the handles to wipe them off before a shot, as long as this takes no more than two or three seconds. All time limits continue to run while the player wipes his hands. The team on defense should not relax if the opponent takes his hand(s) off the rod.</p>
                                    <p><strong>9.4.2</strong> Once the hand/wrist is replaced on the rod, a shot or pass may not be attempted until one full second has elapsed.</p>
                                </div>
                                <p><strong>9.5</strong> If the team with the ball attempts a shot or pass immediately after requesting a time out, the play shall not count and the team shall be charged with a distraction rather than a time out. (See Rule 20)</p>
                                <p><strong>9.6</strong> If the team in possession of the ball calls time out while the ball is in play and moving, the time out will not begin until the ball has completely stopped. If the time of possession expires before the ball completely stops, the team shall be penalized according to Rule 24.3.</p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>9.6.1</strong> If the team not in possession of the ball calls a time out when the ball is in play, that team shall be charged with a distraction. (See Rule 20)</p>
                                    <p><strong>9.6.2</strong> If the ball falls into the same team’s goal after requesting a time out, the point shall count for the opposing team</p>
                                </div>
                                <p><strong>9.7</strong> If a team is not ready to play at the end of the 30 second period, that team shall be charged with delay of game (See Rule 25).</p>
                                <p><strong>9.8</strong> A team requesting more than two time outs per game shall be issued a warning and the request will be denied. If the team is in possession of the ball and the ball is in play they shall lose possession to the opposing five-man rod for serve. Subsequent requests will result in a technical foul.</p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>9.8.1</strong> A team that is charged with more than two time outs in a game due to delay of game, requesting a second Referee during play, losing an appeal, or any other reason will result in a technical foul.</p>
                                </div>
                                <p><strong>9.9</strong>  Once a player begins to put the ball back into play following a time out (by moving the ball), another time out may not be called until the ball has left the current rod of possession. Both goalie rods are considered as one rod.</p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>9.9.1</strong> The Penalty for violation of rule 9.9 is loss of possession to the opposing goalie. The team shall not be charged with a time out.</p>
                                </div>
                                <p><strong>9.10</strong>  During a time out a player may reach into the play area to lubricate the rods, wipe the playfield, etc. The ball may be picked up by hand as long as permission is granted by the opponent and is returned to its original position before resuming play. A request to move or pick the ball up can be declined by the opposing team or by the Referee if present at the table (e.g. when the ball is near the edge of the goal).</p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>9.10.1</strong> If a player picks the ball up after the request has been declined the ball will be awarded to the opponent’s five-man rod for serve. If the ball is on the edge of the same team’s goal, a point will be scored for the opponent.</p>
                                    <p><strong>9.10.2</strong> If the team not in possession touches the ball or picks it up without permission, they will be charged with a technical foul.</p>
                                </div>
                            </div>
                        </section>
                        <section id="10.-Resuming-Play-After-a-Time-Out">
                            <h3>10. Resuming Play After a Time Out</h3>
                            <p> Following a time out, the ball shall be put back into play at the rod of possession where the time out was called.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>10.1</strong> The Ready Protocol must be followed when resuming play following a time out. (See Rule 4.2)</p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>10.1.1</strong> As soon as the player in possession puts his hands back on the handles, if the ball leaves the current rod before the procedure of putting the ball back into play has begun, the opponent has the choice to continue play from the current position or to serve the ball.</p>
                                </div>
                                <p><strong>10.2</strong> If the ball was not in play when the time out was called, the ball shall be put back into play by the team legally entitled to do so according to the rules.</p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>10.2.1</strong> If the time-out was called between balls (after a goal is scored but before the next ball is served) the ball shall be served on the 5-rod by the team which was last scored upon.</p>
                                </div>
                                <p><strong>10.3</strong> The penalty for illegally putting the ball back into play is the opponent's choice to continue play from the current position or serve the ball.</p>
                            </div>
                        </section>
                        <section id="11.-Official-Time-Out">
                            <h3>11. Official Time Out</h3>
                            <p> An Official Time Out does not count towards the two time outs allowed per team per game. After an Official Time Out, the ball is put back into play as though a regular Time Out was called.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>11.1</strong> If a Referee is not present at the start of the match, and a dispute arises during play, either team may request a Referee. Such a request can be made at any point during the match that the ball is stopped or dead.</p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>11.1.1</strong> The first request for a Referee is considered an Official Time Out.</p>
                                    <p><strong>11.1.2</strong> If the defensive team makes a request for a Referee while the ball is in play and stopped, and the offensive team simultaneously attempts a pass or shot, the request for a time out will be treated as a distraction by the defensive team. Likewise, a request for a Referee while the ball is in motion will also be considered a distraction.</p>
                                </div>
                                <p><strong>11.2</strong> Once play has resumed with a Referee at the table, any player requesting a second Referee will automatically be charged with a time out. Such a request may only be made during a dead ball or when the ball is not in play. The penalty for requesting another Referee while the ball is in play is a technical foul.</p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>11.2.1</strong> If play has resumed with two Referees at the table any request to replace a Referee will be decided by the Head Official or Tournament Organizer. If the request is denied, the player shall be charged with a technical foul.</p>
                                </div>
                                <p><strong>11.3</strong> A team may not switch positions during an Official Time Out, unless they are otherwise entitled to do so (see 14).</p>
                                <p><strong>11.4</strong> Table Maintenance – Table maintenance should be requested before the start of the match. Once the match has begun, the only time an Official Time Out for table maintenance may be called is for a sudden alteration to the table, such as a broken man, broken screw or pin, defective bumper, bent rod, etc.</p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>11.4.1</strong> If a player figure is broken while in contact with the ball, an Official Time Out will be declared while the rod is fixed. Play will resume on the rod where the player figure broke.</p>
                                    <p><strong>11.4.2</strong> If the table lighting fails, play shall immediately stop at that point (as though an Official Time Out were called).</p>
                                    <p><strong>11.4.3</strong> Routine maintenance, such as lubricating the rods, etc., should only be done during time outs and between games.</p>
                                </div>
                                <p><strong>11.5</strong> Foreign objects on field of play - if an object should fall on the playfield, play shall immediately stop at that point and the object shall be removed. Play shall resume from the rod where the ball was when the object hit the playfield. There should be nothing on the ends of the table that could fall onto the playfield. If the ball is in motion it will be put back into play by the player who had last possession.</p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>11.5.1</strong> If the ball comes into contact with a foreign object on the playfield that was overlooked play shall stop and the object shall be removed. Play shall continue at the rod of possession when play was stopped.</p>
                                </div>
                                <p><strong>11.6</strong> Medical time out - a player or team may request a medical time out. This request must be approved by the Tournament Director, the Head Official, or the referee of the match if the medical necessity is evident.  They will determine the length of the medical time out, up to a maximum or 60 minutes. A player who is physically unable to continue playing after that time must forfeit the match.</p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>11.6.1</strong> If the request for a medical time out is denied, the player will be charged with a time out.  The player may also be penalized for delay of game (see 25), at the discretion of the Referee at the table.</p>
                                </div>
                            </div>
                        </section>
                        <section id="12.-Point-Scored">
                            <h3>12. Point Scored</h3>
                            <p> A ball entering the goal shall count as a point, as long as it was legally scored. A ball which enters the goal but returns to the playing surface and/or leaves the table still counts as a goal.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>12.1</strong> If a point is not counted on the scoring markers and both teams agree that it was previously scored and inadvertently not marked up, the point shall count. If both teams do not agree that a point was scored and not marked up that point shall not be counted. Once the next game (or match) has begun no appeal can be made and the point shall not count.</p>
                                <p><strong>12.2</strong> If there is a controversy over whether or not the ball entered the goal, a Referee should be called to make a ruling. The Referee may make a ruling based on information received by the players and/or spectators. If the information gathered is inconclusive the point shall not count.</p>
                                <p><strong>12.3</strong> Any team intentionally marking up a point not scored shall not get credit for the point illegally marked up and shall be charged with a technical foul. Further violations of this rule will be grounds for forfeiture of game or match (to be determined by the Head Official).</p>
                            </div>
                        </section>
                        <section id="13.-Table-Sides">
                            <h3>13. Table Sides</h3>
                            <p> After each game is completed, teams have a 90 second time limit to begin the next game. If teams agree to switch sides of the table after the first game, they must continue to switch sides between games for the remainder of the match. If the teams decide not to switch sides after the first game, they must stay on the same sides for the remainder of the match.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>13.1</strong> If both teams wish to resume play before the full time has elapsed, play shall continue and the remainder of the 90 seconds is then forfeited.</p>
                                <p><strong>13.2</strong> If a team, is not ready to play at the end of the 90 second period, that team shall be charged with delay of game. (See Rule 25)</p>
                                <p><strong>13.3</strong> The Tournament Organizer may require teams to remain on the same sides during televised or recorded matches.</p>
                            </div>
                        </section>
                        <section id="14.-Change-of-Positions">
                            <h3>14. Change of Positions</h3>
                            <p> In any doubles event, players may only play the two rods normally designated for his position. Once the ball is put into play, the players must play the same position until a point is scored, a team requests a time out, or a technical foul is called.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>14.1</strong> Either team may switch positions during a time out, between points, between games, or before and/or after a technical foul shot.</p>
                                <p><strong>14.2</strong> If either team switches positions, they may not switch back until after the ball has been put back into play or a time out has been called. However, if the team in possession switches, the opposing team may also switch positions regardless of whether they have previously switched.</p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>14.2.1</strong> A team is considered to have switched positions once both players are in their respective positions facing the table regardless of whether or not they have touched the handles.</p>
                                </div>
                                <p><strong>14.3</strong> Illegally switching positions while the ball is in play will be judged a distraction and the players must return to their original positions.</p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>14.3.1</strong> In any doubles event any player placing their hand on any rod normally designated as one played by their partner while the ball is in play shall be judged as a distraction violations.</p>
                                </div>
                            </div>
                        </section>
                        <section id="Paralympic-Events">
                            <h4>♿ Paralympic Events</h4>
                            <p>In Singles, the players may move their wheelchairs between the forward and goalie positions and the ball may be directly advanced without having to wait for the opponent to get into position. Once the ball is stopped or under control of the threeman rod, the player must wait for the opponent to get into their defensive position before resuming play. The Ready Protocol must be followed when resuming play.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>14.4</strong> The opponent is allowed 3 seconds to reach back and grasp the defensive rods and 5 seconds to move into the defensive position before play may resume. Players are encouraged to employ good sportsmanship if an opponent requires more than 5 seconds due to issues with wheelchair movement.</p>
                                <p><strong>14.5</strong> Violation of this rule is loss of possession and the ball shall be served at the opposing five-man rod.</p>
                            </div>
                        </section>
                        <section id="15.-Spinning-the-Rods">
                            <h3>15. Spinning the Rods</h3>
                            <p>Spinning of the rods is illegal. Spinning is defined as the rotation of any soccer figure more than 360 degrees before or more than 360° after striking the ball. In calculating the 360° you do not add the degrees spun prior to striking the ball to the degrees spun after striking the ball.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>15.1</strong> If a ball is advanced by an illegal spin the opposing team will have the option of continuing play from the current position or to serve the ball.</p>
                                <p><strong>15.2</strong> Spinning of a rod which does not advance and/or strike the ball does not constitute an illegal spin. If a player's spinning rod hits the ball backwards into his own goal, it will count as a goal for the opposing team.  Spinning of a rod away from the ball (when there is no possession) is not considered an illegal spin, but may be ruled as a distraction.</p>
                                <p><strong>15.3</strong> If an ungrasped rod is spun by the force of a ball hitting a player figure on the rod, the spin will be considered legal (example: a two-man shot in singles hitting the three-man).</p>
                            </div>
                        </section>
                        <section id="16.-Jarring">
                            <h3>16. Jarring</h3>
                            <p>Any banging of the side walls or movement of the table that causes the opponent to lose possession or prevents them from catching the ball is considered a jarring infraction. Simultaneous bumping of the wall, as part of a pass or shot, is not considered jarring unless there was excessive force that clearly prevented the opponent from gaining possession. Jars are accumulated for the entire match.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>16.1</strong> Any touching or contacting of the opponent's rods that causes them to lose possession or prevents them from catching the ball will be considered a jarring infraction. Contacting an opponent’s rod that does not affect possession will be ruled a distraction. </p>
                                <p><strong>16.2</strong> Jarring of the table or excessively recoiling the rod after scoring a shot may be ruled unsportsmanlike behavior if done so in a disrespecting manner directed at the opponent. Slamming the rod after a shot while the ball is still in play may be considered jarring.</p>
                                <p><strong>16.3</strong> It is illegal for the player in possession of the ball to slam the rods into the side of the table in order to move the ball away from the wall. The first offense is a warning and subsequent violations will be loss of possession to the opposing five-man rod. This is not considered a jarring infraction.</p>
                                <p><strong>16.4</strong> The penalty for the first and second jarring infraction is the opponent’s option to continue play from the current position, from the rod where the jar was called, or they may serve the ball. Subsequent violations will be a Technical foul.</p>
                            </div>
                        </section>
                        <section id="17.-Reset">
                            <h3>17. Reset</h3>
                            <p>If a defensive player bumps or shakes the table enough to impair the opponent’s ability to control the ball or execute a pass or shot, the Referee present will say “reset” and the time of possession plus number of times the ball struck the wall shall be reset.  The player with the ball is not required to stop play so the defensive player should not relax or look up at the Referee when the call is made.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>17.1</strong> A ball slightly rocking in place is not considered a reset unless it moves from its set position. A reset can be called if the ball is pinned or moving if the Referee determines that the player’s ability to control the ball or execute a pass or shot has been affected by the opponent.  </p>
                                <p><strong>17.2</strong> If a reset is called prior to a pass attempt from the five-man rod and the Referee deems that the reset caused the player to lose the ball or not complete the pass, the ball may be awarded back to the player’s fiveman rod. This will not be considered a Jarring infraction.  </p>
                                <p><strong>17.3</strong> A reset call is not considered a distraction and the player with the ball may shoot immediately. The defensive team should not relax or look at the Referee upon hearing the word "reset," but rather should stay on defense. </p>
                                <p><strong>17.4</strong> A reset caused from behind the rod of possession shall not be considered a reset violation but will be considered a jarring infraction. (Example: if the opposing forward is judged to have reset his opponent when the opponent has the ball on the three-man rod.) </p>
                                <p><strong>17.5</strong> An intentional reset by the team in possession of the ball for the purposes of attempting to get a reset call from the Referee shall not be allowed. The team judged to be in violation of this rule shall lose possession and the ball shall be served by the opposing team (This is not counted as a reset). jj</p>
                                <p><strong>17.6</strong> After a team is called for their first reset in a game, a team causing two subsequent resets during the same point will be charged with a technical foul. Once the first reset call is made, upon the next violation the Referee present will call “reset warning” or just “warning”. If there is another reset violation on the same ball following a reset warning a technical foul shall be called. </p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>17.6.1</strong> If a technical foul is called for excessive resets, the next reset call shall not result in a technical foul. </p>
                                    <p><strong>17.6.2</strong> Resets are charged per team not per player and are also charged per game not per match. </p>
                                </div>
                                <p><strong>17.7</strong> If the defender intentionally jars the table, this will not be considered a reset, and jarring will be called immediately. </p>
                            </div>
                        </section>
                        <section id="18.-Reaching-Into-the-Playing-Area">
                            <h3>18. Reaching Into the Playing Area</h3>
                            <p>It is illegal for a player to reach into the play area while the ball is in play without first having permission from the opposing team or Referee whether he touches the ball or not. However, whenever the opposing team or Referee grants a player permission to reach into the playing area, it is legal for the player to do so.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>18.1</strong> A spinning ball is considered "in-play," even if it is not in reach of a player figure. It is illegal to reach into the playing area to stop a spinning ball, even if done for an opponent. </p>
                                <p><strong>18.2</strong> A ball which becomes airborne over the table is still in play until it has hit something not a part of the playing area. Do not catch a flying ball over the table. </p>
                                <p><strong>18.3</strong> A ball which has gone dead is considered out of play (See Rule 8). The ball may be freely touched once permission has been granted by the Referee, or if no Referee is present, by the opposing team. </p>
                                <p><strong>18.4</strong> A player may wipe shot marks off any part of the table while the ball is not in play. He does not need to ask permission of the opposing team. </p>
                                <p><strong>18.5</strong> The penalty for violating any part of this rule is as follows: If the player has possession of the ball, and the ball is stopped - loss of possession to the opposing team for serve. If the player is not in possession of the ball or the ball is moving – Technical foul. If a player reaches into the playing area to prevent the ball from entering the goal a point is scored for the opposing team and the ball shall be served as if it had gone into the goal. </p> <p><strong>18.6</strong> If a technical foul is called for touching a flying ball over the table it will be replayed as follows: If the technical shot is scored it will be served by the opposing team. If the technical shot is not scored it will be served by the non-offending team. </p>
                            </div>
                        </section>
                        <section id="19.-Alterations-to-the-Table">
                            <h3>19. Alterations to the table</h3>
                            <p>Playing area - no changes can be made that would affect the interior playing characteristics of the table by any player. This includes changes to the men, playing surface, bumpers, etc. </p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>19.1</strong> Players are not allowed to put sweat, spit, or any foreign substance on their hands to clean ball marks off the table. First offense is a warning and any subsequent violation is a Technical Foul.</p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>19.1.1</strong> Only manufacturer recommended cleaning agents or those supplied by the Tournament Organizer may be used to clean the surface. Lubricants are to be applied to the rods by dropper or sponge applicator. Spray-on lubricants are not permitted.</p>
                                    <p><strong>19.1.2</strong> Any player using a substance to improve their grip must ensure that the substance does not get on the playing surface, rods, or balls. If the substance gets on the playing surface or rods, it must be cleaned off before resuming play and if the ball is affected, it must be replaced. The player in violation shall be penalized for delay of game. For subsequent violations, the player shall be charged with a Technical Foul and is prohibited from using the substance for the remainder of the tournament.  </p>
                                </div>
                                <p><strong>19.2</strong> If a player uses any substance that leaves residue on the handles when switching sides of the table, the player will be issued a warning and must clean the handles immediately.</p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>19.2.1</strong> If the time necessary to remove the substance exceeds 90 seconds, the player will be penalized for delay of game. For subsequent violations, the player shall be prohibited from using the substance for the rest of the tournament.</p>
                                </div>
                                <p><strong>19.3</strong> A player may not place anything on the rods, handles or exterior of the table that affects the movement of the rods (example: limiting the motion of the goalie rod). Intentional bending or flexing of the rods to assist in gaining possession of the ball is illegal and is penalized with loss of possession to the opposing fiveman rod.  </p>
                                <p><strong>19.4</strong> A player may switch the handles on the exterior of the tables if it can be done within the time limits and without impeding the opponent’s ability to change sides between games. Taking too much time will be grounds for delay of game (See Rule 25). </p>
                                <p><strong>19.5</strong> Players are entitled to begin each match with brand new balls (if available) or they may agree to play with the existing balls at the table. If new balls are not available, the Tournament Organizer or Head Official shall select the best alternative. </p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>19.5.1</strong> It is illegal to request a different ball from inside the table while the ball is in play.  During a dead ball or time out, a player may request a different ball from inside the table. Once a match has begun, it shall be illegal to put another ball into the table without permission from the opponent or Referee.  </p>
                                    <p><strong>19.5.2</strong> A player requesting a different ball while the ball is in play shall be charged with a time out, unless the Referee at the table determines the ball to be unplayable, in which case no time out will be charged. </p>
                                </div>
                                <p><strong>19.6</strong> Unless otherwise specified, penalty for violation of any part of this rule may be grounds for a technical foul. </p>
                            </div>
                        </section>
                        <section id="20.-Distraction">
                            <h3>20. Distraction</h3>
                            <p>Any movement or sound (including phones and electronic devices) made away from, or behind, the rod where the ball is in play may be judged as a distraction. It may be considered a distraction if the opponent taps the table top as a gesture of apology or approval during play. If a player believes he is being distracted, it is his responsibility to call for a Referee. </p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>20.1</strong> Banging the five-man rod or any rod prior to, during, or after a shot is considered a distraction. Moving the five-man rod slightly after the shot has started is not considered a distraction. </p>
                                <p><strong>20.2</strong> Talking between teammates while the ball is in play may be judged a distraction.</p>
                                <p><strong>20.3</strong> It is not considered a distraction, when passing, to move the catching rod as part of a fake. Excessive motion, however, is grounds for a distraction. </p>
                                <p><strong>20.4</strong> It is considered a distraction to clearly remove a hand from the handle and then immediately shoot the ball. The ball may only be shot after both hands (and/or wrist) have been on both handles for one full second.  Sliding the wrist onto the handle is not considered a distraction unless otherwise determined by a Referee.</p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>20.4.1</strong> In Singles, a player is not required to have both hands on both handles for one full second when transitioning between the rods. Once the ball is in clear possession and control on the 3- man rod, Rule 20.4 applies.</p>
                                </div>
                                <p><strong>20.5</strong> A player who removes his hands from the handles and reaches down or away from the table (to wipe his hands, apply rosin, etc) while the ball is in play shall be charged with a distraction. </p>
                                <p><strong>20.6</strong> Penalty for distraction. For the first distraction violation, the guilty team may be charged with a warning if the Referee at the table determines the distraction to be harmless. If a shot is scored as a result of a distraction by the offensive team, the point will not count and the opposing team will serve the ball. In all other cases, the opposing team has the option of continuing play from the current position; continue play from the point of infraction, or serve the ball. Subsequent violations may be grounds for a technical foul.</p>
                            </div>
                        </section>
                        <section id="21.-Practice">
                            <h3>21. Practice</h3>
                            <p>Practice shall be permitted on any table before the match begins and between games. Once a game has begun, practice shall not be permitted.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>21.1</strong> Practice is defined as moving the ball from one player figure to another or shooting the ball. </p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>21.1.1</strong> Illegal Practice is a judgment call by the Referee at the table. Inadvertent movement of the ball, or using the player figures to position the ball before the serve, does not constitute practice. </p>
                                </div>
                                <p><strong>21.2</strong> The Penalty for illegal practice is a loss of possession to the opposing team for serve. If the player does not have possession he will be issued a warning. Subsequent violations will be a technical foul. </p>
                            </div>
                        </section>
                        <section id="22.-Language-and-Behavior">
                            <h3>22. Language and Behavior</h3>
                            <p>Unsportsmanlike conduct or comments made directly or indirectly by a player are not allowed. Violations of this rule may be grounds for a technical foul.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>22.1</strong> Calling the attention of the opposing team away from the game is not allowed (see Rule 20). Any shouts or sounds made during a match, even if of an enthusiastic nature, may be grounds for a technical foul.</p>
                                <p><strong>22.2</strong> Cursing by a player shall not be allowed. The penalty for cursing is a technical foul. Continued cursing by a player may be cause for forfeiture of games and/or expulsion from the tournament site. </p>
                                <p><strong>22.3</strong> The use of a scout in the audience to relay information while the ball is in play shall not be allowed.  Furthermore, a member of the audience is not allowed to influence a match by distracting a player or Referee.  Violation of this rule may be grounds for expulsion of the person from the tournament site. </p>
                                <p><strong>22.4</strong> Coaching will be allowed, but only during time outs and between games. </p>
                                <p><strong>22.5</strong> The use of headphones, ear-buds, or any similar electronic listening device is not permitted when the ball is in play. The first violation will result in a warning. Subsequent violations will be a technical foul.</p>
                            </div>
                        </section>
                        <section id="23.-Passing">
                            <h3>23. Passing</h3>
                            <p>A ball which is advanced from a pinned or stopped position on the five-man rod cannot be directly caught on the forward three-man rod of the same team regardless of whether or not the ball is touched by the opposing five-man rod. </p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>23.1</strong> A pinned ball is one that is pinned to the wall or playfield. A stopped ball is one that has completely stopped but has not been immediately advanced.</p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>23.1.1</strong> Once the ball is considered pinned or stopped, it must touch at least two player figures before it can be legally passed to the forward three-man rod. </p>
                                    <p><strong>23.1.2</strong> A ball that is briefly stubbed or pinched to the playing surface and advanced in the same motion can be legally caught on the three-man rod if the pass would otherwise be considered legal. If the ball is stubbed or pinched to the playing surface, released, and then passed by the same player figure it is considered an illegal pass. </p>
                                    <p><strong>23.1.3</strong> It is not considered an illegal pass from the five-man rod if a stopped or pinned ball deflects off the same team’s three-man rod provided it was not caught and there was no controlled advancement by the three-man rod. </p>
                                    <p><strong>23.1.4</strong> If the ball touches the front or back of the man prior to the motion of a pass it must touch a second man before it can be legally caught on the three-man rod (or five-man rod when passing from the goalie rods). However, if the ball hits the front or back of the man on the initial contact from another rod it can be legally passed with the same man.</p>
                                </div>
                                <p><strong>23.2</strong> On the five-man rod, the ball may not strike the side walls, or the side strips if present, more than two times. If the ball strikes the wall a third time, the serve will be awarded to the opposing five-man rod.  (Exception: See Rule 23.2.1) </p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>23.2.1</strong> If the ball becomes stopped near or against the wall it may be bounced off the wall as many times needed to be moved away from the wall, however, once the ball strikes the wall a second time when being moved away from the wall, it must touch another player figure before it may be legally advanced. </p>
                                    <p><strong>23.2.2</strong> Rule 23.2.1 will be counted as one of the two times the ball is allowed to strike the wall before it can be advanced and the time of possession shall continue to run. </p>
                                    <p><strong>23.2.3</strong> Defensive trap – It is not counted as one of the two times the ball is allowed to strike the wall if an opponent's pass or shot is caught by being trapped against the side wall on the fiveman rod. </p>
                                    <p><strong>23.2.4</strong> Following a time-out, any strike the ball makes against the wall prior to touching a second man will not be counted against the allowed two strikes. </p>
                                </div>
                                <p><strong>23.3</strong> Passing from the two-man (or three-man goalie rod) to the same teams five-man rod is ruled the same as passing from the 5-man rod, except that, if the ball should strike an opposing team's player figure, the ball may be legally caught on the same teams five-man rod. The three wall violation is not in effect. </p>
                                <p><strong>23.4</strong> It is legal to have just one hand on the rods when playing defense (example: right hand on defensive five-man). It is also legal to use two hands to move one rod (example: defensive five-man). Excessive switching of the hand between the handles may be judged a distraction. </p>
                                <p><strong>23.5</strong> Penalty for an illegal pass - if a team violates the above rules of passing; the opposing team has the option to continue play from the current position or serve the ball. </p>
                            </div>
                        </section>
                        <section id="24.-Time-of-Possession">
                            <h3>24. Time of Possession</h3>
                            <p>Possession of the ball shall be limited to 10 seconds on the five-man rod and 15 seconds on all other rods. A player is considered to be in possession of the ball the moment it is within reach of a player figure. Both goalie rods are considered one rod of possession. </p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>24.1</strong> A ball is considered to have advanced once it leaves the current rod of possession whether it goes forward or backwards. In the goalie area, the ball is considered advanced once out of reach of the two-man rod or inside the goal. </p>
                                <p><strong>24.2</strong> A spinning ball that is within reach of a player figure shall be considered in that rod's possession and all time limits shall continue, however, if the spinning ball is not within reach, the time limits are not in effect.  (See Rule 8.3) </p>
                                <p><strong>24.3</strong> Penalty - penalty for three-man delay is loss of possession to the opposing goalie. Penalty for delay at any other rod is loss of possession to the opposing forward for serve. </p>
                            </div>
                        </section>
                        <section id="25.-Delay-of-Game">
                            <h3>25. Delay of Game</h3>
                            <p>Play shall be continuous, except during time outs. Continuous shall be defined as no more than 5 seconds duration between a ball scored and the beginning of the ready protocol unless otherwise modified for televised matches. In Multi-table events, players have 5 seconds to assume their positions when switching between tables. A delay of game penalty may only be called by a Referee. </p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>25.1</strong> After a team is charged with delay of game play shall resume in at most 10 seconds. At the end of 10 seconds another delay of game call should be made. </p>
                                <p><strong>25.2</strong> The first infraction of this rule is a warning. Subsequent infractions will result in the player being charged with a time out. Example: Player charged with delay of game. If still not ready to resume play after 10 seconds - time out charged. If after the time out still not ready, another 10 seconds - second time out charged </p>
                            </div>
                        </section>
                        <section id="26.-Recalls-and-Forfeiture">
                            <h3>26. Recalls and Forfeiture</h3>
                            <p>Once a match has been called, both teams should report immediately to the designated table. If a team has not reported to the table within three minutes, they should be recalled. A team, upon being recalled, must report immediately to the table in order to stop the forfeiture process. </p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>26.1</strong> A recall is made every three minutes. Penalty for third and subsequent recalls is forfeiture of each game until the match is over. </p>
                                <p><strong>26.2</strong> If a team has forfeited any games due to recalls, they get the choice of side or serve once play begins.</p>
                                <p><strong>26.3</strong> Enforcement of this rule is the responsibility of the Tournament Director. </p>
                            </div>
                        </section>
                        <section id="27.-Technical-Fouls">
                            <h3>27. Technical Fouls</h3>
                            <p>If, in the judgment of an authorized tournament Referee, either team competing in a match is at any time in flagrant or intentional violation of these rules of play, a technical foul may be called on the offending team. </p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>27.1</strong> When a technical foul is called, play shall stop and the opponent will be awarded the ball on the threeman rod. Only the player shooting and the player blocking are allowed to stay at the table. One shot will be taken and then play shall stop. If a goal was scored, the ball is served by the team who was scored on. If no goal was scored, play shall resume from where the ball was prior to the technical shot or where specified by rules.</p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>27.1.1</strong>  A player is considered to have taken a technical foul shot once the ball has left the three-man rod.  A player is considered to have blocked the shot once the ball has either stopped in or left the defender's area. </p>
                                </div>
                                <p><strong>27.2</strong> On a technical foul shot, the ball must be legally put into play before shooting. Furthermore, all rules, including time limits and resets, still apply. </p>
                                <p><strong>27.3</strong> A team may switch positions before and/or after the technical foul shot without being charged with a time out. </p>
                                <p><strong>27.4</strong> Time outs may be called during a technical shot, as long as they would otherwise be legal</p>
                                <p><strong>27.5</strong> A point scored on an illegal technical shot shall not be counted. Play shall resume at the rod of possession where the technical foul was called or as specified by rule. </p>
                                <p><strong>27.6</strong> If a technical foul shot ends the game, the opposing team gets the first serve of the next game. </p>
                                <p><strong>27.7</strong> Further violations of a flagrant or intentional nature shall carry additional technical fouls. A third technical foul in any one game shall result in an automatic forfeiture of the game. </p>
                                <p><strong>27.8</strong> The Referee may announce at any time after the first technical foul that further violation by that team may be cause for forfeiture of the game or match.</p>
                            </div>
                        </section>
                        <section id="28.-Rules-Decisions-and-Appeals">
                            <h3>28. Rules Decisions and Appeals</h3>
                            <p>If a controversy involves a question of judgment and a Referee was present at the time the events in question transpired, his decision is final and no appeal may be made. If the controversy involved an interpretation of the rules, or a Referee was not present at the time the events in question transpired, the Referee shall make the most equitable decision possible under the circumstances. Decisions of this nature may be appealed, but it must be done immediately in the manner prescribed below.</p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>28.1</strong> In order to appeal a rules interpretation, a player must file that appeal with the Referee before the ball being played at the time of the controversy is put back into play. An appeal concerning the loss of a match must be filed before the team that won has begun its next match. </p>
                                <p><strong>28.2</strong> All rule appeals shall be considered by the Head Official and (if present) at least two members of the officiating staff. All decisions on appeals are final. </p>
                                <p><strong>28.3</strong> A team making an unsuccessful rules appeal of an obvious nature, or a team that questions a judgment call, will be charged with a time out. In addition, the team may also be penalized for delay of game, at the discretion of the Referee. </p>
                                <p><strong>28.4</strong> Arguing with a Referee during a match will not be allowed. Violation of this rule will be grounds for a delay of game penalty and/or a violation of the code of ethics.</p>
                            </div>
                        </section>
                        <section id="29.-Dress-Code">
                            <h3>29. Dress Code</h3>
                            <p>Players who wish to compete in an ITSF sanctioned event must wear proper sporting attire and are expected to uphold the highest level of personal and professional appearance. Enforcement of the dress code is the responsibility of the Tournament Director, the Head Official and/or a member of the ITSF Sporting Commission. </p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>29.1</strong> Acceptable sporting attire consists of warm-up jackets and pants, athletic shirts, sport tee shirts, polo shirts, athletic shorts, and athletic shoes. Sport caps, visors, sweatbands, and sport bandanas are also acceptable. </p>
                                <p><strong>29.2</strong> Prohibited attire includes clothing displaying profanity, tank tops, denim or jeans of any kind, as well as cargo pants, cargo shorts, form-fitting Spandex or Lycra pants and shorts. Flip-flops, sandals and non-athletic shoes are also prohibited. </p>
                                <p><strong>29.3</strong> Players are encouraged to have the name of their country clearly displayed on their shirt and jacket. This is mandatory for the top rated players who will also be required to wear patches on their sleeves indicating their World Ranking. It is recommended but not mandatory for the player’s uniform to be in their national colors with their country’s name, flag, and sponsors logos prominently displayed. </p>
                                <p><strong>29.4</strong> The penalty for violating the dress code may be forfeiture of a game or match. If a player is in violation of the dress code during a match he must change into acceptable attire before play can continue and the team will be charged with delay of game (See Rule 25). </p>
                            </div>
                        </section>
                        <section id="30.-Tournament-Director">
                            <h3>30. Tournament Director</h3>
                            <p>The administration of tournament play shall be the responsibility of the Tournament Director. This includes making the draws, scheduling the events, timing matches, etc. The decision of the Tournament Director in such matters is final. </p>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>30.1</strong> All matters pertaining to rules of play (appointing Referees, handling appeals, etc.) shall be the responsibility of the Head Official. The Tournament Director is responsible for appointing the Head Official.</p>
                                <p><strong>30.2</strong> In every sanctioned ITSF tournament the Tournament Director is subordinate to the ITSF Sport Commission.</p>
                            </div>
                        </section>
                        <section id="31.-Side-Events">
                            <h3>31. Side Events</h3>
                            <div style={{paddingLeft: "2.0em"}}>
                                <p><strong>31.1 Goalie War</strong></p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p>Goalie War is a singles specialty event where the three-man and five-man rods are lifted and the player shoot against each other from the goalie positions.  </p>
                                    <div style={{paddingLeft: "2.0em"}}>
                                        <p><strong>31.1.1</strong> The Serve</p>
                                        <div style={{paddingLeft: "2.0em"}}>
                                            <p>- To begin play, the ball must be moved from one player figure to another but may not be directly advanced from the second figure. After contacting the second player figure, the ball may be directly advanced by any other player figure.</p>
                                            <p>- The player does not have to stop the ball or wait prior to advancing the ball. The ball is considered to be in play and the time limits begin the moment the ball contacts the second player figure. </p>
                                            <p>- Violation is loss of possession</p>
                                        </div>
                                    </div>
                                    <p></p>
                                </div>
                                <p><strong>31.2 Four on Four</strong></p>
                                <p>Four on Four is a specialty event with four players on each side of the table with each player controlling one rod with one hand. Players may not switch hands once the ball is put into play.  </p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>31.2.1</strong> Change of Positions</p>
                                    <div style={{paddingLeft: "2.0em"}}>
                                        <p>- If a team scores a point, they must rotate positions before the ball is put into play. The player on the three-man rod shall move to the goalie-rods and the rest of the players shall move forward one rod. </p>
                                        <p>- A team may change their assembled positions before the match begins or between games.  Once a game has begun, teams must maintain the same order of rotation for the remainder of the game.</p>
                                    </div>
                                    <p><strong>31.2.2</strong> Legal Shots</p>
                                    <div style={{paddingLeft: "2.0em"}}>
                                        <p>- The game is played Rollerball style, i.e., a ball may not be pinned for more than three seconds or stopped for more than one second. There is a ten second time limit per rod.</p>
                                        <p>- Once a ball is stopped or pinned it must touch another player figure before it may be legally advanced.  </p>
                                        <p>- If a point is scored illegally, the ball shall be served by the opposing team.</p>
                                    </div>
                                </div>
                                <p><strong>31.3 Two-Ball Rollerball</strong></p>
                                <p></p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>31.3.1</strong> Time Limits</p>
                                    <div style={{paddingLeft: "2.0em"}}>
                                        <p>- There is a ten second time limit per rod and the ball may not be pinned or stopped for more than one second.</p>
                                        <p>- If a ball is pinned or stopped for more than one full second with two balls in play, both balls shall be served again. If there is only one ball in play, it will be served by the opposing team.  </p>
                                        <p>- A shot may be scored directly from a pinned or stopped position if done immediately and within the one second time limit.</p>
                                    </div>
                                    <p><strong>31.3.2</strong> Serving the Ball</p>
                                    <div style={{paddingLeft: "2.0em"}}>
                                        <p>- If there is a serving hole present, each forward shall serve a ball through the hole on the count of three. Both balls should hit the playfield within one second of each other.  </p>
                                        <p>- If no serving hole is present, both defensive players shall simultaneously release the ball from the near corner of the goalie area within one second of the count of three.  </p>
                                        <p>- If a ball goes off the table without any goals being scored, both balls shall be served again.  Otherwise, the team scored upon shall serve the remaining ball.</p>
                                    </div>
                                    <p><strong>31.3.3</strong> Scoring</p>
                                    <div style={{paddingLeft: "2.0em"}}>
                                        <p>- If each team scores a goal, then neither team receives a point. Two balls are served again</p>
                                        <p>- If a team has scored the first ball, they may stop play any time they have control of the second ball and take one point. If a team elects to take the point, two balls are served to begin the next point.</p>
                                        <p>- A team that scores both goals gets two points and two balls are served again to begin the next point. </p>
                                        <p>- A shot that goes "in and out" does not count as a goal scored in Two-Ball Rollerball and play shall continue.  </p>
                                    </div>
                                </div>
                                <p><strong>31.4 Forward Shootout</strong></p>
                                <p>Forward Shootout a singles specialty event where the players alternately shoot technical foul shots against each other from the three-man rods.</p>
                                <div style={{paddingLeft: "2.0em"}}>
                                    <p><strong>31.4.1</strong> Ball in Play</p>
                                    <div style={{paddingLeft: "2.0em"}}>
                                        <p>- The first shot of the game is determined by a coin flip with subsequent shots alternating between players for the remainder of the game.</p>
                                        <p>- To begin each shot, the player with possession must follow the ITSF Ready Protocol to put the ball into play. Any violation will result in a loss of possession.</p>
                                    </div>
                                    <p><strong>31.4.2</strong> Shooting</p>
                                    <div style={{paddingLeft: "2.0em"}}>
                                        <p>- The ball is considered to have been shot once it leaves the forward's three man rod. The ball is considered to have been blocked once the ball has either stopped in or has left the goalie area.  </p>
                                    </div>
                                    <p><strong>31.4.3</strong> Time Limits</p>
                                    <div style={{paddingLeft: "2.0em"}}>
                                        <p>- Players have a time limit of 15 seconds. The time limits begin one second after the ball has touched the second man.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </div>
        )
    }
}