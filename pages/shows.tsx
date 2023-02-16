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
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

interface MovieProps {
  shows: Array<IMediaItem>;
}

export default function Movies({ shows }: MovieProps) {
  const [data, setData] = useState<IMediaItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState<IMediaItem[]>([]);
  const [showResults, setShowResults] = useState(false);
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/sign-in");
    } 
    else if(session.status === "authenticated") {
      router.push("/shows");
    }
  }, [session]);

  useEffect(() => {
    setData(shows);
  }, [shows]);

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
      return <Grid items={shows} heading={"TV Series"} />;
    }
  };

  useEffect(() => {
    if (session.status === "unauthenticated") {
      setTimeout(() => {
        router.push("/sign-in");
      }, 3000);
    } 
    else if(session.status === "authenticated") {
      router.push("/home");
    }
  }, [session]);

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
  const shows = await client.fetch(`*[category == "TV Series"]`);

  if (!shows) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      shows,
    },
  };
};
