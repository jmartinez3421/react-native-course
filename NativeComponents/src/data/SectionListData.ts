export type SectionListData = {
    house: string;
    data: {
        name: string;
        key: string;
    }[];
};

export const SECTION_LIST_DATA = [
    {
        house: "Stark",
        data: [
            { name: "Eddard", key: "eddard" },
            { name: "Catelyn", key: "catelyn" },
            { name: "Robb", key: "robb" },
            { name: "Sansa", key: "sansa" },
            { name: "Arya", key: "arya" },
            { name: "Bran", key: "bran" },
            { name: "Rickon", key: "rickon" },
            { name: "Jon", key: "jon" },
            { name: "Benjen", key: "benjen" },
            { name: "Lyanna", key: "lyanna" },
            { name: "Brandon", key: "brandon" },
        ],
    },
    {
        house: "Lannister",
        data: [
            { name: "Tywin", key: "tywin" },
            { name: "Cersei", key: "cersei" },
            { name: "Jaime", key: "jaime" },
            { name: "Tyrion", key: "tyrion" },
            { name: "Joffrey", key: "joffrey" },
            { name: "Myrcella", key: "myrcella" },
            { name: "Tommen", key: "tommen" },
            { name: "Lancel", key: "lancel" },
            { name: "Kevan", key: "kevan" },
            { name: "Loras", key: "loras" },
            { name: "Olenna", key: "olenna" },
            { name: "Margaery", key: "margaery" },
            { name: "Tyene", key: "tyene" },
        ],
    },
    {
        house: "Targaryen",
        data: [
            { name: "Aerys", key: "aerys" },
            { name: "Daenerys", key: "daenerys" },
            { name: "Viserys", key: "viserys" },
            { name: "Rhaegar", key: "rhaegar" },
            { name: "Rhaenys", key: "rhaenys" },
            { name: "Aemon", key: "aemon" },
            { name: "Aegon", key: "aegon" },
            { name: "Rhaego", key: "rhaego" },
            { name: "Drogon", key: "drogon" },
            { name: "Rhaegal", key: "rhaegal" },
            { name: "Viserion", key: "viserion" },
        ],
    },
];
