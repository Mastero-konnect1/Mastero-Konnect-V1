import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/auth/sign-in(.*)', // Catch-all for sign-in
  '/auth/sign-up(.*)', // Catch-all for sign-up
  '/', // Home page
]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|auth/sign-in|auth/sign-up).*)', // Explicitly exclude auth routes
    '/(api|trpc)(.*)',
  ],
};