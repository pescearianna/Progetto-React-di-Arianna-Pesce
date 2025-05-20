
const size = {
    mobile: '425px',
    tablet: '1023px',
    laptop: '1024px',
  }

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,

  };