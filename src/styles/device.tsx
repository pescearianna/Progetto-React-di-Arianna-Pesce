
const size = {
    mobile: '425px',
    tabletMini: '768px',
    tablet: '1024px',
    laptop: '1024px',
  }

export const device = {
    mobile: `(max-width: ${size.mobile})`,
    tabletMini: `(max-width: ${size.tabletMini})`,
    tablet: `(min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,

  };