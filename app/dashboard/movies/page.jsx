//server component

import { Suspense } from "react";
import Link from "next/link";
import { Eye, Shell } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MovieData from "./movie-data";

export default async function MoviesPage() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Movies</h1>
        <Link href="/movies">
          <Button variant="outline">
            <Eye /> View as User
          </Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Movies Management</CardTitle>
          <CardDescription>
            {/* classBame="sr-only" hidden Description */}
            View and manage all the listed movie entries
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-[186px]">
                <Shell className="text-blue-700 duration-1000 animate-spin" />
              </div>
            }
          >
            <MovieData />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
