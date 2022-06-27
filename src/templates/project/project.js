import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout/Layout';
import "./project-styling.css"
import { HeadingContainer, PageHeader, EntireWrapper, Explanation, Teststuff, Sicon, Members, Teammates, Memberdetail, MemberIcon, Socials, SocialIc } from "./project-styling"
import { LiteYoutubeEmbed } from 'react-lite-yt-embed'; // incase it's needed
import { SocialIcon } from 'react-social-icons'; //incase required
import { FaGithub, FaFacebook, FaSpotify, FaYoutube, FaTwitter, FaTwitch, FaLinkedin } from 'react-icons/fa'; //Import more if required
import ReactTooltip from 'react-tooltip';
import lechonk from '../../images/chonk.png'
import { IconContext } from 'react-icons';

// for react-lite-yt-embed
// const extractVideoURL = (demo) => {
//   return demo?.match(/^https?:\/\/.*(?:youtu.be\/|v\/|u\/\\w\/|embed\/|watch?v=)([^#&?]*).*$/)[1]
// }

function ProjectDetails({ data }) {
  const { html } = data.allInfo;
  const {
    title, description, github, members
  } = data.allInfo.frontmatter;

  function changeBackground(e){
    e.background='#c3b4fd';
    e.target.style.color='var(--color-background, ${COLORS.background.light})';
  }
  // Interaction Bug between the two background changes, might need a state change
  function leaveBackground(e){
    e.target.style.background='var(--color-background, ${COLORS.background.light})';
    e.target.style.color='#c3b4fd';
  }

  return (
    <Layout title={title}>
      <EntireWrapper>
        <HeadingContainer>
          <PageHeader>
            <h1>{title}</h1>
            <p>{description}</p>
          </PageHeader>
        </HeadingContainer>
        <IconContext.Provider value={{ color: '#c3b4fd', size: "2em" , style: {marginRight: "1em"}}}>
        <Explanation>
          {/* {html ?
            <div dangerouslySetInnerHTML={{ __html: html }} />
            :
            <p>This project page has no content.</p>
          } */}
          {/* <ul>
            <li>I am an unordered list without a background color</li>
          </ul>
          <p>I don't have a background color</p>
          <p>I am Malenia, Blade of Miquella</p>
          <ul>
            <li>I am an unordered list without a background color</li>
          </ul>
          <p>I don't have a background color</p>
          <p>I am Malenia, Blade of Miquella</p>
          <ul>
            <li>I am an unordered list without a background color</li>
          </ul>
          <p>I don't have a background color</p>
          <p>I am Malenia, Blade of Miquella</p>
          <ul>
            <li>I am an unordered list without a background color</li>
          </ul>
          <p>I don't have a background color</p>
          <p>I am Malenia, Blade of Miquella</p> */}

          {/* <h2>What is Vikelabs?</h2> */}
          {/* Could use a font change for both h tags */}
          {/* Please do figure out why the h1 tag is specifically at the middle unlike the h2 tag */}
          {/* Honestly I am kinda digging both styles lol */}

          <h1>What is Vikelabs?</h1>
          <p>Consist of a team of UVic students who build apps to learn more about software development, product management, and design.</p>
          <p>&lt;Insert latest update of project here&gt;</p>


            {/* <Members>
              <Teststuff>
                <span>
                  <h3>Lechonk</h3>
                  <p>Project Coordinator</p>
                  <SocialIcon url="https://www.reddit.com/user/Ganmany" />
                  <SocialIcon url="https://twitter.com/jamestang9" />
                </span>
                <img src={lechonk} alt='lechonk'></img>
              </Teststuff>
              <Teststuff>
                <span>
                  <h3>Lechonk</h3>
                  <p>Project Coordinator</p>
                  <div>
                  <Sicon>
                    <SocialIcon url="https://www.reddit.com/user/Ganmany" bgColor='#c3b4fd' />
                  </Sicon>
                  <Sicon>
                    <SocialIcon network="twitter" bgColor='#c3b4fd'/>
                  </Sicon>
                  </div>
                </span>
                <img src={lechonk} alt='lechonk'></img>
              </Teststuff>
              <Teststuff>
                <span>
                  <h3>Lechonk</h3>
                  <p>Project Coordinator</p>
                </span>
                <img src={lechonk} alt='lechonk'></img>
              </Teststuff>

            </Members> */}


            {/* <h1>Meet the members!!!</h1>
            <Members>
              <Teammates>
                <Memberdetail>
                  <h3>Lechonk</h3>
                  <p>Project Coordinator</p>
                  <Socials>
                    <SocialIcon url="https://www.reddit.com/user/Ganmany" />
                    <SocialIcon url="https://twitter.com/jamestang9" />
                  </Socials>
                </Memberdetail>
                <MemberIcon>
                  <img src = {lechonk} alt='lechonk'></img>
                </MemberIcon>
              </Teammates>
            </Members> */}


            <h1>Meet the members!!!</h1>
            {/* Could create a different file that contains the following thing React structure.  */}
              <Teammates>
                <Memberdetail>
                  <h3>Lechonkyyyy</h3>
                  <p>Project Coordinator</p>
                  <Socials>
                      <FaFacebook onMouseEnter={changeBackground} onMouseLeave={leaveBackground}/>
                      <FaLinkedin />
                      <FaGithub />
                  </Socials>
                </Memberdetail>
                <MemberIcon>
                  <img src = {lechonk} alt='lechonk'></img>
                </MemberIcon>
              </Teammates>
              <Teammates>
                <Memberdetail>
                  <h3>Lechonk</h3>
                  <p>Project Coordinator</p>
                  <Socials>
                      <FaGithub />
                      <FaLinkedin />                     
                  </Socials>
                </Memberdetail>
                <MemberIcon>
                  <img src = {lechonk} alt='lechonk'></img>
                </MemberIcon>
              </Teammates>
              <Teammates>
                <Memberdetail>
                  <h3>Lechonk</h3>
                  <p>Project Coordinator</p>
                  <Socials>
                      <FaGithub />
                      <FaLinkedin />                     
                  </Socials>
                </Memberdetail>
                <MemberIcon>
                  <img src = {lechonk} alt='lechonk'></img>
                </MemberIcon>
              </Teammates>
          

            {/* <h2>Meet the Members!!</h2>
            <Teststuff>
              <span>
                <h3>Lechonk</h3>
                <p>Project Coordinator</p>
                <SocialIcon url="https://www.reddit.com/user/Ganmany" />
                <SocialIcon url="https://twitter.com/jamestang9" />
              </span>
              <img src={lechonk} alt='lechonk'></img>
            </Teststuff>
            <Teststuff>
              <span>
                <h3>Lechonk</h3>
                <p>Project Coordinator</p>
                <div>
                <Sicon>
                  <SocialIcon url="https://www.reddit.com/user/Ganmany" bgColor='#c3b4fd' />
                </Sicon>
                <Sicon>
                  <SocialIcon network="twitter" bgColor='#c3b4fd'/>
                </Sicon>
                </div>
              </span>
              <img src={lechonk} alt='lechonk'></img>
            </Teststuff>
            <Teststuff>
              <span>
                <h3>Lechonk</h3>
                <p>Project Coordinator</p>
              </span>
              <img src={lechonk} alt='lechonk'></img>
            </Teststuff> */}

            
          </Explanation>
          </IconContext.Provider>

        {/* <Teststuff>
          {html ?
            <div dangerouslySetInnerHTML={{ __html: html }} />
            :
            <p>This project page has no content.</p>
          }
          <div>lechonk</div>
          <div>
            <span>
              <h1>
                Hello There 2
              </h1>
              <p>I am lechonk</p>
            </span>
          </div>
          <img src={lechonk} alt='lechonk'></img>

        </Teststuff> */}
        <h2>Tech Stack Used</h2>
        <Teststuff>
            <span>
              <h3>React</h3>
              <p>I am React, therefore I react</p>
            </span>
            <img src={lechonk} alt='lechonk'></img>
            
            {/* This is definetely not the final design of this section. Will improve on it later I think, hopefully*/}

        </Teststuff>

        <h3>&lt;Insert link to take you back to Vikelabs main page&gt;</h3>
        {/* This looks too big, either make it smaller or use a smaller h tag */}
        {/* However, the progress so far 6/13/2022 is pretty good, not the best work i've done so far, but rough ideas have been laid out and it honestly looks better than expected */}
        {/* Not sure if I want to continue with making a rough design 2 or 3 or try to make design 1 as good as possible and show it to Robert chen ;-; */}
        <ReactTooltip
          className="ttEdit"
          arrowColor="transparent"
          offset={{ top: -12 }}
          effect="solid"
          scrollHide={false}
          resizeHide={false}
        />
      </EntireWrapper>
    </Layout>
  );
}

export const query = graphql`
  query ProjectOne($title: String) {
    allInfo: markdownRemark(frontmatter: {title: {eq: $title}}) {
      html
      frontmatter {
        title
        description
        github
        members {
          name
          role
        }
      }
    }
  }
`

export default ProjectDetails;
