import Head from "next/head";
import React, { useEffect, useState } from "react";
import { createClient } from "next-sanity";
import IMediaItem from "../components/cards/media-item";
import NavBar from "../components/nav-bar/nav-bar";
import styles from "../styles/Home.module.css";
import { CardArea, GridArea } from "../styles/common";
import Rail from "../components/rail/rail";
import Grid from "../components/grid/grid";
import { compareStrings } from "../utils/compareString";
import { client } from "../utils/image-loader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

interface HomeInterface {
  trending: IMediaItem[];
  recommended: IMediaItem[];
}

export default function Home({ trending, recommended }: HomeInterface) {
  const [data, setData] = useState<IMediaItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState<IMediaItem[]>([]);
  const [showResults, setShowResults] = useState(false);

  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    setData([...trending, ...recommended]);
  }, [recommended, trending]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let results = data.filter((item) => compareStrings(searchTerm, item.title));
    setSearchResult(results);
    setShowResults(true);
  };

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/sign-up")
    }
  }, [session]);

  return trending && recommended ? (
    <>
      <Head>
        <title>Create Next App</title>
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
        {!showResults ? (
          <CardArea>
            {trending && <Rail items={trending} />}
            {recommended && (
              <Grid items={recommended} heading="Recommended for you" />
            )}
          </CardArea>
        ) : (
          <GridArea>
            {recommended && (
              <Grid
                items={searchResult}
                heading={`Found ${searchResult.length} results`}
              />
            )}
          </GridArea>
        )}
      </main>
    </>
  ) : null;
}

export const getStaticProps = async () => {
  const media = await client.fetch(`*[_type == "media"]`);

  let trending: IMediaItem[] = media
    .filter((item: IMediaItem) => item.isTrending)
    .sort((a: IMediaItem, b: IMediaItem) => {
      let x = a.title.toLowerCase();
      let y = b.title.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });

  let recommended = media.filter((item: IMediaItem) => !item.isTrending);

  if (!media) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      trending,
      recommended,
    },
  };
};