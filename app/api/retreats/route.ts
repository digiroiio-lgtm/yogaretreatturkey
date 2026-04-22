import { retreats } from "@/lib/data/retreats";

export async function GET() {
  return Response.json(retreats);
}
