export const fromFormConversion = <T extends object>(object: T): any => {
  const formData = new FormData();
  let names = Object.getOwnPropertyNames(object);
  let values = Object.values.arguments(object);

  for (let index = 0; index < names.length; index++) {
    formData.append(`${names[index]}`, values.keys(names[index]));
  }

  return formData;
};
