import "./MyCvOnlineSection.css";

interface MyCvOnlineSectionProps {
  title: string;
  children: React.ReactNode;
}

export const MyCvOnlineSection: React.FC<MyCvOnlineSectionProps> = ({
  title,
  children,
}) => (
  <section className="my-cv-online__section">
    <h2>{title}</h2>
    {children}
  </section>
);

export default MyCvOnlineSection;
