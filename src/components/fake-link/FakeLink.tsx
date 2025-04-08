import './FakeLink.css';

interface FakeLinkProps {
  children: string;
}

export const FakeLink = ({ children }: FakeLinkProps) => {
  return <span className="fake-link">{children}</span>;
};
