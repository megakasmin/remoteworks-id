import { NextResponse } from "next/server";

export function ok<T>(data: T, meta?: unknown) {
  return NextResponse.json(
    meta ? { data, meta } : { data },
    { status: 200 }
  );
}

export function created<T>(data: T) {
  return NextResponse.json({ data }, { status: 201 });
}

export function badRequest(message: string, details?: unknown) {
  return NextResponse.json(
    {
      error: {
        code: "BAD_REQUEST",
        message,
        details,
      },
    },
    { status: 400 }
  );
}

export function notFound(message = "Not found") {
  return NextResponse.json(
    {
      error: {
        code: "NOT_FOUND",
        message,
      },
    },
    { status: 404 }
  );
}

export function serverError(error: unknown) {
  console.error("[API ERROR]", error);

  return NextResponse.json(
    {
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message: "Internal server error",
      },
    },
    { status: 500 }
  );
}
