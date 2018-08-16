﻿import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import { StickyContainer, Sticky } from 'react-sticky';

export const ItsfRuleBook = (props: RouteComponentProps<{}>) => (
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
                    <li><a href={`${props.location.pathname}#INTRODUCTION`}>INTRODUCTION</a></li>
                    <li><a href={`${props.location.pathname}#QUALIFIED-AUTHORITIES`}>QUALIFIED AUTHORITIES</a></li>
                    <li><a href={`${props.location.pathname}#MATERIALS-AND-HARDWARE`}>MATERIALS AND HARDWARE</a></li>
                    <li><a href={`${props.location.pathname}#Paralympic-Technical-Regulations`}>PARALYMPIC REGULATIONS</a></li>
                    <li><a href={`${props.location.pathname}#1.-Code-of-Ethics`}>1. Code of Ethics</a></li>
                    <li><a href={`${props.location.pathname}#2.-The-Match`}>2. The Match</a></li>
                    <li><a href={`${props.location.pathname}#3.-To-Start-a-Match`}>3. To Start a Match</a></li>
                    {/*<li>
                        <a href={`${props.location.pathname}#4.-Serve-and-Ready-Protocol`}>4. Serve and Ready Protocol</a>
                        <ul style={{ listStyle: "none", paddingLeft: "2em"}}>
                            <li><a href={`${props.location.pathname}#4.1-The-serve`}>4.1 The serve</a></li>
                        </ul>
                    </li>*/}
                    <li><a href={`${props.location.pathname}#5.-Subsequent-Serves`}>5. Subsequent Serves</a></li>
                    <li><a href={`${props.location.pathname}#6.-Ball-in-Play`}>6. Ball in Play</a></li>
                    <li><a href={`${props.location.pathname}#7.-Ball-Off-the-Table`}>7. Ball Off the Table</a></li>
                    <li><a href={`${props.location.pathname}#8.-Dead-Ball`}>8. Dead Ball</a></li>
                    <li><a href={`${props.location.pathname}#9.-Time-Out`}>9. Time Out</a></li>
                    <li><a href={`${props.location.pathname}#10.-Resuming-Play-After-a-Time-Out`}>10. Resuming Play After a Time Out</a></li>
                    <li><a href={`${props.location.pathname}#11.-Official-Time-Out`}>11. Official Time Out</a></li>
                    <li><a href={`${props.location.pathname}#12.-Point-Scored`}>12. Point Scored</a></li>
                    <li><a href={`${props.location.pathname}#13.-Table-Sides`}>13. Table Sides</a></li>
                    <li><a href={`${props.location.pathname}#14.-Change-of-Positions`}>14. Change of Positions</a></li>
                    <li><a href={`${props.location.pathname}#15.-Spinning-the-Rods`}>15. Spinning the Rods</a></li>
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
                            <p>Before the ball can be put into play, the player in possession must ask the direct opponent if he or she is "ready". The direct opponent has three seconds to respond "ready". The player in possession now has three seconds to put the ball into play. Waiting beyond these time limits will be considered a delay of game (<a href={`${props.location.pathname}#25.-Delay-of-Game`}>See Rule 25</a>).</p>
                            <div style={{ paddingLeft: "2.0em" }}>
                                <p><strong>4.2.1</strong> The penalty for beginning to put the ball into play before the opponent responds “ready” is a warning and the ball shall be put into play from its original position. The penalty for subsequent violations is loss of possession to the opponent for serve.</p>
                                <section id="4.2.2"><p><strong>4.2.2</strong> To begin play, the ball must be moved from one player figure to another but may not be directly advanced from the second figure. After contacting the second player figure, the ball may be directly advanced by any other player figure. The player does not have to stop the ball or wait prior to advancing the ball. The ball is considered to be in play and the time limits begin the moment the ball contacts the second player figure.</p></section>
                                <p><strong>4.2.3</strong> The penalty for violation of rule <a href={`${props.location.pathname}#4.2.2`}>4.4.2</a> is the opponent's choice to either continue play from the current position (including the goal) or to serve the ball.</p>
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
                        <p><strong>7.5</strong> Penalty for violating rule <a href={`${props.location.pathname}#7.4`}>7.4</a> is loss of possession to opponent’s five-man rod for serve.</p>
                    </div>
                </section>
                <section id="8.-Dead-Ball">
                    <h3>8. Dead Ball</h3>
                    <p>A ball shall be declared a dead ball when it has completely stopped its motion and is not within reach of any player figure.</p>
                    <div style={{paddingLeft: "2.0em"}}>
                        <p><strong>8.1</strong> If the ball is declared dead anywhere between the five-man rods, it shall be put back into play at the five-man rod by the team who originally served the ball. (<a href={`${props.location.pathname}#4.-Serve-and-Ready-Protocol`}>See Rule 4</a>).</p>
                        <p><strong>8.2</strong> If the ball is declared dead between the goal and five-man rods, it shall be put back into play at the two-man rod nearest the spot of the dead ball. Play shall resume using the “Ready” Protocol (<a href={`${props.location.pathname}#4.-Serve-and-Ready-Protocol`}>See Rule 4</a>).</p>
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
            </Col>
        </Row>
    </div>
   
)