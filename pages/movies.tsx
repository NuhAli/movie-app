import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import NavBar from "../components/nav-bar/nav-bar";
import { GetServerSideProps, GetStaticProps } from "next";
import { client } from "../utils/image-loader";
import IMediaItem from "../components/cards/media-item";
import Grid from "../components/grid/grid";
import { GridArea } from "../styles/common";
import { compareStrings } from "../utils/compareString";

interface MovieProps {
  movies: Array<IMediaItem>;
}

export default function Movies({ movies }: MovieProps) {
  const [data, setData] = useState<IMediaItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState<IMediaItem[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setData(movies);
  }, [movies]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let results = data.filter((item) => compareStrings(searchTerm, item.title));
    setSearchResult(results);
    setShowResults(true);
  };

  const renderGrid = () => {
    if (showResults) {
      return (
        <Grid
          items={searchResult}
          heading={`Found ${searchResult.length} results for '${searchTerm}'`}
        />
      );
    } else {
      return <Grid items={movies} heading={"Movies"} />;
    }
  };

  return (
    <>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar
          searchTerm={searchTerm}
          handleChange={handleChange}
          handleSearch={handleSearch}
        />
        <GridArea>{renderGrid()}</GridArea>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const movies = await client.fetch(`*[category == "Movie"]`);

  if (!movies) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movies,
    },
  };
};
