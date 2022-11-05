import "./SectionItem.css";

interface SectionItemProps {
  title: string;
  children: React.ReactNode;
}

export const SectionItem: React.FC<SectionItemProps> = ({
  title,
  children,
}) => (
  <section role="group" className="my-cv-online__section">
    <h2>{title}</h2>
    <div>{children}</div>
  </section>
);

export default SectionItem;
