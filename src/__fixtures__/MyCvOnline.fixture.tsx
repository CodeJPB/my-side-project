import { MyCvOnline } from "../components/MyCvOnline/MyCvOnline";
import { cvExemple as cv } from "../components/MyCvOnline/__seed__/cv.exemple";

const MyCVOnlineFixture = () => <MyCvOnline {...cv} />;

export default MyCVOnlineFixture;
