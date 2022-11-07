import { McoLayout } from "../../../components/MyCvOnline/layouts";

const FakeContent = () => <div>FAKE</div>;

const McoLayoutFixture = () => (
  <McoLayout
    header={<FakeContent />}
    sections={[
      <FakeContent />,
      <FakeContent />,
      <FakeContent />,
      <FakeContent />,
    ]}
    footer={<FakeContent />}
  />
);

export default McoLayoutFixture;
