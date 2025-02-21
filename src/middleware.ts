import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);

  // Si estamos en la raíz (/), redirige a /es/
  if (url.pathname === '/') {
    return Response.redirect(new URL('/es/', context.request.url), 302);
  }

  return next();
});