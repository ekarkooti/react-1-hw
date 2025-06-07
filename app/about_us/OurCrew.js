const OurCrew = () => {
  return (
    <>
      <h1>Description</h1>
      <p1>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal: to make space travel accessible and exciting for all.
      </p1>

      <div className="card">
        <h2>Captain Sarah Vega</h2>

        <img
          src="/crew/image-anousheh-ansari.webp"
          alt="Captain Sarah Vega profile"
          className="w-30 h-30"
        />
        <h3>Former NASA Astronaut</h3>
        <p>
          A former NASA astronaut with over 15 years of experience, Captain Vega
          leads our missions with unparalleled expertise and a passion for space
          exploration.
        </p>
      </div>

      <div className="card">
        <h2 className="text-center">Dr. Leo Redding</h2>

        <img
          src="/crew/image-douglas-hurley.webp"
          alt="Dr. Leo Redding profile"
        />
        <h3 className="text-center">Chief Astrophysicist</h3>
        <p>
          Our chief astrophysicist, Dr. Redding, is a renowned scientist who has
          contributed to major space discoveries. He ensures that every journey
          is as educational as it is exhilarating.
        </p>
      </div>

      <div className="card">
        <h2 className="text-center">Chief Engineer Hana Lee</h2>

        <img
          src="/crew/image-anousheh-ansari.webp"
          alt="Chief Engineer Hana Lee profile"
          className="w-30 h-30"
        />

        <h3 className="text-center">Aerospace Innovator</h3>

        <p>
          With her extensive background in aerospace engineering, Hana Lee is
          responsible for the state-of-the-art technology that powers our
          spacecraft. Her innovation ensures that our travelers are always in
          safe hands.
        </p>
      </div>

      <div className="card">
        <h2>Mission Specialist Alex Santos</h2>

        <img
          src="/crew/image-mark-shuttleworth.png"
          alt="Mission Specialist Alex Santos profile"
        />
        <h3>Science & Adventure Guide</h3>
        <p>
          As a mission specialist, Alex’s job is to ensure that every aspect of
          the journey runs smoothly. With a background in both science and
          adventure tourism, Alex is the perfect guide for our space travelers.
        </p>
      </div>

      <div className="card">
        <h2>Crew Member Maya Patel</h2>

        <img
          src="/crew/image-anousheh-ansari.png"
          alt="Crew Member Maya Patel profile"
        />
        <h3>Technical & Service Specialist</h3>
        <p>
          Maya brings a unique blend of technical skills and customer service
          experience to the team. She’s always ready to assist with any needs
          and to make sure every traveler has an unforgettable experience.
        </p>
      </div>
    </>
  );
};
export default OurCrew;
