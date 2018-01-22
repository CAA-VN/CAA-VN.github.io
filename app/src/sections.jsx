import React from 'react';

class Sections extends React.Component{
    render(){
        return(
            <div>
                <section className="info static">
                    <div className="info-text-right">
                        <h2>Undeclared is a game starring six characters, six routes, and you! </h2>
                        <p>Created by a team of students, the video game explores the gritty transition from high school to college. Every step forward feels like five steps back, and something framed as a utopia quickly becomes a nightmare. This is the darker world that pamphlets won’t show you. Unfortunately, it’s also the more common one.</p>
                        <p>In the game, you will meet students who represent ideologies that a person may experience. From freshmen beginning college alongside you, to upperclassmen who have yet to plan their next steps, to people who seem too certain about themselves, to a transfer student who challenges the very notion of truth, these are the friends you face your challenges with.</p>
                    </div>
                    <img src="images/vi.jpg"/>
                    </section>
                    <section className="info static-greyer">
                    <img src="images/rosa.png"/>
                    <div className="info-text-left">
                        <h2>Support us on Kickstarter!</h2>
                        <p>We're just a bunch of volunteer undergrad students, any contributions would be greatly appreciated!</p>
                    </div>
                    </section>
                    <section className="info static">
                    <div className="info-text-right">
                        <h2>Follow us on social media!</h2>
                        <p>Help us get the word out!</p>
                    </div>
                    <img src="images/soda.png"/>
                    </section>
                </div>
        )
    }
}

export default Sections;