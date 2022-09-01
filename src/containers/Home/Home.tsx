import { Box, Button, Grid, Tab, Tabs } from "@mui/material";
import * as React from "react";
import Header from "../../common/Header";
import Card from "../../components/Card/Card";
import TabPanel from "../TabPanel/TabPanel";
import "./Home.css";

const Home: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const [searchValue, setsearchValue] = React.useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [allPokemons, setAllPokemons] = React.useState([] as any);

  const listItems = allPokemons.filter((card) => {
    if (searchValue === "") return card;
    else if (card.name.toLowerCase().includes(searchValue.toLowerCase())) {
      return card;
    }
    return false;
  });

  let checkedItems = listItems.filter(
    (card) => localStorage.getItem(card.name) === "true"
  );

  const onClear = () => {
    localStorage.clear();

    checkedItems = [];
  };

  React.useEffect(() => {
    const fetchPokemons = async () => {
      const pokemons = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const data = await pokemons.json();

      async function fetchPokemonDetails(results: any) {
        for (const result of results) {
          const pokemonData = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${result.name}`
          );
          const data = await pokemonData.json();
          setAllPokemons((allPokemons) => [...allPokemons, data]);
          allPokemons.sort((a: any, b: any): any => a.id - b.id);
        }
      }
      fetchPokemonDetails(data.results);
    };
    fetchPokemons();
  }, []);

  return (
    <div className="home">
      <Header />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs className="tabs" value={value} onChange={handleChange}>
            <Tab label="All" />
            <Tab label="Bag" />
          </Tabs>
        </Box>
        <form className="search">
          <input
            type="search"
            placeholder="Search..."
            onChange={(event) => setsearchValue(event.target.value)}
          />
        </form>

        <TabPanel value={value} index={0}>
          <div className="scroll">
            <Grid container rowSpacing={1} spacing={0}>
              {listItems?.length
                ? listItems.map((d, index) => {
                    return (
                      <Grid item xs={3} key={index}>
                        <Card
                          key={index}
                          name={d.name}
                          img={d.sprites.other.dream_world.front_default}
                        />
                      </Grid>
                    );
                  })
                : `No Cards to show`}
            </Grid>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Button onClick={onClear}>Empty Bag</Button>
          <Grid container rowSpacing={1} spacing={0}>
            {checkedItems?.length
              ? checkedItems.map((d, index) => {
                  return (
                    <Grid item xs={3} key={index}>
                      <Card
                        key={index}
                        name={d.name}
                        img={d.sprites.other.dream_world.front_default}
                      />
                    </Grid>
                  );
                })
              : `No Cards to show`}
          </Grid>
        </TabPanel>
      </Box>
    </div>
  );
};

Home.defaultProps = {
  name: "world",
};

export default Home;
