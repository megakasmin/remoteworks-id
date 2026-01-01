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

export function serverError(e: unknown) {
  console.error(e);
  return NextResponse.json(
    { message: "Internal server error" },
    { status: 500 }
  );
}
