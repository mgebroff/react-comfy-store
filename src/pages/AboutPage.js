import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desc" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
            <p>
              The Top Compfy Sloth in the Bay Area Wallbeds “n” More focuses on
              helping the residents of the San Francisco Bay Area create more
              space in their homes to thrive, create, and enjoy life’s special
              moments. In our local showrooms, we offer the largest selection of
              murphy beds, wallbeds, cabinet beds, and other space-saving
              furniture. We aim to be a resource for all types of space-saving
              bedroom furniture so we carry various modern, traditional, and
              transitional wallbed models. This includes sofa beds, desk beds,
              library beds, and cabinet beds.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
