const paths = {
  camera:
    'M4 7h3l1.5-2h7L17 7h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm8 3.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
  leaf: 'M20 4c-8 0-14 5-14 12 0 2 .5 3.5 1.3 4.7L5 23l1.4 1.4 2.3-2.3C9.9 22.9 11.4 23 13 23c7 0 11-6 11-14 0-2 0-3-.4-5H20zM8 18c-.6-1-1-2.2-1-4 0-5.2 4.3-9 11-9h1.6c.3 1.4.4 2.7.4 4 0 6.4-3 12-9 12-1.3 0-2.4-.1-3.4-.4L11 20l1.6-1.6C14 17.8 15.6 16 17 14c-2.4 1.7-5.2 3-9 4z',
  cattle:
    'M6 9c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3c0 .5-.1 1-.3 1.4C10 6.5 11.9 6 14 6h2c-1 .8-1.7 2-1.9 3.3C15.6 8.5 17.2 8 19 8c0 2-1.5 3.6-3.5 4-.2 2.8-1.7 5.2-3.9 6.6V21h-2v-2.1c-.6.1-1.1.1-1.6.1-.9 0-1.8-.1-2.6-.4L4 21l-1.4-1.4 1.6-1.6C3.5 16.8 3 15.4 3 14c0-2.2 1.3-4.1 3.2-5-.1-.4-.2-.7-.2-1 0 .5.1 1 .3 1.4C6.9 9.9 6.5 9.5 6 9z',
  stethoscope:
    'M7 3v6a4 4 0 0 0 8 0V3h2v6a6 6 0 0 1-5 5.92V17a3 3 0 1 0 6 0v-1.18a3.5 3.5 0 1 1 2 0V17a5 5 0 0 1-10 0v-2.08A6 6 0 0 1 5 9V3h2z',
  mail: 'M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1.6 2 7.4 5.5L19.4 7H4.6zM4 8.3V17h16V8.3l-8 5.9-8-5.9z',
  shield:
    'M12 2 4 5v6c0 5 3.4 8.9 8 11 4.6-2.1 8-6 8-11V5l-8-3zm0 2.2 6 2.25v4.55c0 3.9-2.6 7.1-6 8.8-3.4-1.7-6-4.9-6-8.8V6.45l6-2.25z',
  layers:
    'M12 2 2 7l10 5 10-5-10-5zM2 12l10 5 10-5M2 17l10 5 10-5',
  document:
    'M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm8 1.5V8h4.5L14 3.5zM7 12h10v1.5H7V12zm0 4h10v1.5H7V16zm0-8h5v1.5H7V8z',
  scale:
    'M12 2v2m0 16v-1M4.5 6 12 4l7.5 2M4.5 6 2 12h5l-2.5-6zm15 0L22 12h-5l2.5-6zM4.5 6l7.5-2M2 12a3 3 0 0 0 6 0M16 12a3 3 0 0 0 6 0M12 4v14',
  headset:
    'M12 3a8 8 0 0 0-8 8v6a2 2 0 0 0 2 2h2v-7H6v-1a6 6 0 0 1 12 0v1h-2v7h2a2 2 0 0 0 2-2v-6a8 8 0 0 0-8-8z',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  check: 'M20 6 9 17l-5-5',
  gps: 'M12 2v3m0 14v3M2 12h3m14 0h3M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
  map: 'M9 3 3 5v16l6-2 6 2 6-2V3l-6 2-6-2zM9 3v16m6-14v16',
  watermark: 'M12 2 3 6v6c0 5 3.8 9.4 9 10 5.2-.6 9-5 9-10V6l-9-4zm0 4 5 2.2v3.3c0 3-2 5.6-5 6.4-3-.8-5-3.4-5-6.4V8.2L12 6z',
  gallery:
    'M4 4h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm1 2v11.5L9 12l3 3.5 3-4L20 15V6H5zm2.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z',
};

export default function Icon({ name, size = 24, className = '', strokeOnly = false }) {
  const d = paths[name] || paths.document;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill={strokeOnly ? 'none' : 'currentColor'}
      stroke={strokeOnly ? 'currentColor' : 'none'}
      strokeWidth={strokeOnly ? 2 : 0}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
