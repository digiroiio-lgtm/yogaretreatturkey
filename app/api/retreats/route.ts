export async function GET() {
  try {
    const url = `https://${process.env.RAPIDAPI_HOST}${process.env.RAPIDAPI_ENDPOINT}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY!,
        "x-rapidapi-host": process.env.RAPIDAPI_HOST!,
      },
    });

    const text = await res.text();

    // debug için raw response
    return new Response(text, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "unknown error";
    return Response.json(
      {
        error: "FETCH FAILED",
        message,
      },
      { status: 500 }
    );
  }
}
