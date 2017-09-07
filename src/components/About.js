import React from 'react';
import male01 from '../images/andrew-robles-300868.jpeg'
import female01 from '../images/brooke-cagle-193476.jpeg'
import male02 from '../images/ihor-malytskyi-222295.jpeg'

const About = (props) => {
  return (
    <div>
      <div id="aboutHeroContainer">
        <h1>about</h1>
      </div>
      <main>
        <div id="teamContainer">
          <h2>Our Team</h2>
          <div id="ourTeam">
            <div>
              <img src={male01} alt="" />
              <h4>Donald Ramsey</h4>
            </div>
            <div>
              <img src={female01} alt="" />
              <h4>Stephie Larsson</h4>
            </div>
            <div>
              <img src={male02} alt="" />
              <h4>Webster Frost</h4>
            </div>
          </div>

          <div id="creed">
            <h2>Our Creed</h2>
            <p>We promise to take long extended breaks from work and our overly complicated lives, look for the unexplored places, whether they be urban, remote, right in our backyards or someplace in between. To write, create, innovate and expand our lives physically and mentally.</p>

            <p>We promise to</p>
            <h3>search x enjoy</h3>
          </div>

        </div>
      </main>
    </div>
  )
}

export default About;
