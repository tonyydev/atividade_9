import { StyleSheet, Text, View } from "react-native";

export function EmployeeListItem(props) {
    return (
        <View style={styles.container} >
            <View style={styles.image}>
                <Text>{props.name.charAt(0)}</Text>
            </View>

            <View style={styles.informations} >
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.role}>{props.role}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
        container: {
            flexDirection: 'row',
            padding: 18,
            borderBottomWidth: 1,
        },
        informations: {
            justifyContent: 1,
        },
        image: {
            borderRadius: '50%',
            backgroundColor: 'grey',
            height: 50,
            width: 50,
            marginRight: 15,
            alignItems: 'center',
            justifyContent: 'center',
        },
        name: {
            fontSize: 13,
            color: '#5a5a5a',
        }
});