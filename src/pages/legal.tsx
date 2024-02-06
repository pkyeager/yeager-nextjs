// pages/legal.tsx
import React from "react";

const LegalNotice: React.FC = () => {
  return (
    <div className="bg-gray-950 flex-1">
      <h1>Legal Notice</h1>

      <h2>Information pursuant to Sect. 5 German Telemedia Act (TMG)</h2>
      <p>
        Yeager GmbH
        <br />
        Wandsbeker Chaussee 91
        <br />
        22089 Hamburg
      </p>

      <p>
        Commercial Register: HRB 178135
        <br />
        Registration court: Amtsgericht Hamburg
      </p>

      <p>
        <strong>Represented by:</strong>
        <br />
        Yuan-Yan Kevin Got
        <br />
        Phongsakon Mark Konrad
      </p>

      <h2>Contact</h2>
      <p>
        Phone: +45 1511 7629322
        <br />
        E-mail: management@yeager.gmbh
      </p>

      <h2>EU dispute resolution</h2>
      <p>
        The European Commission provides a platform for online dispute
        resolution (ODR):{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        .<br /> Our e-mail address can be found above in the site notice.
      </p>

      <h2>
        Dispute resolution proceedings in front of a consumer arbitration board
      </h2>
      <p>
        We are not willing or obliged to participate in dispute resolution
        proceedings in front of a consumer arbitration board.
      </p>
    </div>
  );
};

export default LegalNotice;
