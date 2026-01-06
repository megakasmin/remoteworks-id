import { NextResponse } from "next/server";

export function badRequest(errors: unknown) {
  return NextResponse.json(
    {
      message: "Validation failed",
      errors,
    },
    { status: 400 }
  );
}

export function created(data: unknown) {
  return NextResponse.json(data, { status: 201 });
}

export function ok(data: unknown) {
  return NextResponse.json(data, { status: 200 });
}

export function notFound(message = "Not found") {
  return NextResponse.json(
    { message },
    { status: 404 }
  );
}

export function serverError(e: unknown) {
  console.error(e);
  return NextResponse.json(
    { message: "Internal server error" },
    { status: 500 }
  );
}

export function unauthorized() {
  return NextResponse.json(
    { message: "Unauthorized" },
    { status: 401 }
  );
}

