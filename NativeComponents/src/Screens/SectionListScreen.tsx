import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import ExpoConstants from "expo-constants";
import { SECTION_LIST_DATA } from "../data/SectionListData";
import { HeaderTitle } from "../components/HeaderTitle";
import { ItemSeparator } from "../components/MenuList";
import { useThemeContext } from "../contexts/themeContext/ThemeContext";

export const SectionListScreen = () => {
    const {
        theme: { colors },
    } = useThemeContext();
    return (
        <View style={styles.container}>
            <SectionList
                sections={SECTION_LIST_DATA}
                renderItem={({ item }) => <Text style={[styles.textItem, { color: colors.text }]}>{item.name}</Text>}
                keyExtractor={(item) => item.key}
                ListHeaderComponent={() => <HeaderTitle title="Section List" sx={{ marginBottom: 0 }} />}
                renderSectionHeader={({ section }) => (
                    <HeaderTitle
                        title={section.house}
                        sx={[styles.sectionHeader, { backgroundColor: colors.background }]}
                    />
                )}
                stickySectionHeadersEnabled
                ListFooterComponent={() => (
                    <HeaderTitle
                        title={`Number of houses: ${SECTION_LIST_DATA.length}`}
                        sx={[styles.sectionHeader, { backgroundColor: colors.background }]}
                    />
                )}
                renderSectionFooter={({ section }) => (
                    <Text style={[styles.sectionFooter, { color: colors.text, backgroundColor: colors.background }]}>
                        Number of characters: {section.data.length}
                    </Text>
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
        paddingBottom: 5,
        paddingTop: 15,
        marginBottom: 0,
    },
    textItem: {
        fontSize: 20,
    },
    sectionFooter: {
        paddingBottom: 5,
        paddingTop: 5,
        marginBottom: 0,
        textAlign: "center",
    },
});
