import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)", "/"]);
const isSubdomainRoute = ["/test"];

export default clerkMiddleware(async (auth, request) => {
  console.log("Middleware running");
  if (!isPublicRoute(request)) {
    await auth.protect();
  }

  const clerkUser = await auth();

  const url = request.nextUrl;
  const pathname = url.pathname;

  const hostname = request.headers.get("host");

  let currentHost;

  if (process.env.NODE_ENV === "production") {
    const baseDomain = process.env.BASE_DOMAIN;
    currentHost = hostname?.replace(`.${baseDomain}`, "");
  } else {
    currentHost = hostname?.split(":")[0].replace(".localhost", "");
  }

  console.log(currentHost);

  // Check if the path is in the restricted paths array and if the request is from localhost
  const isRestrictedPath = isSubdomainRoute.some(restrictedPath => pathname.startsWith(restrictedPath))
  if (isRestrictedPath && (currentHost === 'localhost' || !currentHost)) {
    console.log(`Access to ${pathname} denied for localhost.`)
    return NextResponse.redirect(new URL(`/`, request.url)) // Redirect to home or show a 404 page
  }

  if (!currentHost || currentHost == "localhost") {
    return NextResponse.next();
  }

  

  // testing subdomain
  const rewrittenUrl = new URL(`/${currentHost}${pathname}`, request.url);
  console.log("Rewriting to:", rewrittenUrl.href);
  return NextResponse.rewrite(rewrittenUrl);
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
