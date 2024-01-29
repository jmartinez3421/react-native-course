import React from "react";
import { RefreshControl, ScrollView, StyleSheet, Text, View } from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import ExpoConstants from "expo-constants";

export const PullToRefreshScreen = () => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [data, setData] = React.useState<string>();

    const handleRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            console.log("Refreshed!");
            setRefreshing(false);
            setData("Hello world!");
        }, 1500);
    };

    return (
        <ScrollView
            style={{
                marginTop: refreshing ? -30 : -ExpoConstants.statusBarHeight - 10,
            }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                    progressBackgroundColor="purple"
                    progressViewOffset={20}
                    colors={["white", "orange"]}
                />
            }
        >
            <HeaderTitle title="Pull to refresh" sx={{ marginTop: ExpoConstants.statusBarHeight + 10 }} />
            {data && <HeaderTitle title={data} />}
        </ScrollView>
    );
};
