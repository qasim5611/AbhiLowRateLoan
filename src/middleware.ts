import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/login' || path === '/signup';
  const token = request.cookies.get("token")?.value;

  console.log("token at middleware", token);

  // If the user is trying to access a public path and has a token, redirect to /adminPanel
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/adminPanel', request.url));
  }

  // If the user is trying to access a private path and doesn't have a token, redirect to /login
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If none of the above conditions match, allow the request to continue
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/adminPanel', '/login', '/signup', '/adminPanel/herosection',
    '/adminPanel/featuresTop',
    '/adminPanel/reputableLenders',
    '/adminPanel/featuredservices',
    '/adminPanel/featuredservicesImages',
    '/adminPanel/applicationprocess',
    '/adminPanel/faqs',
  ], // Adjusted matcher to include /signup
}
