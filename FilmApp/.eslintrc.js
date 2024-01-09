module.exports = {
    root: true,
    extends: ["@react-native"],
    plugins: ["@tanstack/query"],
    rules: {
        quotes: ["error", "double"],
        "react-hooks/exhaustive-deps": "off",
    },
};
