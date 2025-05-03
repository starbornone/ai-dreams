import './Caption.css';

interface CaptionProps {
  children: string;
  linkTitle?: string;
  linkUrl?: string;
}

export const Caption = ({ children, linkTitle, linkUrl }: CaptionProps) => {
  return (
    <div className="caption">
      {children}{' '}
      {linkUrl && (
        <a href={linkUrl} target="_blank">
          {linkTitle || linkUrl}
        </a>
      )}
    </div>
  );
};
