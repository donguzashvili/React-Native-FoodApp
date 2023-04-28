import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native";

const SearchBar = ({ searchTerm, onChange, onSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.icon} name="search" />
      <TextInput onEndEditing={onSubmit} value={searchTerm} onChangeText={onChange} style={styles.inputStyle} placeholder="Search" autoCorrect={false} autoCapitalize="none" />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginVertical: 10,
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    height: "100%",
  },
  icon: {
    fontSize: 35,
    marginHorizontal: 15,
  },
});

export default SearchBar;
