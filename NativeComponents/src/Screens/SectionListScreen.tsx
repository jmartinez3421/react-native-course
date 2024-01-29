import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import ExpoConstants from "expo-constants";
import { SECTION_LIST_DATA } from "../data/SectionListData";
import { HeaderTitle } from "../components/HeaderTitle";
import { ItemSeparator } from "../components/MenuList";

export const SectionListScreen = () => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={SECTION_LIST_DATA}
                renderItem={({ item }) => <Text style={styles.textItem}>{item.name}</Text>}
                keyExtractor={(item) => item.key}
                ListHeaderComponent={() => <HeaderTitle title="Section List" sx={{ marginBottom: 0 }} />}
                renderSectionHeader={({ section }) => <HeaderTitle title={section.house} sx={styles.sectionHeader} />}
                stickySectionHeadersEnabled
                ListFooterComponent={() => (
                    <HeaderTitle title={`Number of houses: ${SECTION_LIST_DATA.length}`} sx={styles.sectionHeader} />
                )}
                renderSectionFooter={({ section }) => (
                    <Text style={styles.sectionFooter}>Number of characters: {section.data.length}</Text>
                )}
                ItemSeparatorComponent={() => <ItemSeparator />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -ExpoConstants.statusBarHeight - 10,
        marginBottom: -10,
        paddingTop: ExpoConstants.statusBarHeight + 10,
        paddingBottom: 20,
    },
    sectionHeader: {
        backgroundColor: "white",
        paddingBottom: 5,
        paddingTop: 15,
        marginBottom: 0,
    },
    textItem: {
        fontSize: 20,
    },
    sectionFooter: {
        backgroundColor: "white",
        paddingBottom: 5,
        paddingTop: 5,
        marginBottom: 0,
        textAlign: "center",
    },
});
