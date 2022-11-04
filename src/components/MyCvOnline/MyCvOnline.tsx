import { Cv } from "../../models/cv.model";
import "./MyCvOnline.css";

interface MyCvOnlineProps {
  cv: Cv;
}

export const MyCvOnline: React.FC<MyCvOnlineProps> = ({ cv }) => (
  <section className="my-cv-online">
    <h1>Welcome to my cv online !</h1>
    <h2>
      My name is {cv.firstName} <b>{cv.lastName}</b>, it's a pleasure to meet
      you.
    </h2>
    <section>
      <h2>Experiments</h2>
      <ul>
        {cv.experiments.map((d) => (
          <li key={d.title}>{d.title}</li>
        ))}
      </ul>
    </section>
    <section>
      <h2>Formations</h2>
      <ul>
        {cv.formations.map((d) => (
          <li key={d.title}>{d.title}</li>
        ))}
      </ul>
    </section>
    <section>
      <h2>Languages</h2>
      <ul>
        {cv.languages.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </section>
    <section>
      <h2>Interests</h2>
      <ul>
        {cv.languages.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </section>
  </section>
);

export default MyCvOnline;
