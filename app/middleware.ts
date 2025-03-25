import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
 // Block the dangerous header
 const dangerousHeader = req.headers.get('x-middleware-subrequest');
 if (dangerousHeader) {
 return new NextResponse(null, { status: 403 });
 }

 const response = NextResponse.next();
 
 // Add security headers
 response.headers.set('Content-Security-Policy', 
 "default-src 'self'; ");
 response.headers.set('Strict-Transport-Security', 
 'max-age=63072000; includeSubDomains; preload');
 response.headers.set('X-Content-Type-Options', 'nosniff');
 response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
 response.headers.set('Permissions-Policy', 
 'camera=(), microphone=(), geolocation=(), browsing-topics=()');

 // Clean dangerous headers
 response.headers.delete('x-middleware-subrequest');
 response.headers.delete('x-middleware-override');
 response.headers.delete('x-middleware-rewrite');
 response.headers.delete('x-powered-by');

 return response;
}

export const config = {
 matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};