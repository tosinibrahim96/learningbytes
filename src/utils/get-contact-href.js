// @flow strict
const getContactHref = (name: string, contact: string) => {
  let href;

  switch (name) {
    case 'github':
      href = `https://github.com/${contact}`;
      break;
    case 'linkedin':
      href = `https://www.linkedin.com/in/${contact}`;
      break;
    case 'facebook':
      href = `https://www.facebook.com/${contact}`;
      break;
    case 'mywebsite':
      href = 'https://dev-alawish.netlify.com';
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
