import { StyleSheet, TouchableOpacity, FlatList, Text, View } from "react-native";
import RestaurantDetail from "./restaurantDetails";
import { withNavigation } from "react-navigation";

const RestaurantResults = ({ title, results, navigation }) => {
  const navigate = navigation.navigate;

  if (!results.length) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigate("ResultsShow", { id: item.id })}>
              <RestaurantDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default withNavigation(RestaurantResults);
