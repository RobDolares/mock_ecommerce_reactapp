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
              <p>Having grown up on the ranges of central Montana, Donald has always lived and breathed the outdoors.  As a kid, he spent so much time outside he would wear through a pair of shoes every month.  Though his mom didn't appreciate it then, she sure is proud of him now.  Hey Mrs. Ramsey ;)</p>
            </div>
            <div>
              <img src={female01} alt="" />
              <h4>Stephie Larsson</h4>
              <p>Steph hails from Stockholm, and after reading her blog about yoyoing the entire Kings Trail (Kungsleden), Donald got her onboard with sXe.  She brings a great zeal for adventure to the team and makes sure our customers our happy and always getting fresh content.</p>
            </div>
            <div>
              <img src={male02} alt="" />
              <h4>Webster Frost</h4>
              <p>As staff photographer and often on the road, we don't see much of Mr. Frost.  We don't mind though, cause when he fills our dropbox with his latest shot from who knows where, we don't ask questions.  He's that good. </p>
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
