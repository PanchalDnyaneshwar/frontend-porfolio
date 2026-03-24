const ALLOWED_TAGS = new Set([
  'a',
  'blockquote',
  'br',
  'code',
  'em',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'hr',
  'img',
  'li',
  'ol',
  'p',
  'pre',
  'strong',
  'ul',
]);

const REMOVE_ENTIRELY_TAGS = new Set([
  'script',
  'style',
  'iframe',
  'object',
  'embed',
  'form',
  'input',
  'button',
  'textarea',
  'select',
  'option',
  'meta',
  'link',
  'base',
]);

const ALLOWED_ATTRS: Record<string, string[]> = {
  a: ['href', 'title', 'target', 'rel'],
  img: ['src', 'alt', 'title'],
};

const SAFE_URL_PATTERN =
  /^(https?:|mailto:|tel:|\/(?!\/)|#)/i;

function isSafeUrl(value: string) {
  return SAFE_URL_PATTERN.test(value.trim());
}

function sanitizeElement(element: Element) {
  const tag = element.tagName.toLowerCase();

  if (REMOVE_ENTIRELY_TAGS.has(tag)) {
    element.remove();
    return;
  }

  if (!ALLOWED_TAGS.has(tag)) {
    const parent = element.parentNode;
    if (!parent) {
      element.remove();
      return;
    }

    while (element.firstChild) {
      parent.insertBefore(element.firstChild, element);
    }

    parent.removeChild(element);
    return;
  }

  const allowedAttrs = ALLOWED_ATTRS[tag] || [];

  for (const attr of [...element.attributes]) {
    const name = attr.name.toLowerCase();
    const value = attr.value;

    if (name.startsWith('on') || name === 'style' || !allowedAttrs.includes(name)) {
      element.removeAttribute(attr.name);
      continue;
    }

    if ((name === 'href' || name === 'src') && !isSafeUrl(value)) {
      element.removeAttribute(attr.name);
    }
  }

  if (tag === 'a') {
    element.setAttribute('rel', 'noopener noreferrer');
    if (element.getAttribute('href')?.startsWith('http')) {
      element.setAttribute('target', '_blank');
    }
  }
}

export function sanitizeHtml(html: string) {
  if (!html || typeof window === 'undefined') {
    return html;
  }

  const parser = new DOMParser();
  const document = parser.parseFromString(html, 'text/html');

  for (const comment of [...document.body.childNodes]) {
    if (comment.nodeType === Node.COMMENT_NODE) {
      comment.parentNode?.removeChild(comment);
    }
  }

  const elements = [...document.body.querySelectorAll('*')];
  for (const element of elements) {
    sanitizeElement(element);
  }

  return document.body.innerHTML;
}
