import { Metadata } from "next";

type MoviePageProps = {
  params: { id: string };
};

export async function generateMetadata({ params }: MoviePageProps): Promise<Metadata> {
  return {
    title: `Movie Details | ${params.id}`,
    description: "Detailed information about the selected movie.",
  };
}

function MovieDetailsPage({ params }: MoviePageProps) {
  return (
    <div>
      <h1>Movie Details for {params.id}</h1>
    </div>
  )
}

export default MovieDetailsPage
