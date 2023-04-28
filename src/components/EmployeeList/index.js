import { StyleSheet, FlatList } from "react-native";
import { EmployeeListItem } from "../EmployeeListItem";

export function EmployeeList(props) {
    return (
        <FlatList
            data={props.data}
            renderItem={({ item }) => (
                <EmployeeListItem name={item.name} role={item.role} />
            )}
            keyExtractor={item => item.key}
            style={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
});