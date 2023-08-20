import classNames from 'classnames';

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    fill="currentColor"
    height="1em"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337l-17 17-17-17-64-64-17-17L160 222.1l17 17 47 47L335 175l17-17L385.9 192l-17 17z" />
  </svg>
);

const CircleIcon = () => (
  <svg
    aria-hidden="true"
    fill="currentColor"
    height="1em"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
  </svg>
);

const ConstructionIcon = () => (
  <svg
    aria-hidden="true"
    fill="currentColor"
    height="1em"
    viewBox="0 0 576 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M224 32H208V48 272v16h32V272 64h96V272v16h32V272 48 32H352 224zM176 78.7C91.8 110.9 32 192.5 32 288v32H64V288c0-77.5 45.9-144.3 112-174.6V78.7zm224 34.7c65.5 30 111.1 95.8 112 172.3l0 34.3h32l0-32 0-2.4c-1-94.5-60.5-174.9-144-206.9v34.7zM32 391.7V384H544v7.7l-.8 .5c-9.1 5.7-23.8 13.8-44.9 22.1C456.2 430.7 388.2 448 288 448s-168.2-17.3-210.3-33.8c-21.1-8.2-35.8-16.3-44.9-22.1l-.8-.5zM576 408V384 352H544 32 0v32 24s80 72 288 72s288-72 288-72z" />
  </svg>
);

const locales = [
  { name: 'English', code: 'en' },
  { name: '中文（制作中）', code: 'zh_CN' },
];

interface Props {
  currentLocale?: 'en' | 'zh_CN';
}

export function LanguageSelect({ currentLocale = 'en' }: Props) {
  return (
    <>
      <div className="sr-only">Language</div>
      <ul className="flex items-center gap-x-4 md:block">
        {locales.map((locale) => (
          <li
            className={classNames(
              'flex items-center gap-x-2',
              currentLocale === locale.code ? 'text-gray-200' : 'text-gray-600',
            )}
            key={locale.code}
          >
            {currentLocale === locale.code ? (
              <CheckIcon />
            ) : (
              <ConstructionIcon />
            )}
            {locale.name}
          </li>
        ))}
      </ul>
    </>
  );
}
