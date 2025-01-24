"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

//client component
export default function AddMovieForm() {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Add Movie</CardTitle>
        <CardDescription>Add a movie to the Mflix database</CardDescription>
      </CardHeader>
      <form action="">
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Movie Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter the movie title"
            />
          </div>

          <div>
            <Label htmlFor="year">Movie Year</Label>
            <Input
              id="year"
              name="year"
              type="number"
              placeholder="Enter the year"
            />
          </div>

          <div>
            <Label htmlFor="title">Movie Plot</Label>
            <Textarea
              id="plot"
              name="plot"
              placeholder="Enter the movie plot"
            />
          </div>
        </CardContent>
      </form>
    </Card>
  );
}
