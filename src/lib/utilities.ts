
export const loadScript = async (src, id, attrs = {}) => new Promise((resolve, reject) => {
  if (document.getElementById(id)) {
    resolve(true);
    return;
  }
  const script = document.createElement('script');
  script.onload = () => resolve(true);
  script.onerror = () => reject(new Error(`error loading script ${id} @ ${src}`));
  script.async = true;
  script.type = 'text/javascript';
  script.src = src;
  script.id = id;
  const attributes = Object.keys(attrs);
  if (attributes.length) {
    attributes.forEach(attribute => {
      script.setAttribute(attribute, attrs[attribute]);
    });
  }
  document.body.appendChild(script);
});

export const onDocReady = callback => {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
};

export const debounce = (callback, delay = 250) => {
  let timer;
  return (event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(callback, delay, event);
  };
};

export const formatDate = (str: string, options = {}) => {
  const date = new Date(str);
  return date.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options,
  });
};