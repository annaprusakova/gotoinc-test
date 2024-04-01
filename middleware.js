export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export function middleware(request) {
	if (request.nextUrl.pathname.startsWith('/requests')) {
		return NextResponse.next();
	}
	return NextResponse.next();
}
