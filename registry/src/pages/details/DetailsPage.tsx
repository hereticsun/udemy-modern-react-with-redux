import type { DetailsLoaderResult } from "./detailsLoader";
import { useLoaderData } from "react-router-dom";

export default function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult;

  return (
    <div className="space-y-4">
      <h1 className="text3xl font-bold my-4">
        {details.name}
      </h1>

      <div className="p-3 bg-gray-200 rounded">
        <h3 className="text-lg font-bold">Description</h3>
        {details.description}
      </div>

      <div className="p-3 bg-gray-200 rounded">
        <h3 className="text-lg font-bold">License</h3>
        {details.license}
      </div>

      <div className="p-3 bg-gray-200 rounded">
        <h3 className="text-lg font-bold">Author</h3>
        {details.author.name}
      </div>

    </div>
  );
}
