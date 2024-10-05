export const toSlug = (str: string): string => {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-') 
      .replace(/[^\w\-]+/g, '');
  };  