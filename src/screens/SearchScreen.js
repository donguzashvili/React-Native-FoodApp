import { ScrollView, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import useResults from "../hooks/useResults";
import RestaurantResults from "../components/restaurantList";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useResults(searchTerm);

  const filterResultsByPrice = (price) => {
    // price === "$" | "$$" | "$$$" | "$$$$"
    return restaurants.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} onSubmit={searchApi} />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      <ScrollView>
        <RestaurantResults title="Cost Effective" results={filterResultsByPrice("$")} />
        <RestaurantResults title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <RestaurantResults title="Big Spender" results={filterResultsByPrice("$$$")} />
        <RestaurantResults title="Crazy Service" results={filterResultsByPrice("$$$$")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
  },
  resultText: {
    marginLeft: 15,
  },
  container: {
    flex: 1,
    marginBottom: 10,
  },
});

export default SearchScreen;
